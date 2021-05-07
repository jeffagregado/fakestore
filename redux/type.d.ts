interface ProductType {
  id: number
  title: string
  category: string
  price: number
  description: string
  image: string
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
    loading: boolean
    error: string | null
  }
  product: ProductType
}

type DispactchType = (args: ProductAction) => ProductAction
