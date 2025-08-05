---
id: unix-timestamp
title: Unix Timestamp
---

This returns the Unix timestamp (the number of seconds since the Unix Epoch) of the Day.js object.

```js
dayjs('2019-01-25').unix() // 1548381600 (Return value base on timezone.)
```

This value is floored to the nearest second, and does not include a milliseconds component.
