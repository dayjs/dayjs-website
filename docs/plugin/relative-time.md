---
id: relative-time
title: RelativeTime
---
RelativeTime adds `.from` `.to` `.fromNow` `.toNow` APIs to formats date to relative time strings (e.g. 3 hours ago).

```javascript
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

dayjs().from(dayjs('1990-01-01')) // in 31 years
dayjs().from(dayjs('1990-01-01'), true) // 31 years
dayjs().fromNow()

dayjs().to(dayjs('1990-01-01')) // "31 years ago"
dayjs().toNow()
```

### Time from now `.fromNow(withoutSuffix?: boolean)`

Returns the `string` of relative time from now.

### Time from X `.from(compared: Dayjs, withoutSuffix?: boolean)`

Returns the `string` of relative time from X.

### Time to now `.toNow(withoutSuffix?: boolean)`

Returns the `string` of relative time to now.

### Time to X `.to(compared: Dayjs, withoutSuffix?: boolean)`

Returns the `string` of relative time to X.

[List of breakdown range](../display/from-now#list-of-breakdown-range)
