import React, { useState } from 'react'

import navbarBack from './resources/img/navbarBack.svg'
import navbarInfo from './resources/img/navbarInfo.svg'
import './resources/style.css'

import About from '../../../AboutInsideProtocol/AboutInsideProtocol'


export const Navbar = () => {
  const [modalShow, setModalShow] = useState(false)
  return (
    <div id='navbarFrameTwoPagesProtocollo1'>
      <div id='navbarBack'>
        <img id='navbarBackSvg' src={navbarBack} alt='Not loaded' />
      </div>
      <div id='navbarText'>
        Algorithms are forgetfull
      </div>
      <div style={{cursor: 'pointer'}} onClick={() => setModalShow(true)} id='navbarInfo'>
        <img id='navbarInfoSvg' src={navbarInfo} alt='Not loaded'/>
      </div>
      <About
          show={modalShow}
          clickMe={() => {}}
          onHide={() => setModalShow(false)}
        />
    </div>
  )
}

export default Navbar
