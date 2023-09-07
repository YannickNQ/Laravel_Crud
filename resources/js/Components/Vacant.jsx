import React, {useState} from "react";
import {useForm, usePage} from '@inertiajs/react';


export default function Vacant({ vacant }){
    const { auth } = usePage().props;

    const [editing, setEditing] = useState(false);

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
        <div className="p-6 space-x-2">
            <div className="flex-1">
                
            </div>
            <div className="flex-1">
                
            </div>
        </div>
    )
}