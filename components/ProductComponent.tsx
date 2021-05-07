import { useSelector } from 'react-redux'
import Link from 'next/link'
//import Card from './Card'
import dynamic from 'next/dynamic'
import Loader from './Loader'

const ProductComponent = () => {
  const products = useSelector((state: State) => state.allproducts.products)

  const limitString = (desc: string) => {
    return desc.length > 50 ? `${desc.substring(0, 50)} . . .` : desc
  }

  // Dynamic Loading Card Component
  const DynamicCard = dynamic(() => import('./Card'), {
    loading: () => <Loader />,
  })

  return (
    <>
      {products.map((product) => {
        return (
          <>
            <Link href={`/products/[id]`} as={`/products/${product.id}`}>
              <a>
                <DynamicCard
                  key={product.id}
                  src={product.image}
                  alt={product.title}
                >
                  <div className="mb-4">
                    <h1 className="font-bold mb-2">{product.title}</h1>
                    <h2 className="font-medium">${product.price}</h2>
                  </div>
                  <p className="text-gray-400">
                    {limitString(product.description)}
                  </p>
                </DynamicCard>
              </a>
            </Link>
          </>
        )
      })}
    </>
  )
}

export default ProductComponent
