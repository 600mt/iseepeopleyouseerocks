import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import './resources/style.css'
import Image_1 from './resources/img/1.png'
import Image_2 from './resources/img/2.png'
import Image_3 from './resources/img/3.png'
import Image_4 from './resources/img/4.png'
import info_logo from './resources/img/navbarInfo.svg'
import close_logo from './resources/img/close.svg'

import About  from './About'
import { Fragment } from 'react'

export const Homepage = () => {
  const [show, setShow] = useState(false)

  return (
    <Fragment 
    style={{position: 'relative'}}
    >
     
      <div style={{position: 'absolute', zIndex: 0}}>
        
        <div className="container-fluid" 
            style={{ 
              height: '8vh',
              marginTop:'2vh',
              width: '100vw'
            }}
        >
          <div className="row"
            style={{
              position: 'relative',
              top: '1.5vh'
            }}
          > 
              <div className="col-10 col-md-9" >
                  <h2
                  id="fontTitleHomepage"
                    style={{
                      marginLeft: '3%',
                    }}
                  >I see people you see rocks  </h2>
              </div>
              <div className="col-2 col-md-3"
                style={{
                  position: 'relative'
                }}
              >
                <h2
                  onClick={() => setShow(!show)}
                  id='containerAboutHomepage'
                  // style={{
                   
                  //     cursor: 'pointer', 
                      
                  //     marginLeft: '58%',
                  //     position: 'relative',
                  //     top: '-19%'
                  //   }}
                  > <img 
                      onClick={() => setShow(!show)}
                      src={info_logo} 
                      alt="info"
                      id='infoHomepage'  
                    /> 
                    <span
                    id="aboutTitleHomepage"
                      
                    >About</span> </h2>
              </div>
          </div>
        </div>
          <div className="container-fluid"
            style={{ 
              height: '62vh',
              width: '100vw'
            }}
          
          >
          
            <div className="row col-md-12" id="protocolli" style={{zIndex:10}}>
              <ul className="horizontal-slide">
                <li className="child col-sm-2 col-md-5">
                  <div id="card"> 
                  <Link to='/protocollo-1'> <img alt='Not loaded'  className="image_dimension" src={Image_1} /> </Link>
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
                    <Link to='/protocollo-2'><img alt='Not loaded'  className="image_dimension" src={Image_2} /> </Link>
                  </div>
                  <div>
                    <h3 id="r3" style={{fontFamily: 'SF_medium'}}> Algorithms are forgetful </h3>
                    <h4 id="r4" style={{fontFamily: 'SF_medium'}}  className="text-wrap"> Automatic image annotation and pictures that you will never see again </h4>
                  </div>
                </li>
                <li className="child col-sm-2 col-md-5">
                  <div id="card"> 
                    <Link to='/protocollo-3'><img alt='Not loaded'  className="image_dimension" src={Image_3} />  </Link>
                  </div>
                  <div> 
                    <h3 id="r3"> Algorithms are curators </h3>
                    <h4 id="r4" className="text-wrap"> Photo memory books designed by iOS </h4>
                  </div>
                </li>
                <li className="child col-sm-2 col-md-5">
                  <div id="card"> 
                  <Link to='/protocollo-4'> <img alt='Not loaded'  className="image_dimension" src={Image_4} /> </Link>
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


     

    <div
      id='aboutProtocollo1'
      style={{
        position: 'absolute',
        zIndex: 5,
        display: (show ? 'block' : 'none')
        // display: 'block'
      }} 
    >
      {/* backdrop-filter: blur(10px); */}
        {/* <div style={{position: 'absolute',  filter: 'blur(20px)', height: '300px', zIndex: 1, width: '300px', backgroundColor:  'white'}} /> */}
      <div style={{position: 'absolute', height: '100%', width: '100%'}}>
        <div className="container-fluid" 
          style={{
            position: 'relative',
            // top: '1vh',
            backgroundColor: 'black',
            height: '100vh', 
            width: '100vw', 
            // paddingTop: '2%',
            // marginTop: '2%',
            // borderRadius: '20px'
          }}
        >
          <div className="row"
            style={{
              position: 'relative',
              top: '1.5vh'
            }}
          > 
            <div className="col-10 col-md-10">
              <h2
                id='fontHomePageAbout'
                
                  >About  </h2>
            </div>
            <div className="col-2 col-md-2">
              <img
              onClick={() => setShow(!show)}
              id='backXHomepage'
                           
              src={close_logo} alt="info" />
            </div>
          </div>
          <div className='row'>
            <div className='col-12'
              style={{
                marginLeft: '2.5%',
                marginTop: '8%',
                color: 'white',
                fontSize: '190%'
              }}
            >
              <p id='textAboutHomepage'>
              I see people you see rocks is a research project investigating how algorithmic processes on an iOS device* can silently affect my memories by hierarchizing and curating pictures. Exploring both possibilities and limits of an algorithmic mediation through various qualitative observations, the project aims to open questions and create a space for further discussion. Four different approaches expose unexpected roles of algorithms in silently shaping users' memories. </p>
            </div>
          </div>
        </div>   
      </div>
    </div>
   </Fragment>
)}

export default Homepage
