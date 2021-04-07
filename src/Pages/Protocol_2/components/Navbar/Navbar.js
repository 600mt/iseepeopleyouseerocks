import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import navbarBack from './resources/img/navbarBack.svg'
import navbarInfo from './resources/img/navbarInfo.svg'
import './resources/style.css'

import About from '../../../AboutInsideProtocol/AboutInsideProtocol'


export const Navbar = ({ setShow, show}) => {
  const [modalShow, setModalShow] = useState(false)
  return (
    <div id='navbarFrameTwoPagesProtocollo2'>
        {/* <div> */}
          <Link to='/'>
            <div id='navbarBackProtocol'>
                <img id='navbarBackSvgProtocol' src={navbarBack} alt='Not loaded' />
            </div>
          </Link>
        {/* </div> */}
      <div id='navbarTextProtocol2'>
        Algorithms are forgetful
      </div>
      <div style={{cursor: 'pointer'}} onClick={() => setShow(!show)} id='navbarInfoProtocol'>
        <img id='navbarInfoSvgProtocol' src={navbarInfo} alt='Not loaded'/>
      </div>
    </div>
  )
}

export default Navbar
