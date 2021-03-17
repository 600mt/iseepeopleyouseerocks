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
        style={{backgroundColor: 'black'}}
      >
        <Modal.Header closeButton id="backgroundPopup" style={{backgroundColor: 'black', borderBottom: '1px solid black'}}>
          <Modal.Title id="contained-modal-title-vcenter">
              
          </Modal.Title>

              <Container fluid style={{backgroundColor: 'black'}}>
                  <Row>
                      <div id='r1-about' className="col-10" style={{color:'#2d64af', fontSize:'18px'}}>
                       
                             <h2>I see people you see rocks </h2>
                        
                      </div>
                  </Row>
              </Container>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: 'black', borderBottom: '1px solid black'}}>
          
      <Container fluid style={{backgroundColor: 'black'}}>
          {/* <Row>
              <div className="col-12">
                  <p><b>Vuoi procedere con l'invio della candidatura per questo progetto?</b></p>
              </div>
          </Row> */}
          <Row>
              <div className="col-12 text-white" style={{fontSize: '30px'}}>
               <p>I see  people  you see  rocks  is a research project investigating how algorithmic processes on an iOS device* can silently affect my memories by hierarchizing and curating pictures. Exploring both possibilities and limits of an algorithmic mediation through various qualitative observations, the project aims to open questions and create a space for further discussion. Four different approaches expose unexpected roles of algorithms in silently shaping users' memories.</p>    
              </div>
          </Row>
          <Row>
              <div className='col-10 offset-1 text-white'>
                    FEATURES
              </div>
          </Row>
          <Row>
              <div className="col-10 offset-1 text-white" style={{fontSize: '17px'}}>
              <p>I see  people  you see  rocks  is a research project investigating how algorithmic processes on an iOS device* can silently affect my memories by hierarchizing and curating pictures. Exploring both possibilities and limits of an algorithmic mediation through various qualitative observations, the project aims to open questions and create a space for further discussion. Four different approaches expose unexpected roles of algorithms in silently shaping users' memories.</p>    
              </div>
          </Row>
      </Container>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: 'black', borderBottom: '1px solid black', borderTop: '1px solid black'}}> 
              <Container fluid style={{backgroundColor: 'black'}}>
                      <Row>
                          <div className='col-3'>
                              <img src={Logo} width='300' height='auto' />
                          </div>
                      </Row>
              </Container>
        </Modal.Footer>
      </Modal>
    )
}

export default About
