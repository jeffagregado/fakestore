import { ReactNode } from 'react'
import { motion, Variants } from 'framer-motion'

interface Props {
  children: ReactNode
  className?: string
  onClick?: any
  type: 'button' | 'submit' | 'reset' | undefined
}

const Button = ({ onClick, children, className, type }: Props) => {
  // const variants: Variants = {
  //   hover: {
  //     translateY: -5,
  //     transition: {
  //       duration: 0.5,
  //       //repeat: Infinity,
  //       repeatType: 'mirror',
  //     },
  //   },
  // }

  return (
    <motion.button
      onClick={onClick}
      //variants={variants}
      //whileHover="hover"
      type={type}
      className={`py-2 px-4 ${
        className
          ? className
          : 'bg-blue-600 hover:bg-blue-700 rounded-3xl shadow-lg'
      }`}
    >
      <span className="text-white font-semibold text-2xl">{children}</span>
    </motion.button>
  )
}

export default Button
