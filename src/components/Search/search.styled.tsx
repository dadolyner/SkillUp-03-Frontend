import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    width: 100%;
    border-radius: 16px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    @media screen and (max-width: 900px) {
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 20px;
        padding-top: 20px;
        height: 100px;

        &:last-child {
            justify-content: center;
            width: 100%;
        }
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;

    &:last-child {
        justify-content: flex-end;
    }

    &:first-child::after {
        display: block;
        position: absolute;
        content: '';
        top: -10px;
        right: 0;
        bottom: -10px;
        border-right: 2px solid #D8D8D8;
    }

    @media screen and (max-width: 900px) {
        width: 40%;

        &:last-child { width: 100%; }
        &:first-child::after { display: none; }
        & > button { width: 100%; border-radius: 50px; }
    }
`;

export const Icon = styled.img`
    margin: 0 20px;
`;

export const LocationInput = styled.input`
    outline: 0;
    border: 0;
`;

export const DateInput = styled.input`
    outline: 0;
    border: 0;
    position: relative;

    &::-webkit-calendar-picker-indicator {
        background: transparent;
        bottom: 0;
        color: transparent;
        cursor: pointer;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
    }
`;
