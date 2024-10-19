'use client';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const Navbar = () => {
    const [isMounted, setIsMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return (
        <nav className="dark:bg-gray-900 bg-gray-200 border border-b-gray-300 dark:border-none">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <Link
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#C084FC] ">
                        Components
                    </span>
                </Link>

                <button
                    onClick={() =>
                        theme === 'dark' ? setTheme('light') : setTheme('dark')
                    }
                    className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                    {currentTheme === 'dark' ? (
                        <SunIcon className="h-[18px]" />
                    ) : (
                        <MoonIcon className="h-[18px]" />
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
