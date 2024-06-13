---
id: min-max
title: MinMax
---

MinMax adds `.min` `.max` APIs to return a `dayjs` to compare given dayjs instances.
This accepts both multiple arguments and array that contains Day.js instance.

```javascript
var minMax = require("dayjs/plugin/minMax");
// import minMax from 'dayjs/plugin/minMax' // ES 2015

dayjs.extend(minMax);

dayjs.max(dayjs(), dayjs("2018-01-01"), dayjs("2019-01-01"));
dayjs.min([dayjs(), dayjs("2018-01-01"), dayjs("2019-01-01")]);
```
