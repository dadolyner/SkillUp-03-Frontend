import styled from 'styled-components';
import { Primary, Black } from '../Colors/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: fit-content;
    color: ${Black};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
`;
export const Image = styled.img`
    border-radius: 10px;
`;
export const Content = styled.div`
    width: 100%;
    padding: 20px 20px;
`;
export const Title = styled.h3`
    margin: 0;
    font-size: 24px;
    color: ${Primary};
`;
export const DateTime = styled.p`
    margin: 0;
`;
export const BottomRow = styled.div`
    width: 100%;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const RowItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
export const Icon = styled.img`
    margin-right: 10px;
`;
export const Location = styled.p`
    margin: 0;
    font-size: 14px;
`;
export const MaxUsers = styled.p`
    margin: 0;
`;

export const ContainerSmall = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
`;
export const DateTimeContainer = styled.div`

`;

export const DateText = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: bold;
`;

export const TimeText = styled.p`
    margin: 0;
    font-size: 14px;
    font-weight: 300;
`;

export const TitleLocationContainer = styled.div`

`;

export const TitleText = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: bold;
`;

export const LocationText = styled.p`
    margin: 0;
    font-size: 14px;
    font-weight: 300;
`;

export const CheckContainer = styled.div`

`;

