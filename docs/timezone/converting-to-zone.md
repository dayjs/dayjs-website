---
id: converting-to-zone
title: Converting to Zone
---

Change the time zone and update the offset and return a Day.js object instance.

@>Timezone
```javascript
dayjs.extend(utc)
dayjs.extend(timezone)

// this example runs in time zone 'Europe/Berlin' (offset +01:00)
dayjs("2013-11-18T11:55:20") // '2013-11-18T11:55:20+01:00'
dayjs("2013-11-18T11:55:20").tz("America/Toronto") // '2013-11-18T05:55:20-05:00'
dayjs("2013-11-18T11:55:20").tz("America/Toronto", true) // '2013-11-18T11:55:20-05:00'
```

On passing a second parameter as true, only the timezone (and offset) is updated, keeping the local time same. 
