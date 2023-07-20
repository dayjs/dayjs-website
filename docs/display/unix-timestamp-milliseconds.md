---
id: unix-timestamp-milliseconds
title: Unix Timestamp (milliseconds) 
---

This returns the number of milliseconds since the Unix Epoch of the Day.js object.

```js
dayjs('2019-01-25').valueOf() // 1548381600000
+dayjs('2019-01-25') // 1548381600000
```

To get a Unix timestamp (the number of **seconds** since the epoch) from a Day.js object, you should use [Unix Timestamp](./unix-timestamp).
