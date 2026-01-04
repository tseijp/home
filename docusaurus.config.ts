import type { Config } from '@docusaurus/types'

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');
// const math = require('remark-math');
// const katex = require('rehype-katex');

const getPresets = () => {
        return [
                [
                        'classic',
                        {
                                docs: {
                                        path: '../../packages/',
                                        include: ['*.{md,mdx}', '*/*.{md,mdx}', 'archive/*/*.{md,mdx}'],
                                        exclude: ['**/node_modules/**/*'],
                                        routeBasePath: 'packages',
                                        editUrl: 'https://github.com/tseijp/tseijp/tree/main/packages/',
                                },
                                blog: {
                                        path: '../../articles/',
                                        include: ['*.{md, mdx}', '*/*.{md, mdx}'],
                                        exclude: ['**/node_modules/**/*'],
                                        routeBasePath: 'articles',
                                        blogTitle: 'Articles',
                                        blogDescription: 'TSEI articles',
                                        blogSidebarCount: 'ALL',
                                        blogSidebarTitle: 'All posts',
                                        postsPerPage: 10,
                                        showReadingTime: false,
                                        editUrl: 'https://github.com/tseijp/tseijp/tree/main/articles/',
                                },
                        },
                ],
        ]
}

const getPlugins = () => {
        return [
                [
                        '@docusaurus/plugin-content-docs',
                        {
                                id: 'examples',
                                path: '../../examples',
                                include: ['*.{md,mdx}', '*/*.{md,mdx}', '*/*/*.{md,mdx}', '2023/*/README.md', '2024/*/README.md', '2025/*/README.md'],
                                exclude: ['**/node_modules/**/*'],
                                routeBasePath: 'examples',
                        },
                ],
        ]
}

const config: Config = {
        tagline: 'tseijp',
        title: 'TSEI.JP',
        url: 'https://tsei.jp',
        baseUrl: '/',
        favicon: 'img/favicon.png',
        future: { v4: true },
        onBrokenLinks: 'warn',
        onBrokenMarkdownLinks: 'warn',
        organizationName: 'tseijp',
        projectName: 'tseijp',
        presets: getPresets(),
        plugins: getPlugins(),
        themeConfig: {
                navbar: {
                        title: 'TSEI.jp',
                        logo: { alt: ' ', src: 'img/favicon.png' },
                        items: [
                                { position: 'left', label: 'Articles', to: '/articles/' },
                                { position: 'left', label: 'Examples', to: '/examples/' },
                                { position: 'left', label: 'Packages', to: '/packages/' },
                                { position: 'right', label: 'Twitter', href: 'https://x.com/tseijp/' },
                                { position: 'right', label: 'Youtube', href: 'https://www.youtube.com/channel/UCvsm_E5chN4icoiulsBD9nw' },
                                { position: 'right', label: 'GitHub', href: 'https://github.com/tseijp/tseijp' },
                        ],
                },
                footer: {
                        style: 'dark',
                        links: [
                                { title: 'Examples', items: [{ label: '👀tseijp', href: 'https://github.com/tseijp/tseijp' }] },
                                {
                                        title: 'Packages',
                                        items: [
                                                { label: '👋parsed-path', href: 'https://tseijp.github.io/parsed-path' },
                                                { label: '📚use-book', href: 'https://tseijp.github.io/use-book' },
                                                { label: '🤏use-grid', href: 'https://tseijp.github.io/use-grid' },
                                                { label: '🖖use-midi', href: 'https://tseijp.github.io/use-midi' },
                                        ],
                                },
                                {
                                        title: 'More',
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
                // prism: {
                //   theme: lightCodeTheme,
                //   darkTheme: darkCodeTheme,
                // },
        },
}

module.exports = config
