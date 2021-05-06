import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import ProductComponent from './ProductComponent'
import { useEffect } from 'react'
//import { NextApiRequest, NextApiResponse } from 'next'
import { setProducts } from '../redux/actions/productActions'

const ProductListing = () => {
  const products = useSelector((state: State) => state)
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    await axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        dispatch(setProducts(res.data))
      })
      .catch((err) => {
        console.log('Err', err)
      })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="container flex flex-wrap justify-center md:justify-start gap-2">
      <ProductComponent />
    </div>
  )
}

export default ProductListing
