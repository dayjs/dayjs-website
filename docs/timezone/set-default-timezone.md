---
id: set-default-timezone
title: Set Default Timezone
---

Change default timezone from local time zone to your custom timezone.

You can still custom a different timezone in a specific `dayjs` object.

@>Timezone
```javascript
dayjs.extend(utc)
dayjs.extend(timezone)

dayjs.tz.setDefault("America/New_York")

// The same behavior with dayjs.tz("2014-06-01 12:00", "America/New_York")
dayjs.tz("2014-06-01 12:00")  // 2014-06-01T12:00:00-04:00

// use another timezone
dayjs.tz("2014-06-01 12:00", "Asia/Tokyo")  // 2014-06-01T12:00:00+09:00

// reset timezone
dayjs.tz.setDefault()
```

Notice: `dayjs.tz.setDefault` will not affect existing `dayjs` objects.
