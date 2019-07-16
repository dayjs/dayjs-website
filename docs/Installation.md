---
id: Installation
title: Installation
sidebar_label: Installation
---

You can use Day.js in mutiple ways:

## Via NPM Or Yarn

```
npm install dayjs --save
```

```
yarn add dayjs
```

Then:

```js
import dayjs from 'dayjs'
// Or CommonJS
// const dayjs = require('dayjs')

dayjs().format()
```

## Via CDN

```html
<!-- Latest compiled and minified JavaScript -->
<script src="https://unpkg.com/dayjs"></script>
<script>
  dayjs().format()
</script>
```

## Manually Download

Use `curl`:

```
curl -L https://unpkg.com/dayjs -o dayjs.min.js
```

Use `axel`:

```
axel -an 8 https://unpkg.com/dayjs -o dayjs.min.js
```

Or any download tools you favourite.
 