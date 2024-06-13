---
id: week-of-year
title: weekOfYear
---

WeekOfYear adds `.week()` API to returns a `number` indicating the `Dayjs`'s week of the year.

```javascript
var weekOfYear = require("dayjs/plugin/weekOfYear");
// import weekOfYear from 'dayjs/plugin/weekOfYear' // ES 2015

dayjs.extend(weekOfYear);

dayjs("2018-06-27").week(); // 26
dayjs("2018-06-27").week(5); // set week
```
