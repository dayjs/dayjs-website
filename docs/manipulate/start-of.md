---
id: start-of
title: Start of Time
---

Returns a cloned Day.js object and set it to the start of a unit of time.

```js
dayjs().startOf('year')
```

Units are case insensitive, and support plural and short forms.

#### List of all available units

| Unit          | Shorthand | Description                               |
| ------------- | --------- | ----------------------------------------- |
| `year`        | `y`       | January 1st, 00:00 this year           |
| `quarter`     | `Q`       | beginning of the current quarter, 1st day of months, 00:00 @>>QuarterOfYear|
| `month`       | `M`       | the first day of this month, 00:00     |
| `week`        | `w`       | the first day of this week, 00:00      |
| `isoWeek`     || the first day of this week according to ISO 8601, 00:00 @>>IsoWeek|
| `date`        | `D`       | 00:00 today                            |
| `day`         | `d`       | 00:00 today                            |
| `hour`        | `h`       | now, but with 0 mins, 0 secs, and 0 ms    |
| `minute`      | `m`       | now, but with 0 seconds and 0 milliseconds|
| `second`      | `s`       | now, but with 0 milliseconds              |

<!-- | `quarter`     | `Q`       | beginning of the current quarter, 1st day of months, 00:00 | -->

