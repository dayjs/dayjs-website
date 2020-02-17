---
id: changing-locale
title: Changing locale globally
---
By default, Day.js comes with English (United States) locale **only**.

If you need other locales, you can load them on demand.

```js
require('dayjs/locale/de')
```

Once you load a locale, it becomes the active locale. To change active locales, simply call `dayjs.locale` with the key of a loaded locale to change global locale.

Changing the global locale doesn't affect existing instances.

```js
dayjs.locale('de') // use loaded locale globally
dayjs.locale('en') // switch back to default English locale globally
```
