---
id: typescript
title: TypeScript
---
Day.js ships with official type declarations for TypeScript in NPM package out of the box.

Install via NPM
```console
npm install dayjs
```
Import and use in your TypeScript file
```js
import * as dayjs from 'dayjs'
dayjs().format()
```

#### Have trouble importing Day.js?

If your `tsconfig.json` contains the following config, you must do the default import workflow `import dayjs from 'dayjs'`:

```json
{ //tsconfig.json
  "compilerOptions": {
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
  }
}
```
If you don't have these config above, the default import won't work, and you'll continue to have to use `import * as dayjs from 'dayjs'`

Alternatively , you can use `import { default as dayjs } from "dayjs"` as a defult import for ts `no call singatures issue`

### Locale and plugin import

To use locale and plugin, you first need to import the targeting language and plugin.

```js
import * as dayjs from 'dayjs'
import * as isLeapYear from 'dayjs/plugin/isLeapYear' // import plugin
import 'dayjs/locale/zh-cn' // import locale

dayjs.extend(isLeapYear) // use plugin
dayjs.locale('zh-cn') // use locale
```
