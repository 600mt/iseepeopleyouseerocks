import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import close_logo from '../resources/img/close.svg'
import back_logo from '../resources/img/navbarBack.svg'
import back_logo_blu from '../resources/img/navbarBackBlu.svg'
import info_logo from '../resources/img/navbarInfo.svg'
import JinxEdifice from './imagesJinx/JinxTest/JinxEdifice'
import JinxExample from './imagesJinx/JinxTest/JinxExample'
import JinxGrass from './imagesJinx/JinxTest/JinxGrass'
import JinxPeople from './imagesJinx/JinxTest/JinxPeople'
import JinxRocks from './imagesJinx/JinxTest/JinxRocks'
import JinxSky from './imagesJinx/JinxTest/JinxSky'
import JinxStart from './imagesJinx/JinxTest/JinxStart'
import Gif from './resources/img/dx.gif'
import Video from './resources/img/sx.mp4'
import './resources/style.css'
import './resources/style.scss'


const translateXAxis = 111
const translateYAcis = 2
const scale = 0.9

export const FrameTwoPages = () => {

  const [show, setShow] = useState(false)
  const [activeImage, setActiveImage] = useState('start')

  const [shownImage, setShownImage] = useState('start')
  const [originImage, setOriginImage] = useState('')

  function setNewImageCallback(type, origin) {
    setOriginImage(origin)
    setShownImage(type)
    console.log('TYPE ', type)
    console.log('origin ', origin)
  }

  function setActiveCallBack(newActive) {
    setActiveImage(newActive)
  }

  return (
    <Fragment style={{position: 'relative'}} >

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
        height: '59vh'
      }}>
        <div id='firstTopImages' />
        <div id='imageAndMaskProtocollo1'>
          <div id='imageBackgroundProtocolloUno'>
            <div id='firstLeftBorderImage' />
            <div id='centerArea'>
              <div className={`cards-slider`}>
              {/* <div className={`cards-slider active-slide-${indexImg}`}> */}
                
                <div className='cards-slider-wrapper'>
 
                  <div id='card-1' style={{width: '50%', height: '100%', position:'relative'}}>
                    <div style={{ width: '100%', height: '100%', position: 'absolute'}}> <JinxExample  /></div>
                  </div>
                  <div id='card-2' style={{width: '50%', height: '100%'}} >
                    
                    <div className='cards-slider-wrapper' 
                        style={{ zIndex:(shownImage === 'start' ? 2 : (originImage === 'start' ? 3 : 0)), width: '100%', height: '100%', position: 'absolute', 
                        'transform': (originImage === 'start' ? `translateY(-${translateYAcis}%) translateX(-${translateXAxis}%) scale(${scale})`: null),
                        display:  (originImage === 'start' ? 'block': (
                          shownImage === 'start' ? 'block' : 'none'
                        )),
                        filter: (originImage === 'start' ? 'blur(11px)' : null)}} > 
                         <JinxStart  setNewImageCallback = {setNewImageCallback} activeImage={activeImage} setActiveCallBack={setActiveCallBack} />
                    </div>
                    
                    {/* <div className='cards-slider-wrapper'  
                      style={{ zIndex: (shownImage === 'people' ? 2 : 0), width: '100%', height: '100%', position: 'absolute', 
                      'transform': (originImage === 'people' ? `translateY(-${translateYAcis}%) translateX(-${translateXAxis}%) scale(${scale})`: null)}}> 
                         <JinxPeople setNewImageCallback = {setNewImageCallback} />
                    </div> */}
                   
                    <div  className='cards-slider-wrapper' 
                      style={{ 
                        zIndex: (shownImage === 'sky' ? 2 : (originImage === 'sky' ? 3 : 0))
                        // (((shownImage === 'sky' && originImage !== 'sky') ? 2 : 0) || (originImage === 'sky' && shownImage !=='sky'? 3 : 0))
                        , 
                        width: '100%', height: '100%', position: 'absolute', 
                      'transform': (originImage === 'sky' ? `translateY(-${translateYAcis}%) translateX(-${translateXAxis}%) scale(${scale})`: null),
                      display:  (originImage === 'sky' ? 'block': (
                        shownImage === 'sky' ? 'block' : 'none'
                      )),
                      filter: (originImage === 'sky' ? 'blur(5px)' : null)
                      }}> 
                         <JinxSky  setNewImageCallback = {setNewImageCallback} activeImage={activeImage} setActiveCallBack={setActiveCallBack}/>
                    </div>
                    
                    <div className='cards-slider-wrapper'  
                      style={{ 
                        zIndex:  (shownImage === 'edifice' ? 2 : (originImage === 'edifice' ? 3 : 0))
                        , width: '100%', height: '100%', position: 'absolute',
                      'transform': (originImage === 'edifice' ? `translateY(-${translateYAcis}%) translateX(-${translateXAxis}%) scale(${scale})`: null),
                      display:  (originImage === 'edifice' ? 'block': (
                        shownImage === 'edifice' ? 'block' : 'none'
                      )),
                      filter: (originImage === 'edifice' ? 'blur(5px)' : null)}}> 
                         <JinxEdifice  setNewImageCallback = {setNewImageCallback} activeImage={activeImage} setActiveCallBack={setActiveCallBack}/>
                    </div>

                    <div className='cards-slider-wrapper'  
                      style={{ 
                        zIndex: (shownImage === 'grass' ? 2 : (originImage === 'grass' ? 3 : 0))
                        , width: '100%', height: '100%', position: 'absolute',
                      'transform': (originImage === 'grass' ? `translateY(-${translateYAcis}%) translateX(-${translateXAxis}%) scale(${scale})`: null),
                      display:  (originImage === 'grass' ? 'block': (
                        shownImage === 'grass' ? 'block' : 'none'
                      )),
                      filter: (originImage === 'grass' ? 'blur(5px)' : null)}}> 
                         <JinxGrass  setNewImageCallback = {setNewImageCallback} activeImage={activeImage} setActiveCallBack={setActiveCallBack}/>
                    </div>

                    <div className='cards-slider-wrapper'  
                      style={{ 
                        zIndex: (shownImage === 'people' ? 2 : (originImage === 'people' ? 3 : 0))
                        , width: '100%', height: '100%', position: 'absolute',
                      'transform': (originImage === 'people' ? `translateY(-${translateYAcis}%) translateX(-${translateXAxis}%) scale(${scale})`: null),
                      display:  (originImage === 'people' ? 'block': (
                        shownImage === 'people' ? 'block' : 'none'
                      )),
                      filter: (originImage === 'people' ? 'blur(5px)' : null)}}> 
                         <JinxPeople  setNewImageCallback = {setNewImageCallback} activeImage={activeImage} setActiveCallBack={setActiveCallBack}/>
                    </div>

                    <div className='cards-slider-wrapper'  
                      style={{ zIndex: 
                        (shownImage === 'rocks' ? 2 : (originImage === 'rocks' ? 3 : 0))
                        , width: '100%', height: '100%', position: 'absolute',
                      'transform': 
                          (originImage === 'rocks' ? `translateY(-${translateYAcis}%) translateX(-${translateXAxis}%) scale(${scale})`: null),
                          display:  (originImage === 'rocks' ? 'block': (
                            shownImage === 'rocks' ? 'block' : 'none'
                          )),
                      filter: (originImage === 'rocks' ? 'blur(5px)' : null)}}>
                         <JinxRocks  setNewImageCallback = {setNewImageCallback} activeImage={activeImage} setActiveCallBack={setActiveCallBack}/>
                    </div>
                  </div>
                  </div>     
              </div>     
            </div>
              
            <div id='fifthRightBorderImage' />
          </div>
        </div>
      </div>

    </div>

    {/* <div className="container-fluid" style={{backgroundColor: 'white', height: '8vh'}}> */}
      {/* <div className="row" id='titleHomepage'> 
          <div className="col-2 col-md-3" id="r3-long-back">
          <Link to='/'> <h2 id="text-right" style={{cursor: 'pointer'}}><img id='iconBack' style={{cursor: 'pointer'}} src={back_logo} alt="info"></img></h2></Link>
          </div>
          <div className="col-8 col-md-6 text-center" id="r1-protocol2">
              <h2 className='fontTitoli'>Algorithms are explorers</h2>
          </div>
          <div className="col-2 col-md-3" id="r3-long">
             <h2 id="text-right" style={{cursor: 'pointer'}}><img id='iconLeft' style={{cursor: 'pointer'}} src={info_logo} alt="info"></img></h2>
          </div>
        </div>
      </div> */}
    
    

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
              marginLeft: '1.4%',
              display:'flex',
              
            }}
          >
            <video width="52%" height="auto" style={{
              position:'relative',
              marginTop: '17%',
              
            }} controls>
                    <source src={Video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
            <img 
              style={{
              marginLeft: '10px',
              position:'relative',
              marginTop: '17%'
            }}
              src={Gif}
              width={'80%'}
              height={'auto'} 
              alt=''
            />
            {/* <img 
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

export default FrameTwoPages
