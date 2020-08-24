import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const MyFooter = styled.div`
background-color: ${props => props.bgcolor || "white"};
height: 60px;
color: white;
@media screen and (max-height: 400px) {
    height: 40px;
}
`;

function Footer(props) {
    return(
        <div>
            <MyFooter className="fixed-bottom" bgcolor={props.bkg}>
                <span>Here comes the footer</span>
            </MyFooter>
        </div>
    );
}

export default Footer;