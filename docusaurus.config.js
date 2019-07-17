/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'DAYJS ORGANIZATION',
  tagline:
    '⏰ Fast 2KB immutable date library alternative to Moment.js with the same modern API.',
  url: 'https://dayjs.github.io/website',
  baseUrl: '/website/',
  favicon: 'img/favicon.ico',
  organizationName: 'dayjs', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'DAY.JS Logo',
        src: 'img/logo.png'
      },
      links: [
        { to: 'docs/Installation', label: 'Docs', position: 'right' },
        { to: 'blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/dayjs',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Installation',
              to: 'docs/Installation'
            },
            {
              label: 'API Documentation',
              to: 'docs/api/Parsing'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Gitter',
              href: 'https://gitter.im/iamkun/dayjs'
            }
          ]
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog'
            },
            {
              label: 'Roadmap',
              to: 'docs/Roadmap'
            },
            {
              label: 'Contributing',
              to: 'docs/Contributing'
            }
          ]
        }
      ],
      logo: {
        alt: 'DAY.JS Logo',
        src: 'img/logo.png'
      },
      copyright: `Copyright © ${new Date().getFullYear()} DAYJS. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
