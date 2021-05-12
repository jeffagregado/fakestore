import { ReactNode } from 'react'
import useComponentVisible from './functions/clickOutside'

interface Props {
  children: ReactNode
  className?: string
}

const ClickOutsideContainer = ({ children, className }: Props) => {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false)

  return (
    <div ref={ref} className={className}>
      {isComponentVisible && children}
      {/* {!isComponentVisible && setIsComponentVisible(state)} */}
    </div>
  )
}

export default ClickOutsideContainer
