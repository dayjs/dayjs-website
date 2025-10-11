---
id: is-same-or-before
title: Is Same or Before
---

This indicates whether the Day.js object is the same or before another supplied date-time.

@>IsSameOrBefore

```js
var isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
// import isSameOrBefore from 'dayjs/plugin/isSameOrBefore' // ES2015

dayjs.extend(isSameOrBefore)
dayjs().isSameOrBefore(dayjs('2011-01-01')) // default milliseconds
```
If you want to limit the granularity to a unit other than milliseconds, pass it as the second parameter.

```js
dayjs().isSameOrBefore('2011-01-01', 'year')
```

Units are case insensitive, and support plural and short forms.

[List of all available units](../manipulate/start-of#list-of-all-available-units)
