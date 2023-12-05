import React,{ useState } from 'react'
import './index.css'
import Banner from './components/banner'
import Cuerpo from './components/Contenidocentral'
import SubCuerpo from './components/Subcuerpo'
import Footer from './components/Footer'

export default function App() {
 

  return (
    <main className="App-fondo">
      <nav>
        <Banner />
      </nav>
      <body>
        <Cuerpo />
        <SubCuerpo />
      </body>
      <footer>
        <Footer/>
      </footer>
    </main>
  )
}
