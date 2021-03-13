import React from 'react'
import {motion} from 'framer-motion'

import './resources/style.css'
import Image_1 from './resources/img/1.png'
import Image_2 from './resources/img/2.png'
import Image_3 from './resources/img/3.png'
import Image_4 from './resources/img/4.png'

export const Homepage = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row" id='titleHomepage'> 
          <div className="col-12 col-md-9">
            <div id="r1">
              <h2> I see <mark>  People</mark> you see <mark> Rocks </mark> </h2>
            </div>
          </div>
        <div className="col-7 col-md-3">
          <div id="r2">
            <h2> About </h2>
          </div>
        </div>
      </div>
        <div className="row col-md-12" id="protocolli" style={{zIndex:10}}>
      <ul className="horizontal-slide">
        <li className="child col-5 col-md-5">
          <div id="card"> 
            <img alt='Not loaded'  className="image_dimension" src={Image_1} /> 
          </div>
          <div> 
            <h3 id="r3"> Algorithms are explorers </h3> 
            <h4 id="r4"> A demo archive for an object-driven past exploration </h4>
          </div>
        </li>
        <li className="child col-5 col-md-5">
          <div 
            id="card"
           
          > 
            <img alt='Not loaded'  className="image_dimension" src={Image_2} /> 
          </div>
          <div> 
            <h3 id="r3"> Algorithms are forgetful </h3>
            <h4 id="r4"> Automatic image annotation and pictures that you will never see again </h4>
          </div>
        </li>
        <li className="child col-5 col-md-5">
          <div id="card"> 
            <img alt='Not loaded'  className="image_dimension" src={Image_3} /> 
          </div>
          <div> 
            <h3 id="r3"> Algorithms are curators </h3>
            <h4 id="r4"> Photo memory books designed by iOS </h4>
          </div>
        </li>
        <li className="child col-5 col-md-5">
          <div id="card"> 
            <img alt='Not loaded'  className="image_dimension" src={Image_4} /> 
          </div>
          <h3 id="r3"> Algorithms are keen to adventures </h3>
          <h4 id="r4" className="text-wrap" > About why one third of my personal pictures are recognized as adventure, expedition and holidays and what they look like.</h4>
        </li>
      </ul>
    </div>
      </div>
   </div>
)}

export default Homepage
