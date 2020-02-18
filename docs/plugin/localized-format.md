---
id: localized-format
title: LocalizedFormat
---
LocalizedFormat extends `dayjs().format` API to supply localized format options.

```javascript
var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

dayjs().format('L LT')
```
[List of localized formats](../display/format#list-of-localized-formats)
