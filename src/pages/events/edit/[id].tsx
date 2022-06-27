import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const EditEventId: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <h1>EditEventId {id}</h1>
        </>
    );
};

export default EditEventId;