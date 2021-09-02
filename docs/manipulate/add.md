---
id: add
title: Add
---

Returns a cloned Day.js object with a specified amount of time added.

```js
dayjs().add(7, 'day')
```

Units are case insensitive, and support plural and short forms. Note, short forms are case sensitive.

#### List of all available units

| Unit          | Shorthand | Description                              |
| ------------- | --------- | ---------------------------------------- |
| `day`         | `d`       | one day,or 24 hours |
| `week`        | `w`       | Week of Year                             |
| `month`       | `M`       | Month (January as 0, December as 11)     |
| `quarter`     | `Q`       | Quarter @>>QuarterOfYear                 |
| `year`        | `y`       | Year                                     |
| `hour`        | `h`       | Hour                                     |
| `minute`      | `m`       | Minute                                   |
| `second`      | `s`       | Second                                   |
| `millisecond` | `ms`      | Millisecond                              |

Alternatively, you can use [durations](../durations/durations) to add to Day.js object.

```js
dayjs().add(dayjs.duration({'days' : 1}))
```
