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
import Image_17 from './resources/img/20.png'
import Navbar from './components/Navbar/Navbar'
import ImageCarrousel from './components/ImageCarrousel/ImageCarrousel'
import { Fragment } from 'react'

import info_logo from '../resources/img/navbarInfo.svg'
import back_logo from '../resources/img/navbarBack.svg'
import NavbarAbout from './components/NavbarAbout/Navbar'

export const FrameTwoPages = () => {
  const datasetImages = [Image_1, Image_2, Image_3, Image_4, Image_5, Image_6, Image_7, Image_8, Image_9, Image_10, Image_11, Image_12, Image_13, Image_14, Image_15, Image_16, Image_17]
  const [show, setShow] = useState(false)
  
  return (
  <Fragment style={{position: 'relative'}}>
    
    <div className="container-fluid" style={{backgroundColor: '#ececec', height: '8vh'}}>
      <div className="row" id='titleHomepage'> 
          <div className="col-2 col-md-3" id="r3-long-back">
          <Link to='/'> <h2 id="text-right" style={{cursor: 'pointer'}}><img id='iconBack' style={{cursor: 'pointer'}} src={back_logo} alt="info"></img></h2></Link>
          </div>
          <div className="col-10 col-md-6 text-center" id="r1-protocol2">
              <h2 className='fontTitoli'>Algorithms are explorers</h2>
          </div>
          <div className="col-2 col-md-3" id="r3-long">
             <h2 id="text-right" style={{cursor: 'pointer'}}><img id='iconLeft' style={{cursor: 'pointer'}} src={info_logo} alt="info"></img></h2>
          </div>
        </div>
      </div>


    <div id='framTwoPages'  style={{width: '100vw', position: 'absolute', zIndex: 0}}>
        {/* <Navbar setShow={setShow} show={show} /> */}
        <div id='firstTopImages' />
        <div id='imageAndMaskProtocollo2'>
          <div id='imageBackground'>
            <div id='firstLeftBorderImage' />
            <div id='secondMaskImageRealProtocol2'>
              <ImageCarrousel id='imgPostion' datasetImages={datasetImages} startingIndexImage={0} />
            </div>
            <div id='thirdCentralImage' />
            <div id='fourthMaskImageRealProtocol2'> 
              <ImageCarrousel datasetImages={datasetImages} startingIndexImage={9} />
            </div>
          </div>
        </div>
      </div>

      <div id='aboutProtocollo1' style={{position: 'absolute', zIndex: 2, display: (show ? 'block' : 'none')}} >
      {/* backdrop-filter: blur(10px); */}
      <div style={{position: 'relative'}}>
      <div style={{position: 'absolute',  filter: 'blur(20px)', height: '100vh', width: '100vw', backgroundColor:  'rgba(255, 255, 255, 0.95)'}}>
        

        </div>
        <div style={{position: 'absolute', height: '100vh', width: '100vw'}}>
        <p>
        Object-recognition technologies, deployed via machine learning, analyse contents and label hundreds of pictures in a few moments every day on every iPhone. These technologies enable object-level categorisation and an easier image search by keyword. <br /><br />
                By comparing human vision with what is recognized by the on-device feature extraction, the artifact displays what was labelled correctly and leaves few clues of what it was not. The limits of interpretation by the machine in object recognition mimics and amplifies the very human feature of forgetting the past. What is recognized by the algorithm is going to be saved for future research, making it browsable again in my gallery. On the other hand, the non-recognized objects cannot be found and could cause the whole picture to get lost in the huge amount of images we produce. <br /><br />
                In this way multiple recognized fragments of past overlap and merge, becoming new pictures of what it has been. Losing details and contexts of single moments, they finally reach a new status: a continuous stream of partial memories.
              
        </p>

      </div>

      </div>
        
        {/* <div id='framTwoPagesAbout'>
            <NavbarAbout setShow={setShow} show={show} />
            <div id='firstTopImages' />
            <div id='imageAndMask'>
            <div id='imageBackground'>
                <div id='firstLeftBorderImage' />
                <div id='secondMaskImageRealAbout' style={{fontSize: '110%'}}>
                Object-recognition technologies, deployed via machine learning, analyse contents and label hundreds of pictures in a few moments every day on every iPhone. These technologies enable object-level categorisation and an easier image search by keyword. <br /><br />
                By comparing human vision with what is recognized by the on-device feature extraction, the artifact displays what was labelled correctly and leaves few clues of what it was not. The limits of interpretation by the machine in object recognition mimics and amplifies the very human feature of forgetting the past. What is recognized by the algorithm is going to be saved for future research, making it browsable again in my gallery. On the other hand, the non-recognized objects cannot be found and could cause the whole picture to get lost in the huge amount of images we produce. <br /><br />
                In this way multiple recognized fragments of past overlap and merge, becoming new pictures of what it has been. Losing details and contexts of single moments, they finally reach a new status: a continuous stream of partial memories.
                </div>
                <div id='thirdCentralImage' />
                <div id='fourthMaskImageRealAbout'>
                </div>
                <div id='fifthRightBorderImage' />
            </div>
            <div id='secondMask'>
                <div id='firstPartMask'>
                <div id='firstLeftBorderAbout' />
                <div id='secondMaskImage' />
                <div id='thirdCentralAbout' />
                <div id='fourthMaskImage' />
                <div id='fifthRightBorderAbout' />
                </div>
                <div id='secondPartMaskAbout'>
                </div>
            </div>
            </div>
        </div> */}
      </div>
  </Fragment>
  )
}

export default FrameTwoPages
