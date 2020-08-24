import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import boldstepsWhite from '../images/boldstepsWhite.svg';

const MyContainer = styled(Container)`
display: flex;
`; 


function Navibar(props) {
    const MyNavbar = styled(Navbar)`
    background-color: ${props => props.bgcolor || "white"};
    `;

    return(
        <MyNavbar sticky="top" collapseOnSelect bgcolor={props.bkg} expand="md">
            <MyContainer>
                <Navbar.Brand href="/">
                    <img src={boldstepsWhite}
                    width="35"
                    height="35"
                    alt="boldsteps logo"
                    />
                    <span className="text-white">Boldsteps</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="nav-group" />
                <Navbar.Collapse id="nav-group">
                    <Nav className="ml-auto">
                        <Nav.Link href="/"><span className="text-white">Dashboard</span></Nav.Link>
                        <Nav.Link href="/allnumbers"><span className="text-white">All Numbers</span></Nav.Link>
                        <Nav.Link href="/singlenumber"><span className="text-white">Single Number</span></Nav.Link>
                        <Nav.Link href="/quiz"><span className="text-white">Quiz</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </MyContainer>

        </MyNavbar>
    );
}

export default Navibar;