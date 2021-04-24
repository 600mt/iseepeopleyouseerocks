import React, {useEffect, useState} from 'react'

import './resources/style.css'
import ImageBuergerCarrousel from './components/ImageBurgerCarrousel'

export const ImageCarrousel = ({datasetImages, startingIndexImage}) => {
    const [curentDatasetImages, setCurrentDatasetImages] = useState([])
    const [firstPart, setFirtPart] = useState([])
    const [indexImage, setIndexImage] = useState(0)

    useEffect(() => {
      setCurrentDatasetImages(datasetImages)
      setFirtPart([datasetImages[startingIndexImage]])
      setIndexImage(startingIndexImage)
    }, [datasetImages, startingIndexImage])

    function changeImage() {

        if(firstPart.length < 3) {
          setFirtPart([...firstPart, curentDatasetImages[indexImage]])
          setIndexImage(indexImage + 1)
        } else {
          let temp = [...firstPart]
          temp.shift()
          temp.push(curentDatasetImages[indexImage])
          setFirtPart(temp)
          setIndexImage(indexImage + 1)
        }
    
        if(indexImage === curentDatasetImages.length) {
          setIndexImage(0)
        }
      }
    
      useEffect(() => {
        const interval = setInterval(() => {
          changeImage()
        }, 2000);
        return () => clearInterval(interval);
      })

    return (
        <div id='imgPostion' onClick={() => changeImage()}>
          {firstPart.map((image, index) => (
            <ImageBuergerCarrousel key={index} src={image} inputZIndex={index}/>
          ))}
      </div>
  )
}

export default ImageCarrousel
