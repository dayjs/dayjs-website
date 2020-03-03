---
id: loading-into-browser
title: Loading plugin in the browser
---
Loading plugin on demand.

```html
<script src="path/to/dayjs/plugin/advancedFormat"></script>
<!-- Load plugin as window.dayjs_plugin_NAME -->
<script>
  dayjs.extend(window.dayjs_plugin_advancedFormat)
</script>
```

Day.js is available on [CDN](../installation/browser#cdn-resource).

```html
<!-- CDN example (unpkg) -->
<script src="https://unpkg.com/dayjs@1.8.21/dayjs.min.js"></script>
<script src="https://unpkg.com/dayjs@1.8.21/plugin/utc.js"></script>
<script>dayjs.extend(window.dayjs_plugin_utc)</script>
```
