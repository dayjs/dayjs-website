/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import withBaseUrl from '@docusaurus/withBaseUrl'
import styles from './styles.module.css'

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  const features = [
    {
      title: '👀 Easy To Use',
      descriptions: [
        'Day.js is a minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers with a largely Moment.js-compatible API.',
        'If you use Moment.js, you already know how to use Day.js.'
      ]
    },
    {
      title: '💪 Immutable & 🔥 Chainable',
      descriptions: [
        'With immutable and chainable support, you can safely and easily to modify the existing dayjs() in Day.js.',
        'Without any pains from now!'
      ]
    },
    {
      title: '⚙️ Powerful Plugin Systems',
      descriptions: [
        'Want more functionalities? The Plugin Systems will take you flying!',
        'A plugin is an independent module that can be added to Day.js to extend functionality or add new features.'
      ]
    },
    {
      title: '🌈 Multiple Languages Support',
      descriptions: [
        'Not only in JavaScript!',
        'You can also use Day.js in other languages. Like day.dart, day.rs (In Rust)...',
        'We will try our best to support more languages.'
      ]
    }
  ]

  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <h1 className={classnames('hero__title', styles.heroSecondTitle)}>
            {siteConfig.tagline}
          </h1>
          <p className="hero__subtitle">
            🤟 It can be used not only in JavaScript but also supports more
            languages!
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to={withBaseUrl('docs/doc1')}
            >
              GET STARTED
            </Link>
            <Link
              className="button button--secondary button--lg"
              to={withBaseUrl('docs/doc1')}
            >
              READ THE DOCS
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className={classnames('container', styles.featureContainer)}>
            <div className="row">
              {features.map(feature => (
                <div
                  key={feature.title}
                  className={classnames(
                    'col col--6 text--center',
                    styles.feature
                  )}
                >
                  <h2 className={styles.featureTitle}>{feature.title}</h2>
                  <blockquote>
                    {feature.descriptions.map(description => (
                      <p
                        key={description.slice(0, 10)}
                        className={styles.featureDescription}
                      >
                        {description}
                      </p>
                    ))}
                  </blockquote>
                </div>
              ))}

              {/* I18n */}
              <div
                className={classnames(
                  'col col--6 col--offset-3 text--center',
                  styles.feature
                )}
              >
                <h2 className={styles.featureTitle}>🌐 I18n Support</h2>
                <p className={styles.featureDescription}>
                  Day.js has great support for internationalization.
                </p>
                <p className={styles.featureDescription}>
                  But none of them will be included in your build unless you use
                  it.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home
