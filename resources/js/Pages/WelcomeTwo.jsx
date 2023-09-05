import { Head } from '@inertiajs/react';
import { Button } from '@mui/base';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <Button> Success </Button>
        </>
    );
}
