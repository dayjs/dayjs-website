---
id: as-object
title: As Object
---

Returns an object with the date's properties.

@>ToObject

```js
dayjs.extend(toObject)

dayjs('2019-01-25').toObject()
/* { years: 2019,
     months: 0,
     date: 25,
     hours: 0,
     minutes: 0,
     seconds: 0,
     milliseconds: 0 } */
```
