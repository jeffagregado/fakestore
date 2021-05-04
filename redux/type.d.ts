//import { ActionType, StateType } from 'typesafe-actions'

interface ProductType {
  id: number
  title: string
  category: string
  price: number
  description: string
}

type ProductState = {
  products: ProductType[]
  loading: boolean
  error: string
}

type ProductAction = {
  type: any
  payload: any
}

interface State {
  allproducts: {
    products: ProductType[]
  }
  product: ProductType
}

type DispactchType = (args: ProductAction) => ProductAction

/* declare module 'typesafe-actions' {
  export type Store = StateType<typeof import('./reducers/index').default>

  export type RootState = StateType<
    typeof import('./reducers/productReducers').default
  >

  export type RootAction = ActionType<
    typeof import('./actions/productActions').default
  >

  interface Types {
    RootAction: RootAction
  }
} */
