---
id: is-today
title: IsToday
---

IsToday adds `.isToday()` API to indicates whether the Day.js object is today or not.

```js
var isToday = require('dayjs/plugin/isToday')

dayjs.extend(isToday)

dayjs().isToday() // true
```
