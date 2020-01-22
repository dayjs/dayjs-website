---
id: loading-into-nodejs
title: Loading locales in NodeJS
---

```javascript
import dayjs from 'dayjs'
import AdvancedFormat from 'dayjs/plugin/advancedFormat' // load on demand

dayjs.extend(AdvancedFormat) // use plugin
```
