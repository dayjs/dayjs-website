---
id: calendar
title: Calendar
---

`Locale#calendar` should have the following formatting strings.

@>UpdateLocale

```js
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  calendar: {
    lastDay: '[Yesterday at] LT',
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    lastWeek: '[last] dddd [at] LT',
    nextWeek: 'dddd [at] LT',
    sameElse: 'L'
  }
})
```

Each of the `Locale#calendar` keys can also be a callback function with the scope of the current Day.js object and first argument a Day.js object that depicts now. It should return a formatting string.

```js
function callback (now) {
    return '[hoy a la' + ((this.hour() !== 1) ? 's' : '') + ']' + now.format();
}
```
