---
id: creating
title: Creating
---

To create a duration, call `dayjs.duration()` with the length of time in milliseconds.

@>Duration

```javascript
dayjs.extend(duration)

dayjs.duration(100); // 100 milliseconds
```

If you want to create a duration with a unit of measurement other than milliseconds, you can pass the unit of measurement as well.

```javascript
dayjs.duration(2, 'days');
```
#### List of all available units

| Unit           | Shorthand |
| -------------  | --------- |
| `days`         | `d`       |
| `weeks`        | `w`       |
| `months`       | `M`       |
| `years`        | `y`       |
| `hours`        | `h`       |
| `minutes`      | `m`       |
| `seconds`      | `s`       |
| `milliseconds` | `ms`      |

You can also pass an object of values if you need multiple different units of measurement.

```javascript
dayjs.duration({
  seconds: 2,
  minutes: 2,
  hours: 2,
  days: 2,
  weeks: 2,
  months: 2,
  years: 2
});
```

Day.js also supports parsing ISO 8601 durations.

```js
dayjs.duration('P1Y2M3DT4H5M6S');
dayjs.duration('P1M');
```
