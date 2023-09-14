import Stepper from '@/Components/Stepper';
import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function MyDashboard({ auth }) {
    return (
        <AuthenticatedLayout user = {auth.user}>
            <Head title="Welcome" />
            <div className="py-12">
                <div className="max-w-7xl  sm:px-6 lg:px-8">
                    <div className="bg-white">
                        
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
