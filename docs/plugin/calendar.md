---
id: calendar
title: Calendar
---

Calendar adds `.calendar` API to return a `string` to display calendar time

```javascript
var calendar = require("dayjs/plugin/calendar");
// import calendar from 'dayjs/plugin/calendar' // ES 2015

dayjs.extend(calendar);

dayjs("2008-01-01").calendar();
dayjs().calendar(null, {
  sameDay: "[Today at] h:mm A", // The same day ( Today at 2:30 AM )
  nextDay: "[Tomorrow at] h:mm A", // The next day ( Tomorrow at 2:30 AM )
  nextWeek: "dddd [at] h:mm A", // The next week ( Sunday at 2:30 AM )
  lastDay: "[Yesterday at] h:mm A", // The day before ( Yesterday at 2:30 AM )
  lastWeek: "[Last] dddd [at] h:mm A", // Last week ( Last Monday at 2:30 AM )
  sameElse: "DD/MM/YYYY", // Everything else ( 17/10/2011 )
});
```
