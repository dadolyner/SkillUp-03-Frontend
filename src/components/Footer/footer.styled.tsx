import styled from 'styled-components';
import { Primary, White } from '../Colors/colors';

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 60px;
    font-size: 16px;

    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 5px;

    background: ${White};

    @media screen and (max-width: 900px) {
        font-size: 8px;
    }
`;

export const Span = styled.span`
    font-size: 16px;
    color: ${Primary};

    @media screen and (max-width: 900px) {
        &.logo { display: none; }
        font-size: 10px;
        justify-content: center;
    }
`;
