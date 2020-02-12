---
id: loading-into-browser
title: Loading locale in the browser
---


```html
<script src="https://unpkg.com/dayjs"></script>
<!-- Load locale as window.dayjs_locale_NAME -->
<script src="https://unpkg.com/dayjs/locale/zh-cn"></script>
<script>
  dayjs.locale('zh-cn')
  dayjs()
    .locale('zh-cn')
    .format()
  // get locale object
  var customLocale = window.dayjs_locale_zh_cn // zh-cn -> zh_cn
</script>
```
