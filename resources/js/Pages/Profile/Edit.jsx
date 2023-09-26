import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import DeleteUserSocialForm from './Partials/DeleteUserSocialForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';

export default function Edit({ auth, mustVerifyEmail, status }) {

    const social = auth.user.social;

    let contentToRender;

    if (social === null) {
        //Mostrar una página o componente si "social" es null
        contentToRender = (
            <div>
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <UpdatePasswordForm className="max-w-xl" />
                </div>
                {/* <p>Este es el contenido cuando social es null.</p> */}
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <DeleteUserForm className="max-w-xl" />
                </div>
            </div>
        );
    } else {
        //Mostrar otro contenido si no se cumple ninguna de las condiciones anteriores
        contentToRender = (
            <div>
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <DeleteUserSocialForm className="max-w-xl" />
                </div>
                 {/*Contenido por defecto*/}
                {/* <p>Este es el contenido por social.</p> */}
            </div>  
        );
    }



    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Perfil</h2>}
        >
            <Head title="Perfil" />

            <div className="py-10">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>
                    {/* Renderizar el contenido condicional */}
                    {contentToRender}     
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
