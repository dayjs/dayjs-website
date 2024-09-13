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
      <div className="index_sponsors">
        <div className="title">Special Sponsors</div>
        <div className="list">
          <a href="https://toyokumo.co.jp" target="_blank">
            <img src="https://user-images.githubusercontent.com/17680888/197092231-2367b5eb-1e43-467e-a311-23f7cd97b086.png"/>
          </a>
          <a href="https://github.com/ken-swyfft" target="_blank">
            <img src="https://avatars.githubusercontent.com/u/65305317?s=52&v=4"/>
          </a>
          <a href="https://chudovo.com/" target="_blank">
            <img src="https://images.opencollective.com/chudovo/3c866f5/logo/256.png?height=256" />
          </a>
          <a href="https://www.ratrav.com" target="_blank">
            <img width="70" src="https://images.opencollective.com/ratrav/8bad59c/logo/256.png?height=256" />
          </a>
          <a href="https://opencollective.com/sight-sound" target="_blank">
            <img src="https://images.opencollective.com/sight-sound/54f7220/logo/256.png?height=256" />
          </a>
          <a href="https://www.honrev.com" target="_blank">
            <img width="70" src="https://github.com/user-attachments/assets/b3203350-34c1-4637-b8b1-d9b8bab346d3"/>
          </a>
          <a href="https://github.com/alan-eu" target="_blank">
            <img src="https://avatars.githubusercontent.com/u/18175329?s=52&v=4" />
          </a>
          <a href="https://www.exoflare.com/open-source/?utm_source=dayjs&utm_campaign=open_source" target="_blank">
            <img src="https://user-images.githubusercontent.com/17680888/162761622-1407a849-0c41-4591-8aa9-f98114ec2092.png"/>
          </a>
          <a href="https://github.com/storyblok" target="_blank">
            <img src="https://avatars.githubusercontent.com/u/13880908?s=200&v=4"/>
          </a>
          <a href="https://bestkru.com/" target="_blank" alt><img alt="BestKru" src="https://avatars.githubusercontent.com/u/159320286"/></a>
          <a href="https://github.com/handsontable" target="_blank" alt><img src="https://avatars.githubusercontent.com/u/8068250?s=200&v=4"/></a>
          <a href="https://route4me.com" target="_blank" alt><img alt="Route Optimizer and Route Planner Software" src="https://github.com/user-attachments/assets/3fbc86c5-98a9-49c2-beae-1969026fcd76"/></a>
        </div>
      </div>
      <div className="hide">
        <translate desc="plugin">
          This requires the
        </translate>
        <translate desc="plugin">
          plugin to work
        </translate>
        <translate desc="plugin">
          dependent
        </translate>
        <translate desc="plugin">
          plugin
        </translate>
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
