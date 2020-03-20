---
id: add
title: Add
---
Returns a cloned Day.js object with a specified amount of time added.

```js
dayjs().add(7, 'day')
```

Units are case insensitive, and support plural and short forms.

#### List of all available units

| Unit          | Shorthand | Description                              |
| ------------- | --------- | ---------------------------------------- |
| `date`        | `D`       | Date of Month                            |
| `day`         | `d`       | Day of Week (Sunday as 0, Saturday as 6) |
| `week`        | `w`       | Week of Year                             |
| `month`       | `M`       | Month (January as 0, December as 11)     |
| `quarter`     | `Q`       | Quarter @>>QuarterOfYear                 |
| `year`        | `y`       | Year                                     |
| `hour`        | `h`       | Hour                                     |
| `minute`      | `m`       | Minute                                   |
| `second`      | `s`       | Second                                   |
| `millisecond` | `ms`      | Millisecond                              |
