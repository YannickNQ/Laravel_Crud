import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';
import Chirp from '@/Components/Chirp';
  
export default function Index({ auth, chirps }){
    const {data, setData, post, processing, reset, errors } = useForm({
        message: '',
        title: '',
    });
    
    const submit = (e) => {
        e.preventDefault();
        post(route('chirps.store'), {onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout user = {auth.user}>
            <Head title = "Foros" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <input
                        value={data.title}
                        placeholder = "¿Titulo?"
                        className='mb-4 block w-full border-gray-300 focus:ring focux:ring-indigo-200 focus:ring-opcaity-50 rounded-md shadow-sm'
                        onChange= { e => setData('title', e.target.value)}
                    />
                    <InputError message = {errors.title}  className="mt-2" />
                    <textarea
                        value = {data.message}
                        placeholder = "¿En que estas pensando?"
                        className = "block w-full border-gray-300 focus:ring focux:ring-indigo-200 focus:ring-opcaity-50 rounded-md shadow-sm"
                        onChange={ e => setData('message', e.target.value)}
                    ></textarea>
                    <InputError message = {errors.message}  className="mt-2" />
                    <PrimaryButton type = "submit" className="mt-4" disabled={processing}>Comentar</PrimaryButton>
                </form>

                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {chirps.map(chirp =>
                        <Chirp key={chirp.id} chirp={chirp}/>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}