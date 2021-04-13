import React, { useState } from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

import './resources/style.css'
import './resources/style.scss'
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
import JinxStart from './imagesJinx/JinxTest/JinxStart'
import JinxPeople from './imagesJinx/JinxTest/JinxPeople'
import JinxSky from './imagesJinx/JinxTest/JinxSky'
import JinxEdifice from './imagesJinx/JinxTest/JinxEdifice'
import JinxGrass from './imagesJinx/JinxTest/JinxGrass'
import JinxRocks from './imagesJinx/JinxTest/JinxRocks'
import JinxExample from './imagesJinx/JinxTest/JinxExample'
import { Fragment } from 'react'
import info_logo from '../resources/img/navbarInfo.svg'
import back_logo from '../resources/img/navbarBack.svg'

const translateXAxis = 111
const translateYAcis = 2
const scale = 0.9

export const FrameTwoPages = () => {

  const [activeImage, setActiveImage] = useState('start')

  const [prevBtn, setPrevBtn] = useState(0)
  const [indexImg, setIndexImg] = useState(2)
  const [scaleImg, setScaleImg] = useState(1)
  const [yTranslate, setYTranslate] = useState(0)
  const [shownImage, setShownImage] = useState('start')
  const [originImage, setOriginImage] = useState('')
  const state = {
    items: [
      {id: 1, title: 'item #1'},
      {id: 2, title: 'item #2'},
      {id: 3, title: 'item #3'},
      {id: 4, title: 'item #4'},
      {id: 5, title: 'item #5'}
    ]
  }
  const datasetImages = [Image_1, Image_2, Image_3, Image_4, Image_5, Image_6, Image_7, Image_8, Image_9, Image_10, Image_11, Image_12, Image_13, Image_14, Image_15, Image_16, Image_17]
  
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

    <div className="container-fluid" style={{backgroundColor: 'white', height: '8vh'}}>
      <div className="row" id='titleHomepage'> 
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
      </div>
      <div id='framTwoPages'>
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
                        // (((shownImage === 'sky' && originImage !== 'sky') ? 2 : 0) || (originImage === 'sky' && shownImage != 'sky'? 3 : 0))
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

      </Fragment>
  )
}

export default FrameTwoPages


{/* <div id='framTwoPages'>
      <Navbar />
      <div id='firstTopImages' />
      <div id='imageAndMask'>
        <div id='imageBackground'>
          <div id='firstLeftBorderImage' />
          <div  id='secondMaskImageReal'
          >
                <ImageCarrousel
                  id='imgPostion' datasetImages={datasetImages} startingIndexImage={0} 
                />              
          </div>
          <div id='thirdCentralImage' />
          <div id='fourthMaskImageReal'
          > 
            <JinxTest />
          </div>
          <div id='fifthRightBorderImage' />
        </div>
      </div>
    </div> */}