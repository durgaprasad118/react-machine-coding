import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const BreadCrumbComponent = ({ path }: { path: string }) => {
    return (
        <section className="flex items-center justify-evenly gap-2 ">
            <Link href="/" className="text-zinc-500 dark:text-zinc-400">
                components
            </Link>
            <ChevronRight className="text-10 h-4 w-4" />
            <h2>{path}</h2>
        </section>
    );
};
