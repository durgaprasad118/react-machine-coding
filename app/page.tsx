import Link from 'next/link';
export default function Home() {
    const components = [
        { name: 'Single Accordion', path: '/singleaccordion' },
        { name: 'Multi Accordion', path: '/multiaccordion' }
    ];
    return (
        <main className="flex flex-col items-center justify-center h-auto w-full">
            {/* Debounced search bar*/}
            <div className="grid grid-cols-1 my-20 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-12 w-full ">
                {components.map((item) => (
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
