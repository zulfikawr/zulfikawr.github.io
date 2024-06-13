import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import Navbar from '../../components/navbar';
import { CardHoverEffect, hoverClassName } from '../../components/hover-card';
import Transition from '../../pages/transition'
import vuenotes from './assets/vuenotes.png';
import win95portfolio from './assets/win95portfolio.png';

const projects = [
    {
        href: 'https://vue-verse.web.app',
        src: vuenotes.src,
        alt: 'Vue Notes preview',
        title: 'Vue Notes',
        description: 'Responsive notes website inspired by Google Keep. Built in Vue 3, TypeScript, Vite, Pinia and Tailwind.',
    },
    {
        href: 'https://muhammad-zulfikar.web.app',
        src: win95portfolio.src,
        alt: 'Windows 95 Portfolio preview',
        title: 'Windows 95 Portfolio',
        description: 'Portfolio website that simulates Windows 95. Built in Vue 2, and deployed to Firebase.',
    },
];

export default function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key === 'k') {
                event.preventDefault();
                searchInputRef.current?.focus();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleSearchChange = (event: { target: { value: string; }; }) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(searchQuery) ||
        project.description.toLowerCase().includes(searchQuery)
    );

    return (
        <div className="pt-16">
            <Navbar />
            <Transition>
                <main className="mx-auto grid max-w-3xl grid-cols-1 md:grid-cols-2 px-6 pt-4 md:pt-16">
                    <div className="custom-card rounded-xl col-span-1 md:col-span-2 flex justify-between items-center p-4 relative mb-4">
                        <h2 className="col-span-2 flex relative">
                            <Link href="/" className="text-glow-black dark:text-glow-white hover:underline">
                                zulfikar
                            </Link>
                            {'/'}
                            <Link href="/projects" className="text-glow-black dark:text-glow-white hover:underline">
                                projects
                            </Link>
                        </h2>
                        <div className='relative flex items-center w-40 md:w-80 top-1 hidden md:block'>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                ref={searchInputRef}
                                className="w-full bg-transparent border-[1px] border-black rounded-lg shadow-lg hover:shadow-xl dark:border-white text-black dark:text-white placeholder-black dark:placeholder-white p-2 outline-none"
                                onChange={handleSearchChange}
                            />
                            <div className="absolute inset-y-0 right-0 bottom-2 flex items-center pr-3">
                                <span className="ml-2 text-xs text-gray-500 dark:text-gray-300">
                                    <kbd className="px-1 py-0.5 shadow-md bg-cream text-gray-700 rounded dark:bg-gray-800 dark:text-gray-300">Ctrl</kbd> + <kbd className="px-1 py-0.5 shadow-md bg-cream text-gray-700 rounded dark:bg-gray-800 dark:text-gray-300">K</kbd>
                                </span>
                            </div>
                        </div>
                    </div>
                    {filteredProjects.map((project, index) => (
                        <div key={index} className='p-2 md:p-4 rounded-xl mx-4 md:mx-0 md:col-span-1'>
                            <CardHoverEffect className="h-full">
                                <Link
                                    href={project.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={clsx(
                                        'group relative flex h-full w-full flex-col justify-between overflow-hidden text-white rounded-2xl custom-card',
                                        hoverClassName,
                                    )}
                                >
                                    <span aria-hidden className="pointer-events-none absolute inset-0 -z-20">
                                        <img
                                            src={project.src}
                                            alt={project.alt}
                                            className="absolute h-full w-full object-cover object-center transition-all brightness-[0.9] group-hover:brightness-[0.5] dark:group-hover:brightness-[0.9]"
                                        />
                                        <span
                                            aria-hidden
                                            className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50 opacity-0 group-hover:opacity-100 transition-opacity"
                                        />
                                    </span>

                                    <span className="px-2 pt-3 pb-4 md:px-6 md:pt-6 md:pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="flex justify-between pb-4 pl-2 md:pl-0 md:pb-0">
                                            <span className="block font-semibold text-xl text-white">{project.title}</span>
                                            <FiArrowUpRight className="text-xl opacity-0 transition duration-500 group-hover:opacity-50" />
                                        </span>
                                    </span>

                                    <span className="space-y-0.5 pt-8 px-4 pb-3 md:pl-6 md:pb-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-sm">{project.description}</span>
                                    </span>
                                </Link>
                            </CardHoverEffect>
                        </div>
                    ))}
                </main>

                <footer className="mx-auto flex max-w-3xl items-center justify-center px-6 pb-12 text-sm text-neutral-600 dark:text-gray-400 [&_a:hover]:underline [&_a]:p-4 [&_a]:transition-colors">
                    <Link href="/">/</Link>
                    <Link href="/stats">/stats</Link>
                    <Link href="https://github.com/muhammad-zulfikar/muhammad-zulfikar.github.io">/source</Link>
                </footer>
            </Transition>
        </div>
    );
}


