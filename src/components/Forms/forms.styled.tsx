import styled from 'styled-components';
import { Primary } from '../Colors/colors';

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 50%;

    @media screen and (max-width: 900px) {
        width: 90%;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 97vh;
`;

export const Avatar = styled.img`
    margin: 20px;
`;
export const FormContainer = styled.div`
    width: 50%;

    @media screen and (max-width: 900px) {
        width: 90%;
    }
`;

export const HalfWidthContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
`;
export const HalfWidth = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
`;
export const FullWidthContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
`;
export const Label = styled.label``;
export const Input = styled.input`
    outline: 0;
    border: 0;
    border: 1px solid ${Primary};
    padding: 5px 15px;
    width: 100%;
    font-size: 16px;
    border-radius: 50px;
    margin-bottom: 10px;
`;
export const BottomLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`;
export const BottomLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: ${Primary};

    &:hover {
        text-decoration: underline;
        text-underline-offset: 5px;
    }
`;

export const PrimaryColored = styled.span`
    color: ${Primary};
`;
