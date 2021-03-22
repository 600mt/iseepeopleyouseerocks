import React from 'react'

import '../resources/style.css'

export const ImageJinx = ({src, inputZIndex, positionImage, width}) => {
  return (
    <img width={width} height="auto"  style={{position: 'absolute', left: positionImage.x, top: positionImage.y, zIndex: inputZIndex}}  src={src}alt="" />
  ) 
}

export default ImageJinx
