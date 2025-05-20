import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { themes as prismThemes } from 'prism-react-renderer';

const config = {
    title: 'Akademos',
    tagline: 'Learn STEM with synthetic lectures and interactive playgrounds.',
    favicon: 'img/akademos-1.svg',
    url: 'https://www.robertovicario.com',
    baseUrl: '/Akademos/',
    organizationName: 'robertovicario',
    projectName: 'Akademos',
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
                    editUrl: 'https://github.com/robertovicario/Akademos/tree/main/app/',
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex]
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],
    themeConfig: ({
        navbar: {
            title: 'Akademos',
            logo: {
                alt: 'Logo',
                src: 'img/akademos-1.svg',
            },
            items: [
                {
                    to: 'docs/',
                    label: 'Lectures',
                    position: 'left',
                    activeBaseRegex: 'docs/',
                },
                {
                    href: 'https://github.com/robertovicario/Akademos',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'light',
            copyright: `Copyright &copy; ${new Date().getFullYear()} Roberto Vicario. All rights reserved.`,
        },
        prism: {
            theme: prismThemes.dracula,
            darkTheme: prismThemes.dracula,
        }
    }),
};

export default config;
