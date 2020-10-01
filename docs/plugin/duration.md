---
id: duration
title: Duration
---
Duration adds `.duration` `.isDuration` APIs to support duration.

```javascript
var duration = require('dayjs/plugin/duration')
dayjs.extend(duration)

dayjs.duration(100)
```

In addition, you can now add `Duration` values to `dayjs` instances:
```javascript
const d = dayjs('2020-10-01');
const days = dayjs.duration(2, 'days');
d.add(days).format('YYYY-MM-DD')); // 2020-10-03
```
