import { ActionTypes } from '../constants/action-types'

const initialState: ProductState = {
  products: [{
      id: 1,
      title: 'aasdasd',
      category: 'asdasdsad'
  }],
}

export const productReducer = (state: ProductState = initialState, { type, payload }: ProductAction): ProductState => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state

    default:
      return state
  }
}
