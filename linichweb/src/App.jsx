import React,{ useState } from 'react'
import './index.css'
import Banner from './components/banner'
import Cuerpo from './components/Contenidocentral'
import Footer from './components/Footer'

export default function App() {
 

  return (
    <div className="App">
        <Banner/>
        <div className="leftSide">2</div>
        <Cuerpo />
        <div className="rightSide">4</div>
        <Footer />
    </div>
  )
}


