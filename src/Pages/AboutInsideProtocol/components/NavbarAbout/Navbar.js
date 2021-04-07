import React from 'react'

import navbarBack from './resources/img/navbarBack.svg'
import navbarInfo from './resources/img/navbarInfo.svg'
import './resources/style.css'


export const Navbar = (props) => {
  return (
    <div id='navbarFrameTwoPagesAbout'>
      <div id='navbarBackAbout'>
        <img id='navbarBackSvgAbout' style={{color: '#0A84FF'}} src={navbarBack} alt='Not loaded' />
      </div>
      <div id='navbarTextAbout' style={{color: '#0A84FF'}}>
        Algorithms are forgetful
      </div>
      <div style={{cursor: 'pointer'}} onClick={props.onHide} id='navbarInfoAbout'>
        <img id='navbarInfoSvgAbout' src={navbarInfo} alt='Not loaded'/>
      </div>
    </div>
  )
}

export default Navbar
