---
id: week-year
title: WeekYear
---
WeekYear adds `.weekYear()` API to get locale aware week of the year.

```javascript
var weekYear = require('dayjs/plugin/weekYear')
var weekOfYear = require('dayjs/plugin/weekOfYear') // dependent on weekOfYear plugin
dayjs.extend(weekOfYear)
dayjs.extend(weekYear)

dayjs().weekYear()
```
