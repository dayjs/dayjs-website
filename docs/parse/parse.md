---
id: parse
title: Parse
---

Instead of modifying the native `Date.prototype`, Day.js creates a wrapper for the Date object. To get this wrapper object, simply call `dayjs()` with one of the supported input types.

The Day.js object is immutable, that is, all API operations that change the Day.js object in some way will return a new instance of it.
