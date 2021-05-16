import * as types from '../actionTypes'

const initialState = {
  products: [],
  isCurrentCategory: '',
  loading: false,
  error: '',
  index: 10,
}

// const itemNumberState = {
//   index: 5,
// }

export const productReducers = (
  state: ProductState = initialState,
  action: ProductAction
) => {
  switch (action.type) {
    case types.ActionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        //products: action.payload,
        loading: true,
        //error: null,
      }

    case types.ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        //error: null,
      }

    case types.ActionTypes.SHOW_MORE_PRODUCT:
      return {
        ...state,
        index: action.payload,
      }

    case 'SELECT_PRODUCT_CATEGORY':
      return {
        ...state,
        isCurrentCategory: action.payload,
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

// export const showMoreReducer = (
//   state: ShowMoreType = itemNumberState,
//   action: ProductAction
// ) => {
//   switch (action.type) {
//     case types.ActionTypes.SHOW_MORE_PRODUCT:
//       return {
//         ...state,
//         index: initialState.products.length + 5,
//       }

//     default:
//       break
//   }
// }
