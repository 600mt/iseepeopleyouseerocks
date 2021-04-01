import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import navbarBack from './resources/img/navbarBack.svg'
import navbarInfo from './resources/img/navbarInfo.svg'
import './resources/style.css'

import About from '../../../AboutInsideProtocol/AboutInsideProtocol'


export const Navbar = () => {
  const [modalShow, setModalShow] = useState(false)
  return (
    <div id='navbarFrameTwoPagesProtocollo2'>
        <div>
          <Link to='/'>
            <div id='navbarBackProtocol'>
            <img id='navbarBackSvg' src={navbarBack} alt='Not loaded' />
            </div>
          </Link>
        </div>
      <div id='navbarTextProtocol2'>
        Algorithms are forgetful
      </div>
      <div style={{cursor: 'pointer'}} onClick={() => setModalShow(true)} id='navbarInfoProtocol'>
        <img id='navbarInfoSvgProtocol' src={navbarInfo} alt='Not loaded'/>
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
