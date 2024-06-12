---
id: advanced-format
title: AdvancedFormat
---

AdvancedFormat extends `dayjs().format` API to supply more format options.

```javascript
var advancedFormat = require("dayjs/plugin/advancedFormat");
// import advancedFormat from 'dayjs/plugin/advancedFormat' // ES 2015

dayjs.extend(advancedFormat);

dayjs().format("Q Do k kk X x");
```

Note: some of the format options like `z` and `zzz` in the table below require additional plugins.

List of added formats:

| Format | Output                | Description                             |
| ------ | --------------------- | --------------------------------------- |
| `Q`    | 1-4                   | Quarter                                 |
| `Do`   | 1st 2nd ... 31st      | Day of Month with ordinal               |
| `k`    | 1-24                  | The hour, beginning at 1                |
| `kk`   | 01-24                 | The hour, 2-digits, beginning at 1      |
| `X`    | 1360013296            | Unix Timestamp in second                |
| `x`    | 1360013296123         | Unix Timestamp in millisecond           |
| `w`    | 1 2 ... 52 53         | Week of year @>>WeekOfYear              |
| `ww`   | 01 02 ... 52 53       | Week of year, 2-digits @>>WeekOfYear    |
| `W`    | 1 2 ... 52 53         | ISO Week of year @>>IsoWeek             |
| `WW`   | 01 02 ... 52 53       | ISO Week of year, 2-digits @>>IsoWeek   |
| `wo`   | 1st 2nd ... 52nd 53rd | Week of year with ordinal @>>WeekOfYear |
| `gggg` | 2017                  | Week Year @>>WeekYear                   |
| `GGGG` | 2017                  | ISO Week Year @>>IsoWeek                |
| `z`    | EST                   | Abbreviated named offset @>>Timezone    |
| `zzz`  | Eastern Standard Time | Unabbreviated named offset @>>Timezone  |
