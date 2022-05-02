---
id: is-valid
title: Validation
---

Returns a `boolean` indicating whether the `Dayjs`'s date is valid.
- Non-strict check.

  Only checks if the value could be parsed to a Date time.

  ```js
  dayjs('2022-02-31').isValid();
  // true
  ```
- Strict check.

  Checks if the value could be parsed to a Date time and it is a valid date. `format:string` and `strict: true` must be provided.
  Tip: If in NodeJS the [CustomParseFormat](../plugin/custom-parse-format) plugin should be loaded.
  ```js
  dayjs('2022-02-31', 'YYYY-MM-DD', true).isValid();
  // false
  ```