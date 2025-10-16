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
            <img src="https://user-images.githubusercontent.com/17680888/197092231-2367b5eb-1e43-467e-a311-23f7cd97b086.png" />
          </a>
          <a href="https://github.com/ken-swyfft" target="_blank">
            <img src="https://avatars.githubusercontent.com/u/65305317?s=52&v=4" />
          </a>
          <a href="https://opencollective.com/sight-sound" target="_blank">
            <img src="https://images.opencollective.com/sight-sound/54f7220/logo/256.png?height=256" />
          </a>
          <a href="https://opencollective.com/filerev" target="_blank">
            <img src="https://images.opencollective.com/filerev/93a8f05/logo/256.png?height=256" />
          </a>
          <a href="https://github.com/radioplusexperts" target="_blank">
            <img src="https://avatars.githubusercontent.com/u/188567998?v=4" />
          </a>
          <a href="https://github.com/storyblok" target="_blank">
            <img src="https://avatars.githubusercontent.com/u/13880908?s=200&v=4" />
          </a>
          <a href="https://bestkru.com/" target="_blank" alt><img alt="BestKru" src="https://avatars.githubusercontent.com/u/159320286" /></a>
          <a href="https://handsontable.com/docs/react-data-grid/?utm_source=Dayjs_homepage&utm_medium=sponsorship&utm_campaign=library_sponsorship" target="_blank" alt><img src="https://github.com/user-attachments/assets/426c3476-dc34-44d1-a904-ed58dbd20dd6" /></a>
          <a href="https://route4me.com" target="_blank" alt><img alt="Route Optimizer and Route Planner Software" src="https://github.com/user-attachments/assets/3fbc86c5-98a9-49c2-beae-1969026fcd76" /></a>
          <a href="https://github.com/sentdm" target="_blank" alt><img alt="" src="https://avatars.githubusercontent.com/u/153308555?s=200&v=4" /></a>
          <a href="https://chudovo.com/front-end-development" target="_blank" alt><img alt="" src="https://images.opencollective.com/chudovo/3c866f5/logo/256.png?height=256" /></a>
        </div>
        <div style={{ marginTop: '24px' }} className="text-center">
          <a style={{ color: '#000' }} href="https://go.warp.dev/dayjs" target="_blank" rel="noopener noreferrer">
            <img
              alt="Warp sponsorship"
              style={{ width: '350px' }}
              src="https://cdn.jsdelivr.net/gh/warpdotdev/brand-assets@main/Github/Sponsor/Warp-Github-LG-02.png"
            />
            <br />
            <b>Warp is built for coding with multiple AI agents</b>
          </a>
        </div>
        <div style={{ marginTop: '24px', textAlign: 'left' }}>
          <a style={{ color: '#000' }} href="https://chudovo.com/front-end-development/" target="_blank" rel="noopenernoreferrer">
            Chudovo - Front-end development services
          </a>
        </div>
        <div style={{ marginTop: '24px', textAlign: 'left' }}>
          Balancing coding projects and academics? Discover a professional <b><a style={{ color: '#000' }} href="https://edubirdie.com/" target="_blank">essay service</a></b> that can help streamline your workload.
        </div>
        <div style={{ marginTop: '24px', textAlign: 'left' }}>
          EssayService.com allows you to <a style={{ color: '#000' }} href="https://essayservice.com/ai-essay-writer" target="_blank">generate high-quality essays instantly</a>, providing students with custom-written papers that are both timely and plagiarism-free.
        </div>
        <div style={{ marginTop: '24px', textAlign: 'left' }}>
          Thousands of students rely on write my essay <a style={{ color: '#000' }} href="https://essayhub.com/" target="_blank">EssayHub.com</a> to handle their toughest assignments with ease.
        </div>
        <div style={{ marginTop: '24px', textAlign: 'left' }}>
          WriteMyEssay.com is a <a style={{ color: '#000' }} href="https://www.writemyessay.com/" target="_blank">reliable company that will write your essay</a>, ensuring top-notch quality and timely delivery every time.
        </div>
        <div style={{ marginTop: '24px', textAlign: 'left' }}>
          <a style={{ color: '#000' }} href="https://essaypro.com/pay-for-research-paper" target="_blank">
            pay EssayPro to write my research paper
          </a>
        </div>
        <div style={{ marginTop: '24px', textAlign: 'left' }}>
          Pay-as-you-go <b><a style={{ color: '#000' }} href="https://homeworkguy.live" target="_blank">online class help</a></b> with weekly
          expert support, no upfront payment.
        </div>
        <div style={{ marginTop: '24px', textAlign: 'left' }}>
          <b><a style={{ color: '#000' }} href="https://paperwriter.com/" target="_blank">Best paper writing service</a></b> trusted by students for high-quality, plagiarism-free work
        </div>
        <div style={{ marginTop: '24px', textAlign: 'left' }}>
          <a style={{ color: '#000' }} href="https://writepaper.com/" target="_blank">paper writing help at WritePaper</a>
        </div>
        <div style={{ marginTop: '24px', textAlign: 'left' }}>
          DoMyEssay is a reliable <a style={{ color: '#000' }} href="https://domyessay.com/" target="_blank">educational platform that writes essays for students</a>, offering expert assistance tailored to academic needs.
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
