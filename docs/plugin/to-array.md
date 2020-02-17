---
id: to-array
title: ToArray
---
ToArray adds `.toArray()` API to return an `array` that mirrors the parameters

```javascript
var toArray = require('dayjs/plugin/toArray')
dayjs.extend(toArray)

dayjs('2019-01-25').toArray() // [ 2019, 0, 25, 0, 0, 0, 0 ]
```
