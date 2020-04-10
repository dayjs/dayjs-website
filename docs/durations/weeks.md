---
id: weeks
title: Weeks
---

```javascript
dayjs.duration().weeks();
dayjs.duration().asWeeks();
```

As with the other getters for durations, `dayjs.duration().weeks()` gets the weeks (0 - 4).

`dayjs.duration().asWeeks()` gets the length of the duration in weeks.

Pay attention that unlike the other getters for duration, weeks are counted as a subset of the days, and are not taken off the days count.

Note: The length of a duration in weeks is defined as 7 days.
