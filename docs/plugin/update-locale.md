---
id: update-locale
title: UpdateLocale
---
UpdateLocale adds `.updateLocale` API to update a locale's properties.

```javascript
var updateLocale  = require('dayjs/plugin/updateLocale')
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  months : String[]
})
```
