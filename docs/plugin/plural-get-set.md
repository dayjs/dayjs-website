---
id: plural-get-set
title: PluralGetSet
---
PluralGetSet adds plural getter & setter APIs `.milliseconds()`, `.seconds()`, `.minutes()`, `.hours()`, `.days()`, `.weeks()`, `.isoWeeks()`, `.months()`, `.quarters()`, `.years()`, '.dates()'.

```javascript
var pluralGetSet = require('dayjs/plugin/pluralGetSet')
dayjs.extend(pluralGetSet)

dayjs().millisecond()
dayjs().milliseconds()
```
