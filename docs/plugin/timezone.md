---
id: timezone
title: Timezone
---

Timezone adds `dayjs.tz` `.tz` `.tz.guess` `.tz.setDefault` APIs to parse or display between time zones.

```javascript
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone'; // dependent on utc plugin

dayjs.extend(utc)
dayjs.extend(timezone)

const datetime = "2014-06-01 12:00";
const tz = "America/New_York"

const dayjsLocal = dayjs(timestamp); //assumes UTC
//dayjsLocal.toISOString() -> 2014-06-01T12:00:00.000Z
//dayjsLocal.format('YYYY-MM-DDTHH:mm:ss') -> 2014-06-01T12:00:00

const dayjsAmerica = dayjsLocal.tz(tz)  //existing time treated as UTC
//dayjsAmerica.toISOString() -> 2014-06-01T12:00:00.000Z
//dayjsAmerica.format('YYYY-MM-DDTHH:mm:ss') -> 2014-06-01T08:00:00

const dayjsAmericaKeep = dayjsLocal.tz(tz, true) //existing time treated as local time
//dayjsAmericaKeep.toISOString() -> 2014-06-01T16:00:00.000Z
//dayjsAmericaKeep.format('YYYY-MM-DDTHH:mm:ss') -> 2014-06-01T12:00:00

dayjs("2014-06-01 12:00").tz("America/New_York")

dayjs.tz.guess()

dayjs.tz.setDefault("America/New_York")
```
