---
id: is-same-or-before
title: IsSameOrBefore
---

IsSameOrBefore adds `.isSameOrBefore()` API to returns a `boolean` indicating if a date is same or before another date.

```javascript
var isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
// import isSameOrBefore from 'dayjs/plugin/isSameOrBefore' // ES 2015

dayjs.extend(isSameOrBefore);

dayjs("2010-10-20").isSameOrBefore("2010-10-19", "year");
```
