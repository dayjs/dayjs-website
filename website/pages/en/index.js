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
          <a href="https://opencollective.com/sight-sound" target="_blank">
            <img src="https://images.opencollective.com/sight-sound/54f7220/logo/256.png?height=256" />
          </a>
          <a href="https://www.exoflare.com/open-source/?utm_source=dayjs&utm_campaign=open_source" target="_blank">
            <img src="https://user-images.githubusercontent.com/17680888/162761622-1407a849-0c41-4591-8aa9-f98114ec2092.png"/>
          </a>
          <a href="https://github.com/radioplusexperts" target="_blank">
            <img src="https://avatars.githubusercontent.com/u/188567998?v=4"/>
          </a>
          <a href="https://github.com/storyblok" target="_blank">
            <img src="https://avatars.githubusercontent.com/u/13880908?s=200&v=4"/>
          </a>
          <a href="https://bestkru.com/" target="_blank" alt><img alt="BestKru" src="https://avatars.githubusercontent.com/u/159320286"/></a>
          <a href="https://handsontable.com/docs/react-data-grid/?utm_source=Dayjs_homepage&utm_medium=sponsorship&utm_campaign=library_sponsorship" target="_blank" alt><img src="https://github.com/user-attachments/assets/426c3476-dc34-44d1-a904-ed58dbd20dd6"/></a>
          <a href="https://route4me.com" target="_blank" alt><img alt="Route Optimizer and Route Planner Software" src="https://github.com/user-attachments/assets/3fbc86c5-98a9-49c2-beae-1969026fcd76"/></a>
        </div>
        <div style={{marginTop: '24px',textAlign: 'left'}}>
          Balancing coding projects and academics? Discover professional <b><a style={{color: '#000'}} href="https://edubirdie.com/essay-writers-for-hire" target="_blank">essay writers</a></b> who can help streamline your workload.
        </div>
        <div style={{marginTop: '24px',textAlign: 'left'}}>
          <a style={{color: '#000'}} href="https://essaypro.com/pay-for-research-paper" target="_blank">
            pay EssayPro to write my research paper
          </a>
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
