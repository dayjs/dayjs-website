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
