import { useSelector } from 'react-redux'
import Link from 'next/link'
import Card from './Card'

const ProductComponent = () => {
  const products = useSelector((state: State) => state.allproducts.products)
  return (
    <>
      {products.map((product) => {
        return (
          <>
            <Link href={`/products/[id]`} as={`/products/${product.id}`}>
              <a>
                <Card key={product.id} src={product.image} alt={product.title}>
                  <h1 className='font-bold mb-2'>{product.title}</h1>
                  <h2 className='font-medium'>${product.price}</h2>
                </Card>
              </a>
            </Link>
          </>
        )
      })}
    </>
  )
}

export default ProductComponent
