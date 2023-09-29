import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className="w-full sm:max-w-md mt-6 px-6 py-2 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <span className='text-xl font-semibold w-full sm:max-w-md px-6 py-4 overflow-hidden sm:rounded-lg flex items-center text-center justify-center '>Inicia sesión o regístrate en cuestión de segundos</span>
                <span className='text-base'>Usa tu correo electrónico u otro servicio para acceder a Canva gratis.</span>
                {children}
            </div>
        </div>
    );
}
