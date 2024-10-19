import useDebounce from '@/hooks/useDebounce';
import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Input = ({
    placeholder,
    staticData,
    fetchSuggestions,
    inputValue,
    setInputValue,
    onSelect
}: {
    placeholder: string;
    fetchSuggestions?: (query: string) => void;
    staticData?: string[];
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    onSelect?: (value: string) => void;
}) => {
    const debouncedValue = useDebounce(inputValue, 1000);
    const [error, setError] = useState<null | unknown>(null);
    const [loading, setLoading] = useState(false);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [isSelected, setIsSelected] = useState(false);

    const getSuggestions = async (query: string) => {
        setLoading(true);
        setError(null);
        try {
            let foodItems: string[] = [];
            if (staticData && staticData.length > 0) {
                foodItems = debouncedValue
                    ? staticData.filter((x) =>
                          x.toLowerCase().includes(query.toLowerCase())
                      )
                    : [];
            } else if (fetchSuggestions) {
                const apiResults = (await fetchSuggestions(query)) ?? [];
                foodItems = apiResults.map(
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
        if (debouncedValue.length >= 1 && !isSelected) {
            getSuggestions(debouncedValue);
        } else {
            setSuggestions([]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue, isSelected]);

    return (
        <div className="w-full relative flex items-center justify-center">
            <div className="md:w-[30%] w-[90%]">
                <div className="flex items-center ">
                    <input
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            setIsSelected(false);
                        }}
                        className="w-full border-gray-300 dark:border-gray-500 outline-gray-400 shadow-xs border-2 px-6 rounded-md py-2"
                    />
                    <X
                        className="translate-x-[-155%] text-gray-300 cursor-pointer"
                        onClick={() => {
                            if (onSelect) onSelect('');
                            setInputValue('');
                        }}
                    />
                </div>
                {loading ? (
                    <p className="px-2 font-medium text-lg mt-2">Loading...</p>
                ) : error ? (
                    <p className="px-2 font-medium text-lg mt-2">Error</p>
                ) : debouncedValue &&
                  suggestions.length === 0 &&
                  !isSelected ? (
                    <p className="px-2 font-medium text-lg mt-2">
                        No results found
                    </p>
                ) : (
                    <div
                        className={`w-[28.5%] absolute z-50 box-border py-2 h-auto border-2 flex flex-col justify-center items-start bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-500 translate-y-[-3px] rounded-md ${
                            suggestions.length === 0 ? 'hidden' : ''
                        }`}
                    >
                        {suggestions.map((x) => {
                            const parts = x.split(
                                new RegExp(`(${debouncedValue})`, 'gi')
                            );
                            return (
                                <p
                                    key={x}
                                    className="px-2 font-medium text-lg hover:bg-gray-300 dark:hover:bg-gray-500 w-full py-2 rounded-md"
                                    onClick={() => {
                                        setInputValue(x);
                                        setSuggestions([]);
                                        setIsSelected(true);
                                        if (onSelect) {
                                            onSelect(x);
                                        }
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
