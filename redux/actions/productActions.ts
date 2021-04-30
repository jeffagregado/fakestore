import * as types from '../actionTypes'

export const setProducts = (products: ProductAction) => {
  return {
    type: types.ActionTypes.SET_PRODUCTS,
    payload: products,
  }
}

export const selectedProduct = (product: ProductAction) => {
  return {
    type: types.ActionTypes.SELECTED_PRODUCT,
    payload: product,
  }
}
