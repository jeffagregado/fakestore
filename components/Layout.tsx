import { ReactNode } from 'react'
import Meta from './Meta'
import Header from '../components/Header'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
