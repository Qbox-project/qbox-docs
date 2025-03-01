import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Qbox Documentation',
  tagline: 'The official documentation for the Qbox Project',
  favicon: 'https://files.fivemerr.com/images/b02ac973-403b-4ead-99bf-17bc307172d9.png',
  trailingSlash: false,
  // Set the production url of your site here
  url: 'https://docs.qbox.re',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Qbox-project', // Usually your GitHub org/user name.
  projectName: 'qbox-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Qbox-project/qbox-docs',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/Qbox-project/qbox-docs',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-S32Y3N3DLB',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/qbox-logo2.jpg',
    metadata: [
      {name: 'keywords', content: 'qbox, qbus, qbus project, qbus documentation, qbox documentation, qbox project, fivem, redm, cfx, citizenfx, fivem framework'},
      {name: 'og:image', content: 'https://files.fivemerr.com/images/b02ac973-403b-4ead-99bf-17bc307172d9.png'},
    ],
    algolia: {
      appId: '7JRFEYG1CO',
      apiKey: '329ea77a61e40a081b6e1f86126c6658',
      indexName: 'qbox',
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search',
      insights: false,
    },
    navbar: {
      title: 'Qbox Documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/duck.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'introductionSidebar',
          position: 'left',
          label: 'General',
        },
        {
          type: 'docSidebar',
          sidebarId: 'resourcesSidebar',
          position: 'left',
          label: 'Resources',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://hosting.qbox.re/',
          label: 'Hosting',
          position: 'right',
        },
        {
          href: 'https://discord.gg/Z6Whda5hHA',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://github.com/Qbox-project',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Qbox Project 📦`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['lua'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
