import { AnimatePresence, motion, Variants } from 'framer-motion'
import { ReactNode, useEffect, useRef, RefObject } from 'react'
import useOnClickOutside from '../src/libraries/useClickOutside'

interface Props {
  children: ReactNode
  onState: () => void
  isState: boolean
  variants?: {}
  initial?: string | {}
  animate?: string | {}
  exit?: string | {}
  className?: string
  propRef?: RefObject<HTMLDivElement>
}

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { when: 'afterChildren' } },
}

const Modal = ({
  children,
  onState,
  isState,
  variants,
  initial,
  animate,
  exit,
  className,
  propRef,
}: Props) => {
  // close modal when clicked outside of modal
  // const modalRef = useRef<HTMLDivElement>(null)
  // useOnClickOutside(modalRef, () => onState)

  // add style overflow='hidden' to body when isState is true
  // to remove / hide scrollbar
  // and remove style when isState is false
  useEffect(() => {
    if (isState && (document.body.style.overflow = 'hidden'))
      return () => {
        document.body.removeAttribute('style')
      }
  }, [isState])

  // AnimatePresence is used to animate when components are mounted and unmounted
  return (
    <AnimatePresence>
      {isState && (
        <motion.div
          key="parent"
          variants={overlayVariants}
          initial={'hidden'}
          animate={'visible'}
          exit={'exit'}
          className={` flex justify-center items-center backdrop-filter backdrop-blur-md bg-black bg-opacity-5 w-full h-full absolute top-0 left-0 z-50`}
        >
          <motion.div
            ref={propRef}
            key="child"
            variants={variants}
            initial={initial}
            animate={animate}
            exit={exit}
            className={`p-8 bg-white flex flex-col ${
              className ? className : 'w-[350px] h-[500px]'
            }`}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
