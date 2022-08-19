---
id: set
title: Set
---

Generic setter, accepting unit as first argument, and value as second, returns a new instance with the applied changes.

In general:
```js
dayjs().set(unit, value) === dayjs()[unit](value)
```

```js
dayjs().set('date', 1)
dayjs().set('month', 3) // April
dayjs().set('second', 30)
```
For multiple set:
``` 
dayjs().set('hour', 5).set('minute', 55).set('second', 15)
```
Units are case insensitive, and support plural and short forms.

[List of all available units](./get#list-of-all-available-units)
