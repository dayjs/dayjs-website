---
id: listing-months-weekdays
title: Listing the months and weekdays of the current locale
---

To get the list of months or weekdays in a locale.

@>LocaleData

```js
dayjs.extend(localeData)

dayjs.weekdays()
dayjs.weekdaysShort()
dayjs.weekdaysMin()
dayjs.monthsShort()
dayjs.months() // e.g. return [ 'January','February','March','April','May',
// 'June','July','August','September','October','November','December' ]
```
