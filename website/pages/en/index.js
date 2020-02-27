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
            <translate>Fast 2kB alternative to Moment.js with the same modern API</translate>
          </h2>
          <div className="pluginWrapper buttonWrapper">
            <a className="button" href={docUrl('installation/installation')}>
              <translate>Get Started</translate>
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
            <h2 className="title is-2 intro-header">
              <translate>Why Day.js?</translate></h2>
          </div>
          <div className="column is-half intro-column">
            <h3 className="title is-3 intro-title">
              <translate>2kB</translate>
            </h3>
            <p className="content is-medium has-text-weight-semibold intro-content">
              <translate>Less JavaScript to download, parse and execute, leaving more time for your code.</translate>
            </p>
          </div>
          <div className="column is-half intro-column">
            <h3 className="title is-3 intro-title">
              <translate>Simple</translate>
            </h3>
            <p className="content is-medium has-text-weight-semibold intro-content">
              <translate>
              Day.js is a minimalist JavaScript library that parses, validates, manipulates, and displays dates and
              times for modern browsers with a largely Moment.js-compatible API.
              </translate>
            </p>
            <p>
              <translate>If you use Moment.js, you already know how to use Day.js.</translate>
            </p>
          </div>
          <div className="column is-half intro-column">
            <h3 className="title is-3 intro-title">
              <translate>Immutable</translate>
            </h3>
            <p className="content is-medium has-text-weight-semibold intro-content">
              <translate>
              All API operations that change the Day.js object will return a new instance instead.
              </translate>
            </p>
            <p>
              <translate>This helps prevent bugs and avoid long debugging sessions.</translate>
            </p>
          </div>
          <div className="column is-half intro-column">
            <h3 className="title is-3 intro-title">
              <translate>I18n</translate>
            </h3>
            <p className="content is-medium has-text-weight-semibold intro-content">
              <translate>Day.js has great support for internationalization. But none of them will be included in your build unless
              you use them.</translate>
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
