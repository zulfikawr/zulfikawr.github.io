import { Post } from '../../../../../components/blog/Post';
import { Highlighter } from '../../../../../components/blog/components/highlighter';

export class DeployingNextJsToGitHubPages extends Post {
  public name = 'Deploying Next.js to GitHub Pages';
  public slug = 'deploying-nextjs-github-pages';
  public date = new Date('16 Jun 2024');
  public hidden = false;
  public excerpt =
    'Learn how to deploy a Next.js application to GitHub Pages step by step using GitHub Actions.';
  public keywords = [
    'Next.js',
    'GitHub Pages',
    'Deployment',
    'Static Site',
    'GitHub Actions',
  ];

  public render() {
    return (
      <>
        <h1>Deploying Next.js to GitHub Pages</h1>
        <p>
          Deploying a Next.js application to GitHub Pages can be a
          straightforward process if you follow these steps.{' '}
          <a className="link" href="https://pages.github.com/">
            GitHub Pages
          </a>{' '}
          is a static site hosting service designed to host your project pages
          directly from a GitHub repository.
        </p>
        <h2>Configure Your Next.js Application</h2>
        <p>
          First, you need to configure your Next.js application for static
          export. In your <code>next.config.js</code>, add the following
          configuration:
        </p>
        <p>
          If you are deploying to{' '}
          <code>https://&lt;your-username&gt;.github.io</code>:
        </p>
        <Highlighter language="javascript">
          {`module.exports = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    assetPrefix: './',
};`}
        </Highlighter>
        <p>
          If you are deploying to{' '}
          <code>https://&lt;your-username&gt;.github.io/&lt;your-repo&gt;</code>
          :
        </p>
        <Highlighter language="javascript">
          {`module.exports = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/<your-repo>',
    assetPrefix: '/<your-repo>/',
};`}
        </Highlighter>
        <p>
          This configuration ensures that your application can be exported as
          static HTML, and the asset paths are correctly prefixed.
        </p>
        <h2>GitHub Actions Workflow</h2>
        <p>
          Create a <code>.github/workflows/deploy.yml</code> file in your
          repository with the following content:
        </p>
        <Highlighter language="yaml">
          {`# Sample workflow for building and deploying a Next.js site to GitHub Pages
#
# To get started with Next.js see: https://nextjs.org/docs/getting-started
#
name: Deploy Next.js site to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["main"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Detect package manager
        id: detect-package-manager
        run: |
          if [ -f "\${{ github.workspace }}/yarn.lock" ]; then
            echo "manager=yarn" >> $GITHUB_OUTPUT
            echo "command=install" >> $GITHUB_OUTPUT
            echo "runner=yarn" >> $GITHUB_OUTPUT
            exit 0
          elif [ -f "\${{ github.workspace }}/package.json" ]; then
            echo "manager=npm" >> $GITHUB_OUTPUT
            echo "command=ci" >> $GITHUB_OUTPUT
            echo "runner=npx --no-install" >> $GITHUB_OUTPUT
            exit 0
          else
            echo "Unable to determine package manager"
            exit 1
          fi

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "lts/*"
          cache: \${{ steps.detect-package-manager.outputs.manager }}

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Restore cache
        uses: actions/cache@v4
        with:
          path: |
            .next/cache
          # Generate a new cache whenever packages or source files change.
          key: \${{ runner.os }}-nextjs-\${{ hashFiles('**/package-lock.json', '**/yarn.lock') }}-\${{ hashFiles('**.[jt]s', '**.[jt]sx') }}
          # If source files changed but packages didn't, rebuild from a prior cache.
          restore-keys: |
            \${{ runner.os }}-nextjs-\${{ hashFiles('**/package-lock.json', '**/yarn.lock') }}-

      - name: Install dependencies
        run: \${{ steps.detect-package-manager.outputs.manager }} \${{ steps.detect-package-manager.outputs.command }}

      - name: Build with Next.js
        run: \${{ steps.detect-package-manager.outputs.runner }} next build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`}
        </Highlighter>
        <h2>Access Your Deployed Site</h2>
        <p>Your site should now be live at:</p>
        <p>
          <code>https://your-username.github.io/</code> or&nbsp;
          <code>https://your-username.github.io/your-repo/</code>
        </p>
        <p>It might take a few minutes for the changes to take effect.</p>
        <h2>Troubleshooting Tips</h2>
        <ul>
          <li>
            Ensure that your paths are correctly prefixed. You might need to
            adjust the <code>assetPrefix</code> in <code>next.config.js</code>.
          </li>
          <li>
            Check the GitHub Pages settings to ensure that the correct branch is
            selected.
          </li>
          <li>
            Verify that the exported files are correctly pushed to the{' '}
            <code>gh-pages</code> branch.
          </li>
        </ul>
        <p>
          By following these steps, you can easily deploy your Next.js
          application to GitHub Pages and share it with the world.
        </p>
      </>
    );
  }
}

const DeployingNextJsToGitHubPagesPage = () => {
  const post = new DeployingNextJsToGitHubPages();
  return post.render();
};

export default DeployingNextJsToGitHubPagesPage;
