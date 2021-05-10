import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import ProductComponent from './ProductComponent'
import { useEffect } from 'react'
import { setProducts, fetchingProducts } from '../redux/actions/productActions'
import Loader from './Loader'

const ProductListing = () => {
  const products = useSelector((state: State) => state.allproducts.products)
  const isFetch = useSelector((state: State) => state.allproducts.loading)
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    await axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        console.log('res', res)
        dispatch(fetchingProducts())
        dispatch(setProducts(res.data))
      })
      .catch((err) => {
        console.log('Err', err)
      })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const isEmpty = products.length === 0

  return (
    <div className="container">
      {isEmpty ? !isFetch && <Loader /> : <ProductComponent />}
    </div>
  )
}

export default ProductListing
