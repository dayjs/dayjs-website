---
id: unix-timestamp
title: Unix Timestamp (seconds)
---

Create a Day.js object from a Unix timestamp (10 digits, seconds since the Unix Epoch).

```js
dayjs.unix(1318781876)
```

This is implemented as `dayjs(timestamp * 1000)`, so partial seconds in the input timestamp are included.

```js
dayjs.unix(1318781876.721)
```
