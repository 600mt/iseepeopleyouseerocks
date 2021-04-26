import React from 'react'
import { Container, Modal, Row } from 'react-bootstrap'

import './resources/style.css'
import Logo from './resources/img/polimi.png'

export const About = (props) => {
    return (
        <Modal
        id='aboutHomepage'
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{backgroundColor: 'black'}}>


        <Modal.Header closeButton id="backgroundPopup" style={{backgroundColor: 'black', borderBottom: '1px solid black', marginTop: 0, marginLeft: 0, paddingTop:0, paddingLeft: '2%' }}>
          <Modal.Title id="contained-modal-title-vcenter" style={{padding: 0}}>
              
          </Modal.Title>

              <Container fluid style={{backgroundColor: 'black'}}>
                  <Row >
                        <div className="col-11" style={{color:'#2d64af', fontSize:'18px', margin: 0, padding: 0}}>
                            <h2>I see people you see rocks </h2>
                        </div>
                  </Row>
              </Container>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: 'black', borderBottom: '1px solid black', paddingLeft: '2%'}}>
            <Container fluid style={{backgroundColor: 'black'}}>
                <Row>
                    <div className="col-12 text-white" style={{fontSize: '4vh', padding: 0}}>
                        <p>I see  people  you see  rocks  is a research project investigating how algorithmic processes on an iOS device* can silently affect my memories by hierarchizing and curating pictures. Exploring both possibilities and limits of an algorithmic mediation through various qualitative observations, the project aims to open questions and create a space for further discussion. Four different approaches expose unexpected roles of algorithms in silently shaping users' memories.</p>    
                    </div>
                </Row>
                <Row>
                    <div className='col-11 offset-1 text-white' style={{fontSize: '2.4vh'}}>FEATURES</div>
                </Row>
                <Row>
                    <div className="col-11 offset-1 text-white" style={{fontSize: '2.3vh'}}>
                    <p>I see  people  you see  rocks  is a research project investigating how algorithmic processes on an iOS device* can silently affect my memories by hierarchizing and curating pictures. Exploring both possibilities and limits of an algorithmic mediation through various qualitative observations, the project aims to open questions and create a space for further discussion. Four different approaches expose unexpected roles of algorithms in silently shaping users' memories.</p>    
                    </div>
                </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: 'black', borderBottom: '1px solid black', borderTop: '1px solid black'}}> 
              <Container fluid style={{backgroundColor: 'black'}}>
                      <Row>
                          <div className='col-3'>
                              <img className="footer-loghi" src={Logo} alt='logo_politecnico' />
                          </div>
                      </Row>
              </Container>
        </Modal.Footer>
      </Modal>
    )
}

export default About
