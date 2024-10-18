'use client';
import useDebounce from '@/hooks/useDebounce';
import Link from 'next/link';
import { useState } from 'react';
import Input from './searchtypeahead/Input';
export default function Home() {
    const [filterValue, setFilterValue] = useState('');
    const components = [
        { name: 'Single Accordion', path: '/singleaccordion' },
        { name: 'Multi Accordion', path: '/multiaccordion' },
        { name: 'count down timer', path: '/countdowntimer' },
        { name: 'Search TypeAhead', path: '/searchtypeahead' }
    ];
    const debounced = useDebounce(filterValue, 500);
    const filteredComponents = components.filter((x) =>
        x.name.toLowerCase().includes(debounced.toLowerCase())
    );
    return (
        <main className="flex flex-col items-center justify-center h-auto w-full">
            <div className="my-14 w-full  flex justify-center ">
                <Input
                    placeholder="Search the component here"
                    inputValue={filterValue}
                    setInputValue={setFilterValue}
                    staticData={components.map((x) => x.name)}
                />
                {/* <SearchBar

                    placeholder="Search component"
                    value={filterValue}
                    setValue={setFilterValue}
                /> */}
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-12 w-full ">
                {filteredComponents.map((item) => (
                    <Link key={item.name} href={item.path}>
                        <div className="p-4 border rounded shadow dark:hover:bg-[#C084FC] hover:bg-[#C084FC] border-gray-200 dark:border-gray-600 flex items-center dark:text-white font-semibold justify-center transition-colors">
                            {item.name}
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
