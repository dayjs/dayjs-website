---
id: object-support
title: ObjectSupport
---

ObjectSupport extends `dayjs()`, `dayjs.utc`, `dayjs().set`, `dayjs().add`, `dayjs().subtract` APIs to support object argument.

```javascript
var objectSupport = require("dayjs/plugin/objectSupport");
dayjs.extend(objectSupport);

dayjs({
  year: 2010,
  month: 1,
  day: 12
});
dayjs.utc({
  year: 2010,
  month: 1,
  day: 12
});
dayjs().set({ year: 2010, month: 1, day: 12 })
dayjs().add({ M: 1 })
dayjs().subtract({ month: 1 })
```
