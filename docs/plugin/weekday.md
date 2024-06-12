---
id: weekday
title: Weekday
---

Weekday adds `.weekday()` API to get or set locale aware day of the week.

```javascript
var weekday = require("dayjs/plugin/weekday");
// import weekday from 'dayjs/plugin/weekday' // ES 2015

dayjs.extend(weekday);

// when Sunday is the first day of the week
dayjs().weekday(-7); // last Sunday
dayjs().weekday(7); // next Sunday

// when Monday is the first day of the week
dayjs().weekday(-7); // last Monday
dayjs().weekday(7); // next Monday
```
