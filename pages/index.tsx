import LogIn from '../components/LogIn'
import ProductListing from '../components/ProductListing'
import { useStore } from '../src/store'

export default function Home() {
  const stateLogIn = useStore((state) => state.showLogin)
  return (
    <>
      <ProductListing />
      {stateLogIn && <LogIn />}
    </>
  )
}
