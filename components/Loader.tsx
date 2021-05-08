import loaderStyle from '../styles/Loader.module.scss'

const Loader = () => {
  return (
    <div className="container flex justify-center items-center min-h-screen">
      <div className={loaderStyle['lds-facebook']}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loader
