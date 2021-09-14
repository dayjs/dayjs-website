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
// '()' excludes start and end date (default)
// '[]' includes start and end date
// '[)' includes the start date but excludes the stop
// Granuality offers the precision on start and end inclusive checks.
// For example including the start date on day precision you should use 'day' as 3rd parameter.
dayjs('2016-10-30').isBetween('2016-01-01', '2016-10-30', 'day', '[)')

```
