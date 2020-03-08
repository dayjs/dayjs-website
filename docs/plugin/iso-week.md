---
id: iso-week
title: IsoWeek
---

IsoWeek adds `.isoWeek()` API to get or set the ISO week of the year. And adds `.isoWeekday()` to get or set ISO day of the week and `.isoWeekYear()` to get ISO week-year, and extends `.startOf` `.endOf` APIs to support unit `isoWeek`.

@>IsLeapYear

```javascript
var isoWeek = require('dayjs/plugin/isoWeek')

dayjs.extend(isoWeek)

dayjs().isoWeek()
dayjs().isoWeekday()
dayjs().isoWeekYear()
```
