import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
width: ${props => props.width};
height: ${props => props.height};
background-color: ${props => props.bgcolor};
box-sizing: border-box;
border-style: solid;
border-width: 5px;
border-color: white;
border-radius: 20px;
box-shadow:
display: flex;
justify-content: center;
`;

function ContentWrapper(props){
    return(
        <Wrapper width={props.width} height={props.height} bgcolor={props.bkg} />
    );
}

export default ContentWrapper;