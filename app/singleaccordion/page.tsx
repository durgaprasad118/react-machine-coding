'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { accordionData } from '@/lib/AccordionData';
import { usePathname } from 'next/navigation';
import { BreadCrumbComponent } from '@/components/BreadCrumb';
interface ItemType {
    id: number;
    qsn: string;
    ans: string;
    ind: number;
    setIndex: Dispatch<SetStateAction<number>>;
}

interface ItemTypes {
    id: number;
    qsn: string;
    ans: string;
}
const AccordionItem = ({ id, qsn, ans, ind, setIndex }: ItemType) => {
    return (
        <div>
            <div
                className="px-4 py-3 border border-1 border-gray-200 rounded-md"
                onClick={() => setIndex(id)}
            >
                <div className="flex items-center justify-between h-auto transform transition-all duration-400 ease-in-out delay-75 ">
                    <h1
                        className={`${id == ind ? 'border-b border-b-1 border-b-gray-300' : ''}`}
                    >
                        {' '}
                        {qsn}
                    </h1>
                    {id == ind ? <ChevronDown /> : <ChevronUp />}
                </div>

                {id == ind && <p className="mt-2">{ans}</p>}
            </div>
        </div>
    );
};
const AccordionSingle = () => {
    const [ind, setInd] = useState<number>(-1);
    const path = usePathname();
    return (
        <main className="w-full h-[90vh] flex flex-col items-center ">
            <div className="flex items-center w-[90%] justify-between my-20">
                <BreadCrumbComponent path={path.slice(1)} />
            </div>
            <main className="w-[90%]  mx-auto">
                <div className="flex flex-col gap-4 w-full">
                    {accordionData.map((item: ItemTypes) => {
                        return (
                            <AccordionItem
                                key={item.id}
                                {...item}
                                ind={ind}
                                setIndex={setInd}
                            />
                        );
                    })}
                </div>
            </main>
        </main>
    );
};

export default AccordionSingle;
