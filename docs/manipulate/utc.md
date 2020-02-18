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

Check more information about [UTC mode](../parse/utc).

