import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProductTab from './ProductTab'

function App() {
    return(
        <div >
        <b><h2 className='h2'>BlockBuster Deals | Shop Now</h2></b>
        <ProductTab/>
        </div>
    )
  
}

export default App
