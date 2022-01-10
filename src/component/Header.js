import React from 'react'
import {Navbar, Container, Image} from 'react-bootstrap'

function Header() {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand>
                    <Image src="logo.png">
                        

                    </Image>
 
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header