'use client';
import Image from 'next/image';
import { encode } from 'qss';
import React, { useState } from 'react';

const Link = ({
    url,
    textToShow,
    isStatic,
    imageSrc
}: {
    url: string;
    textToShow: string;
    isStatic: boolean;
    imageSrc?: string;
}) => {
    const [show, setShow] = useState(false);
    let src;
    if (!isStatic) {
        const params = encode({
            url,
            screenshot: true,
            meta: false,
            embed: 'screenshot.url',
            colorScheme: 'dark',
            'viewport.isMobile': true,
            'viewport.deviceScaleFactor': 1
        });
        src = `https://api.microlink.io/?${params}`;
    } else {
        src = imageSrc;
    }
    return (
        <div className="inline ml-1  relative">
            <span
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                className="hover:border-b-2  hover:text-blue-400 hover:border-b-blue-500 transition-colors delay-75 duration-100 ease-in"
            >
                {' '}
                {textToShow}
            </span>
            {src && show && (
                <Image
                    src={src}
                    height={60}
                    width={100}
                    alt="preveiw image"
                    objectFit="cover"
                    className="
                    absolute z-50 w-auto h-auto border-2 border-transparent dark:bg-white bg-gray-800 shadow rounded-xl  hover:scale-105 hover:border-neutral-200 dark:hover:border-neutral-800 transition-all duration-300 ease-in-out bottom-6 right-1 md:w-32 md:h-24 md:bottom-6 md:right-1 sm:w-24 sm:h-16 xs:w-20 xs:h-14"
                />
            )}
        </div>
    );
};

export default Link;
