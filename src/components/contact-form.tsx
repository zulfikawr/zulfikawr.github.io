import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export function ContactForm() {
    const form = useRef<HTMLFormElement>(null);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

		if (!form.current) {
			return;
		}

        emailjs
            .sendForm(
                'zulfikar/',
                'template_jb7ghva',
                form.current,
                'a5nrcZQmy1D62O8Pm'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    toast.success('Success!');
                    setSubmitted(true);
                },
                (error) => {
                    console.error(error.text);
                    toast.error(error.text);
                }
            )
            .finally(() => {
                setLoading(false);
            });
    };

    if (submitted) {
        return (
            <div>
                <h2 className="font-semibold">Message received</h2>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                    I'll get back to you as soon as possible
                </p>
            </div>
        );
    }

    return (
        <>
            <div className="space-y-1">
                <h2 className="font-semibold">Let's talk</h2>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                    Drop me a message with the form below, I'll get back to
                    the non-spam
                </p>
            </div>

            <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-2 [&>label]:block [&_input]:rounded-md [&_textarea]:rounded-md"
            >
                <label htmlFor="email">
                    <input
                        type="email"
                        name="user_email"
                        required
                        placeholder="Email"
                        className="w-full dark:text-white text-sm custom-card"
                    />
                </label>

                <label htmlFor="body">
                    <textarea
                        name="message"
                        rows={5}
                        minLength={10}
                        required
                        placeholder="Message"
                        className="w-full resize-none dark:text-white text-sm custom-card"
                    />
                </label>

                <button
                    disabled={loading}
                    type="submit"
                    value="Send"
                    className="relative float-right w-1/2 overflow-hidden rounded-md p-2 text-black dark:text-white custom-card"
                >
                    Send
                    {loading && (
                        <span className="absolute inset-0 flex items-center justify-center custom-card">
                            <span className="h-4 w-4 animate-spin rounded-[50%] border-2 border-white/0 border-l-white border-t-white" />
                        </span>
                    )}
                </button>
            </form>
        </>
    );
}