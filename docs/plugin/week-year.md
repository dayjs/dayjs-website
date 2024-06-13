---
id: week-year
title: WeekYear
---

WeekYear adds `.weekYear()` API to get locale aware week of the year.

```javascript
var weekYear = require("dayjs/plugin/weekYear"); // dependent on weekOfYear plugin
// import weekYear from 'dayjs/plugin/weekYear' // ES 2015

var weekOfYear = require("dayjs/plugin/weekOfYear");
// import weekOfYear from 'dayjs/plugin/weekOfYear' // ES 2015

dayjs.extend(weekOfYear);
dayjs.extend(weekYear);

dayjs().weekYear();
```
