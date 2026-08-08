---
id: calendar-time
title: Calendar Time
---

Calendar time displays time relative to a given reference time (defaults to now) but does so slightly differently than `dayjs#fromNow`.

@>Calendar

```js
dayjs.extend(calendar)

dayjs().calendar()
dayjs().calendar(dayjs('2008-01-01'))
```

|Key|	Value|
| ------ | ----- | 
|Last week (lastWeek)|	Last Monday at 2:30 AM|
|The day before (lastDay)|	Yesterday at 2:30 AM|
|The same day (sameDay)	|Today at 2:30 AM|
|The next day	(nextDay) |Tomorrow at 2:30 AM|
|The next week (nextWeek)	|Sunday at 2:30 AM|
|Everything else (sameElse)	|7/10/2011|

These strings are localized, and [can be customized](../customization/calendar).

You can also pass specifying calendar output formats as the second parameter.

To escape characters, wrap them in square brackets (e.g. [Today]).

```js
dayjs().calendar(null, {
  sameDay: '[Today at] h:mm A', // The same day ( Today at 2:30 AM )
  nextDay: '[Tomorrow at] h:mm A', // The next day ( Tomorrow at 2:30 AM )
  nextWeek: 'dddd [at] h:mm A', // The next week ( Sunday at 2:30 AM )
  lastDay: '[Yesterday at] h:mm A', // The day before ( Yesterday at 2:30 AM )
  lastWeek: '[Last] dddd [at] h:mm A', // Last week ( Last Monday at 2:30 AM )
  sameElse: 'DD/MM/YYYY' // Everything else ( 7/10/2011 )
})
```
