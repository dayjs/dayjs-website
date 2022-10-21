---
id: bigint-support
title: BigIntSupport
---

BigIntSupport extends `dayjs()`, `dayjs.unix` APIs to support [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) argument.

```javascript
var bigIntSupport = require("dayjs/plugin/bigIntSupport");
dayjs.extend(bigIntSupport);

dayjs(BigInt(1666310421101));
dayjs.unix(BigInt(1666311003));
```
