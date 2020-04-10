---
id: as
title: As Unit of Time
---

As an alternate to `Duration#asX`, you can use `Duration#as('x')`.

```javascript
var duration = dayjs.duration()

duration.as('hours');
duration.as('minutes');
duration.as('seconds');
duration.as('milliseconds');
```

[List of all available units](./creating#list-of-all-available-units)
