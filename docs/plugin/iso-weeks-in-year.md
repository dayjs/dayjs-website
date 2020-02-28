---
id: iso-weeks-in-year
title: IsoWeeksInYear
---

IsoWeeksInYear adds `.isoWeeksInYear()` API to return a `number` to get the number of weeks in year, according to ISO weeks.

@>IsLeapYear

```javascript
var isoWeeksInYear = require('dayjs/plugin/isoWeeksInYear')
var isLeapYear = require('dayjs/plugin/isLeapYear') // dependent on isLeapYear plugin
dayjs.extend(isoWeeksInYear)
dayjs.extend(isLeapYear)

dayjs('2004-01-01').isoWeeksInYear() // 53
dayjs('2005-01-01').isoWeeksInYear() // 52
```
