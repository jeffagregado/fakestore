import { useStore } from '../src/store'
import { useEffect, useRef, useState } from 'react'
import { Variants } from 'framer-motion'
import useOnClickOutside from '../src/libraries/useClickOutside'
import Input from './Input'
import Button from './Button'
import Modal from './Modal'
import axios from 'axios'

interface Props {
  isOpen: boolean
}

const LogIn = () => {
  const [stateLogIn, isLogIn] = useStore((state) => [
    state.showLogin,
    state.isLogIn,
  ])

  // close modal when clicked outside of form
  const modalRef = useRef<HTMLDivElement>(null)
  useOnClickOutside(modalRef, () => isLogIn())

  // focus on input login
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (stateLogIn) {
      inputRef.current?.focus()
    }
  }, [stateLogIn, inputRef])

  const modalVariants: Variants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2 } },
    exit: { y: -100, opacity: 0 },
  }

  const [userName, setUserName] = useState('')
  const [userPass, setUserPass] = useState('')

  const [userData, setUserData] = useState({ username: '', password: '' })
  const [isValid, setIsValid] = useState(true)

  const getData = async () => {
    await fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        const user = data[0].user.map((item: any) => item.username)
        const pass = data[0].user.map((item: any) => item.password)
        setUserData({ ...userData, username: user, password: pass })
      })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (userName !== userData.username) {
      setIsValid(false)
    }
    if (userData.username === userName) {
      setIsValid(true)
    }
  }
  console.log(isValid)

  // const handleChange = ({target}) => {
  //   const {name, value} = target
  //   const newData = Object.assign({}, )
  // }

  useEffect(() => {
    getData()
  }, [])

  const warningInput =
    'focus:outline-none focus:ring-2 focus:ring-red-600 border-red-400'

  return (
    <Modal
      propRef={modalRef}
      onState={isLogIn}
      isState={stateLogIn}
      variants={modalVariants}
      initial={'initial'}
      animate={'animate'}
      exit={'exit'}
    >
      <h1 className="mb-4 font-semibold text-2xl text-center">Log In</h1>
      <div className="border-b-2 divide-solid border-gray-200 w-full mb-6"></div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col mt-4 space-y-4"
      >
        <label htmlFor="username">Username</label>
        <Input
          name="username"
          placeholder="username"
          propRef={inputRef}
          required
          onChange={(e: any) => setUserName(e.target.value)}
          className={`ring-gray-400 focus:ring-2 focus:ring-blue-400`}
        />
        <label htmlFor="password" className="">
          Password
        </label>
        <Input
          name="password"
          placeholder="password"
          required
          onChange={(e: any) => setUserPass(e.target.value)}
          className={`ring-gray-400 focus:ring-2 focus:ring-blue-400`}
        />
        <a className="text-right">Forget password?</a>
        <Button type="submit">Log In</Button>
      </form>
    </Modal>
  )
}

export default LogIn
