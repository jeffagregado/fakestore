import Link from 'next/link'

const Header = () => {
  return (
    <div className="container my-6">
      <nav className="">
        <h1 className="text-2xl font-bold">
          <Link href="/">
            <a>FakeShop</a>
          </Link>
        </h1>
      </nav>
    </div>
  )
}

export default Header
