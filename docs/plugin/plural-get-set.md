---
id: plural-get-set
title: PluralGetSet
---

PluralGetSet adds plural getter & setter APIs `.milliseconds()`, `.seconds()`, `.minutes()`, `.hours()`, `.days()`, `.weeks()`, `.isoWeeks()`, `.months()`, `.quarters()`, `.years()`, `.dates()`.

```javascript
var pluralGetSet = require("dayjs/plugin/pluralGetSet");
// import pluralGetSet from 'dayjs/plugin/pluralGetSet' // ES 2015

dayjs.extend(pluralGetSet);

dayjs().millisecond();
dayjs().milliseconds();
```
