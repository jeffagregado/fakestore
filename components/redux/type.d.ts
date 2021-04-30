interface ProductType {
  id: number
  title: string
  category: string
}

type ProductState = {
  products: ProductType[]
}

type ProductAction = {
  type?: string
  payload?: ProductType
  product?: ProductType
}

type DispactchType = (args: ProductAction) => ProductAction
