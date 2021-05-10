import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardProduct from '../../components/CardProduct'
import Loader from '../../components/Loader'
import { GetStaticPaths } from 'next'
import {
  selectedProduct,
  removeProduct,
} from '../../redux/actions/productActions'

const Products = ({ product }: any) => {
  // const product = useSelector((state: State) => state.product)
  // const { title, category, price, description, image }: ProductType = product
  // const dispatch = useDispatch()
  const router = useRouter()
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

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <Loader />
  }

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
      <CardProduct
        title={product.title}
        category={product.category}
        price={product.price}
        description={product.description}
        image={product.image}
      />
    </>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()

  const paths = data.map((item: any) => {
    return {
      params: { id: item.id.toString() },
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.id
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  const data = await res.json()

  return {
    props: { product: data },
  }
}

export default Products
