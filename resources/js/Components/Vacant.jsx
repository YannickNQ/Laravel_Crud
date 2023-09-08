import React, { useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useForm, usePage } from '@inertiajs/react';
 
dayjs.extend(relativeTime);
 
export default function Vacant({ vacant }) {
    const { auth } = usePage().props;
 
    const [editing, setEditing] = useState(false);

    const [showMore, setShowMore] = useState(false);

    const [buttonText, setButtonText] = useState('Ver resumen');
 
    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        area: vacant.area,
        title: vacant.title,
        description: vacant.description,
        date_end: vacant.date_end,
    });

    const handleShowInfo = () => {
        setShowMore(!showMore);
        setButtonText(showMore? 'Ver resumen' : 'Cerrar');
    };

    const submit = (e) => {
        e.preventDefault();
        patch(route('vacants.update', vacant.id), { onSuccess: () => setEditing(false) });
    };

    return (
        <tr className="bg-white border-b">
            <td className="p-4">
                <p className='text-sm font-semibold'>{data.area}</p>
                {showMore &&
                    <div className='text-sm pt-2'> 
                        <p className='uppercase'>{data.title}</p>
                        <p className='text-justify pt-2'>{data.description}</p>
                    </div>
                }
                <button className='flex-1 pt-2 text-sm text-red-600 underline' onClick={handleShowInfo}>{buttonText}</button>
                <span className='pl-2'>|</span>
                <button className='flex-1 pl-2 pt-2 text-sm text-red-600 underline'>Postular</button>
                
            </td>
            <td className="text-sm text-center">{data.date_end}</td>

            <td className="text-sm text-center">
                <button className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out" onClick={() => setEditing(true)}>
                    Editar
                </button>
            </td>
        </tr>
    )
}