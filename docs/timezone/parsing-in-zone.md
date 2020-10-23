---
id: parsing-in-zone
title: Parsing in Zone
---

Parse date-time string in the given timezone and return a Day.js object instance.

@>Timezone
```javascript
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz("2013-11-18 11:55", "America/Toronto")
```

If you know the format of an input string, you can use that to parse a date, the arguments are the same as [String + Format](../parse/string-format).

@>CustomParseFormat
```javascript
dayjs.extend(customParseFormat)
dayjs.tz("12-25-1995", "MM-DD-YYYY", "America/Toronto")
```
