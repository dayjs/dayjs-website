---
id: from
title: Time from X 
---

Returns the string of relative time from X.

@>RelativeTime

```js
dayjs.extend(relativeTime)

var a = dayjs()
var b = dayjs('1990-01-01')

a.from(b) // 2 years ago
```

If you pass true, you can get the value without the suffix.

```js
dayjs.extend(relativeTime)

var a = dayjs()
a.from('1990-01-01') // 2 years ago
a.from('1990-01-01', true) // 2 years
```

[List of breakdown range](../display/from-now#list-of-breakdown-range)
