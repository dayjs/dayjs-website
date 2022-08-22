---
id: loading-into-browser
title: Loading locale in the browser
---
Loading locale on demand.

```html
<script src="path/to/dayjs/locale/de"></script>
<script>
  dayjs.locale('de') // use locale globally
  dayjs().locale('de').format() // use locale in a specific instance
</script>
```

Get the locale object for further use.

```html
<script src="path/to/dayjs/locale/de"></script>
<!-- Load locale as window.dayjs_locale_NAME -->
<script>
var customLocale = window.dayjs_locale_zh_cn // zh-cn -> zh_cn
</script>
```

Day.js is available on [CDN](../installation/browser#cdn-resource).

```html
<!-- CDN example (jsDelivr) -->
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/locale/zh-cn.js"></script>
<script>dayjs.locale('zh-cn')</script>
```
