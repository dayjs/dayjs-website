---
id: to-now
title: Time to now
---

Returns the string of relative time to now.

@>RelativeTime

```js
dayjs.extend(relativeTime)

dayjs().toNow() // in 2 years
```

If you pass true, you can get the value without the suffix.

```js
dayjs.extend(relativeTime)

dayjs().toNow() // in 2 years
dayjs().toNow(true) // 2 years
```

[List of breakdown range](../display/from-now#list-of-breakdown-range)
