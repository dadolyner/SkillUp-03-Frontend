import type { NextPage } from 'next';

type EventsProps = {
    id: string;
    image: string;
    event_name: string;
    location: string;
    description: string;
    date: string;
    max_users: number;
    userId: string;
};

export const getServerSideProps = async ({ query }: any) => {
    const { id } = query;
    const response = await fetch(`http://localhost:3000/events/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();

    return {
        props: {
            id: data.id,
            image: data.image,
            event_name: data.event_name,
            location: data.location,
            description: data.description,
            date: data.date,
            max_users: data.max_users,
            userId: data.userId
        }
    };
};

const EditEventId: NextPage<EventsProps> = (props: EventsProps) => {
    const { id, event_name, description, location, date, max_users } = props;

    return (
        <>
            <h1>EditEventId: {id}</h1>
        </>
    );
};

export default EditEventId;