import { ActionTypes } from '../constants/action-types'

export const setProducts = (products: ProductType) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  }
}

export const selectedProduct = (product: ProductType) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  }
}

export const removeSelected = (remove: ProductType) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    payload: remove,
  }
}
