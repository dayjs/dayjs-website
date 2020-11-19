---
id: min
title: Minimum
---
Returns the minimum (most distant past) of the given Day.js instances.
This accepts both multiple arguments and array that contains Day.js instance.

@>MinMax

```js
dayjs.extend(minMax)

dayjs.min(dayjs(), dayjs('2018-01-01'), dayjs('2019-01-01'))
dayjs.min([dayjs(), dayjs('2018-01-01'), dayjs('2019-01-01')])
```
