---
id: is-same-or-after
title: IsSameOrAfter
---

IsSameOrAfter adds `.isSameOrAfter()` API to returns a `boolean` indicating if a date is same or after another date.

```javascript
var isSameOrAfter = require('dayjs/plugin/isSameOrAfter')
dayjs.extend(isSameOrAfter)

dayjs('2010-10-20').isSameOrAfter('2010-10-19', 'year')
```
