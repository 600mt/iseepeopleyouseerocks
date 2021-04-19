import React, { Fragment, useState } from 'react'
import {Link} from 'react-router-dom'

import info_logo from '../resources/img/navbarInfo.svg'
import back_logo from '../resources/img/navbarBack.svg'
import image_1 from './img/1.jpg'
import close_logo from '../resources/img/close.svg'
import back_logo_blu from '../resources/img/navbarBackBlu.svg'

export const Protocol_3 = () => {
  const [show, setShow] = useState(false)
  return (
    <Fragment 
      style={{
        position: 'relative',
        backgroundColor: 'white'
      }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          zIndex: 0
      }}>
        <div 
          className='container-fluid' 
          style={{
            backgroundColor: 'white',
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
                <img 
                  style={{
                    cursor: 'pointer',
                    width:'1.5vh',
                    marginTop: '3.6%',
                    marginLeft: '6%'
                  }} 
                  src={back_logo} alt="info" />
              </Link>
            </div>
            <div className="col-8 col-md-6 text-center">
                <h2 className='fontTitoli' style={{paddingLeft: '3%',  marginTop: '1.2%'}}>Algorithms are curators</h2>
            </div>
            <div className="col-2 col-md-3">
                <img onClick={() => setShow(!show)} style={{cursor: 'pointer', width: '3.5vh', marginTop: '2.6%', marginLeft: '86.5%'}} src={info_logo} alt="info" />
            </div>
           </div>
        </div>
        <div
          className='container-fluid'
          style={{
            backgroundColor: 'white',
            height: '92vh', 
            width: '100vw',
          }}
        >
            <div className='row'>
                {/* <img src={image_1}>
                </img> */}
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
                <h2 className='fontTitoli' style={{paddingLeft: '3%',  marginTop: '1.2%', color: '#0a84ff'}}>Algorithms are curators</h2>
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
              {/* <img 
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
              /> */}
            </div>
          </div>
        </div>   
      </div>
    </div>
    </Fragment>
  )
}

export default Protocol_3
