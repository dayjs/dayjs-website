---
id: min-max
title: MinMax
---

- MinMax adds `.min` `.max` APIs to return a `dayjs` to compare given dayjs instances.

```javascript
import minMax from 'dayjs/plugin/minMax'

dayjs.extend(minMax)

dayjs.max(dayjs(), dayjs('2018-01-01'), dayjs('2019-01-01'))
dayjs.min([dayjs(), dayjs('2018-01-01'), dayjs('2019-01-01')])
```