import * as React from 'react';
import { ContainerSmall, DateTimeContainer, DateText, TimeText, TitleLocationContainer, TitleText, LocationText, CheckContainer } from './events.styled';
import { MiddleSquarePrimaryButton, AttendButton, OptionsPrimaryButton } from '../Buttons/buttons.styled';

type SmallEventProps = {
    type: 'check' | 'attend' | 'options';
    date: string;
    time: string;
    title: string;
    location: string;
};

const SmallEvent: React.FC<SmallEventProps> = (props: SmallEventProps) => {
    const { type, date, time, title, location } = props;
    return (
        <>
            <ContainerSmall>
                <DateTimeContainer>
                    <DateText>{date}</DateText>
                    <TimeText>{time}</TimeText>
                </DateTimeContainer>

                <TitleLocationContainer>
                    <TitleText>{title}</TitleText>
                    <LocationText>{location}</LocationText>
                </TitleLocationContainer>

                <CheckContainer>
                    {type === 'check' && <MiddleSquarePrimaryButton>Check</MiddleSquarePrimaryButton>}
                    {type === 'attend' && <AttendButton />}
                    {type === 'options' && <OptionsPrimaryButton />}
                </CheckContainer>
            </ContainerSmall>
        </>
    );
};

export default SmallEvent;
