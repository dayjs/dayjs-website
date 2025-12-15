---
id: utc
title: UTC
---

UTC adds `.utc` `.local` `.isUTC` APIs to parse or display in UTC.

```javascript
var utc = require("dayjs/plugin/utc");
// import utc from 'dayjs/plugin/utc' // ES 2015

dayjs.extend(utc);

// default local time
dayjs().format(); //2019-03-06T17:11:55+08:00

// UTC mode - parses input as UTC time
dayjs.utc().format(); // 2019-03-06T09:11:55Z

// convert local time to UTC time for display
dayjs().utc().format(); // 2019-03-06T09:11:55Z

// While in UTC mode, all display methods will display in UTC time instead of local time.
// And all getters and setters will internally use the Date#getUTC* and Date#setUTC* methods instead of the Date#get* and Date#set* methods.
dayjs.utc().isUTC(); // true
dayjs.utc().local().format(); //2019-03-06T17:11:55+08:00
dayjs.utc("2018-01-01", "YYYY-MM-DD"); // with CustomParseFormat plugin
```

By default, Day.js parses and displays in local time.

If you want to parse or display in UTC, you can use `dayjs.utc()` instead of `dayjs()`.

#### dayjs.utc `dayjs.utc(dateType?: string | number | Date | Dayjs, format?: string)`

Returns a `Dayjs` object in UTC mode. For string inputs without timezone information (no `Z` suffix or offset), the digits are interpreted as UTC time rather than local time.

**Note:** This only works for ISO 8601 format strings (e.g., `YYYY-MM-DD`). For non-standard formats, use the CustomParseFormat plugin with a format string, otherwise parsing falls back to local time.

```javascript
// ISO format: parsed as UTC
dayjs.utc("2019-03-06T09:00:00").format(); // 2019-03-06T09:00:00Z

// Non-ISO format without CustomParseFormat: falls back to local parsing
dayjs.utc("03/06/2019 09:00:00").format(); // May not be 09:00 UTC!

// Non-ISO format with CustomParseFormat: parsed as UTC
dayjs.utc("03/06/2019 09:00:00", "MM/DD/YYYY HH:mm:ss").format(); // 2019-03-06T09:00:00Z
```

#### Use UTC time `.utc(keepLocalTime?: boolean)`

Returns a cloned `Dayjs` object with a flag to use UTC time in outputs.

When called without arguments or with `false`, the underlying timestamp is preserved and only the display mode changes to UTC.

When called with `true`, the current local time digits are kept but reinterpreted as UTC. This changes the actual underlying point in time represented by the Dayjs object.

```javascript
// Examples: for a user in UTC-5

// === ISO string without Z suffix (no timezone specified) ===
// Parsed as local time by default, .utc() just changes the output to show it in UTC (object's represented point in time is "15:00 local timezone")
dayjs("2019-03-06T15:00:00").format(); // 2019-03-06T15:00:00-05:00 (local)
dayjs("2019-03-06T15:00:00").utc().format(); // 2019-03-06T20:00:00Z (UTC)

// .utc(true) - parses "15:00" as UTC, so the object's represented point in time is "15:00 UTC"
dayjs("2019-03-06T15:00:00").utc(true).format(); // 2019-03-06T15:00:00Z
dayjs("2019-03-06T15:00:00").utc(true).local().format(); // 2019-03-06T10:00:00-05:00
// Useful when input was meant to be UTC but lacked the Z suffix

// === ISO string with Z suffix (timezone is specified as UTC) ===
// .utc() - object represents same underlying point in time, just ensures UTC is what is displayed
dayjs("2019-03-06T15:00:00Z").format(); // 2019-03-06T10:00:00-05:00 (local)
dayjs("2019-03-06T15:00:00Z").utc().format(); // 2019-03-06T15:00:00Z (UTC)

// .utc(true) - takes the *local* time represented, and shifts the object to make it UTC
// this can be a bit of a gotcha, because the local time becomes the UTC time (so the new local time shifts accordingly)
dayjs("2019-03-06T15:00:00Z").format(); // 2019-03-06T10:00:00-05:00
dayjs("2019-03-06T15:00:00Z").utc(true).format(); // 2019-03-06T10:00:00Z
dayjs("2019-03-06T15:00:00Z").utc(true).local().format(); // 2019-03-06T05:00:00-05:00

```

#### Use local time `.local()`

Returns a cloned `Dayjs` object with a flag to use local time in outputs.

#### Set UTC offset `.utcOffset()`

Returns a cloned `Dayjs` object with a new UTC offset.

#### isUTC mode `.isUTC()`

Returns a `boolean` indicating current `Dayjs` object is in UTC mode or not.
