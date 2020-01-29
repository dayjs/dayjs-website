/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const translate = require('../../server/translate.js').translate

function Install() {
  return (
    <div className="dayjs-home-install">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h3 className="title is-2">Install</h3>
            <div className="content install-content">
              <p className="has-text-weight-semibold">
                npm install dayjs --save
                <span className="has-text-grey-light">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#npm</span>
              </p>
              <p className="has-text-weight-semibold">
                yarn add dayjs
                <span className="has-text-grey-light">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#yarn</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

class Banner extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props
    const { baseUrl, docsUrl } = siteConfig
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`

    return (
      <div className="hero is-medium dayjs-home-banner">
        <div className="hero-body banner-body">
          <div className="container">
            <h1 className="title is-1 banner-title">{siteConfig.title}</h1>
            <h2 className="subtitle has-text-weight-semibold banner-subtitle">{siteConfig.tagline}</h2>
            {/* <div className="banner-buttons">
              <a href={docUrl('Installation')}>
                <button className="button is-normal">GET STARTED</button>
              </a>
              <a href={docUrl('api/Parsing')}>
                <button className="button is-normal">API DOCUMENTATION</button>
              </a>
            </div> */}
          </div>
        </div>
        <Install />
      </div>
    )
  }
}

function Intro() {
  return (
    <div className="dayjs-home-intro">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-full">
            <h3 className="title is-2 intro-header">Features</h3>
          </div>
          <div className="column is-half intro-column">
            <h3 className="title is-3 intro-title">
              <translate>👀 Easy To Use</translate>
            </h3>
            <p className="content is-medium has-text-weight-semibold intro-content">
              <translate>
                Day.js is a minimalist JavaScript library that parses, validates, manipulates, and displays dates and
                times for modern browsers with a largely Moment.js-compatible API. If you use Moment.js, you already
                know how to use Day.js.
              </translate>
            </p>
          </div>
          <div className="column is-half intro-column">
            <h3 className="title is-3 intro-title">
              <translate>💪 Immutable And 🔥 Chainable</translate>
            </h3>
            <p className="content is-medium has-text-weight-semibold intro-content">
              <translate>
                With immutable and chainable support, you can safely and easily to modify the existing dayjs instance in
                Day.js. All operations will be intuitive. Without any pains from now!
              </translate>
            </p>
          </div>
          <div className="column is-half intro-column">
            <h3 className="title is-3 intro-title">
              <translate>⚙️ Powerful Plugin Systems</translate>
            </h3>
            <p className="content is-medium has-text-weight-semibold intro-content">
              <translate>
                Want more functionalities? The Plugin Systems will take you flying. A plugin is an independent module
                that can be added to Day.js to extend functionality or add new features.
              </translate>
            </p>
          </div>
          <div className="column is-half intro-column">
            <h3 className="title is-3 intro-title">
              <translate>🌐 I18n Support</translate>
            </h3>
            <p className="content is-medium has-text-weight-semibold intro-content">
              <translate>
                Day.js has great support for internationalization. But none of them will be included in your build
                unless you use it.
              </translate>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ThemeSwitch() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          var nav = document.querySelector('.nav-site.nav-site-internal')
          var themeSwitch = document.createElement('li')
          themeSwitch.setAttribute('id', 'theme-switch')
          themeSwitch.append('☀️')
          nav.append(themeSwitch)
          themeSwitch.onclick = function() {
            switchTheme()
          }

          var theme = 'light'
          function switchTheme() {
            if (theme === 'light') {
                document.documentElement.setAttribute('data-theme', 'dark')
                themeSwitch.textContent = '🌙'
                theme = 'dark'
            } else {
                document.documentElement.setAttribute('data-theme', 'light')
                theme = 'light'
                themeSwitch.textContent = '☀️'
            }    
          }
          `
      }}
    />
  )
}

function DayJS(props) {
  const { config: siteConfig, language = 'en' } = props

  return (
    <React.Fragment>
      <Banner siteConfig={siteConfig} language={language} />
      <Intro />
      <ThemeSwitch />
    </React.Fragment>
  )
}

module.exports = DayJS
