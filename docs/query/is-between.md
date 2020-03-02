---
id: is-between
title: Is Between
---

This indicates whether the Day.js object is between two other supplied date-time.

@>IsBetween

```js
dayjs.extend(isBetween)
dayjs('2010-10-20').isBetween('2010-10-19', dayjs('2010-10-25')) 
// default milliseconds
```
If you want to limit the granularity to a unit other than milliseconds, pass it as the third parameter.

```js
dayjs().isBetween('2010-10-19', '2010-10-25', 'year')
```

Units are case insensitive, and support plural and short forms.

[List of all available units](../manipulate/start-of#list-of-all-available-units)

The fourth parameter is about inclusivity. A `[` indicates inclusion of a value. A `(` indicates exclusion. 

If the inclusivity parameter is used, both indicators must be passed.

```js
dayjs('2016-10-30').isBetween('2016-01-01', '2016-10-30', null, '[)')
```
