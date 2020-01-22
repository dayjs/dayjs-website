---
id: instance-locale
title: Changing locales locally
---

- Returns a new `Dayjs` object by switching to new locale.

Exactly the same as `dayjs#locale`, but only use locale in a specific instance.

```js
import 'dayjs/locale/es'
dayjs()
  .locale('es')
  .format() // use loaded locale locally
dayjs('2018-4-28', { locale: 'es' }) // through constructor
```
