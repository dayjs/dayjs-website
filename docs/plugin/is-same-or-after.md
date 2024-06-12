---
id: is-same-or-after
title: IsSameOrAfter
---

IsSameOrAfter adds `.isSameOrAfter()` API to return a `boolean` indicating if a date is the same or after another date.

```javascript
var isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
// import isSameOrAfter from 'dayjs/plugin/isSameOrAfter' // ES 2015

dayjs.extend(isSameOrAfter);

dayjs("2010-10-20").isSameOrAfter("2010-10-19", "year");
```
