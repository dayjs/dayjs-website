---
id: is-yesterday
title: IsYesterday
---

IsYesterday adds `.isYesterday()` API to indicates whether the Day.js object is yesterday or not.

```js
var isYesterday = require("dayjs/plugin/isYesterday");
// import isYesterday from 'dayjs/plugin/isYesterday' // ES 2015

dayjs.extend(isYesterday);

dayjs().add(-1, "day").isYesterday(); // true
```
