---
id: manipulate
title: Manipulate
---

Once you have a Day.js object, you may want to manipulate it in some way.

Day.js supports method chaining like this:

```js
dayjs('2019-01-25').add(1, 'day').subtract(1, 'year').year(2009).toString()
```
