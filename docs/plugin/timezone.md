---
id: timezone
title: Timezone
---

Timezone adds `dayjs.tz` `.tz` `.tz.guess` `.tz.setDefault` APIs to parse or display between time zones.

```javascript
var utc = require('dayjs/plugin/utc')
// import * as utc from 'dayjs/plugin/utc' // ES 2015
var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin
// import * as timezone from 'dayjs/plugin/timezone' // ES 2015
dayjs.extend(utc)
dayjs.extend(timezone)

dayjs.tz("2014-06-01 12:00", "America/New_York")

dayjs("2014-06-01 12:00").tz("America/New_York")

dayjs.tz.guess()

dayjs.tz.setDefault("America/New_York")
```
