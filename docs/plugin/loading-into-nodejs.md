---
id: loading-into-nodejs
title: Loading plugin in NodeJS
---

```javascript
var AdvancedFormat = require('dayjs/plugin/advancedFormat') // load on demand
// import AdvancedFormat from 'dayjs/plugin/advancedFormat' // ES 2015

dayjs.extend(AdvancedFormat) // use plugin
```
