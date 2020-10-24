import React from 'react';
import styled from 'styled-components';

const MainWrap = styled.div`
position: relative;
display: flex;
flex-direction: column;
height: 100vh;
background-color: ${props => props.bkg || "white"};
width: 100vw;
`;

function MainWrapper(props){
    return(
        <>
            <MainWrap bkg={props.bkg}>
                {props.children}
            </MainWrap>
        </>
    );
}

export default MainWrapper;