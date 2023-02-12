import '../styles/globals.css'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Footer from '../components/footer'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.css'
import Form from '../components/form';

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar />
  <Component {...pageProps} />
  <Form/>
  <Footer />
  </> 
}

export default MyApp
