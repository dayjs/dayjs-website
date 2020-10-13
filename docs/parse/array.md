---
id: array
title: Array
---
You can create a Dayjs object with an array of numbers that mirror the parameters passed to `new Date()`

@>ArraySupport

```js
dayjs.extend(arraySupport)
dayjs([2010, 1, 14, 15, 25, 50, 125]); // February 14th, 3:25:50.125 PM
dayjs.utc([2010, 1, 14, 15, 25, 50, 125]);
dayjs([2010]);        // January 1st
dayjs([2010, 6]);     // July 1st
dayjs([2010, 6, 10]); // July 10th
```

`dayjs([])` returns the current time.

Note that like `new Date(year, month, date)`, months are 0 indexed.

