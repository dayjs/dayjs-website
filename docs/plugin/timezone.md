---
id: timezone
title: Timezone
---

Timezone adds `dayjs.tz` `.tz` `.tz.guess` APIs to parse or display between time zones.

```javascript
var utc = require('dayjs/plugin/utc') // dependent on utc plugin
var timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc)
dayjs.extend(timezone)

dayjs.tz("2014-06-01 12:00", "America/New_York")

dayjs("2014-06-01 12:00").tz("America/New_York")

dayjs.tz.guess()
```
