---
id: utc
title: UTC
---

UTC adds `.utc` `.local` `.isUTC` APIs to parse or display in UTC.

```javascript
var utc = require("dayjs/plugin/utc");
// import utc from 'dayjs/plugin/utc' // ES 2015
// import utc from 'dayjs/plugin/utc.js' // Typescript

dayjs.extend(utc);

// default local time
dayjs().format(); //2019-03-06T17:11:55+08:00

// UTC mode
dayjs.utc().format(); // 2019-03-06T09:11:55Z

// convert local time to UTC time
dayjs().utc().format(); // 2019-03-06T09:11:55Z

// While in UTC mode, all display methods will display in UTC time instead of local time.
// And all getters and setters will internally use the Date#getUTC* and Date#setUTC* methods instead of the Date#get* and Date#set* methods.
dayjs.utc().isUTC(); // true
dayjs.utc().local().format(); //2019-03-06T17:11:55+08:00
dayjs.utc("2018-01-01", "YYYY-MM-DD"); // with CustomParseFormat plugin
```

By default, Day.js parses and displays in local time.

If you want to parse or display in UTC, you can use `dayjs.utc()` instead of `dayjs()`.

#### dayjs.utc `dayjs.utc(dateType?: string | number | Date | Dayjs, format? string)`

Returns a `Dayjs` object in UTC mode.

#### Use UTC time `.utc()`

Returns a cloned `Dayjs` object with a flag to use UTC time.

#### Use local time `.local()`

Returns a cloned `Dayjs` object with a flag to use local time.

#### Set UTC offset `.utcOffset()`

Returns a cloned `Dayjs` object with a new UTC offset.

#### isUTC mode `.isUTC()`

Returns a `boolean` indicating current `Dayjs` object is in UTC mode or not.
