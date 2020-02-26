---
id: get
title: Get
---
String getter, returns the corresponding information getting from Day.js object. 

In general:
```js
dayjs().get(unit) === dayjs()[unit]()
```

Units are case insensitive, and support plural and short forms.

```js
dayjs().get('year')
dayjs().get('month') // start 0
dayjs().get('date');
dayjs().get('hour');
dayjs().get('minute');
dayjs().get('second');
dayjs().get('millisecond');
```

#### List of all available units

| Unit          | Shorthand | Description                              |
| ------------- | --------- | ---------------------------------------- |
| `date`        | `D`       | Date of Month                            |
| `day`         | `d`       | Day of Week (Sunday as 0, Saturday as 6) |
| `month`       | `M`       | Month (January as 0, December as 11)     |
| `year`        | `y`       | Year                                     |
| `hour`        | `h`       | Hour                                     |
| `minute`      | `m`       | Minute                                   |
| `second`      | `s`       | Second                                   |
| `millisecond` | `ms`      | Millisecond                              |
