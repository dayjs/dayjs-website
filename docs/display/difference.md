---
id: difference
title: Difference
---

This indicates the difference between two date-times in the specified unit.

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

Units are case insensitive, and support plural and short forms.

```js
const date1 = dayjs('2020-12-25')
date1.diff('2020-12-24', 'days') // 1
```

```js
const date1 = dayjs('2020-12-25T23:56:25.351Z')
date1.diff('2020-12-25T20:56:25.351Z', 'h') // 3
```


#### List of all available units

| Unit          | Shorthand | Description                              |
| ------------- | --------- | -----------------------------------------|
| `day`         | `d`       | Number of days between two dates         |
| `week`        | `w`       | Number of weeks between two dates        |
| `quarter`     | `Q`       | Number of quarters between two dates     |
| `month`       | `M`       | Number of months between two dates       |
| `year`        | `y`       | Number of years between two dates        |
| `hour`        | `h`       | Number of hours between two dates        |
| `minute`      | `m`       | Number of minutes between two dates      |
| `second`      | `s`       | Number of seconds between two dates      |
| `millisecond` | `ms`      | Number of milliseconds between two dates |


By default, `dayjs#diff` will truncate the result to zero decimal places, returning an integer. If you want a floating point number, pass true as the third argument.

```js
const date1 = dayjs('2019-01-25')
date1.diff('2018-06-05', 'month', true) // 7.645161290322581
```
