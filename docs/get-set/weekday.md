---
id: weekday
title: Day of Week (Locale Aware)
---
Gets or sets the day of the week according to the locale.

@>Weekday

If the locale assigns Monday as the first day of the week, `dayjs().weekday(0)` will be Monday. If Sunday is the first day of the week, `dayjs().weekday(0)` will be Sunday.

```js
dayjs.extend(weekday)

// when Monday is the first day of the week
dayjs().weekday(-7) // last Monday
dayjs().weekday(7) // next Monday
```
