'use client';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [mounted, setMounted] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (!mounted) return null;

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="dark:bg-gray-900 bg-gray-50 border border-b-gray-100 dark:border-none">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#C084FC] ">
                        Components
                    </span>
                </Link>

                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={menuOpen}
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className={`${
                        menuOpen ? 'block' : 'hidden'
                    } w-full md:block md:w-auto`}
                    id="navbar-default"
                >
                    {/*     <Link */}
                    {/*         href="/" */}
                    {/*         className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-[#C084FC] md:p-0 dark:text-white md:dark:text-[#C084FC]" */}
                    {/*         aria-current="page" */}
                    {/*     > */}
                    {/*         Home */}
                    {/*     </Link> */}
                    {/* </li> */}
                    {/* <li> */}
                    {/*     <Link */}
                    {/*         href="/about" */}
                    {/*         className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#C084FC] md:p-0 dark:text-white md:dark:hover:text-[#C084FC] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" */}
                    {/*     > */}
                    {/*         Components */}
                    {/*     </Link> */}

                    <button
                        onClick={() =>
                            theme === 'dark'
                                ? setTheme('light')
                                : setTheme('dark')
                        }
                    >
                        {currentTheme === 'dark' ? (
                            <SunIcon className="h-[18px]" />
                        ) : (
                            <MoonIcon className="h-[18px]" />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
