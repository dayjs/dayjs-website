---
id: utc
title: UTC
---

By default, Day.js parses and displays in local time.

If you want to parse or display a date-time in UTC, you can use `dayjs.utc()` instead of `dayjs()`.

While in UTC mode, all display methods will display in UTC time instead of local time.

@>UTC
```js
dayjs.extend(utc)

// default local time
dayjs().format() //2019-03-06T08:00:00+08:00
// UTC mode
dayjs.utc().format() // 2019-03-06T00:00:00Z
```

Additionally, while in UTC mode, all getters and setters will internally use the `Date#getUTC*` and `Date#setUTC*` methods instead of the `Date#get*` and `Date#set*` methods.

```js
dayjs.utc().seconds(30).valueOf()// => new Date().setUTCSeconds(30);
dayjs.utc().seconds()// => new Date().getUTCSeconds();
```
To switch from UTC to local time, you can use [dayjs#utc](../manipulate/utc) or [dayjs#local](../manipulate/local).
