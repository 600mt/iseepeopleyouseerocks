import useMouse from '@react-hook/mouse-position'
import React, { Fragment, useEffect, useState, useMemo } from 'react'
import useDimensions from 'react-cool-dimensions'
import ImageJinx from './components/ImageJinx'
import Sfondo from './resources/img/edifice.jpg'
import e1 from './resources/img/edifice/e1.jpeg'
import e10 from './resources/img/edifice/e10.jpeg'
import e11 from './resources/img/edifice/e11.jpeg'
import e12 from './resources/img/edifice/e12.jpeg'
import e2 from './resources/img/edifice/e2.jpeg'
import e3 from './resources/img/edifice/e3.jpeg'
import e4 from './resources/img/edifice/e4.jpeg'
import e5 from './resources/img/edifice/e5.jpeg'
import e6 from './resources/img/edifice/e6.jpeg'
import e7 from './resources/img/edifice/e7.jpeg'
import e8 from './resources/img/edifice/e8.jpeg'
import e9 from './resources/img/edifice/e9.jpeg'
import b1 from './resources/img/sky/b1.png'
import b10 from './resources/img/sky/b10.png'
import b11 from './resources/img/sky/b11.png'
import b12 from './resources/img/sky/b12.png'
import b2 from './resources/img/sky/b2.png'
import b3 from './resources/img/sky/b3.png'
import b4 from './resources/img/sky/b4.png'
import b5 from './resources/img/sky/b5.png'
import b6 from './resources/img/sky/b6.png'
import b7 from './resources/img/sky/b7.png'
import b8 from './resources/img/sky/b8.png'
import b9 from './resources/img/sky/b9.png'
import './resources/style.css'
import { useMediaQuery } from './utils'












export const JinxStart = ({setNewImageCallback, activeImage, setActiveCallBack}) => {
  const [widthScreen, heightScreen] = useMediaQuery()

  const { observe, width, height } = useDimensions({
    onResize: ({ observe, unobserve }) => {
      // Triggered whenever the size of the target is changed...

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });


  const [widthSquareOne, setWidthSquareOne] = useState('')
  const [heightSquareOne, setHeightSquareOne] = useState('')

  const [leftSquareOne, setLeftSquareOne] = useState('')
  const [topSquareOne, setTopSquareOne] = useState('')

  const [widthSquareTwo, setWidthSquareTwo] = useState('')
  const [heightSquareTwo, setHeightSquareTwo] = useState('')

  const [leftSquareTwo, setLeftSquareTwo] = useState('')
  const [topSquareTwo, setTopSquareTwo] = useState('')


  useEffect(() => {
    if((widthScreen/heightScreen) !== (4/3)) {
      if(!isNaN(width) && !isNaN(height)) {
        setWidthSquareOne(width*0.87)
        setHeightSquareOne(height*0.25)
  
        setWidthSquareTwo(width*0.5)
        setHeightSquareTwo(height*0.51)
      }
  
      setLeftSquareOne(width *0.1)
      setTopSquareOne(width *0.02)
  
      setLeftSquareTwo(width *0.26)
      setTopSquareTwo(width *0.10)
    } else {
      if(!isNaN(width) && !isNaN(height)) {
        setWidthSquareOne(width*0.98)
        setHeightSquareOne(height*0.25)
  
        setWidthSquareTwo(width*0.6)
        setHeightSquareTwo(height*0.33)
      }
  
      setLeftSquareOne(width *0.01)
      setTopSquareOne(width *0.01)
  
      setLeftSquareTwo(width *0.22)
      setTopSquareTwo(width *0.30)
    }
    
  }, [width, height, heightScreen, widthScreen])



  const [indexAreaVerde, setIndexAreaVerde] = useState(0)
  const [indexAreaRossa, setIndexAreaRossa] = useState(0)
  //Area Cielo
  // const imagesAreaRossa = [Image_1, Image_2, Image_3, Image_4, Image_5, Image_6, Image_7, Image_8, Image_9, Image_10, Image_11, Image_12, Image_13]
  
 const imagesAreaRossa = [
  b1,
  b2,
  b3,
  b4,
  b5,
  b6,
  b7,
  b8,
  b9,
  b10,
  b11,
  b12
] 


  //Area Cappello
  // const imagesAreaVerde = [Image_14, Image_15, Image_16, Image_17, Image_18, Image_19, Image_20, Image_21, Image_22, Image_23, Image_24, Image_25]
  const imagesAreaVerde = [
    e1,
    e2,
    e3,
    e4,
    e5,
    e6,
    e7,
    e8,
    e9,
    e10,
    e11,
    e12
  ]

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
    setActiveCallBack('start')
    setNewImageCallback('start', 'edifice')
  }

  function peopleClick(e) {
    e.preventDefault();
    setImageShowedAreaRossa([])
    setImageShowedAreaVerde([])
    setActiveCallBack('sky')
    setNewImageCallback('sky', 'edifice')
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
      <img ref={observe}  src={Sfondo} className='backgroundJinxSky'  alt=''/>
      {/* <div id="areaCielo" ref={refAreaRossa} > */}


      {
          (activeImage === 'edifice') ? <Fragment>
 <div ref={refAreaRossa}  onClick={skyClick}
      style={{borderRadius: '15px', width: (widthSquareOne !== '' ? widthSquareOne : 0), height: (heightSquareOne !== '' ? heightSquareOne : 0), border: '2px solid white', position:'absolute', left: ((leftSquareOne !=='' && !isNaN(leftSquareOne) ) ? leftSquareOne : 0), top: ((topSquareOne !== ''  && !isNaN(topSquareOne) )? topSquareOne : 0)}}
      // style={{border: '2px solid white', width: '10vw', height: '10vh', position:'absolute', top: '10vh'}}
      >
      
      
      
        {imageShowedAreaRossa.map((image, index) => (
              <ImageJinx width={'20%'} key={index} src={image.src} inputZIndex={image.inputZIndex} positionImage={image.positionImage} />
            ))}
      </div>
      <div id="areaCappello" ref={refAreaVerde} onClick={peopleClick}
      style={{borderRadius: '15px', width: (widthSquareTwo !== '' ? widthSquareTwo : 0), height: (heightSquareTwo !== '' ? heightSquareTwo : 0), border: '2px solid white', position:'absolute', left: (leftSquareTwo !=='' ? leftSquareTwo : 0), top: (topSquareTwo !== '' ? topSquareTwo : 0)}}
      >
        {
          imageShowedAreaVerde.map((image, index) => (
            <ImageJinx width={'20%'} key={index} src={image.src} inputZIndex={image.inputZIndex} positionImage={image.positionImage} />
          ))
        }
      </div>
            
          </Fragment>:<Fragment>
          <div ref={refAreaRossa}   onClick={skyClick} >
          </div>
          <div ref={refAreaVerde} onClick={peopleClick} >
          </div>
        </Fragment>
                        
            }

     
  </div>
  )
}

export default JinxStart
