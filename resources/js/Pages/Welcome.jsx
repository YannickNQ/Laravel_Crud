import { Link, Head } from '@inertiajs/react';
import TypeWriter from '@/Layouts/TypeWriterLayout';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Bienvenida" />
            {/* <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div> */}
            <div className="flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-2 lg:lg:grid-cols-[60%_40%]">
                <TypeWriter />
                <div className="relative flex grow flex-col justify-between bg-white px-8 text-black sm:rounded-t-[30px] md:rounded-none md:px-6">
                    <div className="relative flex w-full grow flex-col items-center justify-center">
                        <h2 className="text-center text-[20px] leading-[1.2] md:test-[32px] md:leading-8">Empezar</h2>
                        <div className="mt-5 w-full max-w-[440px]">
                            <div className="grid gap-x-3 gap-y-2 sm:grid-cols-2 sm:gap-y-0">
                                <Link
                                    href={route('login')}
                                    className="relative flex h-12 items-center justify-center rounded-md text-center text-base font-medium bg-blue-800 text-white hover:bg-blue-500"
                                >
                                    Iniciar Sesión
                                </Link>

                                <Link
                                    href={route('register')}
                                    className="relative flex h-12 items-center justify-center rounded-md text-center text-base font-medium bg-blue-800 text-white hover:bg-blue-500"
                                >
                                    Registrarse
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
