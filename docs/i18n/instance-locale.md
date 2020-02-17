---
id: instance-locale
title: Changing locales locally
---

A global locale configuration can be problematic when passing around date-times that may need to be formatted into different locale.

Exactly the same as `dayjs#locale`, but only use locale in a specific instance and  returns a new instance by switching to new locale.

```js
require('dayjs/locale/de')
dayjs().locale('de').format() // use loaded locale locally
```
