---
id: quarter-of-year
title: QuarterOfYear
---

QuarterOfYear adds `.quarter()` API to return to which quarter of the year belongs a date, and extends `.add` `.subtract` `.startOf` `.endOf` APIs to support unit `quarter`.

```javascript
var quarterOfYear = require("dayjs/plugin/quarterOfYear");
// import quarterOfYear from 'dayjs/plugin/quarterOfYear' // ES 2015

dayjs.extend(quarterOfYear);

dayjs("2010-04-01").quarter(); // 2
dayjs("2010-04-01").quarter(2);
```
