---
id: Installation
title: Installation
sidebar_label: Installation
---

You can have multiple ways to use `dayjs`:

## Via npm or yarn

Usually this is the most common way to use dayjs:

```sh
npm install dayjs --save
```

```sh
yarn add dayjs
```

```js
import dayjs from 'dayjs'
// Or CommonJS
// const dayjs = require('dayjs')

dayjs().format()
```

## Via CDN

```html
<!-- Latest compiled and minified JavaScript -->
<script src="//unpkg.com/dayjs"></script>
<script>
  dayjs().format()
</script>
```

## Manually Download

Use `curl`:

```sh
curl -L https://unpkg.com/dayjs -o dayjs.min.js
```

Use `axel`:

```sh
axel -an 8 https://unpkg.com/dayjs -o dayjs.min.js
```

Or any download tools you favorite.
