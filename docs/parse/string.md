---
id: string
title: String
---

Parse the given string in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (a space instead of the 'T' is allowed) and return a Day.js object instance.

```js
dayjs('2018-04-04T16:00:00.000Z')
dayjs('2018-04-13 19:18:17.040+02:00')
dayjs('2018-04-13 19:18')
```

>For consistent results parsing anything **other** than ISO 8601 strings, you should use [String + Format](./string-format).


