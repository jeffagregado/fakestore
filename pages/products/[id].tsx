import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../../components/Loader'
import {
  selectedProduct,
  removeProduct,
} from '../../redux/actions/productActions'

const Products = () => {
  const product = useSelector((state: State) => state.product)
  const { title, category, price, description }: ProductType = product
  const dispatch = useDispatch()
  const router = useRouter()
  const { id }: any = router.query

  const fetchProductDetail = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        dispatch(selectedProduct(res.data))
      })
      .catch((err) => {
        console.log('Err', err)
      })
  }

  useEffect(() => {
    if (id && id !== '') fetchProductDetail()

    return () => {
      dispatch(removeProduct())
    }
  }, [id])

  console.log('Product', product)

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <Loader />
      ) : (
        <>
          <h1>Hello {id}</h1>
          <h2>Title {title}</h2>
          <sub>{category}</sub>
          <h3>${price}</h3>
          <p>{description}</p>
        </>
      )}
    </>
  )
}

export default Products
