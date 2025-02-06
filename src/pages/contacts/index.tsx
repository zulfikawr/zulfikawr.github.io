import Link from 'next/link';
import Navbar from '../../components/navbar';
import Transition from '../transition';
import {
  SiLinkedin,
  SiGithub,
  SiWhatsapp,
  SiGmail,
  SiInstagram,
  SiTwitter,
  SiTelegram,
} from 'react-icons/si';

const contacts = [
  {
    href: 'https://www.linkedin.com/in/zulfikar-muhammad',
    title: 'LinkedIn',
    icon: SiLinkedin,
  },
  {
    href: 'https://github.com/zulfikawr',
    title: 'GitHub',
    icon: SiGithub,
  },
  {
    href: 'mailto:zulfikawr@gmail.com',
    title: 'Email',
    icon: SiGmail,
  },
  {
    href: 'https://wa.me/+6285156453730',
    title: 'WhatsApp',
    icon: SiWhatsapp,
  },
  {
    href: 'https://instagram.com/zulfikar.ph',
    title: 'Instagram',
    icon: SiInstagram,
  },
  {
    href: 'https://twitter.com/lawmakers_',
    title: 'Twitter',
    icon: SiTwitter,
  },
  {
    href: 'https://t.me/spookies',
    title: 'Telegram',
    icon: SiTelegram,
  },
];

export default function ContactPage() {
  return (
    <div className="md:min-h-screen flex flex-col">
      <Navbar />
      <Transition>
        <main className="flex-grow flex items-center justify-center px-2 md:px-0 pt-24">
          <div className="custom-card p-4 rounded-xl mx-4 md:mx-0 max-w-md w-full">
            <h2>
              <Link
                href="/"
                className="text-glow-black dark:text-glow-white hover:underline"
              >
                zulfikar
              </Link>
              {'/'}
              <Link
                href="/contacts"
                className="text-glow-black dark:text-glow-white hover:underline"
              >
                contacts
              </Link>
            </h2>
            <ul className="space-y-1 list-disc list-inside mt-4">
              {contacts.map((contact, index) => (
                <li key={index} className="flex items-center">
                  <contact.icon className="mr-2" />
                  <Link
                    href={contact.href}
                    className="text-black dark:text-white hover:underline"
                    target="_blank"
                  >
                    {contact.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </Transition>
    </div>
  );
}
