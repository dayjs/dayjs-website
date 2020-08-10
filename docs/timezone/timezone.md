---
id: timezone
title: Time Zone
---

Day.js supports time zone via the [Internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) in [supported environments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#Browser_compatibility). By using the built-in API, zero-byte time zone data needs to be included in code bundle.

For legacy or unsupported environments, please use a proper [polyfill](https://github.com/formatjs/date-time-format-timezone). 

@>Timezone

```javascript
dayjs.extend(utc)
dayjs.extend(timezone)

dayjs.tz("2014-06-01 12:00", "America/New_York")

dayjs("2014-06-01 12:00").tz("America/New_York")
```
