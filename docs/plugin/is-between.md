---
id: is-between
title: IsBetween
---
IsBetween adds `.isBetween()` API to returns a `boolean` indicating if a date is between two other dates.

```javascript
var isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)

dayjs('2010-10-20').isBetween('2010-10-19', dayjs('2010-10-25'), 'year')
dayjs('2016-10-30').isBetween('2016-01-01', '2016-10-30', null, '[)')
// '[' indicates inclusion, '(' indicates exclusion
```
