import * as types from '../actionTypes'

const initialState = {
  products: [],
  loading: false,
  error: '',
}

export const productReducers = (
  state: ProductState = initialState,
  action: ProductAction
) => {
  switch (action.type) {
    case types.ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        //loading: false,
        //error: null,
      }

    default:
      return state
  }
}

export const selectedProductReducer = (state = {}, action: ProductAction) => {
  switch (action.type) {
    case types.ActionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        ...action.payload,
      }
    case types.ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {}

    default:
      return state
  }
}
