import * as types from '../actionTypes'

export const setProducts = (products: DispactchType) => {
  return {
    type: types.ActionTypes.SET_PRODUCTS,
    payload: products,
  }
}

export const selectedProduct = (product: DispactchType) => {
  return {
    type: types.ActionTypes.SELECTED_PRODUCT,
    payload: product,
  }
}

export const removeProduct = () => {
    return {
      type: types.ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
  }
