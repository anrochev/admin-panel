import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import date from 'date-and-time'
import { OrdersAPI } from 'api/OrdersAPI'
import { dateFormat } from 'const/dateFormat'

export const sortingASC = 'ASC'
export const sortingDESC = 'DESC'
export const sortingNONE = 'NONE'

export const fetchOrdersAll = createAsyncThunk(
  'orders/fetchAll',
  async (payload, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().orders
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return
    }
    const response = await OrdersAPI.getAllOrders()
    for (const order of response) {
      order.date = date.format(order.date, dateFormat)
    }
    return response
  }
)

export const fetchOrdersByFilters = createAsyncThunk(
  'orders/fetchByFilter',
  async (
    { filters, compositecolumnValue, sortField },
    { getState, requestId }
  ) => {
    const { currentRequestId, loading } = getState().orders
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return
    }
    const response = await OrdersAPI.getOrdersByFilters(
      filters,
      compositecolumnValue,
      sortField
    )
    for (const order of response) {
      order.date = date.format(order.date, dateFormat)
    }
    return response
  }
)

const orderAsc = (valueA, valueB) => {
  if (valueA < valueB) {
    return -1
  }
  if (valueA > valueB) {
    return 1
  }
  return 0
}

const orderDesc = (valueA, valueB) => {
  if (valueB < valueA) {
    return -1
  }
  if (valueB > valueA) {
    return 1
  }
  return 0
}


export const deleteOrders = createAsyncThunk(
  'orders/deleteOrders',
  async ({ ordersIds }, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().orders
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return
    }
    return await OrdersAPI.deleteOrders(ordersIds)
  }
)

export const changeStatusOrders = createAsyncThunk(
  'orders/changeStatusOrders',
  async ({ ordersIds, status }, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().orders
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return
    }
    return await OrdersAPI.changeStatusOrders(ordersIds, status)
  }
)

export const filterOrders = (params) => {
  let result = [...params.entities]
  
  if (params.filterFIOorNumber) {
    result = result.filter(
      (order) =>
        order.customerName.indexOf(params.filterFIOorNumber) > -1 ||
        order.number.toString().indexOf(params.filterFIOorNumber) > -1
    )
  }
  if (params.dateOrderFrom) {
    result = result.filter((order) => {
      const filterDate = new Date(params.dateOrderFrom)
      const date = new Date(order.date)
   
      return date >= filterDate
    })
  }

  if (params.dateOrderTo) {
    result = result.filter((order) => {
      const filterDate = new Date(params.dateOrderTo)
      const date = new Date(order.date)
    
      return date <= filterDate
    })
  }

  if (params.statusFilter && params.statusFilter.length > 0) {
    result = result.filter((order) => {
      return params.statusFilter.includes(order.status.toString())
    })
  }

  if (params.priceFrom) {
    result = result.filter((order) => {
      return parseFloat(order.sum) >= parseFloat(params.priceFrom)
    })
  }

  if (params.priceTo) {
    result = result.filter((order) => {
      return parseFloat(order.sum) <= parseFloat(params.priceTo)
    })
  }
  if (params.sortArray.length > 0) {
    result.sort((valueA, valueB) => {
      let resultSort = 0
      params.sortArray.forEach((element) => {
        if (element.sort === sortingASC) {
          resultSort = resultSort || orderAsc(valueA[element.field], valueB[element.field])
        }
        if (element.sort === sortingDESC) {
          resultSort = resultSort || orderDesc(valueA[element.field], valueB[element.field])
        }
      })
      return resultSort
    })
  }

  return result
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    entities: [],
    loading: 'idle',
    currentRequestId: undefined,
    error: undefined,
    selectedOrdersCount: 0,
    filtredOrders: [],
    selectedOrders: [],
    currentPage: 1,
    filterFIOorNumber: null,
    dateOrderFrom: null,
    dateOrderTo: null,
    statusFilter: null,
    priceFrom: null,
    priceTo: null,
    sortArray: [],
    headerGridSort: [
      {
        field: 'number',
        sort: sortingNONE
      },
      {
        field: 'date',
        sort: sortingNONE
      },
      {
        field: 'status',
        sort: sortingNONE
      },
      {
        field: 'itemsCount',
        sort: sortingNONE
      },
      {
        field: 'sum',
        sort: sortingNONE
      },
      {
        field: 'customerName',
        sort: sortingNONE
      }
    ]
  },
  reducers: {
    filterFioOrNumber: (state, action) => {
      state.filterFIOorNumber = action.payload
      state.filtredOrders = filterOrders(state)
      state.currentPage = 1
    },
    filterExtended: (state, action) => {
      state.dateOrderFrom = action.payload.dateOrderFrom
      state.dateOrderTo = action.payload.dateOrderTo
      state.statusFilter = action.payload.statusFilter
      state.priceFrom = action.payload.priceFrom
      state.priceTo = action.payload.priceTo
      state.filtredOrders = filterOrders(state)
      state.currentPage = 1
    },
    orderDelete: (state) => {


      //Удаление из entities
      let unDeletedRowsEntities = state.entities.filter( function( item ) {
        return !state.selectedOrders.includes( item.id );
      } );
      state.entities = unDeletedRowsEntities;
    
      //Удаление из filtredOrders
      let unDeletedRowsFiltred = state.filtredOrders.filter( function( item ) {
        return !state.selectedOrders.includes( item.id );
      } );
      state.filtredOrders = unDeletedRowsFiltred;
      
      state.selectedOrders = []
      state.selectedOrdersCount = state.selectedOrders.length
    },
    orderCheckBoxChecked: (state, action) => {
      state.selectedOrders = state.selectedOrders.concat(action.payload)
      state.selectedOrdersCount = state.selectedOrders.length
    },
    orderCheckBoxUnChecked: (state, action) => {
      const index = state.selectedOrders.indexOf(action.payload)
      if (index > -1) {
        state.selectedOrders.splice(index, 1)
      }
      state.selectedOrdersCount = state.selectedOrders.length
    },
    orderCheckBoxCheckedAll: (state) => {
      state.selectedOrders = state.filtredOrders.map((order) => order.id)
      state.selectedOrdersCount = state.selectedOrders.length
    },
    orderCheckBoxUnCheckedAll: (state) => {
      state.selectedOrders = []
      state.selectedOrdersCount = 0
    },

    orderChangeStatus: (state, action) => {
    
      let newEntities = state.entities;
      let newFiltredOrders = state.filtredOrders;
      let currentElementEntities, currentElementFilteredOrders;    
      state.selectedOrders.forEach((element) => {
        //Изменение статуса в entities
        currentElementEntities = newEntities.find((el) => {
          return el.id === element });    
          if  (currentElementEntities !=='undefined') {
            currentElementEntities.status = action.payload;  
          }   
          //Изменение статуса в filtredOrders
          currentElementFilteredOrders = newFiltredOrders.find((el) => {
            return el.id === element });    
            if  (currentElementFilteredOrders !=='undefined') {
              currentElementFilteredOrders.status = action.payload;  
            }  

     })
      state.entities = newEntities;
      state.filtredOrders = newFiltredOrders;

      state.selectedOrders = []
      state.selectedOrdersCount = state.selectedOrders.length
    },
    orderUpdate: (state, action) => {
    
      let newEntities = state.entities;
      let newFiltredOrders = state.filtredOrders;
      let currentElementEntities, currentElementFilteredOrders;    
      let order = { ...action.payload }
      console.log("action.payload="+ order.toString());
        //Изменение статуса в entities
        currentElementEntities = newEntities.find((el) => {
          return el.id === order.id });    
          if  (currentElementEntities !=='undefined') {
            currentElementEntities.status = order.status;  
            currentElementEntities.customerName = order.customerName;  
          }   
          //Изменение статуса в filtredOrders
          currentElementFilteredOrders = newFiltredOrders.find((el) => {
            return el.id === order.id });    
            if  (currentElementFilteredOrders !=='undefined') {
              currentElementFilteredOrders.status = order.status;  
              currentElementFilteredOrders.customerName = order.customerName;  
            }    
    
      state.entities = newEntities;
      state.filtredOrders = newFiltredOrders;
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setCountPage: (state, action) => {
      state.allPages = action.payload
    },
    sortChange: (state, action) => {
      let newsortArray = state.sortArray.length === 0 ? [] : [...state.sortArray]
      const index = newsortArray.findIndex((sort) => { return sort.field === action.payload })
      if (index > -1) {
        if (newsortArray[index].sort === sortingDESC) {
          newsortArray[index] = {
            ...newsortArray[index],
            sort: sortingNONE
          }
        }
        if (newsortArray[index].sort === sortingASC) {
          newsortArray[index] = {
            ...newsortArray[index],
            field: action.payload,
            sort: sortingDESC
          }
        }
      } else {
        newsortArray = [
          ...newsortArray,
          {
            field: action.payload,
            sort: sortingASC
          }
        ]
      }
      const newIndex = newsortArray.findIndex((sort) => { return sort.field === action.payload })
      state.headerGridSort.find((header) => header.field === action.payload).sort = newsortArray[newIndex].sort
      if (newsortArray[newIndex].sort === sortingNONE) {
        newsortArray.splice(index, 1)
      }
      state.sortArray = newsortArray
      state.filtredOrders = filterOrders(state)  
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrdersAll.pending, (state, action) => {
      if (state.loading.localeCompare('idle') === 0) {
        state.loading = 'pending'
        state.currentRequestId = action.meta.requestId
      }
    })
    builder.addCase(fetchOrdersAll.fulfilled, (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.entities = action.payload
        state.currentRequestId = undefined
        state.filtredOrders = filterOrders(state)
        state.currentPage = 1
      }
    })
    builder.addCase(fetchOrdersAll.rejected, (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.error = action.error
        state.currentRequestId = undefined
      }
    })
    builder.addCase(fetchOrdersByFilters.pending, (state, action) => {
      if (state.loading.localeCompare('idle') === 0) {
        state.loading = 'pending'
        state.currentRequestId = action.meta.requestId
      }
    })
    builder.addCase(fetchOrdersByFilters.fulfilled, (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.entities = action.payload
        state.currentRequestId = undefined
      }
    })
    builder.addCase(fetchOrdersByFilters.rejected, (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.error = action.error
        state.currentRequestId = undefined
      }
    })
    builder.addCase(deleteOrders.pending, (state, action) => {
      if (state.loading.localeCompare('idle') === 0) {
        state.loading = 'pending'
        state.currentRequestId = action.meta.requestId
      }
    })
    builder.addCase(deleteOrders.fulfilled, (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.currentRequestId = undefined
      }
    })
    builder.addCase(deleteOrders.rejected, (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.error = action.error
        state.currentRequestId = undefined
      }
    })
    builder.addCase(changeStatusOrders.pending, (state, action) => {
      if (state.loading.localeCompare('idle') === 0) {
        state.loading = 'pending'
        state.currentRequestId = action.meta.requestId
      }
    })
    builder.addCase(changeStatusOrders.fulfilled, (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.currentRequestId = undefined
      }
    })
    builder.addCase(changeStatusOrders.rejected, (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.error = action.error
        state.currentRequestId = undefined
      }
    })
  },
})

export const {
  filterFioOrNumber,
  filterExtended,
  setCountPage,
  orderDelete,
  orderChangeStatus,
  orderCheckBoxChecked,
  orderCheckBoxUnChecked,
  orderCheckBoxCheckedAll,
  orderCheckBoxUnCheckedAll,
  setCurrentPage,
  sortChange,
  orderUpdate
} = ordersSlice.actions

export default ordersSlice.reducer
