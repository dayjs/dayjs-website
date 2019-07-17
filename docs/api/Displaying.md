---
id: Displaying
title: Displaying
sidebar_label: Displaying 
---

- [Format `.format(stringWithTokens: string)`](#format-formatstringwithtokens-string)
  - [List of all available formats](#list-of-all-available-formats)
- [Difference `.diff(compared: Dayjs, unit?: string, float?: boolean)`](#difference-diffcompared-dayjs-unit-string-float-boolean)
- [Unix Timestamp (milliseconds) `.valueOf()`](#unix-timestamp-milliseconds-valueof)
- [Unix Timestamp (seconds) `.unix()`](#unix-timestamp-seconds-unix)
- [UTC offset (minutes) `.utcOffset()`](#utc-offset-minutes-utcoffset)
- [Days in the Month `.daysInMonth()`](#days-in-the-month-daysinmonth)
- [As Javascript Date `.toDate()`](#as-javascript-date-todate)
- [As JSON `.toJSON()`](#as-json-tojson)
- [As ISO 8601 String `.toISOString()`](#as-iso-8601-string-toisostring)
- [As String `.toString()`](#as-string-tostring)

## Format `.format(stringWithTokens: string)`

Returns a `string` with the `Dayjs`'s formatted date.
To escape characters, wrap them in square brackets (e.g. `[A] [MM]`).

```js
dayjs().format() // current date in ISO8601, without fraction seconds e.g. '2020-04-02T08:02:17-05:00'

dayjs('2019-01-25').format('[YYYY] YYYY-MM-DDTHH:mm:ssZ[Z]') // 'YYYY 2019-01-25T00:00:00-02:00Z'

dayjs('2019-01-25').format('DD/MM/YYYY') // '25/01/2019'
```

### List of all available formats

| Format | Output           | Description                           |
| ------ | ---------------- | ------------------------------------- |
| `YY`   | 18               | Two-digit year                        |
| `YYYY` | 2018             | Four-digit year                       |
| `M`    | 1-12             | The month, beginning at 1             |
| `MM`   | 01-12            | The month, 2-digits                   |
| `MMM`  | Jan-Dec          | The abbreviated month name            |
| `MMMM` | January-December | The full month name                   |
| `D`    | 1-31             | The day of the month                  |
| `DD`   | 01-31            | The day of the month, 2-digits        |
| `d`    | 0-6              | The day of the week, with Sunday as 0 |
| `dd`   | Su-Sa            | The min name of the day of the week   |
| `ddd`  | Sun-Sat          | The short name of the day of the week |
| `dddd` | Sunday-Saturday  | The name of the day of the week       |
| `H`    | 0-23             | The hour                              |
| `HH`   | 00-23            | The hour, 2-digits                    |
| `h`    | 1-12             | The hour, 12-hour clock               |
| `hh`   | 01-12            | The hour, 12-hour clock, 2-digits     |
| `m`    | 0-59             | The minute                            |
| `mm`   | 00-59            | The minute, 2-digits                  |
| `s`    | 0-59             | The second                            |
| `ss`   | 00-59            | The second, 2-digits                  |
| `SSS`  | 000-999          | The millisecond, 3-digits             |
| `Z`    | +5:00            | The offset from UTC                   |
| `ZZ`   | +0500            | The offset from UTC, 2-digits         |
| `A`    | AM PM            |                                       |
| `a`    | am pm            |                                       |

- More available formats `Q Do k kk X x ...` in plugin [`AdvancedFormat`](./Plugin.md#advancedformat)
- Localized format options `L LT LTS ...` in plugin [`LocalizedFormat`](./Plugin.md#localizedFormat)

## Difference `.diff(compared: Dayjs, unit?: string, float?: boolean)`

Returns a `number` indicating the difference of two `Dayjs`s in the specified unit.

```js
const date1 = dayjs('2019-01-25')
const date2 = dayjs('2018-06-05')
date1.diff(date2) // 20214000000 default milliseconds
date1.diff(date2, 'month') // 7
date1.diff(date2, 'month', true) // 7.645161290322581
date1.diff(date2, 'day') // 233
```

## Unix Timestamp (milliseconds) `.valueOf()`

Returns the `number` of milliseconds since the Unix Epoch for the `Dayjs`.

```js
dayjs('2019-01-25').valueOf() // 1548381600000
```

## Unix Timestamp (seconds) `.unix()`

Returns the `number` of seconds since the Unix Epoch for the `Dayjs`.

```js
dayjs('2019-01-25').unix() // 1548381600
```

## UTC Offset (minutes) `.utcOffset()`

Returns the UTC offset in minutes for the `Dayjs`.

```js
dayjs().utcOffset()
```

## Days in the Month `.daysInMonth()`

Returns the `number` of days in the `Dayjs`'s month.

```js
dayjs('2019-01-25').daysInMonth() // 31
```

## As Javascript Date `.toDate()`

Returns a copy of the native `Date` object parsed from the `Dayjs` object.

```js
dayjs('2019-01-25').toDate()
```

## As JSON `.toJSON()`

Returns the `Dayjs` formatted in an ISO8601 `string`.

```js
dayjs('2019-01-25').toJSON() // '2019-01-25T02:00:00.000Z'
```

## As ISO 8601 String `.toISOString()`

Returns the `Dayjs` formatted in an ISO8601 `string`.

```js
dayjs('2019-01-25').toISOString() // '2019-01-25T02:00:00.000Z'
```

## As String `.toString()`

Returns a `string` representation of the date.

```js
dayjs('2019-01-25').toString() // 'Fri, 25 Jan 2019 02:00:00 GMT'
```
