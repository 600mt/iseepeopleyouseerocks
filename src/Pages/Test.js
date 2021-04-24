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

export const Test = () => {
    const [show, setShow] = useState(false)
    return (
        <Fragment>
            TEST
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
                className='fontTitoli'
                style={{
                  marginLeft: '2.7%',
                  marginTop: '1.4%',
                  color: '#0a84ff'
                }}
                  >About  </h2>
            </div>
            <div className="col-2 col-md-2">
              <img
              onClick={() => setShow(!show)}
              style={{
                cursor: 'pointer', 
                width: '3vh', 
                marginTop: '8%', 
                marginLeft: '73%'
              }} 
              
              src={close_logo} alt="info" />
            </div>
          </div>
          <div className='row'>
            <div className='col-10'
              style={{
                marginLeft: '2.5%',
                marginTop: '8%',
                color: 'white',
                fontSize: '190%'
              }}
            >
              <p>
              I see people you see rocks is a research project investigating how algorithmic processes on an iOS device* can silently affect my memories by hierarchizing and curating pictures. Exploring both possibilities and limits of an algorithmic mediation through various qualitative observations, the project aims to open questions and create a space for further discussion. Four different approaches expose unexpected roles of algorithms in silently shaping users' memories. </p>
            </div>
          </div>
        </div>   
      </div>
    </div>
   
        </Fragment>
    )
}

export default Test