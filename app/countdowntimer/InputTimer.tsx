import React from 'react';

const InputTimer = ({ label,value,setValue }: { label: string;value:number;setValue:React.Dispatch<React.SetStateAction<number>>}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value
            ? Number(e.currentTarget.value)
            : 0;
        setValue(newValue);
    };
    return (
        <div className="flex flex-col items-center px-4 py-2 justify-center gap-3">
            <p className="text-lg md:text-xl font-semibold tracking-wide text-gray-900 dark:text-gray-300">
                {label}
            </p>
            <input
                className="border-none outline-none text-lg md:text-2xl"
                placeholder="00"
                value={value === 0 ? '' : value}
                onChange={handleChange}
                type="number"
                min="0"
                max="99"
                onInput={(e) => {
                    const inputElement = e.currentTarget as HTMLInputElement;
                    if (inputElement.value.length > 2) {
                        inputElement.value = inputElement.value.slice(0, 2);
                    }
                }}
            />
        </div>
    );
};

export default InputTimer;
