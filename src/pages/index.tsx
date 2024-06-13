import clsx from 'clsx';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import {
	SiSpotify,
	SiWhatsapp,
	SiLinkedin,
	SiGithub
} from 'react-icons/si';
import Navbar from '../components/navbar';
import { CardHoverEffect, hoverClassName } from '../components/hover-card';
import { Time } from '../components/time';
import matrix from '../images/matrix.gif';
import Skills from '../components/skills';
import me from '../images/me.jpeg';
import location from '../images/location.png';
import Blog from '../components/projects';
import { ContactForm } from '../components/contact-form';
import Transition from './transition';

export default function Home() {
	return (
		<div>
			<Navbar />
			<div className="pt-16 space-y-2">
				<Transition>
					<main className="mx-auto grid max-w-3xl grid-cols-6 gap-6 px-6 pt-4 md:pt-16">
						<div className="col-span-6 md:col-span-4 flex h-52 flex-col justify-between overflow-hidden rounded-2xl px-8 py-8 custom-card">
							<div className="flex gap-4">
								<Link
									className="flex items-center justify-center space-x-1.5 rounded-lg px-2 py-0.5 custom-card"
									href="/projects"
								>
									<span>/projects</span>
									<span>
										<FiArrowUpRight />
									</span>
								</Link>
								<Link
									className="flex items-center justify-center space-x-1.5 rounded-lg px-2 py-0.5 custom-card"
									href="/blog"
								>
									<span>/blog</span>
									<span>
										<FiArrowUpRight />
									</span>
								</Link>
							</div>

							<div className="space-y-4">
								<div>
									<h1 className="text-xl text-glow-black dark:text-white dark:text-glow-white">
										Muhammad Zulfikar
									</h1>

									<p className="text-gray-500 dark:text-white dark:text-opacity-70">
										Data Analyst | Web Developer
									</p>
								</div>
							</div>
						</div>

						<CardHoverEffect className="col-span-3 md:col-span-2 md:block hidden">
							<Link
								href="https://www.linkedin.com/in/zulfikar-muhammad"
								target="_blank"
								rel="noopener noreferrer"
								className={clsx(
									'flex h-full items-center justify-center rounded-2xl text-4xl dark:text-white custom-card',
									hoverClassName,
								)}
							>
								<span aria-hidden className="absolute top-0 right-0 p-2">
									<FiArrowUpRight className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
								</span>
								<div className="scale-[1] space-y-1 text-center md:scale-[1.2]">
									<h2 className='pb-2 [&>svg]:text-gray-700 dark:[&>svg]:text-gray-100'>
										<SiLinkedin className="inline" />
									</h2>
									<p className="text-sm text-neutral-500 dark:text-neutral-400">
										<span>zulfikar-muhammad</span>
									</p>
								</div>
							</Link>
						</CardHoverEffect>

						<CardHoverEffect className="col-span-3 h-full md:col-span-3">
							<Link
								href="https://github.com/muhammad-zulfikar"
								target="_blank"
								rel="noopener noreferrer"
								className={clsx(
									'group relative flex h-full w-full flex-col justify-between overflow-hidden text-white rounded-2xl custom-card',
									hoverClassName,
								)}
							>
								<span aria-hidden className="pointer-events-none absolute inset-0 -z-20">
									<img
										src={matrix.src}
										alt="The Matrix scrolling characters effect"
										className="absolute inset-0 h-full w-full object-cover object-center invert brightness-50 dark:brightness-[0.7] dark:invert-0"
									/>

									<span
										aria-hidden
										className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50"
									/>
								</span>

								<span aria-hidden className="px-2 pt-3 pb-4 md:px-6 md:pt-6 md:pb-4">
									<span className="flex justify-between pb-4 pl-2 md:pl-0 md:pb-0 text-gray-800 dark:text-white">
										<SiGithub className="text-3xl" />
										<FiArrowUpRight className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
									</span>
								</span>

								<span className="space-y-0.5 pt-8 px-4 pb-3 md:pl-6 md:pb-6 text-white">
									<span className="block font-semibold">GitHub</span>
									<span className="text-sm">My open source work <span className="hidden md:inline">&amp; contributions</span></span>
								</span>
							</Link>
						</CardHoverEffect>


						<Time />

						<CardHoverEffect className="col-span-2 h-full hidden md:block">
							<Link
								href="https://wa.me/+6285156453730"
								target="_blank"
								rel="noopener noreferrer"
								className={clsx(
									'group relative flex h-48 items-center justify-center rounded-2xl text-4xl custom-card',
									hoverClassName
								)}
							>
								<span aria-hidden className="absolute top-0 right-0 p-4">
									<FiArrowUpRight className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
								</span>
								<div className="scale-[1] space-y-1 text-center md:scale-[1.2]">
									<h2 className='pb-2 [&>svg]:text-gray-700 dark:[&>svg]:text-gray-100'>
										<SiWhatsapp className="inline" />
									</h2>
									<p className='text-sm text-neutral-500 dark:text-neutral-400'>
										<span>+62 851 5645 3730</span>
									</p>
								</div>
							</Link>
						</CardHoverEffect>


						<div className="col-span-3 grid shrink-0 grid-cols-1 gap-6 md:col-span-1 [&_>_div]:shrink-0 md:hidden">
							<CardHoverEffect>
								<Link
									href="https://www.linkedin.com/in/zulfikar-muhammad"
									target="_blank"
									rel="noopener noreferrer"
									className={clsx(
										'flex h-full items-center justify-center rounded-2xl text-4xl dark:text-white custom-card',
										hoverClassName
									)}
								>
									<span aria-hidden className="absolute top-0 right-0 p-2">
										<FiArrowUpRight className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
									</span>
									<div className="scale-[1] space-y-1 text-center md:scale-[1.2]">
										<h2 className='pb-2 [&>svg]:text-gray-700 dark:[&>svg]:text-gray-100'>
											<SiLinkedin className="inline" />
										</h2>
										<p className='text-sm text-neutral-500 dark:text-neutral-400'>
											<span>zulfikar-muhammad</span>
										</p>
									</div>
								</Link>
							</CardHoverEffect>
							<CardHoverEffect>
								<Link
									href="https://wa.me/+6285156453730"
									target="_blank"
									rel="noopener noreferrer"
									className={clsx(
										'flex h-full items-center justify-center rounded-2xl text-4xl custom-card',
										hoverClassName
									)}
								>
									<span aria-hidden className="absolute top-0 right-0 p-2">
										<FiArrowUpRight className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
									</span>
									<div className="scale-[1] space-y-1 text-center md:scale-[1.2]">
										<h2 className='pb-2 [&>svg]:text-gray-700 dark:[&>svg]:text-gray-100'>
											<SiWhatsapp className="inline" />
										</h2>
										<p className='text-sm text-neutral-500 dark:text-neutral-400'>
											<span>+62 851 5645 3730</span>
										</p>
									</div>
								</Link>
							</CardHoverEffect>

						</div>

						<Skills />

						<div className="col-span-6 space-y-2 rounded-2xl p-6 md:col-span-4 custom-card">
							<p className='text-sm'>
								Hi. My name is Zulfikar, I'm a data analyst and web developer from Indonesia.
								I'm currently a 4th semester student majoring in International Relations at UPNVJ.
							</p>

							<p className='text-sm'>
								My objective is to integrate data analytics with the field of international relations
								to analyze how countries interact politically, economically, and diplomatically.
							</p>
						</div>

						<CardHoverEffect className="col-span-3 h-52">
							<Link
								href="https://open.spotify.com/playlist/5VLMPozcJmkhnKdEs4veQA?si=Cotp0RKzSTal5uzDcVoqfw"
								target="_blank"
								rel="noopener noreferrer"
								className={clsx(
									'group relative flex h-full overflow-hidden rounded-2xl custom-card',
									hoverClassName,
								)}
							>
								<span className="absolute inset-0 -z-10">
									<img
										src="https://i.redd.it/4ivojr1lk7o21.png"
										className="absolute inset-0 h-full w-full bg-black object-cover object-center brightness-[0.7] dark:brightness-50"
										alt="Album cover art"
									/>
								</span>

								<span className="flex flex-1 flex-col justify-between text-white px-2 pt-3 pb-4 md:px-6 md:pt-6 md:pb-4">
									<span className="flex justify-between pb-4 pl-2 md:pl-0 md:pb-0 ">
										<SiSpotify className="text-3xl" />
										<FiArrowUpRight className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
									</span>

									<div className="space-y-0.5 px-2 md:px-0 md:pb-2">
										<h2>
											<span className="font-semibold"></span> mcr: best of
										</h2>

										<p className="text-sm">
											drum and guitars to send you to sleep
										</p>
									</div>
								</span>
							</Link>
						</CardHoverEffect>

						<div className="group relative col-span-3 flex h-full min-h-[13rem] flex-shrink-0 overflow-hidden rounded-2xl custom-card">
							<img
								src={location.src}
								className="absolute inset-0 h-full w-full scale-[1.25] bg-black object-cover object-center brightness-[0.9] dark:brightness-50"
								alt="A map locating roughly where I am right now"
							/>

							<div className="absolute left-1/2 top-1/2 z-10 flex w-full flex-shrink-0 -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-2">
								<div aria-hidden className="absolute translate-y-[14px]">
									<span className="block h-12 w-12 animate-ping rounded-full bg-lime-500 duration-1000" />
								</div>

								<img
									src={me.src}
									alt="Photo of me above a map of my current location"
									height={60}
									width={60}
									className="h-15 w-15 z-20 rounded-full border-2 border-black transition-transform duration-500 group-hover:-rotate-[10deg] group-hover:scale-110"
								/>

								<div className="rounded-full bg-white/10 pl-2.5 pr-3 font-bold text-white/95 backdrop-blur-md">
									📍 Jakarta
								</div>
							</div>
						</div>

						<Blog />

						<div className="col-span-6 space-y-4 rounded-2xl p-6 text-black md:col-span-6 dark:text-white custom-card">
							<ContactForm />
						</div>
					</main>

					<footer className="mx-auto flex max-w-3xl items-center justify-center px-6 py-6 text-sm text-neutral-600 dark:text-gray-400 [&_a:hover]:underline [&_a]:p-4 [&_a]:transition-colors">
						<Link href="/contacts">/contacts</Link>
						<Link href="/stats">/stats</Link>
						<Link href="https://github.com/muhammad-zulfikar/muhammad-zulfikar.github.io">/source</Link>
					</footer>
				</Transition>
			</div>
		</div >
	);
}
