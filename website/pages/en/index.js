/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

const translate = require('../../server/translate.js').translate

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props
    const { baseUrl, docsUrl } = siteConfig
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`

    const SplashContainer = props => (
      <div className="homeContainer customHomeContainer">
        <div className="wrapper homeWrapper">{props.children}</div>
      </div>
    )

    const ProjectTitle = () => (
      <div className="projectTitles">
        <h2 className="projectTitle">{siteConfig.title}</h2>
        <h2 className="projectTitle projectSecondTitle">
          {siteConfig.tagline}
        </h2>
        <h3>
          🤟{' '}
          <translate desc="support more languages">
            It can be used not only in JavaScript but also supports more
            languages!
          </translate>
        </h3>
      </div>
    )

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    )

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a
          className="button customPromoButton"
          href={props.href}
          target={props.target}
        >
          {props.children}
        </a>
      </div>
    )

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('Installation')}>GET STARTED</Button>
            <Button href={docUrl('api/Parsing')}>API DOCUMENTATION</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    )
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = 'en' } = this.props

    const Block = props => (
      <Container
        padding={props.padding}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="center"
          contents={props.contents}
          layout={props.layout}
        />
      </Container>
    )

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div
          className="mainContainer customMainContainer"
          style={{ padding: 0 }}
        >
          <Block
            padding={['top']}
            layout="twoColumn"
            contents={[
              {
                title: (
                  <translate desc="title:Easy To Use">👀 Easy To Use</translate>
                ),
                content: (
                  <translate desc="content:Easy To Use">
                    Day.js is a minimalist JavaScript library that parses,
                    validates, manipulates, and displays dates and times for
                    modern browsers with a largely Moment.js-compatible API. If
                    you use Moment.js, you already know how to use Day.js.
                  </translate>
                )
              },
              {
                title: (
                  <translate desc="title:Multiple Languages Support">
                    🌈 Multiple Languages Support
                  </translate>
                ),
                content: (
                  <translate desc="content:Multiple Languages Support">
                    Not only in JavaScript! You can also use Day.js in other
                    languages. Like day.dart, day.rs (In Rust), day.clj (In
                    Clojure)... We will try our best to support more languages
                    in the future.
                  </translate>
                )
              }
            ]}
          />
          <Block
            padding={['top', 'bottom']}
            layout="threeColumn"
            contents={[
              {
                title: (
                  <translate desc="title:Immutable And Chainable">
                    💪 Immutable And 🔥 Chainable
                  </translate>
                ),
                content: (
                  <translate desc="content:Immutable And Chainable">
                    With immutable and chainable support, you can safely and
                    easily to modify the existing dayjs instance in Day.js. All
                    operations will be intuitive. Without any pains from now!
                  </translate>
                )
              },
              {
                title: (
                  <translate desc="title:Powerful Plugin Systems">
                    ⚙️ Powerful Plugin Systems
                  </translate>
                ),
                content: (
                  <translate desc="content:Powerful Plugin Systems">
                    Want more functionalities? The Plugin Systems will take you
                    flying! A plugin is an independent module that can be added
                    to Day.js to extend functionality or add new features.
                  </translate>
                )
              },
              {
                title: (
                  <translate desc="title:I18n Support">
                    🌐 I18n Support
                  </translate>
                ),
                content: (
                  <translate desc="content:I18n Support">
                    Day.js has great support for internationalization. But none
                    of them will be included in your build unless you use it.
                  </translate>
                )
              }
            ]}
          />
        </div>
      </div>
    )
  }
}

module.exports = Index
