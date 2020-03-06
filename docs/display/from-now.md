---
id: from-now
title: Time from now
---

Returns the string of relative time from now.

@>RelativeTime

```js
dayjs.extend(relativeTime)

dayjs().fromNow() // 2 years ago
```

If you pass true, you can get the value without the suffix.

```js
dayjs.extend(relativeTime)

dayjs().fromNow() // 2 years ago
dayjs().fromNow(true) // 2 years
```

#### List of breakdown range

The base strings are localized by the current locale and [can be customized](../customization/relative-time). Time is rounded to the nearest second.

| Range                    | Key | Sample Output                    |
| ------------------------ | --- | -------------------------------- |
| 0 to 44 seconds          | s   | a few seconds ago                |
| 45 to 89 seconds         | m   | a minute ago                     |
| 90 seconds to 44 minutes | mm  | 2 minutes ago ... 44 minutes ago |
| 45 to 89 minutes         | h   | an hour ago                      |
| 90 minutes to 21 hours   | hh  | 2 hours ago ... 21 hours ago     |
| 22 to 35 hours           | d   | a day ago                        |
| 36 hours to 25 days      | dd  | 2 days ago ... 25 days ago       |
| 26 to 45 days            | M   | a month ago                      |
| 46 days to 10 months     | MM  | 2 months ago ... 10 months ago   |
| 11 months to 17months    | y   | a year ago                       |
| 18 months+               | yy  | 2 years ago ... 20 years ago     |
