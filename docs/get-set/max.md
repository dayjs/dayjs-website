---
id: max
title: Maximum
---
Returns the maximum (most distant future) of the given Day.js instances. This accepts both multiple arguments and array that contains Day.js instance.

@>MinMax

```js
dayjs.extend(minMax)

dayjs.max(dayjs(), dayjs('2018-01-01'), dayjs('2019-01-01'))
dayjs.max([dayjs(), dayjs('2018-01-01'), dayjs('2019-01-01')])
```
