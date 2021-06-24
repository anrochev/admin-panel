import { nanoid } from '@reduxjs/toolkit'
import faker from 'faker'
import { statuses } from './FilterStatusValues'


const ORDERD_COUNT = 200

faker.locale = 'ru'

function generateOrder() {
  let i, itemName, itemSum, orderId, id, article, sum1 = 0;
  let itemsCount1 = faker.datatype.number({
    min: 1,
    max: 10,
  });
  orderId = nanoid();
  let orderitem = [];
  for (i = 0; i < itemsCount1; i++) {
    id = nanoid();
    article = faker.datatype.string(2) + '.' + faker.datatype.number();
    itemName = faker.commerce.productName();
    itemSum = faker.datatype.number({ min: 1, max: 20_000, precision: 0.01 });
    orderitem.push({ id, article, itemName, itemSum, orderId });
    sum1 = sum1 + itemSum;
  }
  sum1 = (Math.floor(sum1 * 100)) / 100;

  return {
    id: orderId,
    number: faker.datatype.number({
      min: 10_000,
      max: 100_000,
    }),

    date: faker.date.past(),

    status: faker.random.arrayElement(statuses),
    itemsCount: itemsCount1,

    sum: sum1,
    customerName: `${faker.name.lastName()} ${faker.name.firstName()} ${faker.name.middleName()}`,
    privilege: faker.random.arrayElement([
      'Новичок',
      'Сильвер',
      'Голд'
    ]),
    orderItems: orderitem
  }
}

let orderList = []

function cloneOrderArray(sourceArray) {
  return sourceArray.map((data) => ({ ...data }))
}

function generateOrderList() {
  if (orderList.length > 0) {
    return cloneOrderArray(orderList)
  }
  for (let counter = 0; counter < ORDERD_COUNT; counter++) {
    orderList.push(generateOrder())
  }
  return cloneOrderArray(orderList)
}

function getHeaders() {
  return ['#', 'Дата', 'Статус', 'Позиций', 'Сумма', 'ФИО покупателя']
}

function getSortFieldName(fieldCaption) {
  switch (fieldCaption) {
    case '#':
      return 'number'
    case 'Дата':
      return 'date'
    case 'Статус':
      return 'status'
    case 'Позиций':
      return 'itemsCount'
    case 'Сумма':
      return 'sum'
    case 'ФИО покупателя':
      return 'customerName'
    default:
      return 'id'

  }
}

function isEmpty(object) {
  return JSON.stringify(object) === JSON.stringify({})
}

export const orders = generateOrderList()
export const ordersHeaders = getHeaders()
export function ordersByFilter(filters, customerNameOrIdValue, sortField) {
  const orders = generateOrderList()
  if (filters.length === 0 && customerNameOrIdValue.isEmpty) {
    return orders
  }
  let filteredOrders = orders.filter((order) => {
    let result = true
    for (const filter of filters) {
      if (filter.isOperationAbove()) {
        result = order[filter.getKey()] >= filter.getValue()
      }
      if (filter.isOperationLess()) {
        result = order[filter.getKey()] <= filter.getValue()
      }
      if (filter.isOperationEquals()) {
        result = order[filter.getKey()] === filter.getValue()
      }
      if (!result) break
    }
    if (result && !customerNameOrIdValue.isEmpty) {
      result =
        order.id.toString().startsWith(customerNameOrIdValue) ||
        order.customerName
          .toLocaleLowerCase()
          .includes(customerNameOrIdValue.toLocaleLowerCase())
    }
    return result
  })
  if (!isEmpty(sortField)) {
    const orderDirection = sortField.isSortDirectionDown ? 1 : -1
    const sortFieldName = getSortFieldName(sortField.caption)
    filteredOrders = filteredOrders.sort((orderLeft, orderRight) => {
      if (orderLeft[sortFieldName] > orderRight[sortFieldName]) {
        return 1 * orderDirection
      }
      if (orderLeft[sortFieldName] < orderRight[sortFieldName]) {
        return -1 * orderDirection
      }
      return 0
    })
  }
  return filteredOrders
}

export function deleteOrders(ordersIds) {
  orderList = orderList.filter((order) => {
    return !ordersIds.includes(order.id)
  })
}
export function changeStatusOrders(ordersIds, status) {
  orderList = orderList.map((order) => {
    if (ordersIds.includes(order.id)) {
      order.status = status
    }
    return order
  })
}
