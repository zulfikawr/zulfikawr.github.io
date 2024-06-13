import { WhichFruitsMayYouReap } from '../../pages/blog/posts/2023/which-fruits-may-you-reap/which-fruits-may-you-reap';
import { WTFESM } from '../../pages/blog/posts/2023/wtf-esm/wtf-esm';
import { Quantium } from '../../pages/blog/posts/2024/quantium/quantium';
import { SearchingGitHubForOpenAIApiKeys } from '../../pages/blog/posts/2024/searching-github-openai-api-keys/searching-github-openai-api-keys';
import { PS1PromptColor } from '../../pages/blog/posts/2024/changing-ps1-prompt-based-on-previous-command-return/changing-ps1-prompt-based-on-previous-command-return';
import { WeirdWorld } from '../../pages/blog/posts/2024/weird-world/weird-world';

export const posts = [
	new WhichFruitsMayYouReap(),
	new WTFESM(),
	new Quantium(),
	new SearchingGitHubForOpenAIApiKeys(),
	new PS1PromptColor(),
	new WeirdWorld(),
] as const;

export function sortPosts(p: typeof posts) {
	return [...p].sort((a, b) => {
		if (a.date > b.date) {
			return -1;
		}

		if (a.date < b.date) {
			return 1;
		}

		return 0;
	});
}
