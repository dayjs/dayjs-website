---
id: Query
title: Query
sidebar_label:  Query
---

- [Is Before `.isBefore(compared: Dayjs, unit?: string)`](#is-before-isbeforecompared-dayjs-unit-string)
- [Is Same `.isSame(compared: Dayjs, unit?: string)`](#is-same-issamecompared-dayjs-unit-string)
- [Is After `.isAfter(compared: Dayjs, unit?: string)`](#is-after-isaftercompared-dayjs-unit-string)
- [Is a Dayjs `.isDayjs()`](#is-a-dayjs-isdayjscompared-any)

## Is Before `.isBefore(compared: Dayjs, unit?: string)`

Returns a `boolean` indicating whether the `Dayjs`'s date is before the other supplied `Dayjs`'s.

```js
dayjs().isBefore(dayjs()) // false
dayjs().isBefore(dayjs(), 'year') // false
```

## Is Same `.isSame(compared: Dayjs, unit?: string)`

Returns a `boolean` indicating whether the `Dayjs`'s date is the same as the other supplied `Dayjs`'s.

```js
dayjs().isSame(dayjs()) // true
dayjs().isSame(dayjs(), 'year') // true
```

## Is After `.isAfter(compared: Dayjs, unit?: string)`

Returns a `boolean` indicating whether the `Dayjs`'s date is after the other supplied `Dayjs`'s.

```js
dayjs().isAfter(dayjs()) // false
dayjs().isAfter(dayjs(), 'year') // false
```

## Is a Dayjs `.isDayjs(compared: any)`

Returns a `boolean` indicating whether a variable is a dayjs object or not.

```js
dayjs.isDayjs(dayjs()) // true
dayjs.isDayjs(new Date()) // false
```

The operator `instanceof` works equally well:

```js
dayjs() instanceof dayjs // true
```
