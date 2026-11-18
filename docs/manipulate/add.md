---
id: add
title: Add
---

Returns a cloned Day.js object with a specified amount of time added.

```js
const a = dayjs()
const b = a.add(7, 'day')

// a -> the original value and will not change
// b -> the manipulation result
```

Units are case insensitive, and support plural and short forms. Note, short forms are case sensitive.

#### List of all available units

Plural forms (`days`, `weeks`, …) are accepted and treated the same as the singular unit.

| Unit          | Plural         | Shorthand | Description                              |
| ------------- | -------------- | --------- | ---------------------------------------- |
| `day`         | `days`         | `d`       | Day                                      |
| `week`        | `weeks`        | `w`       | Week                                     |
| `month`       | `months`       | `M`       | Month                                    |
| `quarter`     | `quarters`     | `Q`       | Quarter @>>QuarterOfYear                 |
| `year`        | `years`        | `y`       | Year                                     |
| `hour`        | `hours`        | `h`       | Hour                                     |
| `minute`      | `minutes`      | `m`       | Minute                                   |
| `second`      | `seconds`      | `s`       | Second                                   |
| `millisecond` | `milliseconds` | `ms`      | Millisecond                              |

Alternatively, you can use [durations](../durations/durations) to add to Day.js object.

```js
result = dayjs().add(dayjs.duration({'days' : 1}))
```

When decimal values are passed for **days** and **weeks**, they are rounded to the nearest integer before adding.
