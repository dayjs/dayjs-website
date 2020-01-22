---
id: advanced-format
title: AdvancedFormat
---


- AdvancedFormat extends `dayjs().format` API to supply more format options.

```javascript
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(advancedFormat)

dayjs().format('Q Do k kk X x')
```

List of added formats:

| Format | Output                | Description                                           |
| ------ | --------------------- | ----------------------------------------------------- |
| `Q`    | 1-4                   | Quarter                                               |
| `Do`   | 1st 2nd ... 31st      | Day of Month with ordinal                             |
| `k`    | 1-24                  | The hour, beginning at 1                              |
| `kk`   | 01-24                 | The hour, 2-digits, beginning at 1                    |
| `X`    | 1360013296            | Unix Timestamp in second                              |
| `x`    | 1360013296123         | Unix Timestamp in millisecond                         |
| `w`    | 1 2 ... 52 53         | Week of year (depend: weekOfYear plugin)              |
| `ww`   | 01 02 ... 52 53       | Week of year, 2-digits (depend: weekOfYear plugin)    |
| `wo`   | 1st 2nd ... 52nd 53rd | Week of year with ordinal (depend: weekOfYear plugin) |
| `gggg` | 2017                  | Week Year (depend: weekYear plugin)                   |