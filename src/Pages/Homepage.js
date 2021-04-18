import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import './resources/style.css'
import Image_1 from './resources/img/1.png'
import Image_2 from './resources/img/2.png'
import Image_3 from './resources/img/3.png'
import Image_4 from './resources/img/4.png'
import info_logo from './resources/img/navbarInfo.svg'

import About  from './About'
import { Fragment } from 'react'

export const Homepage = () => {
  const [modalShow, setModalShow] = useState(false)
  const [show, setShow] = useState(false)
  return (
    <Fragment style={{position: 'relative'}}>
      <div style={{position: 'absolute', zIndex: 0}}>
        <div className="container-fluid" 
            style={{ 
              height: '8vh',
              marginTop:'2vh',
              width: '100vw'
            }}
        >
          <div className="row"> 
              <div className="col-10 col-md-9" >
                  <h2 className='fontTitoli'>I see people you see rocks </h2>
              </div>
              <div className="col-2 col-md-3">
                <h2 style={{cursor: 'pointer', fontSize: '3.5vh'}}
                  onClick={() => setShow(!show)}
                  > <img src={info_logo} alt="info"></img> About </h2>
              </div>
              {/* <div className="col-2 col-md-3 d-md-none d-block" id="r2-short">
                <img id="text-right" onClick={() => setModalShow(true)} src={info_logo} alt="info"></img>
              </div> */}
          </div>
        </div>
          <div className="container-fluid">
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


     

    <div id='aboutProtocollo1' style={{position: 'absolute', zIndex: 2, display: (show ? 'block' : 'none')}} >
      {/* backdrop-filter: blur(10px); */}
        {/* <div style={{position: 'absolute',  filter: 'blur(20px)', height: '300px', zIndex: 1, width: '300px', backgroundColor:  'white'}} /> */}
      <div style={{position: 'absolute', height: '100%', width: '100%'}}>
        <div className="container-fluid" 
          style={{
            position: 'relative',
            top: '1vh',
            backgroundColor: 'yellow', 
            height: '98vh', 
            width: '98vw', 
            // paddingTop: '2%',
            // marginTop: '2%',
            borderRadius: '20px'
          }}
        >
          <div className="row"> 
            <div className="col-2 col-md-3">
              {/* <Link to='/'> 
                <img style={{cursor: 'pointer', width:'1.5vh', marginTop: '3.6%', marginLeft: '6%'}} src={back_logo} alt="info" />
              </Link> */}
            </div>
            <div className="col-8 col-md-6 text-center">
                <h2 className='fontTitoli' style={{paddingLeft: '3%',  marginTop: '1.2%'}}>Algorithms are explorers</h2>
            </div>
            <div className="col-2 col-md-3">
              {/* <img onClick={() => setShow(!show)} style={{cursor: 'pointer', width: '3.5vh', marginTop: '2.6%', marginLeft: '86.5%'}} src={info_logo} alt="info" /> */}
            </div>
          </div>
          <div className='row'>
            <div className='col-10 offset-1'>
              <p>
                Object-recognition technologies, deployed via machine learning, analyse contents and label hundreds of pictures in a few moments every day on every iPhone. These technologies enable object-level categorisation and an easier image search by keyword. <br /><br />
                By comparing human vision with what is recognized by the on-device feature extraction, the artifact displays what was labelled correctly and leaves few clues of what it was not. The limits of interpretation by the machine in object recognition mimics and amplifies the very human feature of forgetting the past. What is recognized by the algorithm is going to be saved for future research, making it browsable again in my gallery. On the other hand, the non-recognized objects cannot be found and could cause the whole picture to get lost in the huge amount of images we produce. <br /><br />
                In this way multiple recognized fragments of past overlap and merge, becoming new pictures of what it has been. Losing details and contexts of single moments, they finally reach a new status: a continuous stream of partial memories.  
              </p>
            </div>
          </div>
        </div>   
      </div>
    </div>
   </Fragment>
)}

export default Homepage
