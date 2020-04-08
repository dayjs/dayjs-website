---
id: plugin
title: Plugin
---

A plugin is an independent module that can be added to Day.js to extend functionality or add new features.

By default, Day.js comes with core code only and no installed plugin.

You can load multiple plugins based on your need.


## Customize

You could build your own Day.js plugin to meet different needs.

Feel free to open a pull request to share your plugin.

Template of a Day.js plugin.

```javascript
export default (option, dayjsClass, dayjsFactory) => {
  // extend dayjs()
  // e.g. add dayjs().isSameOrBefore()
  dayjsClass.prototype.isSameOrBefore = function(arguments) {}

  // extend dayjs
  // e.g. add dayjs.utc()
  dayjsFactory.utc = arguments => {}

  // overriding existing API
  // e.g. extend dayjs().format()
  const oldFormat = dayjsClass.prototype.format
  dayjsClass.prototype.format = function(arguments) {
    // original format result
    const result = oldFormat.bind(this)(arguments)
    // return modified result
  }
}
```
