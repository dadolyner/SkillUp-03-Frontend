import styled from 'styled-components';
import { Primary, Black, White } from '../Colors/colors';

// Short Width Buttons
export const ShortRoundPrimaryButton = styled.button`
    outline: 0;
    border: 2px solid ${Primary};
    font-size: 1rem;
    border-radius: 50px;
    width: 60px;
    height: 51px;
    color: ${White};
    background-color: ${Primary};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${White};
        color: ${Primary};
    }
`;
export const ShortRoundBlackButton = styled.button`
    outline: 0;
    border: 2px solid ${Black};
    font-size: 1rem;
    border-radius: 50px;
    width: 60px;
    height: 51px;
    color: ${White};
    background-color: ${Black};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${White};
        color: ${Black};
    }
`;
export const ShortSquarePrimaryButton = styled.button`
    outline: 0;
    border: 2px solid ${Primary};
    font-size: 1rem;
    border-radius: 15px;
    width: 60px;
    height: 51px;
    color: ${White};
    background-color: ${Primary};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${White};
        color: ${Primary};
    }
`;
export const ShortSquareBlackButton = styled.button`
    outline: 0;
    border: 2px solid ${Black};
    font-size: 1rem;
    border-radius: 15px;
    width: 60px;
    height: 51px;
    color: ${White};
    background-color: ${Black};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${White};
        color: ${Black};
    }
`;

// Middle Widht Button
export const MiddleRoundPrimaryButton = styled.button`
    outline: 0;
    border: 2px solid ${Primary};
    font-size: 1rem;
    border-radius: 50px;
    width: 120px;
    height: 51px;
    background-color: ${Primary};
    color: ${White};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${White};
        color: ${Primary};
    }
`;
export const MiddleRoundBlackButton = styled.button`
    outline: 0;
    border: 2px solid ${Black};
    font-size: 1rem;
    border-radius: 50px;
    width: 120px;
    height: 51px;
    background-color: ${Black};
    color: ${White};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${White};
        color: ${Black};
    }
`;
export const MiddleSquarePrimaryButton = styled.button`
    outline: 0;
    border: 2px solid ${Primary};
    font-size: 1rem;
    border-radius: 15px;
    width: 120px;
    height: 51px;
    background-color: ${Primary};
    color: ${White};
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${White};
        color: ${Primary};
    }
`;
export const MiddleSquareBlackButton = styled.button`
    outline: 0;
    border: 2px solid ${Black};
    font-size: 1rem;
    border-radius: 15px;
    width: 120px;
    height: 51px;
    background-color: ${Black};
    color: ${White};
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${White};
        color: ${Black};
    }
`;

// Long Width Button
export const LongRoundPrimaryButton = styled.button`
    outline: 0;
    border: 2px solid ${Primary};
    font-size: 1rem;
    border-radius: 50px;
    width: 240px;
    height: 42px;
    background-color: ${Primary};
    color: ${White};
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${White};
        color: ${Primary};
    }
`;
export const LongRoundBlackButton = styled.button`
    outline: 0;
    border: 2px solid ${Black};
    font-size: 1rem;
    border-radius: 50px;
    width: 240px;
    height: 42px;
    background-color: ${Black};
    color: ${White};
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${White};
        color: ${Black};
    }
`;
export const LongSquarePrimaryButton = styled.button`
    outline: 0;
    border: 2px solid ${Primary};
    font-size: 1rem;
    border-radius: 15px;
    width: 240px;
    height: 42px;
    background-color: ${Primary};
    color: ${White};
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${White};
        color: ${Primary};
    }
`;
export const LongSquareBlackButton = styled.button`
    outline: 0;
    border: 2px solid ${Black};
    font-size: 1rem;
    border-radius: 15px;
    width: 240px;
    height: 42px;
    background-color: ${Black};
    color: ${White};
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${White};
        color: ${Black};
    }
`;

// Icons buttons
export const AttendButton = styled.button`
    outline: 0;
    border: 2px solid ${Primary};
    font-size: 1rem;
    border-radius: 15px;
    width: 60px;
    height: 51px;
    color: ${White};
    background-color: ${Primary};
    background-image: url('/images/Attend.png');
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${White};
        color: ${Primary};
    }
`;
export const NotAttendButton = styled.button`
    outline: 0;
    border: 2px solid ${Black};
    font-size: 1rem;
    border-radius: 15px;
    width: 60px;
    height: 51px;
    color: ${White};
    background-color: ${Black};
    background-image: url('/images/NotAttend.png');
    background-size: 30%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${White};
        color: ${Black};
    }
`;
export const OptionsPrimaryButton = styled.button`
    outline: 0;
    border: 2px solid ${Primary};
    font-size: 1rem;
    border-radius: 15px;
    width: 60px;
    height: 51px;
    color: ${White};
    background-color: ${Primary};
    background-image: url('/images/Options.png');
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${White};
        color: ${Primary};
    }
`;
export const OptionsBlackButton = styled.button`
    outline: 0;
    border: 2px solid ${Black};
    font-size: 1rem;
    border-radius: 15px;
    width: 60px;
    height: 51px;
    color: ${White};
    background-color: ${Black};
    background-image: url('/images/Options.png');
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${White};
        color: ${Black};
    }
`;