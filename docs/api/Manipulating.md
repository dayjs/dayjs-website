---
id: Manipulating
title: Manipulating
sidebar_label: Manipulating 
---

- [Add `.add(value: number, unit: string)`](#add-addvalue-number-unit-string)
- [Subtract `.subtract(value: number, unit: string)`](#subtract-subtractvalue-number-unit-string)
- [Start of Time `.startOf(unit: string)`](#start-of-time-startofunit-string)
- [End of Time `.endOf(unit: string)`](#end-of-time-endofunit-string)

`Dayjs` object can be manipulated in many ways.

```js
dayjs('2019-01-25')
  .add(1, 'day')
  .subtract(1, 'year')
  .toString() // Fri, 26 Jan 2018 00:00:00 GMT
```

## Add `.add(value: number, unit: string)`

Returns a cloned `Dayjs` with a specified amount of time added.

```js
dayjs().add(7, 'day')
```

## Subtract `.subtract(value: number, unit: string)`

Returns a cloned `Dayjs` with a specified amount of time subtracted.

```js
dayjs().subtract(7, 'year')
```

## Start of Time `.startOf(unit: string)`

Returns a cloned `Dayjs` set to the start of the specified unit of time.

```js
dayjs().startOf('week') // Depends on `weekStart` in locale
```

## End of Time `.endOf(unit: string)`

Returns a cloned `Dayjs` set to the end of the specified unit of time.

```js
dayjs().endOf('month')
```
