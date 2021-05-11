import { ReactNode } from 'react'
import useComponentVisible from './functions/clickOutside'

interface Props {
  children: ReactNode
  state: boolean
}

const ClickOutsideContainer = ({ children, state }: Props) => {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false)

  return (
    <div ref={ref}>
      {isComponentVisible && children}
      {!isComponentVisible && setIsComponentVisible(state)}
    </div>
  )
}

export default ClickOutsideContainer
