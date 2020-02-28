---
id: day-of-year
title: Day of Year
---
Gets or sets the day of the year.

Accepts numbers from 1 to 366. 

If the range is exceeded, it will bubble up to the years.

@>DayOfYear

```js
dayjs.extend(dayOfYear)

dayjs('2010-01-01').dayOfYear() // 1
dayjs('2010-01-01').dayOfYear(365) // 2010-12-31
```
