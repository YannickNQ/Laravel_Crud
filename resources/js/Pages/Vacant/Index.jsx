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
        post(route('professors.store'), {onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout user = { auth.user }>
            <Head title="Trabajos Disponibles" />
            <PrimaryButton onClick = {handleOpenModal}> Agregar Vacante</PrimaryButton>
            {showModal && 
                <Modal show={showModal} onClose={handleCloseModal}>
                    <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                        <form onSubmit={submit}>
                            <h2>Agregar Vacante</h2>
                            <input type="text" name="area" placeholder="Área" className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg" />
                            <input type="text" name="title" placeholder="Título" className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg" />
                            <textarea name="description" placeholder="Descripción" className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg"></textarea>
                            <input type="date" name="date_end" placeholder="Fecha de finalización" className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg" />
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