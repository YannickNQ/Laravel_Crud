import { Link, Head } from '@inertiajs/react';
import TypeWriter from '@/Layouts/TypeWriterLayout';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Bienvenida" />
            <div className="flex min-h-full w-screen flex-col sm:min-h-[100dvh] md:grid md:grid-cols-2 lg:grid-cols-[60%_40%]">
                <TypeWriter />
                <div className="relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black dark:bg-black dark:text-white sm:h-full md:rounded-none md:px-6">
                    <div className="relative flex w-full grow flex-col items-center justify-center">
                        <h2 className="text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8">Empezar</h2>
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
