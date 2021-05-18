import { RefObject } from 'react'

interface Props {
  name: string
  placeholder?: string
  ref?: RefObject<HTMLInputElement>
  className?: string
  autocomplete? : string
  required?: boolean
}

const Input = ({ name, placeholder, ref, className, autocomplete, required }: Props) => {
  return (
    <input
      type="text"
      id={name}
      name={name}
      placeholder={placeholder}
      autoComplete={autocomplete}
      required={required}
      ref={ref}
      className={`rounded ${className}`}
    />
  )
}

export default Input
