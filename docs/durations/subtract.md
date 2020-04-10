---
id: subtract
title: Subtract Time
---

Returns a cloned duration object with a specified amount of time subtracted.

```javascript
var a = dayjs.duration(3, 'd');
var b = dayjs.duration(2, 'd');

a.subtract(b).days(); // 1
a.subtract({ days: 2 } ).days();
a.subtract(2, 'days');
```

[List of all available units](./creating#list-of-all-available-units)
