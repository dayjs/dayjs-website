---
id: as-json
title: As JSON
---

When serializing a duration object to JSON, it will be represented as an ISO8601 string.

```javascript
JSON.stringify({
    postDuration : dayjs.duration(5, 'm')
}); // '{"postDuration":"PT5M"}'
```
