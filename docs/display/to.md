---
id: to
title: Time to X 
---

Returns the string of relative time to X.

@>RelativeTime

```js
dayjs.extend(relativeTime)

var a = dayjs('2000-01-01')

dayjs('1999-01-01').to(a) // in a year
```

If you pass true, you can get the value without the suffix.

```js
dayjs.extend(relativeTime)

var a = dayjs('2000-01-01')

dayjs('1999-01-01').to(a, true) // a years
```

[List of breakdown range](../display/from-now#list-of-breakdown-range)
