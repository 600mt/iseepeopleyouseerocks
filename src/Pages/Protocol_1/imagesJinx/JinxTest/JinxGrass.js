import useMouse from '@react-hook/mouse-position'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import useDimensions from 'react-cool-dimensions'
import ImageJinx from './components/ImageJinx'
import p1 from './resources/img/people/p1.jpeg'
import p10 from './resources/img/people/p10.jpeg'
import p11 from './resources/img/people/p11.jpeg'
import p12 from './resources/img/people/p12.jpeg'
import p2 from './resources/img/people/p2.jpeg'
import p3 from './resources/img/people/p3.jpeg'
import p4 from './resources/img/people/p4.jpeg'
import p5 from './resources/img/people/p5.jpeg'
import p6 from './resources/img/people/p6.jpeg'
import p7 from './resources/img/people/p7.jpeg'
import p8 from './resources/img/people/p8.jpeg'
import p9 from './resources/img/people/p9.jpeg'
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
import Sfondo from './resources/img/grass.jpeg'
import './resources/style.css'
import { useMediaQuery } from './utils'
import g1 from './resources/img/grass/g1.jpeg'
import g10 from './resources/img/grass/g10.jpeg'
import g11 from './resources/img/grass/g11.jpeg'
import g12 from './resources/img/grass/g12.jpeg'
import g2 from './resources/img/grass/g2.jpeg'
import g3 from './resources/img/grass/g3.jpeg'
import g4 from './resources/img/grass/g4.jpeg'
import g5 from './resources/img/grass/g5.jpeg'
import g6 from './resources/img/grass/g6.jpeg'
import g7 from './resources/img/grass/g7.jpeg'
import g8 from './resources/img/grass/g8.jpeg'
import g9 from './resources/img/grass/g9.jpeg'







export const JinxGrass = ({setNewImageCallback, activeImage, setActiveCallBack}) => {
  const [widthScreen, heightScreen] = useMediaQuery()

  const { observe, width, height } = useDimensions({
    onResize: ({ observe, unobserve}) => {
      // Triggered whenever the size of the target is changed...

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });


  const refImage1 =  useRef()

  const [widthSquareOne, setWidthSquareOne] = useState('')
  const [heightSquareOne, setHeightSquareOne] = useState('')

  const [leftSquareOne, setLeftSquareOne] = useState('')
  const [topSquareOne, setTopSquareOne] = useState('')

  const [widthSquareTwo, setWidthSquareTwo] = useState('')
  const [heightSquareTwo, setHeightSquareTwo] = useState('')

  const [leftSquareTwo, setLeftSquareTwo] = useState('')
  const [topSquareTwo, setTopSquareTwo] = useState('')

  const [widthSquareThree, setWidthSquareThree] = useState('')
  const [heightSquareThree, setHeightSquareThree] = useState('')

  const [leftSquareThree, setLeftSquareThree] = useState('')
  const [topSquareThree, setTopSquareThree] = useState('')


  useEffect(() => {
    if((widthScreen/heightScreen) !== (4/3)) { 
      if(widthScreen < 800) {
       if(!isNaN(width) && !isNaN(height)) {
        setWidthSquareOne(width*0.98)
        setHeightSquareOne(height*0.33)
  
        setWidthSquareTwo(width*0.2)
        setHeightSquareTwo(height*0.2)
  
        setWidthSquareThree(width * 0.97)
        setHeightSquareThree(height*0.37)
      }
  
      setLeftSquareOne(width *0.01)
      setTopSquareOne(width *0.02)
  
      setLeftSquareTwo(width *0.35)
      setTopSquareTwo(width *0.71)
  
      setLeftSquareThree(width *0.01)
      setTopSquareThree(width *1.22)

      }else{
        if(!isNaN(width) && !isNaN(height)) {
          setWidthSquareOne(width*0.98)
          setHeightSquareOne(height*0.3)
    
          setWidthSquareTwo(width*0.2)
          setHeightSquareTwo(height*0.3)
    
          setWidthSquareThree(width * 0.97)
          setHeightSquareThree(height*0.25)
        }
    
        setLeftSquareOne(width *0.01)
        setTopSquareOne(width *0.02)
    
        setLeftSquareTwo(width *0.35)
        setTopSquareTwo(width *0.4)
    
        setLeftSquareThree(width *0.01)
        setTopSquareThree(width *0.7)
      }
    } else {
      if(!isNaN(width) && !isNaN(height)) {
        setWidthSquareOne(width*0.98)
        setHeightSquareOne(height*0.3)
  
        setWidthSquareTwo(width*0.2)
        setHeightSquareTwo(height*0.2)
  
        setWidthSquareThree(width * 0.98)
        setHeightSquareThree(height*0.36)
      }
  
      setLeftSquareOne(width *0.01)
      setTopSquareOne(width *0.01)
  
      setLeftSquareTwo(width *0.35)
      setTopSquareTwo(width *0.6)
  
      setLeftSquareThree(width *0.01)
      setTopSquareThree(width *0.9)
    }
    
  }, [width, height, heightScreen, widthScreen])

  const [indexAreaVerde, setIndexAreaVerde] = useState(0)
  const [indexAreaRossa, setIndexAreaRossa] = useState(0)
  const [indexAreaThree, setIndexAreaThree] = useState(0)

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

  const imagesAreaVerde = [
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12
  ]

  const imagesAreaThree = [
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    g9,
    g10,
    g11,
    g12
  ]

  const [imageShowedAreaRossa, setImageShowedAreaRossa] = useState([])
  const [imageShowedAreaVerde, setImageShowedAreaVerde] = useState([])
  const [imageShowedAreaThree, setImageShowedAreaThree] = useState([])

  const [pastPositionAreaVerde, setPastPositionAreaVerde] = useState({
    x: 0,
    y: 0
  })

  const [pastPositionAreaRossa, setPastPositionAreaRossa] = useState({
    x: 0,
    y: 0
  })

  const [pastPositionAreaThree, setPastPositionAreaThree] = useState({
    x: 0,
    y: 0
  })


  const refAreaRossa = React.useRef(null)
  const refAreaVerde = React.useRef(null)

  const refAreaThree = React.useRef(null)

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

  const mouseAreaThree = useMouse(refAreaThree, {
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


        console.log('area verde')
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
  }, [imageShowedAreaVerde, mouseAreaVerde, indexAreaVerde, pastPositionAreaVerde, imagesAreaVerde])

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
        console.log('area rossa')
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
  }, [imageShowedAreaRossa, mouseAreaRossa, indexAreaRossa, pastPositionAreaRossa, imagesAreaRossa])


  useEffect(() => {
    
    if(
        (
          mouseAreaThree.x < refAreaThree.current.clientWidth && 
          mouseAreaThree.x > -1 &&
          mouseAreaThree.y < refAreaThree.current.clientHeight &&
          mouseAreaThree.y > -1
        ) 
        &&
        (
          Math.abs(mouseAreaThree.x - pastPositionAreaThree.x) > 10 ||
          Math.abs(mouseAreaThree.y - pastPositionAreaThree.y) > 10
        ) 
      ) {
        console.log('area third')
        const newImage = {
          src: imagesAreaThree[indexAreaThree],
          inputZIndex: 10,
          positionImage: mouseAreaThree
        }

        setIndexAreaThree(indexAreaThree + 1)

        if(indexAreaThree === 14) {
          setIndexAreaThree(0)
        }

        const temp = [...imageShowedAreaThree]
        temp.push(newImage)
        setImageShowedAreaThree(temp)

        if(imageShowedAreaThree.length > 13) {
          const tempArrayTwo = [...imageShowedAreaThree]
          tempArrayTwo.shift()
          setImageShowedAreaThree(tempArrayTwo)
        }
        setPastPositionAreaThree({
          x: mouseAreaThree.x,
          y: mouseAreaThree.y
        })
      }
  }, [imageShowedAreaThree, mouseAreaThree, indexAreaThree, pastPositionAreaThree, imagesAreaThree])

  function skyClick(e) {
    e.preventDefault();
    setImageShowedAreaRossa([])
    setImageShowedAreaVerde([])
    setImageShowedAreaThree([])
    setActiveCallBack('start')
    setNewImageCallback('start', 'grass')
  }

  function peopleClick(e) {
    e.preventDefault();
    setImageShowedAreaRossa([])
    setImageShowedAreaVerde([])
    setImageShowedAreaThree([])
    setActiveCallBack('people')
    setNewImageCallback('people', 'grass')
  }


  function grassClick(e) {
    e.preventDefault();
    setImageShowedAreaRossa([])
    setImageShowedAreaVerde([])
    setImageShowedAreaThree([])
    setActiveCallBack('sky')
    setNewImageCallback('sky', 'grass')
  }

  // ref = (element) => {
    if (refImage1.current) {
      // this.props.getSize(element.getBoundingClientRect())
    }
  // }

  return (
    <div>
      
      <div ref={refImage1}>
        <img ref={observe} src={Sfondo} className='backgroundJinxSky' alt='' />
      </div>

      {
        (activeImage === 'grass') ? <Fragment><div ref={refAreaRossa}  onClick={skyClick}
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
            
            <div id="areaThree" ref={refAreaThree} onClick={grassClick}
      style={{borderRadius: '15px', width: (widthSquareThree !== '' ? widthSquareThree : 0), height: (heightSquareThree !== '' ? heightSquareThree : 0), border: '2px solid white', position:'absolute', left: (leftSquareThree !=='' ? leftSquareThree : 0), top: (topSquareThree !== '' ? topSquareThree : 0)}}
      >
        {
          imageShowedAreaThree.map((image, index) => (
            <ImageJinx width={'20%'} key={index} src={image.src} inputZIndex={image.inputZIndex} positionImage={image.positionImage} />
          ))
        }
      </div>
            </Fragment>
        : <Fragment>
          <div ref={refAreaRossa}  onClick={skyClick}>
        </div>
        <div ref={refAreaVerde} onClick={peopleClick} >
        </div>
        <div  ref={refAreaThree} onClick={grassClick}>

          </div>
        
        </Fragment>
      }
      
  </div>
  )
}

export default JinxGrass
