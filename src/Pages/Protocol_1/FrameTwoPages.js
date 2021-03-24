import React, { useState } from 'react'
import {motion} from 'framer-motion'

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
import JinxTest from './imagesJinx/JinxTest/JinxTest'

export const FrameTwoPages = () => {
  const [prevBtn, setPrevBtn] = useState(0)
  const [indexImg, setIndexImg] = useState(2)
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
  return (
    <div>
    <div>
      <button
        onClick={() => {
          setPrevBtn(prevBtn + 20)
          setIndexImg(indexImg + 1)
        }}
      >
        prev
      </button>

      {/* <div className={`cards-slider active-slide-${indexImg}`}>
        <div className='cards-slider-wrapper' style= {{
          'transform': `translateX(-${prevBtn}%)`
        }}>
          <p className='card'>dd</p>
           <img id='card-1' className='card' src={Image_1} width='340px' height='340px' />
           <img id='card-2' className='card' src={Image_2} width='340px' height='340px' />
           <img id='card-3' className='card' src={Image_2} width='340px' height='340px' />
           <img id='card-4' className='card' src={Image_2} width='340px' height='340px' />
        </div>
      </div> */}
     
    </div>
    
    <div id='framTwoPages'>
        <Navbar />
        <div id='firstTopImages' />
        <div id='imageAndMask'>
          <div id='imageBackgroundProtocolloUno'>
            <div id='firstLeftBorderImage' />
            <div id='centerArea'>
              <div className={`cards-slider active-slide-${indexImg}`}>
                <div className='cards-slider-wrapper' style= {{
                  'transform': `translateX(-${prevBtn}%)`
                }}>
                  {/* <img id='card-1' className='card' src={Image_1} width='340px' height='340px' /> */}
           
                  <div  id='secondMaskImageRealProtocolloUno'><JinxTest idCard={'card-1'} /> </div>
                              
                  <div  id='secondMaskImageRealProtocolloUnoFocusImage'>
                    <div style={{position:'relative', width: '100%', height: '100%'}}>
                      <JinxTest idCard={'card-2'} />
                    </div>
                    <div style={{position:'relative'}}>
                      <JinxTest idCard={'card-3'} />
                    </div>
                  </div>             
                  {/* <JinxTest idCard={'card-3'} /> */}
                  </div>     
              </div>     
            </div>
              
            <div id='fifthRightBorderImage' />
          </div>
        </div>
      </div>

      </div>
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