'use client';
import { BreadCrumbComponent } from '@/components/BreadCrumb';
import { usePathname } from 'next/navigation';
import Input from './Input';
import { useState } from 'react';
const MultiSelect = () => {
    const [value, setValue] = useState('');
    const path = usePathname();
    return (
        <main className="w-full h-[90vh] flex flex-col items-center ">
            <div className="flex items-center w-[90%] justify-between mt-20 mb-10">
                <BreadCrumbComponent path={path.slice(1)} />
            </div>
            <main className="w-[92%]  mx-auto ">
                <div className="flex justify-center">
                    <Input value={value} setValue={setValue} />
                </div>
            </main>
        </main>
    );
};
export default MultiSelect;
