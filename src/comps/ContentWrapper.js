import React from 'react';
import styled from 'styled-components';
import NumberGrid from './NumberGrid';

const ContentWrap = styled.div`
position: relative;
height: 68%;
width: 95%;
`;

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: center;
align-item: center;
box-shadow: 2px 2px 24px 5px rgba(0, 0, 0, 0.25);
border-radius: 20px;
max-width: 90%;
padding-top: 2%;
padding-bottom: 2%;
margin: 1.5%;
`;

function ContentWrapper() {
    return(
            <ContentWrap>
                <Wrapper>
                    <NumberGrid />
                </Wrapper>
            </ContentWrap>
    );
}

export default ContentWrapper;