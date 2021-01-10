var isCN = location.href.indexOf('zh-CN') > -1
if (isCN) {
  const addArea = document.querySelector('nav.onPageNav')
  if (addArea) {
    window.onAddClick = function () {
      ga && ga('send', 'event', 'JUMPADD', 'go');
    }
    addArea.innerHTML = `<a onclick=\"onAddClick()\" href=\"https://gitee.com/iamkun/dayjs\" target=\"_blank\"><img src=\"https://s3.ax1x.com/2021/01/10/sler7t.png\"/><\/a>`
  }
}


