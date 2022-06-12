---
id: date
title: Date of Month 
---

Gets or sets the day of the month.

Accepts numbers from 1 to 31. If the range is exceeded, it will bubble up to the months.

```js
dayjs().date() // gets day of current month
dayjs().date(1) // returns new dayjs object
```

>`dayjs#date` is for the date of the month, and `dayjs#day` is for the day of the week.
