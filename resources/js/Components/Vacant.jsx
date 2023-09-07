import React, { useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useForm, usePage } from '@inertiajs/react';
// import { Button, Typography } from '@mui/material';
 
dayjs.extend(relativeTime);
 
export default function Vacant({ vacant }) {
    const { auth } = usePage().props;
 
    const [editing, setEditing] = useState(false);
 
    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        area: vacant.area,
        title: vacant.title,
        description: vacant.description,
        date_end: vacant.date_end,
    });
 
    const submit = (e) => {
        e.preventDefault();
        patch(route('vacants.update', vacant.id), { onSuccess: () => setEditing(false) });
    };

    return (
        <tr class="bg-white border-b dark:border-gray-700">
            <td class="px-6 py-4">{data.area}</td>
            {/* <td>{data.title}</td>
            <td>{data.description}</td> */}
            <td>{data.date_end}</td>
        </tr>
    )
}