import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import SocialButton from '@/Components/SocialButton';
import { useState } from 'react';
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";

export default function Register() {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
                <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://e0.pxfuel.com/wallpapers/149/259/desktop-wallpaper-web-development.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <GuestLayout>
                    <Head title="Register" />

                    <div className="flex flex-col">
                        <a href='/auth/github/redirect' className='flex w-full justify-center items-center'>
                            <SocialButton
                                type="github"
                                label="Usar GitHub"
                            />
                        </a>
                        <a href='/auth/google/redirect' className='flex w-full justify-center items-center'>
                            <SocialButton
                                type="google"
                                label="Usar Google"
                            />
                        </a>

                        <a className='flex w-full justify-center items-center'>
                            <SocialButton
                                type="facebook"
                                label="Usar Facebook"
                            />
                        </a>
                    </div>
                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="name" value="Nombre" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Correo Electronico" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Contraseña" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="password_confirmation" value="Confirmar contraseña" />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />
                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <Link
                                href={route('login')}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                ¿Tienes cuenta?
                            </Link>
                            <PrimaryButton className="ml-4" disabled={processing}>
                                Registrarse
                            </PrimaryButton>
                        </div>
                    </form>
                </GuestLayout>
            </Grid>
        </Grid>
    );
}
