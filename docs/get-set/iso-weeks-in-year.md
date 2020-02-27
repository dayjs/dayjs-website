---
id: iso-weeks-in-year
title: Weeks In Year (ISO)
---
Gets the number of weeks in the current year, according to [ISO weeks](https://en.wikipedia.org/wiki/ISO_week_date).

@>IsoWeeksInYear

```js
dayjs.extend(isoWeeksInYear)

dayjs('2004-01-01').isoWeeksInYear() // 53
dayjs('2005-01-01').isoWeeksInYear() // 52
```
