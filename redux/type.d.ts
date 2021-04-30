interface ProductType {
  id: number
  title: string
  category: string
}

type ProductState = {
  products: ProductType[]
  loading: boolean
  error: null
}

type ProductAction = {
  type: any
  payload: any
}

type DispactchType = (args: ProductAction) => ProductAction
