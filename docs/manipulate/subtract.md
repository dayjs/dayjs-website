---
id: subtract
title: Subtract
---
Returns a cloned Day.js object with a specified amount of time subtracted.

```js
dayjs().subtract(7, 'year')
```

Units are case insensitive, and support plural and short forms.

[List of all available units](../manipulate/add#list-of-all-available-units)

When decimal values are passed for **days** and **weeks**, they are rounded to the nearest integer before subtracting.
