import React, {useState} from "react";
import {useForm, usePage} from '@inertiajs/react';


export default function Vacant({ vacant }){
    const { auth } = usePage().props;

    const [editing, setEditing] = useState(false);

    const { data, setData, post, processing, reset, errors} = useForm({
        area: vacant.area,
        title: vacant.title,
        description: vacant.description,
        date_end: vacant.date_end,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('vacants.update'), {onSuccess: () => reset() });
    };

    return (
        <tr>
            <td>{vacant.title}</td>
            <td>{vacant.description}</td>
            <td>{vacant.date_end}</td>
        </tr>
    );
}