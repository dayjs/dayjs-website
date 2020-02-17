---
id: is-a-dayjs
title: Is a Dayjs
---

This indicates whether a variable is a Day.js object or not.

```js
dayjs.isDayjs(dayjs()) // true
dayjs.isDayjs(new Date()) // false
```

The operator `instanceof` works equally well:

```js
dayjs() instanceof dayjs // true
```
