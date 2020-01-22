---
id: iso-weeks-in-year
title: IsoWeeksInYear
---

- IsoWeeksInYear adds `.isoWeeksInYear()` API to return a `number` to get the number of weeks in year, according to ISO weeks.

```javascript
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear'
import isLeapYear from 'dayjs/plugin/isLeapYear' // rely on isLeapYear plugin

dayjs.extend(isoWeeksInYear)
dayjs.extend(isLeapYear)

dayjs('2004-01-01').isoWeeksInYear() // 53
dayjs('2005-01-01').isoWeeksInYear() // 52
```