import React, { Fragment, useEffect, useState } from 'react'
import useDimensions from 'react-cool-dimensions'
import { Link } from 'react-router-dom'
import close_logo from '../resources/img/close.svg'
import back_logo from '../resources/img/navbarBack.svg'
import back_logo_blu from '../resources/img/navbarBackBlu.svg'
import info_logo from '../resources/img/navbarInfo.svg'
import Image_0 from './img/1.jpg'
import Image_9 from './img/10.jpg'
import Image_1 from './img/2.jpg'
import Image_2 from './img/3.jpg'
import Image_3 from './img/4.jpg'
import Image_4 from './img/5.jpg'
import Image_5 from './img/6.jpg'
import Image_6 from './img/7.jpg'
import Image_7 from './img/8.jpg'
import Image_8 from './img/9.jpg'
import Gif from './img/dx.gif'
import Video from './img/sx.gif'


export const Protocol_3 = () => {
  const [show, setShow] = useState(false)
  const { observe, width, height } = useDimensions({
    onResize: ({ observe, unobserve}) => {
      // Triggered whenever the size of the target is changed...

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });

  const [index, setIndex] = useState(0)
  const images = [
    Image_0,
    Image_1,
    Image_2,
    Image_3,
    Image_4,
    Image_5,
    Image_6,
    Image_7,
    Image_8,
    Image_9
  ]

  const [widthSquareOne, setWidthSquareOne] = useState('')
  const [heightSquareOne, setHeightSquareOne] = useState('')

  const [leftSquareOne, setLeftSquareOne] = useState('')
  const [topSquareOne, setTopSquareOne] = useState('')

  const [widthSquareTwo, setWidthSquareTwo] = useState('')
  const [heightSquareTwo, setHeightSquareTwo] = useState('')

  const [leftSquareTwo, setLeftSquareTwo] = useState('')
  const [topSquareTwo, setTopSquareTwo] = useState('')

  const refAreaRossa = React.useRef(null)
  const refAreaVerde = React.useRef(null)

  useEffect(() => {
    
      if(!isNaN(width) && !isNaN(height)) {
        setWidthSquareOne(width*0.5)
        setHeightSquareOne(height*1)
  
        setWidthSquareTwo(width*0.5)
        setHeightSquareTwo(height*1)
      }
  
      setLeftSquareOne(width *0.95)
      setTopSquareOne(width *0)
  
      setLeftSquareTwo(width *0.556)
      setTopSquareTwo(width *0)
    
  }, [width, height])

 function nextImage () {
    if (index === 9) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }

  }

  function prevImage () {
    if (index === 0) {
      setIndex(9)
    } else {
      setIndex(index - 1)
    }
  }

  
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
          zIndex: 0,
          height: '100vh'
      }}>
        <div className='container-fluid' 
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
        <div className='container-fluid'
          style={{
            backgroundColor: 'white',
            height: '88vh', 
            width: '100vw',
            display: 'grid',
            marginTop: '4vh',
            gridTemplateColumns: '5% 90% 5%'
          }}
        > 
          <div>
            <div  ref={refAreaRossa}
              onClick={() => prevImage()}
              style={{
                zIndex:4,
                position:'relative',
                left: ((leftSquareTwo !== '' && !isNaN(leftSquareTwo) ) ? leftSquareTwo : 0), 
                top: ((topSquareTwo !== ''  && !isNaN(topSquareTwo) )? topSquareTwo : 0),
                borderRadius: '15px', 
                width: (widthSquareTwo !== '' ? widthSquareTwo : 0), 
                height: (heightSquareTwo !== '' ? heightSquareTwo : 0),
                border: '2px solid transparent'
              }}
            />
          </div>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            }}
          >
            <img 
              ref={observe} 
              alt=''
              style={{
                objectFit: 'cover',
                borderRadius: '20px',
                width: 'auto',
                maxHeight: '85vh',
                display: 'block'
                }} src={images[index]} width='100%' height='100%' />
          </div>
          <div>
            <div 
              ref={refAreaVerde}
              onClick={() => nextImage()}
              style={{
                zIndex:4,
                position:'relative',
                left: -((leftSquareOne !== '' && !isNaN(leftSquareOne) ) ? leftSquareOne : 0), 
                top: ((topSquareOne !== ''  && !isNaN(topSquareOne) )? topSquareOne : 0),
                borderRadius: '15px', 
                width: (widthSquareOne !== '' ? widthSquareOne : 0), 
                height: (heightSquareOne !== '' ? heightSquareOne : 0),
                border: '2px solid transparent'
              }}
            />
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
        ><div 
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
              {"Looking at every single image I took in the past two years just for three seconds would keep me almost ten hours in front of my screen. For this reason algorithms curate images by simplifying their reading, synthesizing contents, and selecting some moments instead of others. Their work is mainly visible in the “days” section of Photos where each image is resized and hidden based on parameters including quality of light, framing and composition to show just the best of each day. The perfect memory seems to exclude any kind of photographic mistake, omit stylistic smudges, and hide any kind of “screen-based” memory (e.g. screenshots, screen recording)." }
              <br />
              <br />
              {"Two books present different collections of personal images taken in 2020. The four degrees of curation (hidden images, small, medium, and large display sizes) applied by iOS in Photos, are translated into a visual parameter that classifies the pictures in as many degrees of readability. This process reduces the pictures in terms of quality and sharpness by applying digital blurs and decreasing the number of pixels."      }
              <br />
              <br />
              {"The artifact translates the traditional format of the memories photo book into a light, vertical and shiny booklet in image and likeness of a smartphone screen and shows the impact of iOS curatorship into my iPhone pictures. An entire past event is now mainly undecipherable, reduced to uniform color spots and blurred pictures, while only a few shots keep their original quality. "}
              </p>
            </div>
            <div
              className='col-4'
              
              style={{
                marginLeft: '1.4%',
                display:'flex',
                
              }}
            >

                    <img 
                    alt=''
                style={{
                marginLeft: '10px',
                position:'relative',
                marginTop: '17%'
              }}
                src={Video}
                width={'50%'}
                height={'auto'} 
              />
              <img 
              alt=''
                style={{
                marginLeft: '10px',
                position:'relative',
                marginTop: '17%'
              }}
                src={Gif}
                width={'80%'}
                height={'auto'} 
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

export default Protocol_3
