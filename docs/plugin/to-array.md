---
id: to-array
title: ToArray
---

ToArray adds `.toArray()` API to return an `array` that mirrors the parameters

```javascript
var toArray = require("dayjs/plugin/toArray");
// import toArray from 'dayjs/plugin/toArray' // ES 2015

dayjs.extend(toArray);

dayjs("2019-01-25").toArray(); // [ 2019, 0, 25, 0, 0, 0, 0 ]
```
