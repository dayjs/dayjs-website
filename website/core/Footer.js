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
              href="https://dayjs.gitee.io/zh-CN"
              target="_blank"
              rel="noreferrer noopener"
            >
              🇨🇳 China Mirror 中国镜像站点
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
        <script src="https://buttons.github.io/buttons.js" async></script>
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
                await loadScript('plugin/' + pluginName + '.js');
                dayjs.extend(window['dayjs_plugin_' + pluginName]);
              }
            })();
            (async () => {
              if (location.href.indexOf('gitee') > -1) return
              ga && ga('send', 'event', 'JUMPCN', 'check');
              const PREFER_GITHUB = 'PREFER_GITHUB'
              const gt = localStorage.getItem(PREFER_GITHUB)
              const now = Date.now()
              if (gt && 604800 * 1000 + gt > now) return // a week
              const notCnTz = (new Date()).getTimezoneOffset() != -480
              const userLanguage = (navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage)) || ''
              if (location.href.indexOf('zh-CN') < 0 && userLanguage.toLowerCase().indexOf('zh-cn') < 0 && notCnTz) return
              ga && ga('send', 'event', 'JUMPCN', 'show');
              await loadScript('https://cdn.jsdelivr.net/gh/azcpavel/ExConfirmBox/exConfirm.js');
              exConfirmPromise.make({
                title: "提示", message: "建议大陆用户访问部署在国内的站点，是否跳转？", bodyBorder: "1px solid #fb6052", titleBackground: "#fb6052", textColor: "#333", zIndex: 99999,top: "20%"
              }).then((sel) => {
                if (sel) {
                  ga && ga('send', 'event', 'JUMPCN', 'go');
                  window.open('https://dayjs.gitee.io/zh-CN', '_blank');
                } else {
                  localStorage.setItem(PREFER_GITHUB, now);
                }
              });
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
      </footer>
    )
  }
}

module.exports = Footer
