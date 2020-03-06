---
id: weekday-min
title: Minimal Weekday Abbreviations
---

`Locale#weekdaysMin` should be an array of two letter weekday abbreviations.

@>UpdateLocale

```js
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
})
```
