---
id: day-of-year
title: DayOfYear
---
DayOfYear adds `.dayOfYear()` API to returns a `number` indicating the `Dayjs`'s day of the year, or to set the day of the year.

```javascript
var dayOfYear  = require('dayjs/plugin/dayOfYear')

dayjs.extend(dayOfYear)

dayjs('2010-01-01').dayOfYear() // 1
dayjs('2010-01-01').dayOfYear(365) // 2010-12-31
```
