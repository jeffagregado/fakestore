import styleLogIn from '../styles/LogIn.module.scss'
import { useStore } from '../src/store'
import { useEffect } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'

interface Props {
  isOpen: boolean
}

const LogIn = ({ isOpen }: Props) => {
  const stateLogIn = useStore((state) => state.showLogin)
  const isLogIn = useStore((state) => state.isLogIn)
  console.log('state', stateLogIn)

  useEffect(() => {
    if (stateLogIn && (document.body.style.overflow = 'hidden'))
      return () => {
        document.body.removeAttribute('style')
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
      {/* {isOpen && (
        <div
          onClick={isLogIn}
          className={`${styleLogIn['login_overlay']} ${
            stateLogIn ? styleLogIn['login--open'] : styleLogIn['login--exit']
          }`}
        >
          <div className={`${styleLogIn['login_modal']}`}>Hello Login</div>
        </div>
      )} */}

      {isOpen && (
        <motion.div
          key="parent"
          variants={overlayVariants}
          initial={'hidden'}
          animate={'visible'}
          exit={'exit'}
          onClick={isLogIn}
          className={`${styleLogIn['login_overlay']}`}
        >
          <motion.div
            key="child"
            variants={modalVariants}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            className={`${styleLogIn['login_modal']}`}
          >
            Hello Login
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LogIn
