import React, {useState} from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head} from '@inertiajs/react';
// import Vacant from '@/Components/Vacant';
import Modal from '@/Components/Modal';

export default function Index({ auth, vacants}){

    const [showModal, setShowModal ] = useState(false);
    
    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const { data, setData, post, processing, reset, errors} = useForm({
        area: '',
        title: '',
        description: '',
        date_end: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('vacants.store'), {onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout user = { auth.user }>
            <Head title="Trabajos Disponibles" />
            <PrimaryButton onClick={handleOpenModal}>Agregar Vacante</PrimaryButton>

            {showModal && 
                <Modal show={showModal} onClose={handleCloseModal}>
                    <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                        <form onSubmit={submit}>
                            <h2>Agregar Vacante</h2>
                            <input value={data.area} type="text" name="area" placeholder="Área"  onChange= { e => setData('area', e.target.value)} className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg" />
                            <input value={data.title} type="text" name="title" placeholder="Título" onChange= { e => setData('title', e.target.value)} className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg" />
                            <textarea value={data.description} name="description" placeholder="Descripción" onChange= { e => setData('description', e.target.value)} className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg"></textarea>
                            <input value={data.date_end} type="date" name="date_end" onChange= { e => setData('date_end', e.target.value)} placeholder="Fecha de finalización" className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg" />
                            <div className="flex justify-end mt-4">
                                <PrimaryButton className="mt-4" disabled={processing}>Aceptar</PrimaryButton>
                                {/* <PrimaryButton className="mt-4 ml-4" onClick = {handleCloseModal} disabled={processing}>Cancelar</PrimaryButton> */}
                            </div>
                        </form>
                    </div>
                </Modal>}

        </AuthenticatedLayout>
    );
};