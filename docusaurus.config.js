// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');
const path = require('path');
const isHome = !~path.resolve(__dirname).indexOf('tseijp');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TSEI.JP',
  tagline: 'tseijp',
  url: 'https://tsei.jp',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'tseijp',
  projectName: 'tseijp',
  presets: [
    [
      'classic', isHome
      ? ({
        docs: {
          path: 'documents/',
          routeBasePath: 'documents',
          editUrl: 'https://github.com/tseijp/home/tree/main/documents/',
        }
      })
      /** @type {import('@docusaurus/preset-classic').Options} */
      : ({
        docs: {
          path: '../../packages/',
          routeBasePath: 'packages',
          editUrl: 'https://github.com/tseijp/tseijp/tree/main/packages/',
        },
        blog: {
          path: '../../articles/',
          routeBasePath: 'articles',
          showReadingTime: true,
          editUrl: 'https://github.com/tseijp/tseijp/tree/main/articles/',
        },
      }),
    ],
  ],
  plugins: isHome? []: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'examples',
        path: '../../examples',
        routeBasePath: 'examples',
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'TSEi.jp',
        logo: { alt: ' ', src: 'img/favicon.png' },
        items: [
          { position: 'left', label: 'Articles' , to: '/articles/' },
          { position: 'left', label: 'Examples', to: '/examples/' },
          { position: 'left', label: 'Packages', type: 'doc', docId: 'README' },
          { position: 'right', label: 'GitHub', href: 'https://github.com/tseijp/tseijp' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          { title: 'Examples',
            items: [
              { label: '👀tseijp', href: 'https://github.com/tseijp/tseijp' },
            ],
          },
          { title: 'Packages',
            items: [
              { label: '👋parsed-path', href: 'https://tseijp.github.io/parsed-path' },
              { label: '📚use-book', href: 'https://tseijp.github.io/use-book' },
              { label: '🤏use-grid', href: 'https://tseijp.github.io/use-grid' },
              { label: '🖖use-midi', href: 'https://tseijp.github.io/use-midi' },
            ],
          },
          { title: 'More',
            items: [
              { label: '📝Articles', href: '/articles/' },
              { label: '🤖Discord', href: 'https://bit.ly/3gBx5jL' },
              { label: '💬Twitter', href: 'https://twitter.com/tseijp' },
              { label: '🌚GitHub', href: 'https://github.com/tseijp/star' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
