---
id: preparse-postformat
title: PreParsePostFormat
---
Pre-parse / Post-format lets you process the input before the parser and process the string output after the formatter. [Based on similar behavior for locales in moment.js](https://momentjs.com/docs/#/i18n/locale-data/).

NOTE: this plugin requires the localeData plugin to be imported before it (as it depends on it's functionality). 

NOTE: this plugin also affects the relative time plugin, also by design (mimics the moment.js implementaiton behavior).

## Sample usage
e.g. [In the AR locale specifically, it is used to support Arabic numerals](https://github.com/iamkun/dayjs/pull/1255/commits/e26e802d767eec89aae02c8cecf87f517600a698).

```javascript
// Arabic [ar]
import dayjs from 'dayjs'
import preParsePostFormat from 'dayjs/plugin/preParsePostFormat'
dayjs.extend(preParsePostFormat)

const months = 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_')
const symbolMap = {
  1: '١',
  2: '٢',
  3: '٣',
  4: '٤',
  5: '٥',
  6: '٦',
  7: '٧',
  8: '٨',
  9: '٩',
  0: '٠'
}

const numberMap = {
  '١': '1',
  '٢': '2',
  '٣': '3',
  '٤': '4',
  '٥': '5',
  '٦': '6',
  '٧': '7',
  '٨': '8',
  '٩': '9',
  '٠': '0'
}

const locale = {
  name: 'ar',
  // ...
  preparse(string) {
    return string
      .replace(
        /[١٢٣٤٥٦٧٨٩٠]/g,
        match => numberMap[match]
      )
      .replace(/،/g, ',')
  },
  postformat(string) {
    return string
      .replace(/\d/g, match => symbolMap[match])
      .replace(/,/g, '،')
  },
  // ...
}
// ...
```

[The tests](https://github.com/iamkun/dayjs/blob/dev/test/plugin/preParsePostFormat.test.js) should also give you a good idea on how to use the plugin if this isn't clear enough ;).
