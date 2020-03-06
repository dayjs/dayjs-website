---
id: weekday-abbreviations
title: Weekday Abbreviations 
---

`Locale#weekdaysShort` should be an array of the weekdays abbreviations.

@>UpdateLocale

```js
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
})
```
