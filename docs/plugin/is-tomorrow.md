---
id: is-tomorrow
title: IsTomorrow
---

IsTomorrow adds `.isTomorrow()` API to indicates whether the Day.js object is tomorrow or not.

```js
var isTomorrow = require("dayjs/plugin/isTomorrow");
// import isTomorrow from 'dayjs/plugin/isTomorrow' // ES 2015

dayjs.extend(isTomorrow);

dayjs().add(1, "day").isTomorrow(); // true
```
