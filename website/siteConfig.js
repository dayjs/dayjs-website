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
const markdownPlugins = require('./plugin') 
const siteConfig = {
  markdownPlugins: [markdownPlugins],
  title: 'Day.js', // Title for your website.
  tagline: '2kB JavaScript date utility library',
  url: 'https://day.js.org', // Your website URL
  baseUrl: '/', // Base URL for your project */
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
    { search: true },
    { doc: 'installation/installation', label: 'Docs' },
    // { blog: true, label: 'Blog' },
    { href: 'https://github.com/iamkun/dayjs/', label: 'GitHub' },
    { languages: true },
  ],

  translationRecruitingLink: 'https://github.com/dayjs/dayjs-website/issues/5',

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
  copyright: `Copyright © ${new Date().getFullYear()} Day.js`,

  docsSideNavCollapsible: true,

  editUrl: 'https://github.com/dayjs/website/blob/master/docs/',

  scrollToTop: false,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    // theme: 'github'
  },

  // Add custom scripts here that would be placed in <script> tags.
  // scripts: ['https://buttons.github.io/buttons.js'],

  // stylesheets: ['https://unpkg.com/bulma@0.7.5/css/bulma.min.css'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/iamkun/dayjs',
  cname: 'day.js.org',
  gaTrackingId: 'UA-157297013-1',
  algolia: {
    apiKey: '015f468476ca8256cf1c8e8fb6d82cc3',
    indexName: 'dayjs',
    algoliaOptions: {
      facetFilters: ["language:LANGUAGE"]
    }
  },
}

module.exports = siteConfig
