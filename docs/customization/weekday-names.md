---
id: weekday-names
title: Weekday Names
---

`Locale#weekdays` should be an array of the weekdays names.

@>UpdateLocale

```js
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  weekdays: [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ]
})
```
