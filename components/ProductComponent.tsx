import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import Card from './Card'
import React, { useCallback, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  setShowMore,
  setCurrentCategory,
} from '../redux/actions/productActions'
import Button from './Button'

const ProductComponent = () => {
  const products = useSelector((state: State) => state.allproducts.products)
  const indexNumber = useSelector((state: State) => state.allproducts.index)
  const currentCategory = useSelector(
    (state: State) => state.allproducts.isCurrentCategory
  )

  const [isActiveFilter, setIsActiveFilter] = useState(false)

  // dispatch
  const dispatch = useDispatch()

  const selectCategory = (category: any) => {
    dispatch(setCurrentCategory(category))
  }

  // Limit string
  const limitString = (desc: string, limit: number) => {
    return desc.length > limit ? `${desc.substring(0, limit)} . . .` : desc
  }

  // Used redux to remain the state of the showed products
  const showMore = useCallback(() => {
    dispatch(setShowMore(indexNumber + 5))
    if (indexNumber >= products.length) {
      null
    }
  }, [indexNumber])

  // remove duplicates of categories
  const newCategories = products.filter(
    (ele, ind) =>
      ind === products.findIndex((elem) => elem.category === ele.category)
  )

  // filter by Categories
  const foundCategory = products.filter((c) => c.category === currentCategory)

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-6 lg:gap-x-4">
        <div className="flex flex-wrap col-span-5 justify-center lg:justify-start gap-2">
          {currentCategory === '' ? (
            // default listings
            <>
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
                  <Button
                    type="button"
                    onClick={showMore}
                    className="bg-gray-400 text-white rounded-lg p-4"
                  >
                    Show more
                  </Button>
                </div>
              )}
            </>
          ) : (
            // filtered categories
            <>
              {foundCategory.map((product) => {
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
              {indexNumber >= foundCategory.length ? null : (
                <div className="w-60 flex justify-center items-center">
                  <Button
                    type="button"
                    onClick={showMore}
                    className="bg-gray-400 text-white rounded-lg p-4"
                  >
                    Show more
                  </Button>
                </div>
              )}
            </>
          )}
        </div>

        <div className="p-4 mb-4 row-start-1 row-end-2 lg:row-start-auto lg:row-end-auto">
          <div className="border-b-2 border-solid border-gray-200 pb-4">
            <div className="flex justify-between mb-2">
              <h2 className="font-semibold flex-grow-[2] text-center">
                Categories
              </h2>
              <button
                className="lg:hidden"
                onClick={() => setIsActiveFilter(!isActiveFilter)}
              >
                <FontAwesomeIcon icon="chevron-down" />
              </button>
            </div>
            <ul
              className={`space-y-2 flex flex-col items-center justify-center lg:block ${
                !isActiveFilter ? 'hidden' : 'block'
              }`}
            >
              <li>
                <button
                  type="button"
                  className={`${
                    currentCategory === '' && 'active: text-yellow-400'
                  }`}
                  onClick={() => selectCategory('')}
                >
                  All
                </button>
              </li>
              {newCategories.map((product) => {
                return (
                  <li key={product.category}>
                    <button
                      type="button"
                      className={`${
                        currentCategory === product.category &&
                        'active: text-yellow-400'
                      }`}
                      onClick={() => selectCategory(product.category)}
                    >
                      {product.category}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductComponent
