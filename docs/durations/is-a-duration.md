---
id: is-a-duration
title: Is a Duration
---

To check if a variable is a Day.js duration object, use `dayjs.isDuration()`.

```javascript
dayjs.isDuration() // false
dayjs.isDuration(new Date()) // false
dayjs.isDuration(dayjs()) // false
dayjs.isDuration(dayjs.duration()) // true
dayjs.isDuration(dayjs.duration(2, 'minutes')) // true
```
