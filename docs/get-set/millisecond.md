---
id: millisecond
title: Millisecond
---

Gets or sets the millisecond.

Accepts numbers from 0 to 999. If the range is exceeded, it will bubble up to the seconds.

```js
dayjs().millisecond() // gets current millisecond
dayjs().millisecond(1) // returns new dayjs object
```
