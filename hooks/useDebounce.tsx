import { useEffect, useState } from 'react';
const useDebounce = (value: string) => {
    const [updatedValue, setUpdatedValue] = useState(value);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setUpdatedValue(value);
        }, 500);
        return () => clearTimeout(timeout);
    }, [value, setUpdatedValue]);
    return updatedValue;
};

export default useDebounce;
