import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import Card from './Card'
import React, { useState, useCallback } from 'react'
import { setShowMore } from '../redux/actions/productActions'

const ProductComponent = () => {
  const products = useSelector((state: State) => state.allproducts.products)
  const indexNumber = useSelector((state: State) => state.allproducts.index)
  //const [numItems, setNumItems] = useState(5)

  // Limit string
  const limitString = (desc: string) => {
    return desc.length > 50 ? `${desc.substring(0, 50)} . . .` : desc
  }

  const dispatch = useDispatch()

  const showMore = useCallback(() => {
    //setNumItems(numItems + 5)
    dispatch(setShowMore(indexNumber + 5))
    if (indexNumber >= products.length) {
      null
    }
  }, [indexNumber])

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2">
        {products.slice(0, indexNumber).map((product) => {
          return (
            <React.Fragment key={product.id}>
              <Link href={`/products/[id]`} as={`/products/${product.id}`}>
                <a>
                  <Card src={product.image} alt={product.title}>
                    <div className="mb-4">
                      <h1 className="font-bold mb-2">{product.title}</h1>
                      <h2 className="font-medium">${product.price}</h2>
                    </div>
                    <p className="text-gray-400">
                      {limitString(product.description)}
                    </p>
                  </Card>
                </a>
              </Link>
            </React.Fragment>
          )
        })}
      </div>
      <div className="w-full flex justify-center my-4">
        {indexNumber >= products.length ? null : (
          <button
            className="bg-gray-400 text-white rounded-2xl p-4"
            type="button"
            onClick={showMore}
          >
            Show more
          </button>
        )}
      </div>
    </>
  )
}

export default ProductComponent
