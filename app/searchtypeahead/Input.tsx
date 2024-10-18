import useDebounce from '@/hooks/useDebounce';
import React, { useEffect, useState } from 'react';
const Input = ({
    placeholder,
    staticData,
    fetchSuggestions,
    inputValue,
    setInputValue
}: {
    placeholder: string;
    fetchSuggestions?: (query: string) => void;
    staticData?: string[];
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const debouncedValue = useDebounce(inputValue, 500);
    const [error, setError] = useState<null | unknown>(null);
    const [loading, setLoading] = useState(false);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const getSuggestions = async (query: string) => {
        setLoading(true);
        setError(null);
        try {
            let foodItems: string[] = [];
            if (staticData!.length > 0) {
                foodItems = debouncedValue
                    ? staticData!.filter((x) =>
                          x.toLowerCase().includes(query.toLowerCase())
                      )
                    : [];
            } else if (fetchSuggestions) {
                const apiresults = (await fetchSuggestions(query)) ?? [];
                foodItems = apiresults.map(
                    (item: { name: string }) => item.name
                );
            }
            setSuggestions(foodItems);
        } catch (error: unknown) {
            console.log(error);
            setSuggestions([]);
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (debouncedValue.length >= 1) {
            getSuggestions(debouncedValue);
        } else {
            setSuggestions([]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);
    return (
        <div className="w-full flex items-center justify-center">
            <div className="md:w-[30%] w-[90%]">
                <input
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full border-gray-300 dark:border-gray-500 outline-gray-400 shadow-xs border-2 px-6 rounded-md py-2"
                />
                {loading ? (
                    <p className="px-2 font-medium text-lg mt-2">Loading...</p>
                ) : error ? (
                    <p className="px-2 font-medium text-lg mt-2">Error</p>
                ) : debouncedValue && suggestions.length == 0 ? (
                    <p className="px-2 font-medium text-lg mt-2">
                        No results found
                    </p>
                ) : (
                    <div
                        className={`w-full py-2 h-auto border-2 flex flex-col justify-center items-start px-2 border-gray-300 dark:border-gray-500 translate-y-[-3px] rounded-md ${
                            suggestions.length == 0 ? 'hidden' : ''
                        }`}
                    >
                        {suggestions.map((x) => {
                            const parts = x.split(
                                new RegExp(`(${debouncedValue})`, 'gi')
                            );
                            return (
                                <p
                                    key={x}
                                    className="px-2 font-medium text-lg hover:bg-gray-200 w-full py-2 rounded-md"
                                    onClick={() => {
                                        setInputValue(x);
                                        setSuggestions([]);
                                    }}
                                >
                                    {parts.map((part, index) =>
                                        part.toLowerCase() ===
                                        debouncedValue.toLowerCase() ? (
                                            <span
                                                key={index}
                                                className="text-blue-500 font-semibold"
                                            >
                                                {part}
                                            </span>
                                        ) : (
                                            <span key={index}>{part}</span>
                                        )
                                    )}
                                </p>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Input;
