import styleLogIn from '../styles/LogIn.module.scss'
import { useStore } from '../src/store'
import { useEffect, useRef } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import useOnClickOutside from '../src/libraries/useClickOutside'

interface Props {
  isOpen: boolean
}

const LogIn = ({ isOpen }: Props) => {
  const [stateLogIn, isLogIn] = useStore((state) => [
    state.showLogin,
    state.isLogIn,
  ])

  // close modal when clicked outside of form
  const modalRef = useRef<HTMLDivElement>(null)
  useOnClickOutside(modalRef, () => isLogIn())

  useEffect(() => {
    if (stateLogIn && (document.body.style.overflow = 'hidden'))
      return () => {
        document.body.removeAttribute('style')
      }
  }, [stateLogIn])

  // focus on input login
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (stateLogIn) {
      inputRef.current?.focus()
    }
  }, [stateLogIn])

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { when: 'afterChildren' } },
  }

  const modalVariants: Variants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2 } },
    exit: { y: -100, opacity: 0 },
  }

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="parent"
          variants={overlayVariants}
          initial={'hidden'}
          animate={'visible'}
          exit={'exit'}
          className={`${styleLogIn['login_overlay']}`}
        >
          <motion.div
            key="child"
            variants={modalVariants}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            ref={modalRef}
            className={`${styleLogIn['login_modal']}`}
          >
            <h1 className="mb-4 font-semibold text-2xl text-center">Log In</h1>
            <div className="border-b-2 divide-solid border-gray-200 w-full"></div>
            <form action="" className="flex flex-col mt-4 space-y-3">
              <label htmlFor="username">Username</label>
              <input
                ref={inputRef}
                type="text"
                name="username"
                id="username"
                placeholder="username"
              />
              <label htmlFor="password" className="">
                Password
              </label>
              <input
                type="text"
                name="password"
                id="password"
                placeholder="password"
              />
              <a>Forget password?</a>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LogIn
