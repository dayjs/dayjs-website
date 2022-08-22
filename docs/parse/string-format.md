---
id: string-format
title: String + Format
---
If you know the format of an input string, you can use that to parse a date.

@>CustomParseFormat

```js
dayjs.extend(customParseFormat)
dayjs("12-25-1995", "MM-DD-YYYY")
```

Pass the locale key as the third parameter to parse locale-aware date time string.
```js
require('dayjs/locale/es')
dayjs('2018 Enero 15', 'YYYY MMMM DD', 'es')
```

You may specify a boolean for the last argument to use strict parsing. Strict parsing requires that the format and input match exactly, including delimiters.

```js
dayjs('1970-00-00', 'YYYY-MM-DD').isValid() // true
dayjs('1970-00-00', 'YYYY-MM-DD', true).isValid() // false
dayjs('1970-00-00', 'YYYY-MM-DD', 'es', true).isValid() // false
```

If you don't know the exact format of an input string, but know it could be one of many, you can use an array of formats.
```js
dayjs("12-25-2001", ["YYYY", "YYYY-MM-DD"], 'es', true);
```

### List of all available parsing tokens

| Input  | Example          | Description                       |
| ------ | ---------------- | --------------------------------- |
| `YY`   | 01               | Two-digit year                    |
| `YYYY` | 2001             | Four-digit year                   |
| `M`    | 1-12             | Month, beginning at 1             |
| `MM`   | 01-12            | Month, 2-digits                   |
| `MMM`  | Jan-Dec          | The abbreviated month name        |
| `MMMM` | January-December | The full month name               |
| `D`    | 1-31             | Day of month                      |
| `DD`   | 01-31            | Day of month, 2-digits            |
| `H`    | 0-23             | Hours                             |
| `HH`   | 00-23            | Hours, 2-digits                   |
| `h`    | 1-12             | Hours, 12-hour clock              |
| `hh`   | 01-12            | Hours, 12-hour clock, 2-digits    |
| `m`    | 0-59             | Minutes                           |
| `mm`   | 00-59            | Minutes, 2-digits                 |
| `s`    | 0-59             | Seconds                           |
| `ss`   | 00-59            | Seconds, 2-digits                 |
| `S`    | 0-9              | Hundreds of milliseconds, 1-digit |
| `SS`   | 00-99            | Tens of milliseconds, 2-digits    |
| `SSS`  | 000-999          | Milliseconds, 3-digits            |
| `Z`    | -05:00           | Offset from UTC                   |
| `ZZ`   | -0500            | Compact offset from UTC, 2-digits |
| `A`    | AM PM            | Post or ante meridiem, upper-case |
| `a`    | am pm            | Post or ante meridiem, lower-case |
| `Do`   | 1st... 31st      | Day of Month with ordinal         |
| `X`    | 1410715640.579   | Unix timestamp                    |
| `x`    | 1410715640579    | Unix ms timestamp                 |


### Differences to moment

| title | parameters | dayjs | moment |
|-------|------------|-------|--------|
| invalid date with overflow | ('35/22/2010 99:88:77', 'DD-MM-YYYY HH:mm:ss') | '08-11-2011 04:29:17' | 'Invalid date' |
| invalid date with overflow, strict | ('35/22/2010 99:88:77', 'DD-MM-YYYY HH:mm:ss', true) | 'Invalid Date' | 'Invalid date' |
| '0' day or month (using default values) | ('1970-00-00', 'YYYY-MM-DD') | '1970-01-01' | 'Invalid date' |
| '0' day or month (using default values), strict | ('1970-00-00', 'YYYY-MM-DD', true) | 'Invalid Date' | 'Invalid date' |
| date not matching format | ('10/12/2014', 'YYYY-MM-DD') | '01-01-2014' | '12-20-2010' |
| date not matching format, strict | ('10/12/2014', 'YYYY-MM-DD', true) | 'Invalid Date' | 'Invalid date' |
| first match vs. longest match | ('2012-05-28 10:21:15', ['YYYY', 'YYYY-MM-DD', 'YYYY-MM-DD HH:mm:ss']) | '2012-01-01 00:00:00' | '2012-05-28 10:21:15' |
| first match vs. longest match, strict | ('2012-05-28 10:21:15', ['YYYY', 'YYYY-MM-DD', 'YYYY-MM-DD HH:mm:ss'], true) | '2012-05-28 10:21:15' | '2012-05-28 10:21:15' |



### List of all recognized separator characters:  
`-_:.,()/`


