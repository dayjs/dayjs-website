---
id: is-same-or-after
title: Is Same or After
---

This indicates whether the Day.js object is the same or after another supplied date-time.

@>IsSameOrAfter

```js
dayjs.extend(isSameOrAfter)
dayjs().isSameOrAfter(dayjs('2011-01-01')) // default milliseconds
```
If you want to limit the granularity to a unit other than milliseconds, pass it as the second parameter.

```js
dayjs().isSameOrAfter('2011-01-01', 'year')
```

Units are case insensitive, and support plural and short forms.

[List of all available units](../manipulate/start-of#list-of-all-available-units)
