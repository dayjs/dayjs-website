---
id: string-format
title: String + Format
---

Requires [`CustomParseFormat`](../plugin/custom-parse-format) plugin

If you know the format of an input string, you can use that to parse a date.

```js
dayjs("12-25-1995", "MM-DD-YYYY");
```

The parsing tokens are similar to the formatting tokens used in dayjs#format.


