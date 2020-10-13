---
id: object
title: Object
---
You can create a Dayjs object by specifying some of the units in an object.

@>ObjectSupport

```js
dayjs.extend(objectSupport)
dayjs({ hour:15, minute:10 });
dayjs.utc({ y:2010, M:3, d:5, h:15, m:10, s:3, ms: 123});
dayjs({ year :2010, month :3, day :5, hour :15, minute :10, second :3, millisecond :123});
dayjs({ years:2010, months:3, date:5, hours:15, minutes:10, seconds:3, milliseconds:123});
```

`day` and `date` key both mean day of the month.

`dayjs({})` returns the current time.

Note that like `new Date(year, month, date)`, months are 0 indexed.

