import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full mt-4 text-sm text-neutral-600 dark:text-gray-400 [&_a:hover]:underline [&_a]:p-4 [&_a]:transition-colors">
      <Link href="/" className="p-4 transition-colors">
        /
      </Link>
      <Link href="/projects" className="p-4 transition-colors">
        /projects
      </Link>
      <Link href="/blog" className="p-4 transition-colors">
        /blog
      </Link>
      <Link href="/stats" className="p-4 transition-colors">
        /stats
      </Link>
    </footer>
  );
};

export default Footer;
