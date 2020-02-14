---
id: dayjs-clone
title: Dayjs Clone
---

All Day.js objects are **immutable**. Still, `dayjs#clone` can create a clone of the current object if you need one.

```js
var a = dayjs()
var b = a.clone()
// a and b are two separate Day.js object
```

Calling `dayjs()` on a Day.js obejct will clone it as well.
```js
var a = dayjs()
var b = dayjs(a)
```
