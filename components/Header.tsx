import Link from 'next/link'
import { useStore } from '../src/store'

const Header = () => {
  const showLogIn = useStore((state) => state.isLogIn)
  const stateLogIn = useStore((state) => state.showLogin)
  console.log('StateLogin', stateLogIn)
  return (
    <>
      <div className="container my-6">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold">
              <a>FakeShop</a>
            </h1>
          </Link>
          <button onClick={showLogIn}>LogIn</button>
        </nav>
      </div>
    </>
  )
}

export default Header
