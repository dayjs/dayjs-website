/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const translate = require('../../server/translate.js').translate

class Banner extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props
    const { baseUrl, docsUrl } = siteConfig
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`

    return (
      <div className="hero is-medium dayjs-home-banner">
        <div className="container wrapper">
          <h1 className="title is-1 banner-title">{siteConfig.title}</h1>
          <h2 className="subtitle has-text-weight-semibold banner-subtitle">
            Fast 2kB alternative to Moment.js with the same modern API
          </h2>
          <div className="pluginWrapper buttonWrapper">
            <a className="button" href={docUrl('installation/installation')}>
              Get Started
            </a>
          </div>
        </div>
      </div>
    )
  }
}

function Intro() {
  return (
    <div className="dayjs-home-intro">
      <div className="container wrapper">
        <div className="columns is-multiline">
          <div className="column is-full">
            <h2 className="title is-2 intro-header">Why Day.js?</h2>
          </div>
          <div className="column is-half intro-column">
            <h3 className="title is-3 intro-title">2kB</h3>
            <p className="content is-medium has-text-weight-semibold intro-content">
            Less JavaScript to download, parse and execute, leaving more time for your code.
            </p>
          </div>
          <div className="column is-half intro-column">
            <h3 className="title is-3 intro-title">Simple</h3>
            <p className="content is-medium has-text-weight-semibold intro-content">
              Day.js is a minimalist JavaScript library that parses, validates, manipulates, and displays dates and
              times for modern browsers with a largely Moment.js-compatible API.
            </p>
            <p>If you use Moment.js, you already know how to use Day.js.</p>
          </div>
          <div className="column is-half intro-column">
            <h3 className="title is-3 intro-title">Immutable</h3>
            <p className="content is-medium has-text-weight-semibold intro-content">
              All API operations that change the Day.js object will return a new instance instead.
            </p>
            <p>This helps prevent bugs and avoid long debugging sessions.</p>
          </div>
          <div className="column is-half intro-column">
            <h3 className="title is-3 intro-title">I18n</h3>
            <p className="content is-medium has-text-weight-semibold intro-content">
              Day.js has great support for internationalization. But none of them will be included in your build unless
              you use them.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function DayJS(props) {
  const { config: siteConfig, language = 'en' } = props

  return (
    <React.Fragment>
      <Banner siteConfig={siteConfig} language={language} />
      <Intro />
    </React.Fragment>
  )
}

module.exports = DayJS
