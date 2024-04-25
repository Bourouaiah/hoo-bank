import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import Hero from './components/Hero'
import Business from './components/Business'
import Billing from './components/Billing'
import CardDeal from './components/CardDeal'
import Testimonials from './components/Testimonials'
import Clients from './components/Clients'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const [shown, setShown] = useState(false)
  return (
  <>  
  {/* NavBar */}
    <div className='px-8 sm:p-0 fixed w-full z-[100] bg-nav'>
      <Navbar setShown={setShown} shown={shown} />
      { shown && <SideBar shown={shown} setShown={setShown} />}
    </div>
    {/* Hero */}
    <div className='bg-primary text-white dm:pl-[50px] overflow-hidden py-[80px]'>
      <Hero />
    </div>
    {/* Business */}
    <Business />
    {/* Billing */}
    <Billing />
    {/* Card Deal */}
    <CardDeal />
    {/* Testimonials */}
    <Testimonials />
    {/* Clients */}
    <Clients />
    {/* CTA */}
    <CTA />
    {/* Footer */}
    <Footer />
  </>
  )
}

export default App