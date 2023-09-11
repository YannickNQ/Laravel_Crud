import { useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import Modal from "./Modal";
import InputError from "./InputError";

export default function Vacant({ vacant }) {

    const [showMore, setShowMore] = useState(false);

    const [ showModal, setShowModal ] = useState(false);

    const [buttonText, setButtonText] = useState("Ver resumen");

    // Data
    const { data, setData, patch, clearErrors, reset, errors, delete: destroy } = useForm({
        area: vacant.area,
        title: vacant.title,
        description: vacant.description,
        date_end: vacant.date_end,
    }); 

    // Handlers

    const showInfo = () => {
        setShowMore(!showMore);
        setButtonText(showMore ? "Ver resumen" : "Cerrar");
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        reset();
        clearErrors();
    };

    // Submit

    const submit = (e) => {
        e.preventDefault();
        patch(route('vacants.update', vacant.id), { onSuccess: () => setShowModal(false)});
    };
    
    const deleteVacant = (e) => {
        e.preventDefault();
        destroy(route('vacants.destroy', vacant.id));
    }

    return (
        <tr className="text-sm bg-white border-b border-gray-400 hover:bg-gray-100 dark:border-gray-300 dark:hover:bg-gray-100">
            <td className="p-4">
                <p className="font-semibold text-gray-700">{vacant.area}</p>
                {showMore && (
                    <>
                        <p className="uppercase">{vacant.title}</p>
                        <p className="text-justify">{vacant.description}</p>
                    </>
                )}
                <button
                    className="text-red-600 underline"
                    onClick={showInfo}
                >
                    {buttonText}
                </button>
                <span className="font-bold"> | </span>
                <button className="text-red-600 underline">Postular</button>
            </td>
            <td className="text-center p-4">{vacant.date_end}</td>
            <td className="p-4">
                <div className="h-auto flex items-center justify-center text-center space-x-2">
                    <PrimaryButton className="bg-green-700 after:content-[''] md:after:content-['Editar'] hover:bg-green-500 focus:bg-green-700 active:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition ease-in-out duration-150" onClick={() => openModal()}>
                        <svg
                            className="w-3.5 h-3.5 md:mr-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 21"
                        >
                            <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                            <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
                        </svg>
                    </PrimaryButton>
                    <PrimaryButton as="button" onClick = {deleteVacant} method="delete" className="bg-red-800 after:content-[''] md:after:content-['Eliminar'] hover:bg-red-500 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150">
                        <svg
                            className="w-3.5 h-3.5 md:mr-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 21"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
                            />
                        </svg>
                    </PrimaryButton>
                </div>
                {showModal ?
                    <Modal show={showModal} onClose={closeModal}>
                        <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                            <form onSubmit={submit}>
                                <h2 className="text-center pb-2 text-gray-800 font-bold uppercase text-lg">Editar Vacante</h2>
                                <label className="font-medium mb-2 flex">Area</label>
                                <input value={data.area} type="text" name="area" placeholder="Área"  onChange= { e => setData('area', e.target.value)} className="w-full px-4 py-2 mb-4 border border-blue-300 rounded-lg" />
                                <label className="font-medium mb-2 flex">Titulo</label>
                                <input value={data.title} type="text" name="title" placeholder="Título" onChange= { e => setData('title', e.target.value)} className="w-full px-4 py-2 mb-4 border border-blue-300 rounded-lg" />
                                <InputError message={errors.message} className="mt-2" />
                                <label className="font-medium mb-2 flex">Descripción</label>
                                <textarea value={data.description} name="description" placeholder="Descripción" onChange= { e => setData('description', e.target.value)} className="w-full px-4 py-2 h-32 mb-4 border border-blue-300 rounded-lg"></textarea>
                                <InputError message={errors.message} className="mt-2" />
                                <label className="font-medium mb-2 flex">Fecha Limite</label>
                                <input value={data.date_end} type="date" name="date_end" onChange= { e => setData('date_end', e.target.value)} className="w-full px-4 py-2 mb-4 border border-blue-300 rounded-lg" />
                                <InputError message={errors.message} className="mt-2" />
                                <div className="flex justify-end mt-4">
                                    <PrimaryButton type="submit" className="mt-4" >Guardar</PrimaryButton>
                                    <PrimaryButton type="button" className="mt-4 ml-4 bg-red-700 hover:bg-red-500 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150" onClick = {closeModal}>Cancelar</PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </Modal>
                    : showModal
                }
            </td>
        </tr>
    );
}
