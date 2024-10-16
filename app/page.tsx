import Link from 'next/link';

export default function Home() {
    const components = [
        { name: 'Single Accordion', path: '/singleaccordion' },
        { name: 'Multi Accordion', path: '/multiaccordion' }
    ];
    return (
        <main className="flex flex-col items-center justify-center h-auto w-full">
            <h1 className="my-8">All the components in one place</h1>
            {/* Debounced search bar*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 w-full ">
                {components.map((item) => (
                    <Link key={item.name} href={item.path}>
                        <div className="p-4 border rounded shadow dark:hover:bg-gray-800 hover:bg-gray-100 border-gray-600 flex items-center justify-center transition-colors">
                            {item.name}
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
