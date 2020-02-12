---
id: typescript
title: Typescript
---

Install via NPM
```console
npm install dayjs --save
```
Import and use in your Typescript file
```js
import * as dayjs from 'dayjs'
dayjs().format()
```

**Note: If you have trouble importing Day.js**

Check if your `tsconfig.json` contains the following config, you must do the default import workflow `import dayjs from 'dayjs';`:

```json
{ //tsconfig.json
  "compilerOptions": {
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
  }
}
```
If you don't have these config above, the default import won't work, and you'll continue to have to use `import * as dayjs from 'dayjs'`;
