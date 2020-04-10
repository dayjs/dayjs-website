---
id: seconds
title: Seconds
---

To get the number of seconds in a duration, use `dayjs.duration().seconds()`.

It will return a number between 0 and 59.

```javascript
dayjs.duration(500).seconds(); // 0
dayjs.duration(1500).seconds(); // 1
dayjs.duration(15000).seconds(); // 15
```

If you want the length of the duration in seconds, use `dayjs.duration().asSeconds()` instead.

```javascript
dayjs.duration(500).asSeconds(); // 0.5
dayjs.duration(1500).asSeconds(); // 1.5
dayjs.duration(15000).asSeconds(); // 15
```
