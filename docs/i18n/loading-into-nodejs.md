---
id: loading-into-nodejs
title: Loading locale in NodeJS
---

```javascript
import 'dayjs/locale/es' // load on demand
// require('dayjs/locale/es') // CommonJS
// import locale_es from 'dayjs/locale/es' -> load and get locale_es locale object

dayjs.locale('es') // use locale globally
dayjs()
  .locale('es')
  .format() // use locale in a specific instance
```
