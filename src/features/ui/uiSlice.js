import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: 'light',
    filterVisile: false,
    stateOfOrders: [
      {
  
        key: 'Новый',
        value: 'Новый',
        colorIcon: 'orange',
        icon: 'Dot'
      },
      {
  
        key: 'Рассчет',
        value: 'Рассчет',
        colorIcon: 'blue',
        icon: 'Dot'
      },
      {

        key: 'Подтвержден',
        value: 'Подтвержден',
        colorIcon: 'green',
        icon: 'Dot'
      },
      {
   
        key: 'Отложен',
        value: 'Отложен',
        colorIcon: 'orange',
        icon: 'Dot'
      },
      {
  
        key: 'Выполнен',
        value: 'Выполнен',
        colorIcon: 'green',
        icon: 'Checkmark'
      },
      {

        key: 'Отменен',
        value: 'Отменен',
        colorIcon: 'grey',
        icon: 'Abort'
      }
    ]
  },
  reducers: {
    changeToLigth: (state) => {
      state.theme = 'light'
    },
    changeToDark: (state) => {
      state.theme = 'dark'
    },
    changeVisibleFilter: (state) => {
      state.filterVisile = !state.filterVisile
    }
  }
})

// Action creators are generated for each case reducer function
export const { changeToLigth, changeToDark, changeVisibleFilter } =
  uiSlice.actions

export default uiSlice.reducer
