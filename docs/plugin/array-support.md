---
id: array-support
title: ArraySupport
---

ArraySupport extends `dayjs()`, `dayjs.utc` APIs to support array argument.

```javascript
var arraySupport = require("dayjs/plugin/arraySupport");
dayjs.extend(arraySupport);

dayjs([2010, 1, 14, 15, 25, 50, 125]);
dayjs.utc([2010, 1, 14, 15, 25, 50, 125]);
```
