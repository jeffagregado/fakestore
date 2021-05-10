import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardProduct from '../../components/CardProduct'
import Loader from '../../components/Loader'
import { GetStaticProps } from 'next'
import {
  selectedProduct,
  removeProduct,
} from '../../redux/actions/productActions'

const Products = ({ product }: any) => {
  // const product = useSelector((state: State) => state.product)
  // const { title, category, price, description, image }: ProductType = product
  // const dispatch = useDispatch()
  // const router = useRouter()
  // const { id }: any = router.query
  // const fetchProductDetail = async () => {
  //   await axios
  //     .get(`https://fakestoreapi.com/products/${id}`)
  //     .then((res) => {
  //       dispatch(selectedProduct(res.data))
  //     })
  //     .catch((err) => {
  //       console.log('Err', err)
  //     })
  // }
  // useEffect(() => {
  //   if (id && id !== '') fetchProductDetail()
  //   return () => {
  //     dispatch(removeProduct())
  //   }
  // }, [id])
  return (
    <>
      {/* {Object.keys(product).length === 0 ? (
        <Loader />
      ) : (
        <>
          <CardProduct
            title={title}
            category={category}
            price={price}
            description={description}
            image={image}
          />
        </>
      )} */}
      <div>
        <p>This is {product.id}</p>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const res = await axios.get('https://fakestoreapi.com/products')
  const products = await res.data

  const paths = products.map((product: ProductType) => {
    params: {
      id: product.id
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const res = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
  const product = await res.data

  return {
    props: { product },
  }
}

export default Products
