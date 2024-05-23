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

const timestamp = "2014-06-01 12:00"
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
```

Guessing the user timezone
```javascript
dayjs.tz.guess()
```

Parsing in a timezone
```javascript
const d1 = dayjs.tz('2013-11-18 11:55', 'Asia/Taipei')
d1.format() // => 2013-11-18T11:55:00+08:00
d1.toISOString() // => 2013-11-18T03:55:00.000Z
```

Converting to a timezone
```javascript
const d2 = dayjs.utc('2013-11-18 11:55').tz('Asia/Taipei')
d2.format() // => 2013-11-18T19:55:00+08:00
d2.toISOString() // => 2013-11-18T11:55:00.000Z
```

Set / reset the default timezone (used by 'tz')
```javascript
// Setting the default timezone
dayjs.tz.setDefault('America/New_York')

// Resetting the default timezone to the system timezone
dayjs.tz.setDefault()
```
### Differences to moment
Using the default timezone makes `moment(dateValue)` use this timezone (but `moment.tz(dateValue, timezone)` still requires the second parameter).

But `dayjs(dateValue)` always uses the local timezone, even if `dayjs.tz.setDefault` is used; only `dayjs.tz(dateValue)` (without second parameter) uses the default timezone.

