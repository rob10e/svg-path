![Travis CI](https://travis-ci.com/rob10e/svg-path.svg?branch=master)  [![codecov](https://codecov.io/gh/rob10e/svg-path/branch/master/graph/badge.svg)](https://codecov.io/gh/rob10e/svg-path) [![npm version](https://badge.fury.io/js/%40rob10e%2Fsvg-path-js.svg)](https://badge.fury.io/js/%40rob10e%2Fsvg-path-js) ![](https://david-dm.org/rob10e/svg-path.svg)
# svg-path-js

A declaritive SVG path builder


### Installation
```bash
$ npm i svg-path-js
```

### Usage
```javascript
import Builder from 'svg-path-js';

function renderSvgPath() {
  const builder = new Builder();
  const path = builder
                .moveTo(10, 10)
                .lineToRel(10, 10)
                .cubicToRel(20, 20, 40, 20, 50, 10)
                .smoothToRel(150, 150, 180, 80)
                .arcTo(30, 50, 0, false, true, 165.55, 162.45)
                .close();
        
  return <Path d={path}/>
  // => 'M 10 10 l 10 10 c 70 20, 120 20, 120 10 s 150 150, 180 80 A 30 50 0 0 1 165.55 162.45 z'
}
```

### API
[Full API documentation here](https://rob10e.github.io/svg-path/)

#### `new Builder()`
create an instance of the path builder

- **`moveTo(x: number, y: number)`** move to position without drawing a line *absolute*
- **`moveToRel(x: number, y: number)`** move to position without drawing a line *relative*
- **`lineTo(x: number, y: number)`** draw a line from current position to point *absolute*
- **`lineToRel(x: number, y: number)`** draw a line from current position to point *relative*
- **`horizontalTo(x: number)`** draw line from current position to point *absolute*
- **`horizontalToRel(x: number)`** draw line from current position to point *relative*
- **`verticalTo(y: number)`** draw a line from current position to point *absolute*
- **`verticalToRel(y: number)`** draw a line from current position to point *relative*
- **`cubicTo(x1: number, y1: number, x2: number, y2: number, x: number, y: number)`** draw a cubic bezier curve from current position to point *absolute*
- **`cubicToRel(y)`** draw a cubic bezier curve from current position to point *relative*
- **`smoothTo(x2: number, y2: number, x: number, y: number)`** draw a smooth curve from previous curve to point *absolute*
- **`smoothToRel(x2: number, y2: number, x: number, y: number)`** draw a smooth curve from previous curve to point *relative*
- **`quadTo(x1: number, y1: number, x: number, y: number)`** draw a quadradic curve from current position to point *absolute*
- **`quadToRel(x1: number, y1: number, x: number, y: number)`** draw a quadradic curve from current position to point *relative*
- **`quadStringTo(x: number, y: number)`** draw a quadradic curve from previous curve to point *absolute*
- **`quadStringToRel(x: number, y: number)`** draw a quadradic curve from previous curve to point *relative*
- **`arcTo(rx: number, ry: number, xAxisRotation: number, largeArc: boolean, sweep: boolean, x: number, y: number )`** draw arc from current position to point *absolute*
- **`arcToRel(rx: number, ry: number, xAxisRotation: number, largeArc: boolean, sweep: boolean, x: number, y: number )`** draw arc from current position to point *relative*
- **`close()`** return the path as an Svg formatted string, closing the path
- **`end()`** return the path as an Svg formatted string

*Note*:
 I was inpired to write this while building an application requiring a lot of fancy SVG path drawing.
 I hope this will help you as it helped me.

