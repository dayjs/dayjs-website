---
id: week-day
title: WeekDay
---


- WeekDay adds `.weekday()` API to get or set locale aware day of the week.

```javascript
import weekday from 'dayjs/plugin/weekday'

dayjs.extend(weekday)
// when Monday is the first day of the week
dayjs().weekday(-7) // last Monday
dayjs().weekday(7) // next Monday
```