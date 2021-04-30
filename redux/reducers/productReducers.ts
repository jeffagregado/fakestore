import * as types from '../actionTypes'

const initialState = {
  products: [
    {
      id: 0,
      title: 'Sample Product',
      category: 'sample',
    },
  ],
  loading: false,
  error: null,
}

export const productReducers = (
  state: ProductState = initialState,
  action: ProductAction
) => {
  switch (action.type) {
    case types.ActionTypes.SET_PRODUCTS:
      return {
        state,
        //products: action.payload,
        //loading: false,
        //error: null,
      }

    default:
      return state
  }
}
