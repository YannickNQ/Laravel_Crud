import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';

import { Head, Link, useForm } from '@inertiajs/react';
import SocialButton from '@/Components/SocialButton';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
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
                    <Head title="Log in" />
                    <div className='flex flex-col space-y-2 items-center justify-center'>
                        

                        <a href="/github-auth/redirect"><SocialButton color = "black" type = "github" label="Sign In with GitHub"/></a>

                        <a href="/google-auth/redirect"><SocialButton color = "	#DB4437" type = "google" label="Sign In with Google"/></a>
                        
                        
                        <a href="/facebook-auth/redirect"><SocialButton color = "#4267B2" type = "facebook" label="Sign In with Facebook"/></a>
                        
                    </div>
                    <span className='flex items-center justify-center mt-2'>ó</span>

                    {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="email" className="mt-2" value="Correo Electrónico" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
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
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <span className="ml-2 text-sm text-gray-600">Recordarme</span>
                            </label>
                        </div>
                        <div className="flex justify-center items-center mt-2 ">
                            <PrimaryButton className='bg-blue-800 hover:bg-sky-600' disabled={processing}>
                                Iniciar Sesión
                            </PrimaryButton>
                        </div>

                        <div className="flex space-x-4 items-center justify-center mt-4 sm:space-x-2">
                                <Link
                                    href={route('register')}
                                    className="text-sm text-gray-700 hover:text-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                        Crear cuenta
                                </Link>

                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-sm text-gray-700 hover:text-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            )}
                        </div>
                        
                    </form>
                </GuestLayout>
            </Grid>
        </Grid>
    );
}
