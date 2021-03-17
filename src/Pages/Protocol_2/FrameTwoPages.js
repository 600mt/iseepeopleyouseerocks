import React from 'react'

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

export const FrameTwoPages = () => {
  const datasetImages = [Image_1, Image_2, Image_3, Image_4, Image_5, Image_6, Image_7, Image_8, Image_9, Image_10, Image_11, Image_12, Image_13, Image_14, Image_15, Image_16, Image_17]
  return (
    <div id='framTwoPages'>
        <Navbar />
        <div id='firstTopImages' />
        <div id='imageAndMask'>
          <div id='imageBackground'>
            <div id='firstLeftBorderImage' />
            <div id='secondMaskImageReal'>
              <ImageCarrousel id='imgPostion' datasetImages={datasetImages} startingIndexImage={0} />
            </div>
            <div id='thirdCentralImage' />
            <div id='fourthMaskImageReal'> 
              <ImageCarrousel datasetImages={datasetImages} startingIndexImage={9} />
            </div>
            <div id='fifthRightBorderImage' />
          </div>
          <div id='secondMask'>
            <div id='firstPartMask'>
              <div id='firstLeftBorder' />
              {/* <duv id='backgrounColor' */}
              <div id='secondMaskImage' />
              <div id='thirdCentral' />
              <div id='fourthMaskImage' />
              <div id='fifthRightBorder' />
            </div>
            <div id='secondPartMask'>
              {/* <div id='thirdBottomImages' /> */}
            </div>
          </div>
        </div>
      </div>
  )
}

export default FrameTwoPages
