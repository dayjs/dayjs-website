---
id: is-between
title: IsBetween
---
IsBetween adds `.isBetween()` API to returns a `boolean` indicating if a date is between two other dates.

```javascript
var isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)

// To use `year` granularity pass the third parameter
dayjs('2010-10-20').isBetween('2010-10-19', dayjs('2010-10-25'), 'year')

// Parameter 4 is a string with two characters; '[' means inclusive, '(' exclusive
// '[)' includes the start date but excludes the stop
dayjs('2016-10-30').isBetween('2016-01-01', '2016-10-30', null, '[)')
// '[]' includes start and end date (default)
// '()' excludes start and end date
dayjs('2016-10-30').isBetween('2016-01-01', '2016-10-30', null, '[)')

```
