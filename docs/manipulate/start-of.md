---
id: start-of
title: Start of Time
---

Mutates the current Day.js object by setting it to the start of a unit of time and returns the corresponding new instance.

```js
dayjs().startOf('year')
```

Units are case insensitive, and support plural and short forms.

#### List of all available units

| Unit          | Shorthand | Description                               |
| ------------- | --------- | ----------------------------------------- |
| `year`        | `y`       | January 1st, 12:00 am this year           |
| `quarter`     | `Q`       | beginning of the current quarter, 1st day of months, 12:00 am @>>QuarterOfYear|
| `month`       | `M`       | the first day of this month, 12:00 am     |
| `week`        | `w`       | the first day of this week, 12:00 am      |
| `isoWeek`     || the first day of this week according to ISO 8601, 12:00 am @>>IsoWeek|
| `date`        | `D`       | 12:00 am today                            |
| `day`         | `d`       | 12:00 am today                            |
| `hour`        | `h`       | now, but with 0 mins, 0 secs, and 0 ms    |
| `minute`      | `m`       | now, but with 0 seconds and 0 milliseconds|
| `second`      | `s`       | now, but with 0 milliseconds              |

<!-- | `quarter`     | `Q`       | beginning of the current quarter, 1st day of months, 12:00 am | -->

