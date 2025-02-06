import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import Navbar from '../../components/navbar';
import { CardHoverEffect, hoverClassName } from '../../components/hover-card';
import Transition from '../../pages/transition';
import vuenotes from './assets/vuenotes.png';
import win95portfolio from './assets/win95portfolio.png';

const projects = [
  {
    href: 'https://vue-verse.web.app',
    src: vuenotes.src,
    alt: 'Vue Notes preview',
    title: 'Vue Notes',
    description:
      'Responsive notes website inspired by Google Keep. Built in Vue 3, TypeScript, Vite, Pinia, and Tailwind.',
  },
  {
    href: 'https://muhammad-zulfikar.web.app',
    src: win95portfolio.src,
    alt: 'Windows 95 Portfolio preview',
    title: 'Windows 95 Portfolio',
    description:
      'Portfolio website that simulates Windows 95. Built in Vue 2 and deployed to Firebase.',
  },
];

export default function Home() {
  return (
    <div className="pt-16">
      <Navbar />
      <Transition>
        <main className="mx-auto grid max-w-3xl grid-cols-1 md:grid-cols-2 px-6 pt-4 md:pt-16 gap-6">
          <h2 className="col-span-2 text-xl font-semibold text-center">
            Featured Projects
          </h2>
          {projects.map((project, index) => (
            <div key={index} className="p-2 md:p-4 rounded-xl">
              <CardHoverEffect className="h-full">
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex h-full flex-col justify-between overflow-hidden text-white rounded-2xl custom-card ${hoverClassName}`}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-20"
                  >
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

                  <span className="px-4 pt-6 pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="flex justify-between items-center">
                      <span className="block font-semibold text-lg text-white">
                        {project.title}
                      </span>
                      <FiArrowUpRight className="text-xl opacity-0 transition duration-500 group-hover:opacity-50" />
                    </span>
                  </span>

                  <span className="px-4 pb-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm">{project.description}</p>
                  </span>
                </Link>
              </CardHoverEffect>
            </div>
          ))}
        </main>
      </Transition>
    </div>
  );
}
