import React from 'react';
import { Post } from '../../../../../components/blog/Post';

export class PS1PromptColor extends Post {
    public name = 'Changing PS1\'s Prompt';
    public slug = 'changing-ps1-prompt-based-on-previous-command-return';
    public date = new Date('10 Jun 2024');
    public hidden = false;
    public excerpt = 'Learn how to change your PS1 prompt color based on the previous command\'s return value.';
    public keywords = ['Linux', 'Shell Scripting', 'Terminal', 'PS1', 'Return Value'];

	public render() {
		return (
			<>
				<h1>Changing PS1's Prompt Based on The Previous Command's Return Value</h1>
				<p>You may find it useful for your PS1 to signal if a previous command returned <code>0</code> or not. One neat way to do this that doesn&rsquo;t add clutter is to have your PS1 change colour based on the previous command&rsquo;s return value.</p>
				<p>I find that it also works well for scrollback, allowing me to at a quick glance where things went wrong. It can also draw attention to nonzero return values for programs that don&rsquo;t properly signal that they didn&rsquo;t properly exit to a user.</p>
				<p>Using the <a className="link" href="https://man7.org/linux/man-pages/man4/console_codes.4.html">man page for the console escape codes</a> as reference, I wanted the <code>PS1</code> to be <code>red</code> or code <code>31</code> when there is a nonzero return value, and green or <code>32</code> for a zero return value.</p>
				<p>I also keep my <code>PS1</code> prompt minimal being just a <code>$</code> character, but it should be trivial to adapt your own prompt.</p>
				<h2>Setting the Colours</h2>
				<p>The green and red prompts for the <code>$</code> character can be set like so:</p>
				<pre>
					{`// Green prompt
PS1='\\[\\e[32m\\]$ \\[\\e[0m\\]'

// Red prompt
PS1='\\[\\e[31m\\]$ \\[\\e[0m\\]'`}
				</pre>
				<p>where <code>\e</code> is the escape sequence, <code>\e[0m</code> resets the attributes to the default at the end of the prompt, and <code>\[</code> and <code>\]</code> are used to wrap non-printing control sequences (in our case the colour escape sequences), so word wrapping doesn&rsquo;t break.</p>
				<h2>Colour Switching on Return Value</h2>
				<p>We can use the special shell variable <code>$?</code> that gives us the return value of the last executed command. What we want is to return the string <code>32</code> (green) if it&rsquo;s zero, and <code>31</code> (red) otherwise. Using bash conditionals, we can test this:</p>
				<pre>
					{`true
[[ $? = 0 ]] && printf 32 || printf 31

false
[[ $? = 0 ]] && printf 32 || printf 31`}
				</pre>
				<h2>Putting it together</h2>
				<p>Inserting the conditional into the <code>PS1</code> where the colour sequence number was as a subshell we have:</p>
				<pre>
					{`PS1='\\[\\e[$([[ $? = 0 ]] && printf 32 || printf 31)m\\]$ \\[\\e[0m\\]'`}
				</pre>
				<p>(Note that we use single quotes so that the subshell isn&rsquo;t evaluated when setting the <code>PS1</code> variable)</p>
				<p>Now whenever you run a command and it returns <code>0</code> the prompt should be green, and if it&rsquo;s nonzero the prompt will turn red.</p>
			</>
		);
	}
}

const PS1PromptColorPage = () => {
	const goals = new PS1PromptColor();
	return goals.render();
};

export default PS1PromptColorPage;