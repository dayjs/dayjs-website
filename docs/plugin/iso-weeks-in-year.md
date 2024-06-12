---
id: iso-weeks-in-year
title: IsoWeeksInYear
---

IsoWeeksInYear adds `.isoWeeksInYear()` API to return a `number` to get the number of weeks in year, according to ISO weeks.

@>IsLeapYear

```javascript
var isoWeeksInYear = require("dayjs/plugin/isoWeeksInYear");
// import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear' // ES 2015

var isLeapYear = require("dayjs/plugin/isLeapYear"); // dependent on isLeapYear plugin
// import isLeapYear from 'dayjs/plugin/isLeapYear' // ES 2015

dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear);

dayjs("2004-01-01").isoWeeksInYear(); // 53
dayjs("2005-01-01").isoWeeksInYear(); // 52
```
