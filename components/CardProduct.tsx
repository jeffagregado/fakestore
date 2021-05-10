import Image from 'next/image'

type CardProductType = Omit<ProductType, 'id'>

const CardProduct = ({
  title,
  category,
  price,
  description,
  image,
}: CardProductType) => {
  return (
    <div className="container flex h-screen">
      <div className="relative w-2/4">
        <Image src={image} alt={title} layout="fill" objectFit="contain" />
      </div>
      <div className="flex flex-col p-8 w-2/4">
        <div className="mt-20 mb-10">
          <h1 className="text-2xl font-bold">{title}</h1>
          <h2 className="text-2xl font-semibold">${price}</h2>
          <sub>category: {category}</sub>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default CardProduct
