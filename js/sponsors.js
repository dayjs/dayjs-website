var isCN = location.href.indexOf('zh-CN') > -1
var isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent)
var sideNav = document.querySelector('nav.toc')
if (sideNav && !isMobile) {
  var div = document.createElement("div");
  var imgName = isCN ? 'duohui-cn' : 'duohui'
  var title = isCN ? '赞助商' : 'Sponsors'
  var strVar = "";
  strVar += "<div class=\"sponsors\">\n";
  strVar += "	<div class=\"title\">"+title+"<\/div>\n";
  strVar += "	<div class=\"images\">\n";
  strVar += "		<a href=\"https://www.duohui.cn?utm_source=dayjs\" title=\"多会 - 专业活动管理系统\" target=\"_blank\"><img class=\"en\" alt=\"多会\" src=\"/img/sponsors/"+imgName+".png\"/><\/a ><\/div>\n";
  strVar += "<\/div>\n";
  div.innerHTML = strVar
  sideNav.prepend(div);
  document.head.insertAdjacentHTML("beforeend", 
  `<style>
  .toc .sponsors {
    padding-bottom: 5px;
  }
  .toc .sponsors .title{
    padding-bottom: 10px;
    color: #777;
    font-weight: 300;
    font-size: 14px;
  }
  .toc .sponsors .images {
    min-height: 50px
  }
  .toc .sponsors .en {
    height: 50px
  }
  </style>`)
}
const enF = document.querySelector('.sponsor.sponsor-en')
const cnF = document.querySelector('.sponsor.sponsor-cn')
if (enF && cnF) {
  (isCN ? cnF : enF).style.display = "block";
}
