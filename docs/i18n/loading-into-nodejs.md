---
id: loading-into-nodejs
title: Loading locale in NodeJS
---

```javascript
require('dayjs/locale/es') // load on demand
var locale_es = require('dayjs/locale/es') // load and get locale_es locale object
// import 'dayjs/locale/es' // ES 2015 
// import locale_es from 'dayjs/locale/es'

dayjs.locale('es') // use locale globally
dayjs().locale('es').format() // use locale in a specific instance
```
