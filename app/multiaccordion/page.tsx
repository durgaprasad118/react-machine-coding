'use client';
import { BreadCrumbComponent } from '@/components/BreadCrumb';
import { accordionData } from '@/lib/AccordionData';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
interface ItemType {
    id: number;
    qsn: string;
    ans: string;
}
const AccordionItem = ({ id, qsn, ans }: ItemType) => {
    const [open, setOpen] = useState(false);
    return (
        <div key={id}>
            <div
                className="px-4 py-3 border border-1 border-gray-200 dark:border-gray-500 dark:text-gray-200 hover:bg-[#c084fc] dark:hover:bg-[#c084fc]shadow-sm rounded-md tranform transition-transform duration-200 ease-in-out"
                onClick={() => setOpen(!open)}
            >
                <div className="flex items-center justify-between h-auto transform transition-h duration-400 ease-in-out delay-75 ">
                    <h1
                        className={`${open ? 'border-b border-b-1 border-b-gray-600 dark:border-gray-300' : ''}`}
                    >
                        {' '}
                        {qsn}
                    </h1>
                    {open ? <ChevronDown /> : <ChevronUp />}
                </div>

                {open && <p className="mt-2">{ans}</p>}
            </div>
        </div>
    );
};
const AccordionMultiple = () => {
    const path = usePathname();
    return (
        <main className="w-full h-[90vh] flex flex-col items-center ">
            <div className="flex items-center w-[90%] justify-between mt-20 mb-10">
                <BreadCrumbComponent path={path.slice(1)} />
            </div>
            <main className="w-[90%]  mx-auto">
                <div className="flex flex-col gap-4 w-full">
                    {accordionData.map((item: ItemType) => {
                        return <AccordionItem key={item.id} {...item} />;
                    })}
                </div>
            </main>
        </main>
    );
};
export default AccordionMultiple;
