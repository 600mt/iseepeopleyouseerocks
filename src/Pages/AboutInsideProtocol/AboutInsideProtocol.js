import React from 'react'
import { Container, Modal, Row } from 'react-bootstrap'

import './resources/style.css'
import Logo from '../resources/img/polimi.png'
import Navbar from './components/Navbar/Navbar'

export const AboutInsideProtocol = (props) => {
    return (
        <Modal
        id='aboutHomepage'
        {...props}
        // aria-labelledby="contained-modal-title-vcenter"
        // centered
        style={{padding: 0}}
        >

        {/* <Modal.Header closeButton id="backgroundPopup" style={{ }}>
          <Modal.Title id="contained-modal-title-vcenter" style={{padding: 0}} />
        </Modal.Header> */}
        <Modal.Body style={{backgroundColor: 'transparent'}}>
            <div id='framTwoPagesAbout'>
                <Navbar onHide={props.onHide} />
                <div id='firstTopImages' />
                <div id='imageAndMask'>
                <div id='imageBackground'>
                    <div id='firstLeftBorderImage' />
                    <div id='secondMaskImageRealAbout' style={{fontSize: '110%'}}>
                    Object-recognition technologies, deployed via machine learning, analyse contents and label hundreds of pictures in a few moments every day on every iPhone. These technologies enable object-level categorisation and an easier image search by keyword. <br /><br />
                    By comparing human vision with what is recognized by the on-device feature extraction, the artifact displays what was labelled correctly and leaves few clues of what it was not. The limits of interpretation by the machine in object recognition mimics and amplifies the very human feature of forgetting the past. What is recognized by the algorithm is going to be saved for future research, making it browsable again in my gallery. On the other hand, the non-recognized objects cannot be found and could cause the whole picture to get lost in the huge amount of images we produce. <br /><br />
                    In this way multiple recognized fragments of past overlap and merge, becoming new pictures of what it has been. Losing details and contexts of single moments, they finally reach a new status: a continuous stream of partial memories.
                    </div>
                    <div id='thirdCentralImage' />
                    <div id='fourthMaskImageRealAbout'>
                    </div>
                    <div id='fifthRightBorderImage' />
                </div>
                <div id='secondMask'>
                    <div id='firstPartMask'>
                    <div id='firstLeftBorderAbout' />
                    <div id='secondMaskImage' />
                    <div id='thirdCentralAbout' />
                    <div id='fourthMaskImage' />
                    <div id='fifthRightBorderAbout' />
                    </div>
                    <div id='secondPartMaskAbout'>
                    </div>
                </div>
                </div>
            </div>
        </Modal.Body>
      </Modal>
    )
}

export default AboutInsideProtocol
