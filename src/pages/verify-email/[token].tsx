import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const VerifyEmail: NextPage = () => {
    const router = useRouter();
    const { token } = router.query;

    return (
        <>
            <h1>VerifyEmail: {token}</h1>
        </>
    );
};

export default VerifyEmail;