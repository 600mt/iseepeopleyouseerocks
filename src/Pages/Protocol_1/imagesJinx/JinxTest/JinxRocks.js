import React, { useEffect, useState } from 'react'
import useMouse from '@react-hook/mouse-position'

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
import Image_10 from './resources/img/10.jpeg'
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
import Image_24 from './resources/img/24.png'
import Image_25 from './resources/img/25.png'

import Sfondo from   './resources/img/rocks.jpeg'
import ImageJinx from './components/ImageJinx'
import useDimensions from 'react-use-dimensions'

export const JinxStart = ({setNewImageCallback}) => {


  const [ref, {width, height }] = useDimensions()


  const [widthSquareOne, setWidthSquareOne] = useState('')
  const [heightSquareOne, setHeightSquareOne] = useState('')

  const [leftSquareOne, setLeftSquareOne] = useState('')
  const [topSquareOne, setTopSquareOne] = useState('')

  const [widthSquareTwo, setWidthSquareTwo] = useState('')
  const [heightSquareTwo, setHeightSquareTwo] = useState('')

  const [leftSquareTwo, setLeftSquareTwo] = useState('')
  const [topSquareTwo, setTopSquareTwo] = useState('')


  useEffect(() => {
    console.log('height', height, 'squareone', heightSquareOne)
    if (widthSquareOne === '' && !isNaN(width) && heightSquareOne === '' && !isNaN(height)) {      
      setWidthSquareOne(width*1)
      setHeightSquareOne(height*0.25)

      setWidthSquareTwo(width*0.5)
      setHeightSquareTwo(height*0.31)
    } 
    if(widthSquareOne !== '' && heightSquareOne !== '') {
      setWidthSquareOne(width*1)
      setHeightSquareOne(height*0.45)

      setWidthSquareTwo(width*1)
      setHeightSquareTwo(height*0.41)
    }

    setLeftSquareOne(width *0.06)
    setTopSquareOne(width *0.02)

    setLeftSquareTwo(width *0.06)
    setTopSquareTwo(width *0.64)
  }, [width])



  const [indexAreaVerde, setIndexAreaVerde] = useState(0)
  const [indexAreaRossa, setIndexAreaRossa] = useState(0)
  //Area Cielo
  const imagesAreaRossa = [Image_1, Image_2, Image_3, Image_4, Image_5, Image_6, Image_7, Image_8, Image_9, Image_10, Image_11, Image_12, Image_13]
  
  //Area Cappello
  const imagesAreaVerde = [Image_14, Image_15, Image_16, Image_17, Image_18, Image_19, Image_20, Image_21, Image_22, Image_23, Image_24, Image_25]

  const [imageShowedAreaRossa, setImageShowedAreaRossa] = useState([])
  const [imageShowedAreaVerde, setImageShowedAreaVerde] = useState([])

  const [pastPositionAreaVerde, setPastPositionAreaVerde] = useState({
    x: 0,
    y: 0
  })

  const [pastPositionAreaRossa, setPastPositionAreaRossa] = useState({
    x: 0,
    y: 0
  })

  const refAreaRossa = React.useRef(null)
  const refAreaVerde = React.useRef(null)
  const mouseAreaRossa = useMouse(refAreaRossa, {
    fps: 60,
    enterDelay: 100,
    leaveDelay: 100,
  })

  const mouseAreaVerde = useMouse(refAreaVerde, {
    fps: 60,
    enterDelay: 100,
    leaveDelay: 100
  })
 
  //Area Verde
  useEffect(() => {
    if(
        (
          mouseAreaVerde.x < refAreaVerde.current.clientWidth && 
          mouseAreaVerde.x > -1 &&
          mouseAreaVerde.y < refAreaVerde.current.clientHeight &&
          mouseAreaVerde.y > -1
        ) 
        &&
        (
          Math.abs(mouseAreaVerde.x - pastPositionAreaVerde.x) > 10 ||
          Math.abs(mouseAreaVerde.y - pastPositionAreaVerde.y) > 10
        ) 
      ) {
        const newImage = {
          src: imagesAreaVerde[indexAreaVerde],
          inputZIndex: 5,
          positionImage: mouseAreaVerde
        }

        setIndexAreaVerde(indexAreaVerde + 1)

        if(indexAreaVerde === 14) {
          setIndexAreaVerde(0)
        }

        const tempArray = [...imageShowedAreaVerde]
        tempArray.push(newImage)
        setImageShowedAreaVerde(tempArray)

        if(imageShowedAreaVerde.length > 13) {
          const tempArrayTwo = [...imageShowedAreaVerde]
          tempArrayTwo.shift()
          setImageShowedAreaVerde(tempArrayTwo)
        }

        setPastPositionAreaVerde({
          x: mouseAreaVerde.x,
          y: mouseAreaVerde.y
        })
      }
  }, [imageShowedAreaVerde, mouseAreaVerde, indexAreaVerde, pastPositionAreaVerde])

  //Area Rossa
  useEffect(() => {
    if(
        (
          mouseAreaRossa.x < refAreaRossa.current.clientWidth && 
          mouseAreaRossa.x > -1 &&
          mouseAreaRossa.y < refAreaRossa.current.clientHeight &&
          mouseAreaRossa.y > -1
        ) 
        &&
        (
          Math.abs(mouseAreaRossa.x - pastPositionAreaRossa.x) > 10 ||
          Math.abs(mouseAreaRossa.y - pastPositionAreaRossa.y) > 10
        ) 
      ) {
        const newImage = {
          src: imagesAreaRossa[indexAreaRossa],
          inputZIndex: 10,
          positionImage: mouseAreaRossa
        }

        setIndexAreaRossa(indexAreaRossa + 1)

        if(indexAreaRossa === 14) {
          setIndexAreaRossa(0)
        }

        const temp = [...imageShowedAreaRossa]
        temp.push(newImage)
        setImageShowedAreaRossa(temp)

        if(imageShowedAreaRossa.length > 13) {
          const tempArrayTwo = [...imageShowedAreaRossa]
          tempArrayTwo.shift()
          setImageShowedAreaRossa(tempArrayTwo)
        }
        setPastPositionAreaRossa({
          x: mouseAreaRossa.x,
          y: mouseAreaRossa.y
        })
      }
  }, [imageShowedAreaRossa, mouseAreaRossa, indexAreaRossa, pastPositionAreaRossa])

  function skyClick(e) {
    e.preventDefault();
    setImageShowedAreaRossa([])
    setImageShowedAreaVerde([])
    setNewImageCallback('start', 'rocks')
  }

  function peopleClick(e) {
    e.preventDefault();
    setImageShowedAreaRossa([])
    setImageShowedAreaVerde([])
    setNewImageCallback('grass', 'rocks')
  }

  return (
    // <div  className='backgroundJinxStart' >
      
    //   <div id="areaCielo" ref={refAreaRossa} onClick={skyClick}>
    //      {imageShowedAreaRossa.map((image, index) => (
    //           <ImageJinx width={'20%'} key={index} src={image.src} inputZIndex={image.inputZIndex} positionImage={image.positionImage} />
    //         ))}
    //   </div>
    //   <div id="areaCappello" ref={refAreaVerde} onClick={peopleClick}>
    //     {
    //       imageShowedAreaVerde.map((image, index) => (
    //         <ImageJinx width={'20%'} key={index} src={image.src} inputZIndex={image.inputZIndex} positionImage={image.positionImage} />
    //       ))
    //     }
    //   </div>
    // </div>

    <div >
      <img ref={ref}  src={Sfondo} className='backgroundJinxSky' />
      {/* <div id="areaCielo" ref={refAreaRossa} > */}
      <div ref={refAreaRossa}  onClick={skyClick}
      style={{borderRadius: '15px', width: (widthSquareOne !== '' ? widthSquareOne : 0), height: (heightSquareOne !== '' ? heightSquareOne : 0), border: '2px solid white', position:'absolute', left: ((leftSquareOne != '' && !isNaN(leftSquareOne) ) ? leftSquareOne : 0), top: ((topSquareOne !== ''  && !isNaN(topSquareOne) )? topSquareOne : 0)}}
      // style={{border: '2px solid white', width: '10vw', height: '10vh', position:'absolute', top: '10vh'}}
      >
      
      
        {imageShowedAreaRossa.map((image, index) => (
              <ImageJinx width={'20%'} key={index} src={image.src} inputZIndex={image.inputZIndex} positionImage={image.positionImage} />
            ))}
      </div>
      <div id="areaCappello" ref={refAreaVerde} onClick={peopleClick}
      style={{borderRadius: '15px', width: (widthSquareTwo !== '' ? widthSquareTwo : 0), height: (heightSquareTwo !== '' ? heightSquareTwo : 0), border: '2px solid white', position:'absolute', left: (leftSquareTwo != '' ? leftSquareTwo : 0), top: (topSquareTwo !== '' ? topSquareTwo : 0)}}
      >
        {
          imageShowedAreaVerde.map((image, index) => (
            <ImageJinx width={'20%'} key={index} src={image.src} inputZIndex={image.inputZIndex} positionImage={image.positionImage} />
          ))
        }
      </div>
  </div>
  )
}

export default JinxStart
