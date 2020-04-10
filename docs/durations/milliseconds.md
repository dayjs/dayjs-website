---
id: milliseconds
title: Milliseconds
---

To get the number of milliseconds in a duration, use `dayjs.duration().milliseconds()`.

It will return a number between 0 and 999.

```javascript
dayjs.duration(500).milliseconds(); // 500
dayjs.duration(1500).milliseconds(); // 500
dayjs.duration(15000).milliseconds(); // 0
```

If you want the length of the duration in milliseconds, use `dayjs.duration().asMilliseconds()` instead.

```javascript
dayjs.duration(500).asMilliseconds(); // 500
dayjs.duration(1500).asMilliseconds(); // 1500
dayjs.duration(15000).asMilliseconds(); // 15000
```
