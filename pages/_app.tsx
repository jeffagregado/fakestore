import { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/globals.scss'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// Redux
import { Provider } from 'react-redux'
import store from '../redux/store'
import { createWrapper } from 'next-redux-wrapper'

NProgress.configure({ showSpinner: false })

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

Router.events.on('routeChangeError', () => {
  console.log('on compplete')
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Layout>
      <Component {...pageProps} />
    </Layout> */}

      <Layout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </>
  )
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)
//export default MyApp
