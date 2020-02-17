---
id: loading-into-nodejs
title: Loading locale in NodeJS
---
Loading locale on demand.

```javascript
require('dayjs/locale/de')
// import 'dayjs/locale/de' // ES 2015 

dayjs.locale('de') // use locale globally
dayjs().locale('de').format() // use locale in a specific instance
```

You can also load and get the locale object for further use.
```javascript
var locale_de = require('dayjs/locale/de')
// import locale_de from 'dayjs/locale/de'  // ES 2015 
```
