import '../styles/globals.css'
import Layout from '../pages/layout'
function MyApp({ Component, pageProps }) {
  return (
    <div>
    <Layout><Component {...pageProps} /></Layout>
    </div>
  )
 
}

export default MyApp
