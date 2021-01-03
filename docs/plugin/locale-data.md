---
id: locale-data
title: LocaleData
---
LocaleData extends `dayjs().localeData` API to supply locale data.

```javascript
var localeData = require('dayjs/plugin/localeData')
dayjs.extend(localeData)

dayjs().localeData()
```

Available methods: 

```js
dayjs.months()
dayjs.monthsShort()
dayjs.weekdays()
dayjs.weekdaysShort()
dayjs.weekdaysMin()
dayjs.longDateFormat('L')

globalLocaleData = dayjs.localeData()
globalLocaleData.firstDayOfWeek()
globalLocaleData.months()
globalLocaleData.monthsShort()
globalLocaleData.weekdays()
globalLocaleData.weekdaysShort()
globalLocaleData.weekdaysMin()
globalLocaleData.longDateFormat('L')

globalLocaleData.months(dayjs())
globalLocaleData.monthsShort(dayjs())
globalLocaleData.weekdays(dayjs())
globalLocaleData.weekdaysShort(dayjs())
globalLocaleData.weekdaysMin(dayjs())
globalLocaleData.meridiem()
globalLocaleData.ordinal()

instanceLocaleData = dayjs().localeData()
instanceLocaleData.firstDayOfWeek()
instanceLocaleData.months()
instanceLocaleData.monthsShort()
instanceLocaleData.weekdays()
instanceLocaleData.weekdaysShort()
instanceLocaleData.weekdaysMin()
instanceLocaleData.longDateFormat('L')
instanceLocaleData.meridiem()
instanceLocaleData.ordinal()
```
