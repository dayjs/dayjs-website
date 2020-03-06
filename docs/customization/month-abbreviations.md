---
id: month-abbreviations
title: Month Abbreviations
---

`Locale#monthsShort` should be an array of the month abbreviations.

@>UpdateLocale

```js
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  monthsShort: [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ]
})
```
