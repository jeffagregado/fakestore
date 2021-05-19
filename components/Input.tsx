import { RefObject } from 'react'

interface Props {
  name: string
  placeholder?: string
  propRef?: RefObject<HTMLInputElement>
  className?: string
  autocomplete?: string
  required?: boolean
  onChange?: any
}

const Input = ({
  name,
  onChange,
  placeholder,
  propRef,
  className,
  autocomplete,
  required,
}: Props) => {
  return (
    <input
      type="text"
      id={name}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      autoComplete={autocomplete}
      required={required}
      ref={propRef}
      className={`rounded border-0 ring-1 ${className}`}
    />
  )
}

export default Input
