---
id: get-set
title: Get + Set
---

Day.js uses overloaded getters and setters, that is to say, calling these methods without parameters acts as a getter, and calling them with a parameter acts as a setter.

These map to the corresponding function on the native `Date` object.

```js
dayjs().second(30).valueOf() // => new Date().setSeconds(30);
dayjs().second() // => new Date().getSeconds();
```

If you are in [UTC mode](../parse/utc), they will map to the UTC equivalent.

```js
dayjs.utc().seconds(30).valueOf()// => new Date().setUTCSeconds(30);
dayjs.utc().seconds()// => new Date().getUTCSeconds();
```
