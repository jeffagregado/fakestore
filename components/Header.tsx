import Link from 'next/link'
import { useStore } from '../src/store'
import Button from './Button'

const Header = () => {
  const showLogIn = useStore((state) => state.isLogIn)
  return (
    <>
      <div className="container my-6">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold">
              <a>FakeShop</a>
            </h1>
          </Link>
          <Button onClick={showLogIn}>Login</Button>
        </nav>
      </div>
    </>
  )
}

export default Header
