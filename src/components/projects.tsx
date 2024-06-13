import Link from "next/link";

const Blog = () => {
    return (
        <div className="col-span-6 space-y-1 rounded-2xl bg-gray-300/70 p-6 text-black md:col-span-6 dark:text-white custom-card">
            <h1 className="font-semibold text-black dark:text-white">
                Recent Projects{' '}
                <span className="text-black/50 dark:text-white/50">
                    <Link href="/projects">— /projects</Link>
                </span>
            </h1>

            <div className="space-y-2 pt-2">
                <ul className="pl-4 list-disc space-y-4 [&_a:hover]:underline">
                    <li>
                        <Link href="https://vue-verse.web.app">Vue Notes</Link>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            Responsive notes website inspired by Google Keep.
                        </p>
                    </li>
                    <li>
                        <Link href="https://muhammad-zulfikar.web.app">Windows 95 Portfolio</Link>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            Portfolio website that simulating Windows 95.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Blog;