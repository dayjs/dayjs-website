---
id: month-names
title: Month Names
---

`Locale#months` should be an array of the month names.

@>UpdateLocale

```js
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  months: [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ]
})
```

#### Additional token processing

If you need more processing to calculate the name of the month, (for example, if there is different grammar for different formats), `Locale#months` can be a function with the following signature. It should always return a month name.

```js
dayjs.updateLocale("en", {
  months: function (dayjsInstance, format) {
    // dayjsInstance is the moment currently being formatted
    // format is the formatting string
    if (/^MMMM/.test(format)) {
      // if the format starts with 'MMMM'
      return monthShortFormat[dayjsInstance.month()];
    } else {
      return monthShortStandalone[dayjsInstance.month()];
    }
  },
});
```
