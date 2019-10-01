/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = []

const siteConfig = {
  title: 'DAY.JS ORGANIZATION', // Title for your website.
  tagline: '⏰ Fast 2KB immutable date library alternative to Moment.js with the same modern API.',
  url: 'https://dayjs.github.io/website', // Your website URL
  baseUrl: '/website/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'website',
  organizationName: 'dayjs',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { languages: true },
    { doc: 'Installation', label: 'Docs' },
    { blog: true, label: 'Blog' },
    { href: 'https://github.com/dayjs', label: 'GitHub' }
  ],

  // If you have users set above, you add it here:
  // users,

  /* path to images for header/footer */
  headerIcon: 'img/logo.png',
  footerIcon: 'img/logo.png',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#fb6052',
    secondaryColor: '#eb6052'
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} DAY.JS. Built with Docusaurus.`,

  docsSideNavCollapsible: true,

  editUrl: 'https://github.com/dayjs/website/blob/master/docs/',

  scrollToTop: true,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'github'
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  stylesheets: ['https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/iamkun/dayjs'
}

module.exports = siteConfig
