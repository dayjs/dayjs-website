---
id: is-today
title: IsToday
---

IsToday adds `.isToday()` API to indicates whether the Day.js object is today or not.

```js
var isToday = require("dayjs/plugin/isToday");
// import isToday from 'dayjs/plugin/isToday' // ES 2015

dayjs.extend(isToday);

dayjs().isToday(); // true
```
