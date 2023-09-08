import React, {useState} from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head} from '@inertiajs/react';
import Vacant from '@/Components/Vacant';
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
        post(route('vacants.store'), {onSuccess: () => {
            reset();
            handleCloseModal();
        }});
    };

    return (
        <AuthenticatedLayout user = { auth.user }>
            <Head title="Trabajos Disponibles" />
        
        <div className="flex-wrap-reverse justify-center max-w-7xl px-4 mx-auto">

            <div className="flex justify-end box-content p-4 ">
                <PrimaryButton onClick={handleOpenModal}>Agregar Vacante</PrimaryButton>
            </div>            

            {showModal && 
                <Modal show={showModal} onClose={handleCloseModal}>
                    <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                        <form onSubmit={submit}>
                            <h2 className="text-center pb-2 text-gray-800 font-bold uppercase text-lg">Agregar Vacante</h2>
                            <label className="font-medium mb-2 flex">Area</label>
                            <input value={data.area} type="text" name="area" placeholder="Área"  onChange= { e => setData('area', e.target.value)} className="w-full px-4 py-2 mb-4 border border-blue-300 rounded-lg" />
                            <label className="font-medium mb-2 flex">Titulo</label>
                            <input value={data.title} type="text" name="title" placeholder="Título" onChange= { e => setData('title', e.target.value)} className="w-full px-4 py-2 mb-4 border border-blue-300 rounded-lg" />
                            <label className="font-medium mb-2 flex">Descripción</label>
                            <textarea value={data.description} name="description" placeholder="Descripción" onChange= { e => setData('description', e.target.value)} className="w-full px-4 py-2 h-32 mb-4 border border-blue-300 rounded-lg"></textarea>
                            <label className="font-medium mb-2 flex">Fecha Limite</label>
                            <input value={data.date_end} type="date" name="date_end" onChange= { e => setData('date_end', e.target.value)} placeholder="Fecha de finalización" className="w-full px-4 py-2 mb-4 border border-blue-300 rounded-lg" />
                            <div className="flex justify-end mt-4">
                                <PrimaryButton className="mt-4" disabled={processing}>Aceptar</PrimaryButton>
                                <PrimaryButton className="mt-4 ml-4 bg-red-700" onClick = {handleCloseModal} disabled={processing}>Cancelar</PrimaryButton>
                            </div>
                        </form>
                    </div>
                </Modal>}
                
            <div className="flex-1 box-content w-auto p-4 border-4 rounded-lg">
                <table className="w-full h-auto">
                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                        <tr>
                            <th className="p-4 w-auto text-base font-bold tracking-wide text-gray-800 text-left">Ofertas de Trabajo</th>
                            <th className="bg-gray-50 w-52 text-base border-b-2 border-gray-200 text-gray-800 text-center">Fecha Limite</th>
                        </tr>
                    </thead>

                    <tbody>
                        {vacants.map(vacant =>
                            <Vacant key={vacant.id} vacant={vacant}></Vacant>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
        </AuthenticatedLayout>
    );
};