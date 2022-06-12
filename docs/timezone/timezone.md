---
id: timezone
title: Time Zone
---

Day.js supports time zone via the [Internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) in [supported environments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#Browser_compatibility). By using the native API, no extra bytes of timezone data need to be included in code bundle.  
The list of all time zone names can be fount in the [IANA database](https://www.iana.org/time-zones).

For legacy or unsupported environments, please use a proper [polyfill](https://github.com/formatjs/date-time-format-timezone). 

@>Timezone

```javascript
dayjs.extend(utc)
dayjs.extend(timezone)

// current time zone is 'Europe/Berlin' (offset +01:00)
// Parsing
dayjs.tz("2013-11-18T11:55:20", "America/Toronto") // '2013-11-18T11:55:20-05:00'

// Converting (from time zone 'Europe/Berlin'!)
dayjs("2013-11-18T11:55:20").tz("America/Toronto") // '2013-11-18T05:55:20-05:00'
```
