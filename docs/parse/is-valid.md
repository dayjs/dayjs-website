---
id: is-valid
title: Validation
---

Returns a `boolean` indicating whether the `Dayjs`'s date is valid.
- Non-strict check.

  Only checks if the value could be parsed to a Date time.

  ```js
  dayjs('2022-01-33').isValid();
  // true, parsed to 2022-02-02
  dayjs('some invalid string').isValid();
  // false
  ```
- Strict check.

  Checks if the value could be parsed to a Date time and it is a valid date. The last two arguments `format` and `strict` must be provided.
  @>CustomParseFormat
  ```js
  dayjs('2022-02-31', 'YYYY-MM-DD', true).isValid();
  // false
  ```
