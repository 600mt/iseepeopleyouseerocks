import React from 'react'

import navbarBack from './resources/img/navbarBack.svg'
import navbarInfo from './resources/img/navbarInfo.svg'
import './resources/style.css'


export const Navbar = (props) => {
  // const [modalShow, setModalShow] = useState(false)
  return (
    <div id='navbarFrameTwoPagesAbout'>
      <div id='navbarBack'>
        <img id='navbarBackSvg' src={navbarBack} alt='Not loaded' />
      </div>
      <div id='navbarText'>
        Algorithms are forgetfull
      </div>
      <div style={{cursor: 'pointer'}} onClick={props.onHide} id='navbarInfo'>
        <img id='navbarInfoSvg' src={navbarInfo} alt='Not loaded'/>
      </div>
    </div>
  )
}

export default Navbar
