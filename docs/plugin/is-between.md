---
id: is-between
title: IsBetween
---

IsBetween adds `.isBetween()` API to returns a `boolean` indicating if a date is between two other dates.


```typescript
.isBetween(startDate: String, endDate: String, precision?: String, inclusion?: String): Boolean
```
Parameter |Type| Description
---|---|---
startDate |String| Representing a valid date will be automatically parsed as dayjs date
endDate |String| Representing a valid date will be automatically parsed as dayjs date
precision |String| Granuality offers the precision on start and end inclusive checks. `years`, `month`, `day`... 
inclusion |String| String with two characters, offers the precision on start and end inclusive checks '[' means inclusive, '(' mean exclusive... eg: '()' excludes start and end date (default); '[]' includes start and end date; '[)' includes the start date but excludes the stop

```javascript
var isBetween = require("dayjs/plugin/isBetween");
// import isBetween from 'dayjs/plugin/isBetween' // ES 2015

dayjs.extend(isBetween);

// To use `year` granularity pass the third parameter
dayjs("2010-10-20").isBetween("2010-10-19", dayjs("2010-10-25"), "year");

// For example including the start date on day precision you should use 'day' as 3rd parameter.
dayjs("2016-10-30").isBetween("2016-01-01", "2016-10-30", "day", "[)");
```
