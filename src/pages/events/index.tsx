import type { NextPage } from 'next';

type EventsProps = {
    events: {
        id: string;
        image: string;
        event_name: string;
        location: string;
        description: string;
        date: string;
        max_users: number;
        userId: string;
    }[]
}

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:3000/events', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();

    return {
        props: {
            events: data
        }
    }
}

const Events: NextPage<EventsProps> = (props: EventsProps) => {
    const { events } = props;
    return (
        <>
            <h1>Events</h1>
            {events.map((event: any) => (
                <div key={event.id}>
                    <h2>{event.event_name}</h2>
                    <p>{event.description}</p>
                    <p>{event.location}</p>
                    <p>{event.date}</p>
                    <p>{event.max_users}</p>
                </div>
            ))}
        </>
    );
};

export default Events;
