import React from 'react'
import Hero from './compoents/Hero'
import TopNavbar from './compoents/TopNavbar'
import BottomBar from './compoents/BottomBar'
import HowToRefer from './compoents/HowToRefer'
import BenefitPage from './compoents/BenefitPage'
import FAQPage from './compoents/FAQPage'
import Footer from './compoents/Footer'
import grad from './assets/grad.png'

const App = () => {
  return (
    <div className=''>
      <TopNavbar/>
      <BottomBar/>
      <Hero/>
      <HowToRefer/>
      <BenefitPage/>
      <FAQPage/>
      <div className=' container mx-auto py-8'>
      <img src={grad} alt="" />
      </div>
      <Footer/>
    </div>
  )
}

export default App