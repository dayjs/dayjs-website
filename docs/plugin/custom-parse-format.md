---
id: custom-parse-format
title: CustomParseFormat
---
CustomParseFormat extends `dayjs()` constructor to support custom formats of input strings.

```javascript
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

dayjs('05/02/69 1:02:03 PM -05:00', 'MM/DD/YY H:mm:ss A Z')
// Returns an instance containing '1969-05-02T18:02:03.000Z'

dayjs('2018 Enero 15', 'YYYY MMMM DD', 'es')
// Returns an instance containing '2018-01-15T00:00:00.000Z'
```
