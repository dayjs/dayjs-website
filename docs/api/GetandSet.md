---
id: GetandSet
title: Get and Set
sidebar_label:  Get and Set
---

- [Year `.year()`](#year-year)
- [Month `.month()`](#month-month)
- [Day of the Month `.date()`](#day-of-the-month-date)
- [Day of the Week `.day()`](#day-of-the-week-day)
- [Hour `.hour()`](#hour-hour)
- [Minute `.minute()`](#minute-minute)
- [Second `.second()`](#second-second)
- [Millisecond `.millisecond()`](#millisecond-millisecond)
- [Get `.get(unit: string)`](#get-getunit-string)
  - [List of all available units](#list-of-all-available-units)
- [Set `.set(unit: string, value: number)`](#set-setunit-string-value-number)

## Year `.year()`

Gets or sets the year.

```js
dayjs().year()
dayjs().year(2000)
```

## Month `.month()`

Gets or sets the month. Starts at 0

```js
dayjs().month()
dayjs().month(0)
```

## Day of the Month `.date()`

Gets or sets the day of the month. Starts at 1

```js
dayjs().date()
dayjs().date(1)
```

## Day of the Week `.day()`

Gets or sets the day of the week. Starts on Sunday with 0

```js
dayjs().day()
dayjs().day(0)
```

## Hour `.hour()`

Gets or sets the hour.

```js
dayjs().hour()
dayjs().hour(12)
```

## Minute `.minute()`

Gets or sets the minute.

```js
dayjs().minute()
dayjs().minute(59)
```

## Second `.second()`

Gets or sets the second.

```js
dayjs().second()
dayjs().second(1)
```

## Millisecond `.millisecond()`

Gets or sets the millisecond.

```js
dayjs().millisecond()
dayjs().millisecond(1)
```

## Get `.get(unit: string)`

Returns a `number` with information getting from `Dayjs` object

```js
dayjs().get('month') // start 0
dayjs().get('day')
```

### List of all available units

| Unit          | Shorthand | Description                              |
| ------------- | --------- | ---------------------------------------- |
| `date`        |           | Date of Month                            |
| `day`         | `d`       | Day of Week (Sunday as 0, Saturday as 6) |
| `month`       | `M`       | Month (January as 0, December as 11)     |
| `year`        | `y`       | Year                                     |
| `hour`        | `h`       | Hour                                     |
| `minute`      | `m`       | Minute                                   |
| `second`      | `s`       | Second                                   |
| `millisecond` | `ms`      | Millisecond                              |

## Set `.set(unit: string, value: number)`

Returns a `Dayjs` with the applied changes.

```js
dayjs().set('date', 1)
dayjs().set('month', 3) // April
dayjs().set('second', 30)
```
