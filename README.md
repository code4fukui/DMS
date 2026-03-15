# DMS

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Converts degrees, minutes, and seconds to decimal degrees.

## Usage
```js
import { dms2d, sdms2d } from "https://code4fukui.github.io/DMS/DMS.js";

console.log(dms2d(35, 10, 5));
console.log(sdms2d("35 10 5N"));
```

## Features
- Converts degrees, minutes, and seconds to decimal degrees
- Supports parsing string representations of coordinates

## Requirements
None. Runs in modern JavaScript environments.

## License
MIT