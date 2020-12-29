---
id: from
title: Time from X 
---

Returns the string of relative time from X.

@>RelativeTime

```js
dayjs.extend(relativeTime)

var a = dayjs('2000-01-01')

dayjs('1999-01-01').from(a) // a year ago
```

If you pass true, you can get the value without the suffix.

```js
dayjs.extend(relativeTime)

var a = dayjs('2000-01-01')

dayjs('1999-01-01').from(a, true) // a year
```

[List of breakdown range](../display/from-now#list-of-breakdown-range)
