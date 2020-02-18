---
id: utc-offset
title: UTC offset
---
Get the UTC offset in minutes.

```js
dayjs().utcOffset()
```

Setting the UTC offset by supplying minutes. 
Note that once you set an offset, it's fixed and won't change on its own (i.e there are no DST rules).
@>UTC

```js
dayjs.extend(utc)

dayjs().utcOffset(120);
```

If the input is less than 16 and greater than -16, it will interpret your input as hours instead.
```
// these are equivalent
dayjs().utcOffset(8);  // set hours offset
dayjs().utcOffset(480);  // set minutes offset (8 * 60)
```
