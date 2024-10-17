'use client';

import { SetStateAction } from 'react';

const SearchBar = ({
    value,
    setValue,
    placeholder
}: {
    value: string;
    setValue: React.Dispatch<SetStateAction<string>>;
    placeholder: string;
}) => {
    return (
        <div>
            <input
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="border-gray-300 dark:border-gray-500 outline-gray-400 shadow-xs border-2 px-6 rounded-md py-2 w-full"
            />
        </div>
    );
};

export default SearchBar;
