---
id: is-leap-year
title: IsLeapYear
---

IsLeapYear adds `.isLeapYear` API to returns a `boolean` indicating whether the `Dayjs`'s year is a leap year or not.

```javascript
var isLeapYear = require("dayjs/plugin/isLeapYear");
// import isLeapYear from 'dayjs/plugin/isLeapYear' // ES 2015

dayjs.extend(isLeapYear);

dayjs("2000-01-01").isLeapYear(); // true
```
