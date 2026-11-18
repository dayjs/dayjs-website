---
id: loading-into-nodejs
title: Loading plugin in NodeJS
---
Loading plugin on demand.

```javascript
var AdvancedFormat = require('dayjs/plugin/advancedFormat')
// import AdvancedFormat from 'dayjs/plugin/advancedFormat.js' // ES 2015

dayjs.extend(AdvancedFormat) // use plugin
```
