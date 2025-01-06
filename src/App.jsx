import './App.css'
import HeroSection from './components/HeroSection'
import Carousel from './components/Carousel'
import Services from './components/Services'
import About from './components/About'
import Whatsapp from './components/Whatsapp'
import WorkWithUs from './components/WorkWithUs'
import Testimonios from './components/Testimonios'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <HeroSection/>
      <Carousel/>
      <Services/>
      <About/>
      <Whatsapp/>
      <WorkWithUs/>
      <Testimonios/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
