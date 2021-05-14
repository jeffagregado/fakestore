import { ReactNode } from 'react'
import { motion, Variants } from 'framer-motion'

interface Props {
  children: ReactNode
  onClick: () => void
}

const Button = ({ onClick, children }: Props) => {
  const variants: Variants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: 'mirror',
      },
    },
  }
  return (
    <motion.button
      onClick={onClick}
      variants={variants}
      whileHover="hover"
      className="bg-blue-600 hover:bg-blue-700 rounded-3xl py-2 px-4"
    >
      <span className="text-white font-semibold text-2xl">{children}</span>
    </motion.button>
  )
}

export default Button
