import '../styles/globals.css'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Footer from '../components/footer'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Header />
  <Navbar />
  <Component {...pageProps} />
  <Footer />
  </> 
}

export default MyApp
