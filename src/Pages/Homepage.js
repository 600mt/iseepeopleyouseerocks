import React, {useState} from 'react'
import {AnimateSharedLayout } from 'framer-motion'

import './resources/style.css'
import Image_1 from './resources/img/1.png'
import Image_2 from './resources/img/2.png'
import Image_3 from './resources/img/3.png'
import Image_4 from './resources/img/4.png'
import info_logo from './resources/img/navbarInfo.svg'
import Image_5  from './resources/img/5.png'

import About  from './About'

export const Homepage = () => {
  const [modalShow, setModalShow] = useState(false)
  return (
    <AnimateSharedLayout type="crossfade">
    <div>
      <div className="container-fluid">
        <div className="row" id='titleHomepage'> 
          <div className="col-10 col-md-9" id="r1">
              <h2>I see<mark> people</mark> you see<mark>rocks</mark></h2>
          </div>
          <div className="col-2 col-md-3" id="r2-long">
             <h2 id="text-right" style={{cursor: 'pointer'}} onClick={() => setModalShow(true)}> <img src={info_logo} alt="info"></img> About </h2>
             <About
                  show={modalShow}
                  clickMe={() => {}}
                  onHide={() => setModalShow(false)}
              />
          </div>
          <div className="col-2 col-md-3" id="r2-short">
             <img id="text-right" onClick={() => setModalShow(true)} src={info_logo} alt="info"></img>
             <About
                  show={modalShow}
                  clickMe={() => {}}
                  onHide={() => setModalShow(false)}
              />
          </div>
        </div>
        <div className="row col-md-12" id="protocolli" style={{zIndex:10}}>
      <ul className="horizontal-slide">
        <li className="child col-sm-2 col-md-5">
          <div id="card"> 
            <img alt='Not loaded'  className="image_dimension" src={Image_1} /> 
          </div>
          <div> 
            <h3 id="r3"> Algorithms are explorers </h3> 
            <h4 id="r4" className="text-wrap"> A demo archive for an object-driven past exploration </h4>
          </div>
        </li>
        <li className="child col-sm-2 col-md-5">
          <div 
            id="card"
           
          > 
            <img alt='Not loaded'  className="image_dimension" src={Image_5} /> 
          </div>
          <div> 
            <h3 id="r3"> Algorithms are forgetful </h3>
            <h4 id="r4" className="text-wrap"> Automatic image annotation and pictures that you will never see again </h4>
          </div>
        </li>
        <li className="child col-sm-2 col-md-5">
          <div id="card"> 
            <img alt='Not loaded'  className="image_dimension" src={Image_3} /> 
          </div>
          <div> 
            <h3 id="r3"> Algorithms are curators </h3>
            <h4 id="r4" className="text-wrap"> Photo memory books designed by iOS </h4>
          </div>
        </li>
        <li className="child col-sm-2 col-md-5">
          <div id="card"> 
            <img alt='Not loaded'  className="image_dimension" src={Image_4} /> 
          </div>
          <h3 id="r3"> Algorithms are keen to adventures </h3>
          <h4 id="r4" className="text-wrap" > About why one third of my personal pictures are recognized as adventure, expedition and holidays and what they look like.</h4>
        </li>
      </ul>
    </div>
    <div className="row">
     <div className="col-12">
        <About />
     </div>
    </div>
      </div>
   </div>
   
   </AnimateSharedLayout>
)}

export default Homepage
