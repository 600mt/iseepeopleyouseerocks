import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import './resources/style.css'
import Image_1 from './resources/img/1.png'
import Image_2 from './resources/img/2.png'
import Image_3 from './resources/img/3.png'
import Image_4 from './resources/img/4.png'
import Image_5 from './resources/img/5.png'
import Image_6 from './resources/img/6.png'
import Image_7 from './resources/img/7.png'
import Image_8 from './resources/img/8.png'
import Image_9 from './resources/img/9.png'
import Image_10 from './resources/img/10.png'
import Image_11 from './resources/img/11.png'
import Image_12 from './resources/img/12.png'
import Image_13 from './resources/img/13.png'
import Image_14 from './resources/img/14.png'
import Image_15 from './resources/img/15.png'
import Image_16 from './resources/img/16.png'
import Image_17 from './resources/img/17.png'
import Image_18 from './resources/img/18.png'
import Image_19 from './resources/img/19.png'
import Image_20 from './resources/img/20.png'
import Image_21 from './resources/img/21.png'
import Image_22 from './resources/img/22.png'
import Image_23 from './resources/img/23.png'
import Navbar from './components/Navbar/Navbar'
import ImageCarrousel from './components/ImageCarrousel/ImageCarrousel'
import { Fragment } from 'react'

import info_logo from '../resources/img/navbarInfo.svg'
import back_logo from '../resources/img/navbarBack.svg'
import close_logo from '../resources/img/close.svg'
import back_logo_blu from '../resources/img/navbarBackBlu.svg'

import NavbarAbout from './components/NavbarAbout/Navbar'

export const FrameTwoPages = () => {
  const datasetImages = [Image_1, Image_2, Image_3, Image_4, Image_5, Image_6, Image_7, Image_8, Image_9, Image_10, Image_11, 
    Image_12, Image_13, Image_14, Image_15, Image_16, Image_17,
  Image_18, Image_19, Image_20, Image_21, Image_22, Image_23]

  const [show, setShow] = useState(false)
  
  return (
  <Fragment style={{position: 'relative'}}>
    <div style={{position: 'absolute', zIndex: 0}}>
      <div className="container-fluid" style={{
        backgroundColor: 'white', 
        // position: 'relative',
        // top: '1%', 
        // paddingTop: '2%',
        // height: '99%', width: '99%'
          height: '7vh',
          marginTop:'1vh', 
          width: '98.5vw',
        }}
      >
        <div className="row"
          style={{
            position: 'relative',
            top: '1.5vh'
          }}
        > 
          <div className="col-2 col-md-3">
            <Link to='/'> 
              <img style={{cursor: 'pointer', width:'1.5vh', marginTop: '3.6%', marginLeft: '6%'}} src={back_logo} alt="info" />
            </Link>
          </div>
          <div className="col-8 col-md-6 text-center">
              <h2 className='fontTitoli' style={{paddingLeft: '3%',  marginTop: '1.2%'}}>Algorithms are explorers</h2>
          </div>
          <div className="col-2 col-md-3">
            <img onClick={() => setShow(!show)} style={{cursor: 'pointer', width: '3.5vh', marginTop: '2.6%', marginLeft: '86.5%'}} src={info_logo} alt="info" />
          </div>
        </div>
      </div>

      <div id='framTwoPages'  
        style={{
          width: '100vw',
          height: '89vh'
        }}
      >
        <div id='firstTopImages' />
        <div id='imageAndMaskProtocollo2'>
          <div id='imageBackground'>
            <div id='firstLeftBorderImage' />
            <div id='secondMaskImageRealProtocol2'>
              <ImageCarrousel id='imgPostion' datasetImages={datasetImages} startingIndexImage={3} />
            </div>
            <div id='thirdCentralImage' />
            <div id='fourthMaskImageRealProtocol2'> 
              <ImageCarrousel datasetImages={datasetImages} startingIndexImage={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id='aboutProtocollo1' style={{position: 'absolute', zIndex: 2, display: (show ? 'block' : 'none')}} >
      {/* backdrop-filter: blur(10px); */}
        {/* <div style={{position: 'absolute',  filter: 'blur(20px)', height: '300px', zIndex: 1, width: '300px', backgroundColor:  'white'}} /> */}
      <div style={{position: 'absolute', height: '100%', width: '100%'}}>
        <div className="container-fluid" 
          style={{
            position: 'relative',
            top: '1vh',
            backgroundColor: '#ececec', 
            height: '98vh', 
            width: '98.5vw', 
            // paddingTop: '2%',
            // marginTop: '2%',
            borderRadius: '20px'
          }}
        >
          <div 
            className="row"
            style={{
              position: 'relative',
              top: '1.5vh'
            }}
          > 
            <div className="col-2 col-md-3">
              <Link to='/'> 
                <img style={{cursor: 'pointer', width:'1.5vh', marginTop: '3.6%', marginLeft: '6%'}} src={back_logo_blu} alt="info" />
              </Link>
            </div>
            <div className="col-8 col-md-6 text-center">
                <h2 className='fontTitoli' style={{paddingLeft: '3%',  marginTop: '1.2%', color: '#0a84ff'}}>Algorithms are explorers</h2>
            </div>
            <div className="col-2 col-md-3">
              <img onClick={() => setShow(!show)} style={{cursor: 'pointer', width: '3vh', marginTop: '2.6%', marginLeft: '86.5%'}} src={close_logo} alt="info" />
            </div>
          </div>
          <div className='row'>
            <div
              className='col-6'
              style={{marginLeft: '1.4%'}}
            >
              <p style={{marginTop: '10%'}}>
                Object-recognition technologies, deployed via machine learning, analyse contents and label hundreds of pictures in a few moments every day on every iPhone. These technologies enable object-level categorisation and an easier image search by keyword. <br /><br />
                By comparing human vision with what is recognized by the on-device feature extraction, the artifact displays what was labelled correctly and leaves few clues of what it was not. The limits of interpretation by the machine in object recognition mimics and amplifies the very human feature of forgetting the past. What is recognized by the algorithm is going to be saved for future research, making it browsable again in my gallery. On the other hand, the non-recognized objects cannot be found and could cause the whole picture to get lost in the huge amount of images we produce. <br /><br />
                In this way multiple recognized fragments of past overlap and merge, becoming new pictures of what it has been. Losing details and contexts of single moments, they finally reach a new status: a continuous stream of partial memories.  
              </p>
            </div>
            <div
              className='col-4'
              style={{
                marginLeft: '1.4%'
              }}
            >
              <img 
                style={{marginTop: '15%'}}
                src={Image_23}
                width={'50%'}
                height={'80%'} 
              />
              <img 
                style= {{
                    marginTop: '15%',
                    paddingLeft: '4%'
                }}
                src={Image_23}
                width={'50%'}
                height={'80%'} 
              />
            </div>
          </div>
        </div>   
      </div>
    </div>
  </Fragment>
  )
}

export default FrameTwoPages
