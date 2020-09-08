---
id: calendar
title: Calendar
---
Calendar adds `.calendar` API to return a `string` to display calendar time

```javascript
var calendar = require('dayjs/plugin/calendar')
dayjs.extend(calendar)

dayjs().calendar(dayjs('2008-01-01'))
dayjs().calendar(null, {
  sameDay: '[Today at] h:mm A', // The same day ( Today at 2:30 AM )
  nextDay: '[Tomorrow]', // The next day ( Tomorrow at 2:30 AM )
  nextWeek: 'dddd', // The next week ( Sunday )
  lastDay: '[Yesterday]', // The day before ( Yesterday ) 
  lastWeek: '[Last] dddd', // Last week ( Last Monday )
  sameElse: 'DD/MM/YYYY' // Everything else ( 7/10/2011 )
})
```
