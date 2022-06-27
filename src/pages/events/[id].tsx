import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const EventId: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <h1>EventId {id}</h1>
        </>
    );
};

export default EventId;