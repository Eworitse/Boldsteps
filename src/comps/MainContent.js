import React, { useContext } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { QuizContext } from './QuizContext';

const Wrapper = styled(Container)`
position: relative;
display: flex;
background-color: ${props => props.bgcolor || "white"};
flex-grow: 1;
margin-bottom: 60px;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-height: 400px){
    margin-bottom: 40px;
}
`;

function MainContent(props){

    return(
        <Wrapper bgcolor={props.bkg}>
            {props.children}
        </Wrapper>
    );
}

export default MainContent;