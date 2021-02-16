---
id: add
title: Add Time
---

Returns a cloned duration object with a specified amount of time added.

```javascript
var a = dayjs.duration(1, 'd');
var b = dayjs.duration(2, 'd');

a.add(b).days(); // 3
a.add({ days: 2 } ).days();
a.add(2, 'days');
```

Example 2;
```javascript
var now = dayjs();
now.add('1', 'day');
- or
now.add('1', 'day').format('YYYY-MM-DD');
```

[List of all available units](./creating#list-of-all-available-units)

