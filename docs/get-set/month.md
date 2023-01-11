---
id: month
title: Month 
---

Gets or sets the month.

Accepts numbers from 0 to 11. If the range is exceeded, it will bubble up to the year.

```js
dayjs().month() // gets current month
dayjs().month(0) // returns new dayjs object
dayjs().month(dayjs().month() - 1) // same day of previous month
```

>Months are zero indexed, so January is month 0.
