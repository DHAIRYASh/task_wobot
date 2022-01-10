import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <div style={{position:'absolute', left:'0', right:'0', bottom:'0'}}>
        
            <Container>
                <Row>
                    <Col className="text-center py-3">
                         Terms of Use | Privacy Policy
                    </Col>
                </Row>
            </Container>
               
         
        </div>
    )
}

export default Footer