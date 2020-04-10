---
id: diffing
title: Using Duration with Diff
---

You can also use duration with `dayjs#diff` to get the duration between two date times. To do so, simply pass the `dayjs#diff` method into `dayjs#duration` as follows:

```javascript
var x = dayjs()
var y = dayjs()

var duration = dayjs.duration(x.diff(y))
// returns duration object with the duration between x and y
```  
See [here](../display/difference) for more information about `dayjs#diff`.
