---
id: utc
title: UTC
---

This returns a Day.js object with a flag to use UTC time.

@>UTC

```js
dayjs.extend(utc)

var a = dayjs()
a.format() //2019-03-06T08:00:00+08:00
a.utc().format() // 2019-03-06T00:00:00Z
```

Passing true will change the time zone without changing the current time.

```
dayjs('2016-05-03 22:15:01').utc(true).format() 
// 2016-05-03T22:15:01Z
```

Check more information about [UTC mode](../parse/utc).

