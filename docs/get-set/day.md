---
id: day
title: Day of Week 
---

Gets or sets the day of the week.

Accepts numbers from 0 (Sunday) to 6 (Saturday). If the range is exceeded, it will bubble up to other weeks.

```js
dayjs().day() // gets day of current week
dayjs().day(0) // returns new dayjs object
```

>`dayjs#date` is for the date of the month, and `dayjs#day` is for the day of the week.
