import { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/globals.scss'

// Redux
import { Provider } from 'react-redux'
import store from '../redux/store'
import { createWrapper } from 'next-redux-wrapper'

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
