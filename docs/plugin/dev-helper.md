---
id: dev-helper
title: DevHelper
---

DevHelper adds some helper function to give you more hints and warnings while using Day.js.

Note, you can set `process.env.NODE_ENV` to `production` to disable the DevHelper in your production environment. And if you have enabled a JavaScript minifier like UglifyJS, it can remove the plugin from your production bundle automatically to save some bytes.

```js
var devHelper = require('dayjs/plugin/devHelper')

dayjs.extend(devHelper)
```

You can also load this plugin on demand yourself.

```js
if (isInDevelopment) {
  // load DevHelper plugin like above
}
```
