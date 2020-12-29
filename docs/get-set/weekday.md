---
id: weekday
title: Day of Week (Locale Aware)
---
Gets or sets the day of the week according to the locale.

@>Weekday

If the locale assigns Sunday as the first day of the week, `dayjs().weekday(0)` will be Sunday. If Monday is the first day of the week, `dayjs().weekday(0)` will be Monday.

```js
dayjs.extend(weekday)

// when Sunday is the first day of the week
dayjs().weekday(-7); // last Sunday
dayjs().weekday(7); // next Sunday

// when Monday is the first day of the week
dayjs().weekday(-7) // last Monday
dayjs().weekday(7) // next Monday
```
