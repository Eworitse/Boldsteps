import React from 'react';
import styled from 'styled-components';

const ContentWrap = styled.div`
position: relative;
height: 68%;
width: 95%;
margin-left: auto;
margin-right: auto;
margin-top: 10px;
`;

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.25);
border-radius: 20px;
width: 90%;
padding-top: 2%;
padding-bottom: 2%;
margin: 1.5% auto 1.5% auto;

@media (max-width: 547px){
    width: 100%;
    margin-left: 2px;
    margin-right: 2px;
    padding-top: 5px;
}
`;

function ContentWrapper(props) {
    return(
            <ContentWrap>
                <Wrapper>
                    {props.children}
                </Wrapper>
            </ContentWrap>
    );
}

export default ContentWrapper;