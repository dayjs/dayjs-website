---
id: update-locale
title: UpdateLocale
---

UpdateLocale adds `.updateLocale` API to update a locale's properties.

```javascript
var updateLocale = require('dayjs/plugin/updateLocale')
// import updateLocale from 'dayjs/plugin/updateLocale' // ES 2015

dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  months : String[]
})
```
