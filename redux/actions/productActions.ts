import * as types from '../actionTypes'

export const fetchingProducts = () => {
  return {
    type: types.ActionTypes.FETCH_PRODUCTS,
    //payload: products,
  }
}

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

export const setShowMore = (state: DispactchType) => {
  return {
    type: types.ActionTypes.SHOW_MORE_PRODUCT,
    payload: state,
  }
}
