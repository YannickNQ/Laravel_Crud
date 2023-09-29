import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { TypeAnimation } from "react-type-animation";

export default function TypeWriter({ children }) {
    return (
        <div className="relative hidden flex-1 flex-col justify-center px-5 pt-8 text-white bg-[url('https://e0.pxfuel.com/wallpapers/149/259/desktop-wallpaper-web-development.jpg')] bg-cover bg-no-repeat md:flex md:py-[22px] lg:px-8">
            <nav className="left-0 top-8 flex w-full px-6 sm:absolute md:top-[22px] md:px-6 lg:px-8 ">
                <h1 aria-label="WebDevelopers">
                    <div>
                        <Link
                            href="/"
                            className="flex cursor-default items-end text-[20px] font-bold leading-none lg:text-[22px]"
                        >
                            <ApplicationLogo className="w-16 h-16 fill-current" />
                            <span className="text-white text-3xl font-bold">
                                ebDevOps
                            </span>
                        </Link>
                    </div>
                </h1>
            </nav>
            <div
                className="flex flex-col text-[32px] leading-[1.2] md:text-[40px]"
                aria-hidden="true"
            >
                <TypeAnimation
                    sequence={[
                        "Somos estudiantes apasionados, explorando el vasto mundo del desarrollo web.",
                        1000,
                        "Transformamos ideas en aplicaciones web interactivas con React.",
                        1000,
                        "Con Laravel, la elegancia y la funcionalidad se unen en cada proyecto.",
                        1000,
                        "Inertia nos permite construir rápido, sin sacrificar la simplicidad.",
                        1000,
                        "Con Tailwind, nuestro diseño web es tan elegante como funcional.",
                        1000,
                        "Creamos experiencias de usuario excepcionales con Material UI.",
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </div>
        </div>
    );
}
