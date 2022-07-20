import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/Navigation/navigation'
import Footer from '../components/Footer/footer'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
        <Navigation />
            <Component {...pageProps} />
        <Footer />
    </>
  )
}

export default MyApp
