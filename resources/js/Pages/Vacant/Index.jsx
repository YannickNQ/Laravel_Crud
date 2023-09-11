import Modal from "@/Components/Modal";
import Vacant from "@/Components/Vacant";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useState } from "react";

export default function Index( {auth, vacants})
{
    /* Modal */
    const [showModal, setShowModal ] = useState(false);
    
    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        reset();
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
            handleCloseModal();
        }});
    };
    
    return(
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Vacantes</h2>
                    <PrimaryButton className = "py-2" onClick={handleOpenModal}>Agregar Vacante</PrimaryButton>
                </div>
        }
        >
            <Head title = "Jobs" />
            <div className="flex-wrap-reverse justify-center max-w-7xl px-4 py-6 mx-auto">
                
                <div className="bg-white shadow-sm rounded-lg box-content w-auto p-4">
                    <table className="w-full h-auto">
                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th className="rounded-lg p-4 w-auto text-base font-bold tracking-wide text-gray-800 text-left">Ofertas de Trabajo</th>
                                <th className="bg-gray-50 w-52 text-base border-b-2 border-gray-200 text-gray-800 text-center">Fecha Limite</th>
                                <th className="bg-gray-50 w-52 text-base border-b-2 border-gray-200 text-gray-800 text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vacants.map( vacant => 
                                <Vacant key={vacant.id} vacant={vacant}></Vacant>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {showModal && 
                <Modal show={showModal} onClose={handleCloseModal}>
                    <div className="max-w-2xl mx-auto p-6 sm:p-4 lg:p-8">
                        <form onSubmit={submit}>
                            <h2 className="text-center pb-2 text-gray-800 font-bold uppercase text-lg">Agregar Vacante</h2>
                            <label htmlFor='area' className="flex font-medium mb-2">Area</label>
                            <input type="text" id='area' name="area" placeholder="Area" value={data.area} onChange={ e => setData('area', e.target.value)} className="w-full px-4 py-2 mb-4 border border-blue-300 rounded-lg"/>
                            <label htmlFor='title' className="flex font-medium mb-2">Titulo</label>
                            <input type="text" id='title' name="title" placeholder="Titulo" value={data.title} onChange={ e => setData('title', e.target.value)} className="w-full px-4 py-2 mb-4 border border-blue-300 rounded-lg"/>
                            <label htmlFor='description' className="flex font-medium mb-2">Descripción</label>
                            <textarea id='description' name="description" placeholder="Descripción" value={data.description} onChange={ e => setData('description', e.target.value)} className="w-full px-4 py-2 h-32 mb-4 border border-blue-300 rounded-lg"></textarea>
                            <label htmlFor='date_end' className="flex font-medium mb-2">Fecha Limite</label>
                            <input type="date" id='date_end' name="date_end" value={data.date_end} onChange={ e => setData('date_end', e.target.value)} className="w-full px-4 py-2 mb-4 border border-blue-300 rounded-lg"/>
                            <div className="flex justify-end space-x-2">
                                <PrimaryButton type="submit" disabled={processing} className="">Aceptar</PrimaryButton>
                                <PrimaryButton type="button" onClick={handleCloseModal} className="bg-red-700 hover:bg-red-500 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150">Cancelar</PrimaryButton>
                            </div>
                        </form>
                    </div>
                </Modal>
            }
        </AuthenticatedLayout>
    )
}