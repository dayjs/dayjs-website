---
id: humanize
title: Humanize
---

Sometimes, you want all the goodness of `dayjs#from` but you don't want to have to create two Day.js objects, you just want to display a length of time.

@>RelativeTime

```javascript
dayjs.extend(relativeTime)
dayjs.duration(1, "minutes").humanize(); // a minute
dayjs.duration(2, "minutes").humanize(); // 2 minutes
dayjs.duration(24, "hours").humanize();  // a day
```
By default, the return string is suffixless. If you want a suffix, pass in true as seen below.

```javascript
dayjs.duration(1, "minutes").humanize(true); // in a minute
```

For suffixes before now, pass in a negative number.

```javascript
dayjs.duration(-1, "minutes").humanize(true); // a minute ago
```

