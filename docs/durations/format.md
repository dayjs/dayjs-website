---
id: format
title: Format
---

Get the formatted duration according to the string of tokens passed in.

To escape characters, wrap them in square brackets (e.g. `[MM]`).

```js
dayjs.duration({
  seconds: 1,
  minutes: 2,
  hours: 3,
  days: 4,
  months: 6,
  years: 7
}).format('YYYY-MM-DDTHH:mm:ss') // 0007-06-04T03:02:01
```

#### List of all available formats

| Format | Output           | Description                           |
| ------ | ---------------- | ------------------------------------- |
| `Y`    | 18               | The years                             |
| `YY`   | 18               | The years, 2-digits                   |
| `YYYY` | 2018             | The years, 4-digits                   |
| `M`    | 1-12             | The months, beginning at 1            |
| `MM`   | 01-12            | The months, 2-digits                  |
| `D`    | 1-31             | The days                              |
| `DD`   | 01-31            | The days, 2-digits                    |
| `H`    | 0-23             | The hours                             |
| `HH`   | 00-23            | The hours, 2-digits                   |
| `m`    | 0-59             | The minutes                           |
| `mm`   | 00-59            | The minutes, 2-digits                 |
| `s`    | 0-59             | The seconds                           |
| `ss`   | 00-59            | The seconds, 2-digits                 |
| `SSS`  | 000-999          | The milliseconds, 3-digits            |
