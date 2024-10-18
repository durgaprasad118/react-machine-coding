import { useEffect, useState } from 'react';
const useDebounce = (value: string,time:number) => {
    const [updatedValue, setUpdatedValue] = useState(value);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setUpdatedValue(value);
        }, time);
        return () => clearTimeout(timeout);
    }, [value, setUpdatedValue]);
    return updatedValue;
};

export default useDebounce;
