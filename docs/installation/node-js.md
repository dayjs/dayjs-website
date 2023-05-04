---
id: node-js
title: Node.js
---

To get started with Day.js in your Node.js project, simply add the dependency to your Node.js package manager.

```bash
npm install dayjs
# or
yarn add dayjs
# or
pnpm add dayjs
```

Then include it in your script:

```js
const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()
```

Check here for more information about loading [locale](../i18n/loading-into-nodejs) and [plugin](../plugin/loading-into-nodejs).
