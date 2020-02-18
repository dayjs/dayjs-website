---
id: to
title: Time to X 
---

Returns the string of relative time to X.

@>RelativeTime

```js
dayjs.extend(relativeTime)

var a = dayjs()
var b = dayjs('1990-01-01')

a.to(b) // in 2 years
```

If you pass true, you can get the value without the suffix.

```js
dayjs.extend(relativeTime)

var a = dayjs()
a.to('1990-01-01') // in 2 years
a.to('1990-01-01', true) // 2 years
```

[List of breakdown range](../display/from-now#list-of-breakdown-range)
