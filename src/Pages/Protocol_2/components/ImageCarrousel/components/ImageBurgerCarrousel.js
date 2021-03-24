import React from 'react'

import './resources/style.css'

export const ImageBurgerCarrousel = ({src, inputZIndex}) => {
  return (
    <img src={src} style={{zIndex: inputZIndex, height: '88vh', width:'100%', position:'absolute',  objectFit: 'cover'}} alt=""/>
  )
}

export default ImageBurgerCarrousel
