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
                  var s;
                  s = document.createElement('script');
                  s.src = 'https://unpkg.com/dayjs/' + src;
                  s.onload = resolve;
                  s.onerror = reject;
                  document.head.appendChild(s);
              });
            }
            var pluginArr = ['customParseFormat', 'utc', 'relativeTime']
            loadScript('dayjs.min.js')
              .then(function(){
                Promise.all(pluginArr.map(function(p) {return loadScript('plugin/' + p + '.js')}))
                  .then(function() {
                    pluginArr.forEach(function(p) {
                      dayjs.extend(window['dayjs_plugin_' + p])
                    })
                  })
              })
            
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if (!window.location.href.includes('zh-CN')) {
              var eElement = document.querySelector('.fixedHeaderContainer')
              var div = document.createElement("div");
              div.style.color = "white";
              div.style.textAlign = "center";
              div.innerHTML = "Black Lives Matter.";
              var aLink = document.createElement("a");
              var linkText = document.createTextNode("Support the Equal Justice Initiative.");
              aLink.appendChild(linkText);
              aLink.href = "https://support.eji.org/give/153413/#!/donation/checkout";
              aLink.target = "_blank";
              aLink.style.display = 'inline-block'
              aLink.style.color = 'rgba(251, 96, 82, .6)'
              aLink.style.marginLeft = '5px'
              div.appendChild(aLink);
              eElement.insertBefore(div, eElement.firstChild);
            }
          `}}
        />
      </footer>
    )
  }
}

module.exports = Footer
