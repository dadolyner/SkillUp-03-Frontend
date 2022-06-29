import * as React from 'react';
import { Container, Image, Content, Title, DateTime, BottomRow, RowItem, Icon, Location, MaxUsers } from './events.styled';

type EventProps = {
    image: string;
    title: string;
    dateTime: string;
    location: string;
    maxUsers: number;
}

const Event: React.FC<EventProps> = (props: EventProps) => {
    const { image, title, dateTime, location, maxUsers } = props;
    return (
        <>
            <Container>
                <Image src={image} width="400px" height="250px" />
                <Content>
                    <Title>{title}</Title>
                    <DateTime>{dateTime}</DateTime>

                    <BottomRow>
                        <RowItem>
                            <Icon src="/images/Location.png" width="14px" height="20x" />
                            <Location>{location}</Location>
                        </RowItem>

                        <RowItem>
                            <Icon src="/images/MaxUsers.png" width="14px" height="20x" />
                            <MaxUsers>{maxUsers}</MaxUsers>
                        </RowItem>
                    </BottomRow>
                </Content>
            </Container>
        </>
    );
};

export default Event;
