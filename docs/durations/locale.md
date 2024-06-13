---
id: locale
title: Locale
---

You can get or set the locale of a duration using `locale`. The locale will affect the duration's string methods, like `humanize()`. See the [i18n](../i18n/i18n) section for more information on internationalization generally.

@>RelativeTime

```javascript
require("dayjs/locale/es");
// import es from 'dayjs/plugin/es' // ES 2015

dayjs.duration(1, "minutes").locale("en").humanize(); // a minute

dayjs.duration(1, "minutes").locale("es").humanize(); // un minuto
// dayjs.duration(1, "minutes").locale(es).humanize(); // ES 2015
```
