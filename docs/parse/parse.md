---
id: parse
title: Parse
---

Instead of modifying the native `Date.prototype`, Day.js creates a wrapper for the Date object, called `Dayjs` object.

The `Dayjs` object is immutable, that is, all API operations that change the `Dayjs` object in some way will return a new instance of it.