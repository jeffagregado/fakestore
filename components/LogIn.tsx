import styleLogIn from '../styles/LogIn.module.scss'
import { useStore } from '../src/store'
import { useEffect } from 'react'

const LogIn = () => {
  const stateLogIn = useStore((state) => state.showLogin)
  const isLogIn = useStore((state) => state.isLogIn)

  useEffect(() => {
    if (stateLogIn && (document.body.style.overflow = 'hidden'))
      return () => {
        document.body.removeAttribute('style')
      }
  }, [stateLogIn])

  return (
    <div
      onClick={isLogIn}
      className={`${styleLogIn['login_popup']} ${
        stateLogIn && styleLogIn['login-show']
      }`}
    >
      {stateLogIn && (
        <div className={styleLogIn['login_content']}>Hello Login</div>
      )}
    </div>
  )
}

export default LogIn
