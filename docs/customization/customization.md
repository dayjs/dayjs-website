---
id: customization
title: Customize
---

Day.js is very easy to customize. 

You can create a new locale.

```js
var localeObject = {...} // Day.js locale Object, detailed below
dayjs.locale('en-my-settings', localeObject);
```

Update an existing locale.

@>UpdateLocale

```js
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  /**/
})
```

Template of a Day.js locale Object.

```javascript
const localeObject = {
  name: 'es', // name String
  weekdays: 'Domingo_Lunes ...'.split('_'), // weekdays Array
  weekdaysShort: 'Sun_M'.split('_'), // OPTIONAL, short weekdays Array, use first three letters if not provided
  weekdaysMin: 'Su_Mo'.split('_'), // OPTIONAL, min weekdays Array, use first two letters if not provided
  weekStart: 1, // OPTIONAL, set the start of a week. If the value is 1, Monday will be the start of week instead of Sunday。
  yearStart: 4, // OPTIONAL, the week that contains Jan 4th is the first week of the year.
  months: 'Enero_Febrero ... '.split('_'), // months Array
  monthsShort: 'Jan_F'.split('_'), // OPTIONAL, short months Array, use first three letters if not provided
  ordinal: n => `${n}º`, // ordinal Function (number) => return number + output
  formats: {
    // abbreviated format options allowing localization
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A',
    // lowercase/short, optional formats for localization
    l: 'D/M/YYYY',
    ll: 'D MMM, YYYY',
    lll: 'D MMM, YYYY h:mm A',
    llll: 'ddd, MMM D, YYYY h:mm A'
  },
  relativeTime: {
    // relative time format strings, keep %s %d as the same
    future: 'in %s', // e.g. in 2 hours, %s been replaced with 2hours
    past: '%s ago',
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours', // e.g. 2 hours, %d been replaced with 2
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
  },
  meridiem: (hour, minute, isLowercase) => {
    // OPTIONAL, AM/PM
    return hour > 12 ? 'PM' : 'AM'
  }
}
```

Template of a Day.js locale file (e.g dayjs/locale/es.js).

```javascript
import dayjs from 'dayjs'

const locale = { ... } // Your Day.js locale Object.

dayjs.locale(locale, null, true) // load locale for later use

export default locale
```

