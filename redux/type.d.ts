interface ProductType {
  id: number
  title: string
  category: string
  price: number
  description: string
  image: string
}

interface ShowMoreType {
  index: number
}

type ProductState = {
  products: ProductType[]
  loading: boolean
  error: string
  index: any
}

type ProductAction = {
  type: string
  payload: any
}

interface State {
  allproducts: {
    products: ProductType[]
    loading: boolean
    error: string | null
    index: any
  }
  product: ProductType
}

type DispactchType = (args: ProductAction) => ProductAction
