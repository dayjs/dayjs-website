---
id: localized-format
title: LocalizedFormat
---

LocalizedFormat extends `dayjs().format` API to supply localized format options.

```javascript
var localizedFormat = require("dayjs/plugin/localizedFormat");
// import localizedFormat from 'dayjs/plugin/localizedFormat' // ES 2015

dayjs.extend(localizedFormat);

dayjs().format("L LT");
```

[List of localized formats](../display/format#list-of-localized-formats)
