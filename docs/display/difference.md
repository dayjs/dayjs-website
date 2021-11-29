---
id: difference
title: Difference
---

This indicates the difference between two date-time in the specified unit.

To get the difference in milliseconds, use `dayjs#diff`.

```js
const date1 = dayjs('2019-01-25')
const date2 = dayjs('2018-06-05')
date1.diff(date2) // 20214000000 default milliseconds
```

To get the difference in another unit of measurement, pass that measurement as the second argument.

```js
const date1 = dayjs('2019-01-25')
date1.diff('2018-06-05', 'month') // 7
```

By default, `dayjs#diff` will truncate the result to zero decimal places, returning an integer. If you want a floating point number, pass true as the third argument.

```js
const date1 = dayjs('2019-01-25')
date1.diff('2018-06-05', 'month', true) // 7.645161290322581
```

#### List of all available units

Units are case insensitive, and support plural and short forms. Note, short forms are case sensitive.

| Unit          | Shorthand | Description                              |
| ------------- | --------- | ---------------------------------------- |
| `day`         | `d`       | Day                                      |
| `week`        | `w`       | Week of Year                             |
| `quarter`     | `Q`       | Quarter                                  |
| `month`       | `M`       | Month (January as 0, December as 11)     |
| `year`        | `y`       | Year                                     |
| `hour`        | `h`       | Hour                                     |
| `minute`      | `m`       | Minute                                   |
| `second`      | `s`       | Second                                   |
| `millisecond` | `ms`      | Millisecond                              |

