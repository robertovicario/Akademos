import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { themes as prismThemes } from 'prism-react-renderer';

const config = {
    title: 'Learning',
    tagline: 'Trying to document and explain all the things I learned',
    favicon: 'img/learning-1.svg',
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
    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],
    presets: [
        [
            'classic',
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    editUrl: 'https://github.com/robertovicario/Learning/tree/main/app/',
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex]
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    editUrl: 'https://github.com/robertovicario/Learning/tree/main/app/',
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn'
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],
    themeConfig: ({
        navbar: {
            title: 'Learning',
            logo: {
                alt: 'Logo',
                src: 'img/learning-1.svg',
            },
            items: [
                {
                    to: '/docs/',
                    label: 'Lectures',
                    position: 'left',
                    activeBaseRegex: '/docs/',
                },
                {
                    to: '/blog/',
                    label: 'Playgrounds',
                    position: 'left',
                    activeBaseRegex: '/blog/',
                },
                {
                    href: 'https://github.com/robertovicario/Learning',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'light',
            copyright: `Copyright (c) ${new Date().getFullYear()} Roberto Vicario. All rights reserved.`,
        },
        prism: {
            theme: prismThemes.dracula,
            darkTheme: prismThemes.dracula,
        }
    }),
};

export default config;
