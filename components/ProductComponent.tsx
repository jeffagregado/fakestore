import { useSelector } from 'react-redux'
import Link from 'next/link'

const ProductComponent = () => {
  const products = useSelector((state: State) => state.allproducts.products)
  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link href={`/products/[id]`} as={`/products/${product.id}`}>
              <a>
                <h1>Name: {product.title}</h1>
              </a>
            </Link>
            <sub>Category {product.category}</sub>
            <h2>Price: ${product.price}</h2>
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
        )
      })}
    </>
  )
}

export default ProductComponent
