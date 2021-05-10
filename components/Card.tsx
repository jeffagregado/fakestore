import Image from 'next/image'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  src: string
  alt: string
}

const Card = ({ children, src, alt }: Props) => {
  return (
    <div className="flex flex-col w-60 rounded-2xl border-2 border-solid border-gray-200 overflow-hidden">
      <div className="w-full h-56 relative border-b-2 border-solid border-gray-200">
        <Image src={src} alt={alt} layout="fill" />
      </div>
      <div className="p-4 h-56">{children}</div>
    </div>
  )
}

export default Card
