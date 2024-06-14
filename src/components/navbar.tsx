import { useState, useRef, useEffect, type RefObject } from 'react';
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

function useClickOutside(
    ref: RefObject<HTMLDivElement>,
    buttonRef: RefObject<HTMLButtonElement>,
    onClickOutside: () => void
) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                ref.current &&
                !ref.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                onClickOutside();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, buttonRef, onClickOutside]);
}

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const router = useRouter();

    const toggleNav = () => {
        if (isNavOpen) {
            setIsVisible(false);
            setTimeout(() => setIsNavOpen(false), 300); // Wait for the closing animation to complete
        } else {
            setIsNavOpen(true);
            setTimeout(() => setIsVisible(true), 0); // Ensure visibility after the element is rendered
        }
    };

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const handleRedirect = (path: string) => {
        router.push(path);
        setIsVisible(false);
        setTimeout(() => setIsNavOpen(false), 300); // Wait for the closing animation to complete
    };

    useClickOutside(navRef, buttonRef, () => {
        if (isNavOpen) {
            setIsVisible(false);
            setTimeout(() => setIsNavOpen(false), 300); // Wait for the closing animation to complete
        }
    });

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down
                setShowNavbar(false);
            } else { // if scroll up
                setShowNavbar(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
        return undefined;
    }, [lastScrollY]);

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
            <div className="flex justify-between items-center p-4 bg-transparent">
                <button
                    ref={buttonRef}
                    className="px-4 py-2 ml-2 mt-2 md:mt-4 md:ml-4 rounded-lg custom-card"
                    onClick={toggleNav}
                >
                    <FiMenu className="w-5 h-auto" />
                </button>
                <button
                    className={`px-4 py-2 mr-2 mt-2 md:mt-4 md:mr-4 rounded-lg custom-card ${isNavOpen && 'z-10'}`}
                    onClick={toggleTheme}
                >
                    {theme === 'dark' ? <FiSun className="w-5 h-auto" /> : <FiMoon className="w-5 h-auto" />}
                </button>
            </div>
            {isNavOpen && (
                <div
                    ref={navRef}
                    className={`absolute left-6 md:left-8 w-48 rounded-md transition-all duration-300 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-14'
                        }`}
                >
                    <div className="text-black dark:text-white rounded-xl focus:outline-none custom-card">
                        <ul>
                            <li className="py-2 px-4 hover:underline cursor-pointer rounded-xl" onClick={() => handleRedirect('/')}>
                                /
                            </li>
                            <li className="py-2 px-4 hover:underline cursor-pointer rounded-xl" onClick={() => handleRedirect('/projects')}>
                                /projects
                            </li>
                            <li className="py-2 px-4 hover:underline cursor-pointer rounded-xl" onClick={() => handleRedirect('/blog')}>
                                /blog
                            </li>
                            <li className="py-2 px-4 hover:underline cursor-pointer rounded-xl" onClick={() => handleRedirect('/contacts')}>
                                /contacts
                            </li>
                            <li className="py-2 px-4 hover:underline cursor-pointer rounded-xl" onClick={() => handleRedirect('/stats')}>
                                /stats
                            </li>
                            <li className="py-2 px-4 hover:underline cursor-pointer rounded-xl" onClick={() => handleRedirect('https://github.com/muhammad-zulfikar/muhammad-zulfikar.github.io')}>
                                /source
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}