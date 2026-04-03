/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl
    const docsUrl = this.props.config.docsUrl
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    return `${baseUrl}${docsPart}${langPart}${doc}`
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl
    return baseUrl + (language ? `${language}/` : '') + doc
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="48"
                height="48"
              />
            )}
          </a>
          <div>
            <h5>Community</h5>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              target="_blank"
              data-count-href="/iamkun/dayjs/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              GitHub
            </a>
            <a
              href="https://gitter.im/iamkun/dayjs"
              target="_blank"
              rel="noreferrer noopener"
            >
              Gitter
            </a>
            <a
              href="/sitemap.xml"
              target="_blank"
            >
              Sitemap
            </a>
          </div>
        </section>

        <section className="copyright">
          {this.props.config.copyright}
        </section>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log('%c Feel free to try sample codes here 😃', 'background: #222; color: #EE6A55');
            `
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            var versionNode = document.querySelectorAll("header>a")[0];
            versionNode.insertAdjacentHTML('afterend', '<span class="github-star-btn"><a class="github-button" href="https://github.com/iamkun/dayjs" data-size="large" data-show-count="true">Star</a></span>');
          `}}
        />
        <script async src="https://buttons.github.io/buttons.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            function loadScript(src) {
              return new Promise(function (resolve, reject) {
                  const s = document.createElement('script');
                  const src_ = (src.indexOf('http') === 0) ? src : 'https://cdn.jsdelivr.net/npm/dayjs/' + src;
                  s.src = src_;
                  s.onload = resolve;
                  s.onerror = reject;
                  document.head.appendChild(s);
              });
            }
            (async () => {
              window.process = window.process || {}
              window.process.env = { NODE_ENV: 'doc' } // fix devHelper plugin
              await loadScript('dayjs.min.js');
              const
                req = await fetch('https://api.github.com/repos/iamkun/dayjs/contents/src/plugin'),
                plugins = await req.json(),
                pluginNames = plugins.map(plugin => plugin.name);
              for(let i = 0; i < pluginNames.length; i++){
                const pluginName = pluginNames[i];
                if (pluginName !== 'badMutable') {
                  await loadScript('plugin/' + pluginName + '.js');
                  dayjs.extend(window['dayjs_plugin_' + pluginName]);
                }
              }
            })();
          `}}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?64b00098619046db5efa89be31dc6618";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          `}}
        />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-049VSBGZWL"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-049VSBGZWL');
        `}}
      />
      </footer>
    )
  }
}

module.exports = Footer
