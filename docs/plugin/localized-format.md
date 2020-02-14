---
id: localized-format
title: LocalizedFormat
---
LocalizedFormat extends `dayjs().format` API to supply localized format options.

```javascript
var LocalizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(LocalizedFormat)

dayjs().format('L LT')
```
[List of localized formats](../display/format#list-of-localized-formats)
