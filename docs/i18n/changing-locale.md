---
id: changing-locale
title: Changing locale globally
---


```js
import 'dayjs/locale/es'
import de from 'dayjs/locale/de'
dayjs.locale('es') // use loaded locale globally
dayjs.locale('de-german', de) // use locale and update default name string
const customizedLocaleObject = { ... } // More details can be found in Customize section below.
dayjs.locale(customizedLocaleObject) // use customize locale
dayjs.locale('en') // switch back to default English locale globally
```

- Changing the global locale doesn't affect existing instances.