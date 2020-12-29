---
id: to-now
title: Time to now
---

Returns the string of relative time to now.

@>RelativeTime

```js
dayjs.extend(relativeTime)

dayjs('1999-01-01').toNow() // in 22 years
```

If you pass true, you can get the value without the suffix.

```js
dayjs.extend(relativeTime)

dayjs('1999-01-01').toNow() // in 22 years
dayjs('1999-01-01').toNow(true) // 22 years
```

[List of breakdown range](../display/from-now#list-of-breakdown-range)
