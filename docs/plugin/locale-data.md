---
id: locale-data
title: LocaleData
---

LocaleData extends the `dayjs().localeData` API to supply locale data.

```javascript
var localeData = require("dayjs/plugin/localeData");
// import localeData from 'dayjs/plugin/localeData' // ES 2015

dayjs.extend(localeData);

dayjs().localeData();
```

Available methods:

```js
dayjs.months();
dayjs.monthsShort();
dayjs.weekdays();
dayjs.weekdaysShort();
dayjs.weekdaysMin();
dayjs.longDateFormat("L");

globalLocaleData = dayjs.localeData();
globalLocaleData.firstDayOfWeek();
globalLocaleData.months();
globalLocaleData.monthsShort();
globalLocaleData.weekdays();
globalLocaleData.weekdaysShort();
globalLocaleData.weekdaysMin();
globalLocaleData.longDateFormat("L");

globalLocaleData.months(dayjs());
globalLocaleData.monthsShort(dayjs());
globalLocaleData.weekdays(dayjs());
globalLocaleData.weekdaysShort(dayjs());
globalLocaleData.weekdaysMin(dayjs());
globalLocaleData.meridiem();
globalLocaleData.ordinal();

instanceLocaleData = dayjs().localeData();
instanceLocaleData.firstDayOfWeek();
instanceLocaleData.months();
instanceLocaleData.monthsShort();
instanceLocaleData.weekdays();
instanceLocaleData.weekdaysShort();
instanceLocaleData.weekdaysMin();
instanceLocaleData.longDateFormat("L");
instanceLocaleData.meridiem();
instanceLocaleData.ordinal();
```

Note: when you want to use `longDateFormat('L')`, remember to extend `localizedFormat`:

```js
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);
```
