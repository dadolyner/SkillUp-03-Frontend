import * as React from 'react';
import { FooterContainer, Span } from './footer.styled';

const Footer: React.FC = () => {
    return (
        <>
            <FooterContainer>
                <Span>
                    <img src="/images/Logo.png" height="15px" width="15px" style={{ marginRight: "10px" }}/>
                    NextUp
                </Span>
                <Span>All Rights Reserved. | skillupmentor.com</Span>
            </FooterContainer>
        </>
    );
};

export default Footer;
