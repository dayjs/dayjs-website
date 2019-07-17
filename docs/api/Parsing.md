---
id: Parsing
title: Parsing
sidebar_label: Parsing 
---

- [Constructor `dayjs(dateType?: string | number | Date | Dayjs)`](#constructor-dayjsdateType-string--number--date--dayjs)
  - [ISO 8601 string](#iso-8601-string)
  - [Native Javascript Date object](#native-javascript-date-object)
  - [Unix Timestamp (milliseconds)](#unix-timestamp-milliseconds)
- [Unix Timestamp (seconds)](#unix-timestamp-seconds-unixvalue-number)
- [Custom Parse Format](#custom-parse-format)
- [Clone `.clone() | dayjs(original: Dayjs)`](#clone-clone--dayjsoriginal-dayjs)
- [Validation `.isValid()`](#validation-isvalid)

## Constructor `dayjs(dateType?: string | number | Date | Dayjs)`

Calling it without parameters returns a fresh `Dayjs` object with the current date and time.

```js
dayjs()
```

Day.js also parses other date formats.

### [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string

```js
dayjs('2018-04-04T16:00:00.000Z')
```

### Native Javascript Date object

```js
dayjs(new Date(2018, 8, 18))
```

### Unix Timestamp (milliseconds)

Returns a `Dayjs` from a Unix timestamp (milliseconds since the Unix Epoch)

```js
dayjs(1318781876406)
```

## Unix Timestamp (seconds) `.unix(value: number)`

Returns a `Dayjs` from a Unix timestamp (seconds since the Unix Epoch)

```js
dayjs.unix(1318781876)
dayjs.unix(1318781876.721)
```

## Custom Parse Format

- parse custom formats `dayjs("12-25-1995", "MM-DD-YYYY")` in plugin [`CustomParseFormat`](/website/docs/Plugins#customparseformat)

## Clone `.clone() | dayjs(original: Dayjs)`

Returns a cloned `Dayjs`.

```js
dayjs().clone()
dayjs(dayjs('2019-01-25')) // passing a Dayjs object to a constructor will also clone it
```

## Validation `.isValid()`

Returns a `boolean` indicating whether the `Dayjs`'s date is valid.

```js
dayjs().isValid()
```
