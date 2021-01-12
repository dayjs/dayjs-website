---
id: is-same
title: Is Same
---

This indicates whether the Day.js object is the same as the other supplied date-time.

```js
dayjs().isSame(dayjs('2011-01-01')) // default milliseconds
```
If you want to limit the granularity to a unit other than milliseconds, pass it as the second parameter.

When including a second parameter, it will match all units equal or larger. Passing in `month` will check `month` and `year`. Passing in `day` will check `day`, `month`, and `year`.

```js
dayjs().isSame('2011-01-01', 'year')
```

Units are case insensitive, and support plural and short forms.

[List of all available units](../manipulate/start-of#list-of-all-available-units)
