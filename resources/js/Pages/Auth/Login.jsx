import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";

import { Head, Link, useForm } from "@inertiajs/react";
import SocialButton from "@/Components/SocialButton";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            <div className="flex flex-col">
                <a href="/auth/github/redirect" className='flex w-full justify-center items-center'>
                    <SocialButton
                        className="text-black"
                        type="github"
                        label="Usar GitHub"
                    />
                </a>

                <a href="/auth/google/redirect" className='flex w-full justify-center items-center'>
                    <SocialButton
                        className="text-black"
                        type="google"
                        label="Usar Google"
                    />
                </a>

                <a href="/auth/facebook/redirect" className='flex w-full justify-center items-center'>
                    <SocialButton
                        className="text-black font-normal"
                        type="facebook"
                        label="Usar Facebook"
                    />
                </a>
                <a href="/auth/facebook/redirect" className='flex w-full justify-center items-center'>
                    <SocialButton
                        className="text-black font-normal"
                        type="email"
                        label="Usar mi correo"
                    />
                </a>
            </div>

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <InputLabel
                        htmlFor="email"
                        className="mt-2"
                        value="Correo Electrónico"
                    />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
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
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ml-2 text-sm text-gray-600">
                            Recordarme
                        </span>
                    </label>
                </div>
                <div className="flex justify-center items-center mt-2 ">
                    <PrimaryButton
                        className="bg-blue-800 hover:bg-sky-600"
                        disabled={processing}
                    >
                        Iniciar Sesión
                    </PrimaryButton>
                </div>

                <div className="flex space-x-4 items-center justify-center mt-4 sm:space-x-2">
                    <Link
                        href={route("register")}
                        className="text-sm text-gray-700 hover:text-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Crear cuenta
                    </Link>

                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="text-sm text-gray-700 hover:text-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            ¿Olvidaste tu contraseña?
                        </Link>
                    )}
                </div>
            </form>
        </GuestLayout>
    );
}
