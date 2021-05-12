import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import Card from './Card'
import React, { useState, useCallback } from 'react'
import { setShowMore } from '../redux/actions/productActions'

const ProductComponent = () => {
  const products = useSelector((state: State) => state.allproducts.products)
  const indexNumber = useSelector((state: State) => state.allproducts.index)

  // Limit string
  const limitString = (desc: string, limit: number) => {
    return desc.length > limit ? `${desc.substring(0, limit)} . . .` : desc
  }

  const dispatch = useDispatch()

  // Used redux to remain the state of the showed products
  const showMore = useCallback(() => {
    dispatch(setShowMore(indexNumber + 5))
    if (indexNumber >= products.length) {
      null
    }
  }, [indexNumber])

  return (
    <>
      <div className="flex flex-wrap justify-center lg:justify-start gap-2">
        {products.slice(0, indexNumber).map((product) => {
          return (
            <React.Fragment key={product.id}>
              <Link href={`/products/${product.id}`}>
                <a>
                  <Card src={product.image} alt={product.title}>
                    <div className="mb-4">
                      <h1 className="font-bold mb-2">
                        {limitString(product.title, 50)}
                      </h1>
                      <h2 className="font-medium">${product.price}</h2>
                    </div>
                    <p className="text-gray-400">
                      {limitString(product.description, 50)}
                    </p>
                  </Card>
                </a>
              </Link>
            </React.Fragment>
          )
        })}
        {indexNumber >= products.length ? null : (
          <div className="w-60 flex justify-center items-center">
            <button
              className="bg-gray-400 text-white rounded-lg p-4"
              type="button"
              onClick={showMore}
            >
              Show more
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default ProductComponent
