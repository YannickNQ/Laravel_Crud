import React, {useState} from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head} from '@inertiajs/react';
// import Vacant from '@/Components/Vacant';
import Modal from '@/Components/Modal';

export default function Index({ auth, vacants}){
    const { data, setData, post, processing, reset, errors} = useForm({
        area: '',
        title: '',
        description: '',
        date_end: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('professors.store'), {onSuccess: () => reset() });
    }

    return (
        <AuthenticatedLayout user = { auth.user }>
            <Head title="Trabajos Disponibles" />
        </AuthenticatedLayout>
    )
}