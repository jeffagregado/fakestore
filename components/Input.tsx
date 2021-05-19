import { RefObject } from 'react'

interface Props {
  name: string
  placeholder?: string
  propRef?: RefObject<HTMLInputElement>
  className?: string
  autocomplete? : string
  required?: boolean
}

const Input = ({ name, placeholder, propRef, className, autocomplete, required }: Props) => {
  return (
    <input
      type="text"
      id={name}
      name={name}
      placeholder={placeholder}
      autoComplete={autocomplete}
      required={required}
      ref ={propRef}
      className={`rounded ${className}`}
    />
  )
}

export default Input
