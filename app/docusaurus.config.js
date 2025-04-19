import { themes as prismThemes } from 'prism-react-renderer';

const config = {
    title: 'Learning',
    tagline: 'Triying to document and explain all the things I learn',
    favicon: 'img/favicon.ico',
    url: 'https://www.robertovicario.com',
    baseUrl: '/Learning/',
    organizationName: 'robertovicario',
    projectName: 'Learning',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    presets: [
        [
            'classic',
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    editUrl: 'https://github.com/robertovicario/Learning',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    editUrl: 'https://github.com/robertovicario/Learning',
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],
    themeConfig: ({
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Learning',
            logo: {
                alt: 'Logo',
                src: 'img/robertovicario-1.svg',
            },
            items: [
                {
                    to: '/docs/',
                    label: 'Notes',
                    position: 'left',
                    activeBaseRegex: '/docs/',
                },
                {
                    href: 'https://github.com/robertovicario/Learning',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright (c) ${new Date().getFullYear()} Roberto Vicario. All rights reserved.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.github,
        },
    }),
};

export default config;
