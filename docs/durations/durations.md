---
id: durations
title: Durations
---

Day.js also has duration objects. Where a Day.js object is defined as single points in time, durations are defined as a length of time.

Durations do not have a defined beginning and end date. They are contextless.

A duration is conceptually more similar to '2 hours' than to 'between 2 and 4 pm today'. As such, they are not a good solution to converting between units that depend on context.

For example, a year can be defined as 366 days, 365 days, 365.25 days, 12 months, or 52 weeks. Trying to convert years to days makes no sense without context. It is much better to use `dayjs#diff` for calculating days or years between two date times than to use Durations.

@>Duration

```javascript
dayjs.extend(duration)

dayjs.duration({ months: 12 })
```
