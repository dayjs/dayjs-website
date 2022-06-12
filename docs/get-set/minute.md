---
id: minute
title: Minute
---

Gets or sets the minutes.

Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the hour.

```js
dayjs().minute() // gets current minute
dayjs().minute(59) // returns new dayjs object
```
