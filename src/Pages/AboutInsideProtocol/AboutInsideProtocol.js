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
        <Modal.Body style={{backgroundColor: 'transparent', borderBottom: '1px solid black'}}>
            <div id='framTwoPagesAbout'>
                <Navbar onHide={props.onHide} />
                <div id='firstTopImages' />
                <div id='imageAndMask'>
                <div id='imageBackground'>
                    <div id='firstLeftBorderImage' />
                    <div id='secondMaskImageRealAbout'>
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
                    <div id='fifthRightBorder' />
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
