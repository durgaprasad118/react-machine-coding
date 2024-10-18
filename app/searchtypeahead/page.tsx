'use client';
import { BreadCrumbComponent } from '@/components/BreadCrumb';
import { usePathname } from 'next/navigation';
import Input from './Input';
import { useState } from 'react';
const staticData: string[] = [];
const Search = () => {
    const [inputValue,setInputValue] = useState("")
    const path = usePathname();
    const recipeResults = async (query: string) => {
        try {
            const response = await fetch(
                `https://dummyjson.com/recipes/search?q=${query}`
            );
            const result = await response.json();
            console.log(result);
            return result.recipes;
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <main className="w-full h-[90vh] flex flex-col items-center ">
            <div className="flex items-center w-[90%] justify-between mt-20 mb-10">
                <BreadCrumbComponent path={path.slice(1)} />
            </div>
            <main className="w-[90%]  mx-auto">
                <Input
                    placeholder="Search Here"
                    fetchSuggestions={recipeResults}
                    staticData={staticData}
                    inputValue = {inputValue}
                    setInputValue={setInputValue}
                />
            </main>
        </main>
    );
};
export default Search;
