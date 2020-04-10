---
id: get
title: Get Unit of Time
---

As an alternate to `Duration#x()` getters, you can use `Duration#get('x')`. 

```javascript
var duration = dayjs.duration

duration.get('hours');
duration.get('minutes');
duration.get('seconds');
duration.get('milliseconds');
```

[List of all available units](./creating#list-of-all-available-units)
