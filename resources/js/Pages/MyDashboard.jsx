import Stepper from '@/Components/Stepper';
import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import StepperControl from '@/Components/StepperControl';

export default function MyDashboard({ auth }) {
    return (
        <AuthenticatedLayout user = {auth.user}>
            <Head title="Welcome" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="container horizontal mt-4 p-6 text-gray-900">
                            <Stepper />
                        </div>
                        <StepperControl />
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
