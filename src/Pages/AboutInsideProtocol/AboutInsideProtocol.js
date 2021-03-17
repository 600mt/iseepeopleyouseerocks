import React from 'react'
import { Container, Modal, Row } from 'react-bootstrap'

import '../resources/style.css'
import Logo from '../resources/img/polimi.png'
import Navbar from '../Protocol_2/components/Navbar/Navbar'

export const AboutInsideProtocol = (props) => {
    return (
        <Modal
        id='aboutHomepage'
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{backgroundColor: 'black'}}>

        <div id='framTwoPages'>
            <Navbar />
            <div id='firstTopImages' />
            <div id='imageAndMask'>
            <div id='imageBackground'>
                <div id='firstLeftBorderImage' />
                <div id='secondMaskImageReal'>
                </div>
                <div id='thirdCentralImage' />
                <div id='fourthMaskImageReal'> 
                </div>
                <div id='fifthRightBorderImage' />
            </div>
            <div id='secondMask'>
                <div id='firstPartMask'>
                <div id='firstLeftBorder' />
                <div id='secondMaskImage' />
                <div id='thirdCentral' />
                <div id='fourthMaskImage' />
                <div id='fifthRightBorder' />
                </div>
                <div id='secondPartMask'>
                </div>
            </div>
            </div>
        </div>

        <Modal.Header closeButton id="backgroundPopup" style={{backgroundColor: 'black', borderBottom: '1px solid black', marginTop: 0, marginLeft: 0, paddingTop:0, paddingLeft: '2%' }}>
          <Modal.Title id="contained-modal-title-vcenter" style={{padding: 0}}>
              
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: 'black', borderBottom: '1px solid black', paddingLeft: '2%'}}>
            <Container fluid style={{backgroundColor: 'black'}}>
                <Row>
                    <div className="col-12 text-white" style={{fontSize: '4vh', padding: 0}}>
                        <p>I see  people  you see  rocks  is a research project investigating how algorithmic processes on an iOS device* can silently affect my memories by hierarchizing and curating pictures. Exploring both possibilities and limits of an algorithmic mediation through various qualitative observations, the project aims to open questions and create a space for further discussion. Four different approaches expose unexpected roles of algorithms in silently shaping users' memories.</p>    
                    </div>
                </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: 'black', borderBottom: '1px solid black', borderTop: '1px solid black'}}> 
              
        </Modal.Footer>
      </Modal>
    )
}

export default AboutInsideProtocol
