import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const emailInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        email: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroySocial'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => emailInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Eliminar Cuenta</h2>

                <p className="mt-1 text-sm text-gray-600">
                Una vez que tu cuenta sea eliminada, todos sus recursos y datos serán eliminados de forma permanente. 
                Antes de eliminar tu cuenta, por favor descarga cualquier dato o información que desees conservar.
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>Eliminar</DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Are you sure you want to delete your account?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Once your account is deleted, all of its resources and data will be permanently deleted. Please
                        enter your password to confirm you would like to permanently delete your account.
                    </p>

                    <div className="mt-6">
                        <InputLabel htmlFor="email" value="Email" className="sr-only" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            ref={emailInput}
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="Email"
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                        <DangerButton className="ml-3" disabled={processing}>
                            Delete Account
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
