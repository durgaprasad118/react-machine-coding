'use client';
import { BreadCrumbComponent } from '@/components/BreadCrumb';
import { usePathname } from 'next/navigation';
import React from 'react';
import Link from './Link';

const LinkPreveiw = () => {
    const path = usePathname();
    return (
        <main className="w-full h-[90vh] flex flex-col items-center ">
            <div className="flex items-center w-[90%] justify-between mt-20 mb-10">
                <BreadCrumbComponent path={path.slice(1)} />
            </div>
            <main className="w-[90%]  mx-auto my-10 flex items-center justify-center">
                <div className="font-medium w-[80%]  md:text-xl text-lg flex flex-wrap justify-center gap-2">
                    This is a link{' '}
                    <Link
                        url="https://durgaprasad.dev"
                        textToShow={'durga prasad'}
                        isStatic={false}
                        imageSrc=""
                    />
                    <Link
                        url="https://github.com/durgaprasad118"
                        textToShow={'my github'}
                        isStatic={false}
                        imageSrc=""
                    />
                    <Link
                        url="https://taskmaestro.vercel.app"
                        textToShow={'task maestro'}
                        isStatic={false}
                        imageSrc=""
                    />
                </div>
            </main>
        </main>
    );
};

export default LinkPreveiw;
