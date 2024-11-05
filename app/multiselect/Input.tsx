import React, { SetStateAction } from 'react';

const Input = ({value,setValue }:{
    value:string,
    setValue:React.Dispatch<SetStateAction<string>>
}) => {
    return (
        <div>
            <input
                placeholder="Enter the value"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                className="w-full border-gray-300 dark:border-gray-500 outline-gray-400 shadow-xs border-2 px-6 rounded-md py-2"
            />
        </div>
    );
};

export default Input;
