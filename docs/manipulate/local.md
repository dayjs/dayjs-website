---
id: local
title: Local
---

This returns a Day.js object with a flag to use local time.
@>UTC
```js
dayjs.extend(utc)

var a = dayjs.utc()
a.format() // 2019-03-06T00:00:00Z
a.local().format() //2019-03-06T08:00:00+08:00
```

Check more information about [UTC mode](../parse/utc).

