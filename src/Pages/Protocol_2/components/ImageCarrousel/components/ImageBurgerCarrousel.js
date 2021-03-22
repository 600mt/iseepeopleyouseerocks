import React from 'react'

import './resources/style.css'

export const ImageBurgerCarrousel = ({src, inputZIndex}) => {
  return (
    <img src={src} style={{zIndex: inputZIndex, height: 'auto', width:'100%', position:'absolute'}} alt=""/>
  )
}

export default ImageBurgerCarrousel
