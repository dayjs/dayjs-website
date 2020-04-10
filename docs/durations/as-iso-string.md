---
id: as-iso-string
title: As ISO 8601 String
---

Returns duration in string as specified by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Durations) standard.

```javascript
dayjs.duration(1, 'd').toISOString() // "P1D"
```
Format `PnYnMnDTnHnMnS` description:

| Unit           | Meaning |
| -------------  | --------- |
| P         | _P_ stands for period. Placed at the start of the duration representation.       |
|Y |	Year |
|M |	Month |
|D |	Day |
|T |	Designator that precedes the time components. |
|H |	Hour |
|M |	Minute |
|S |	Second |
