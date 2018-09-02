/**
 * A declarative SVG path builder
 *
 * @export
 * @class Builder
 */
export default class Builder {
  private path: string = '';
  /**
   * The "Move To" command appears at the beginning of paths to specify where the
   * drawing should start.<br/>
   * If your cursor already was somewhere on the page, no line is drawn to connect
   * the two places.<br/>
   *
   * **This uses absolute positioning.**<br/>
   *
   * For relative positioning, see:<br/>
   * [moveToRel()](#movetorel)
   *
   * [Line commands - MSD web docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands#Line_commands)
   *
   * ### Example (es imports)
   * ```js
   * import Builder from 'svg-builder-js'
   * const builder = new Builder();
   * const path = builder.moveTo(10, 10).close();
   * // => 'M 10 10 z'
   * ```
   *
   * ### Example (commonjs)
   * ```js
   * var Builder = require('svg-builder-js').Builder;
   * const builder = new Builder();
   * const path = builder.moveTo(10, 10).close();
   * // => 'M 10 10 z'
   * ```
   *
   * @param {number} x x coordinate to move pen to
   * @param {number} y y coordinate to move pen to
   * @returns {Builder} an instance of the current builder to chain from
   * @memberof Builder
   */
  public moveTo(x: number, y: number): Builder {
    this.ammend(`M ${x} ${y}`);
    return this;
  }

  /**
   * The "Move To" command appears at the beginning of paths to specify where the
   * drawing should start.<br/>
   * If your cursor already was somewhere on the page, no line is drawn to connect
   * the two places.<br/>
   *
   * This uses relative positioning.
   *
   * For absolute positioning, see:
   * [moveTo()](#moveto)
   *
   * [Line commands - MSD web docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands#Line_commands)
   *
   * ### Example (es imports)
   * ```js
   * import Builder from 'svg-builder-js'
   * const builder = new Builder();
   * const path = builder.moveToRel(10, 10).close();
   * // => 'm 10 10 z'
   * ```
   *
   * ### Example (commonjs)
   * ```js
   * var Builder = require('svg-builder-js').Builder;
   * const builder = new Builder();
   * const path = builder.moveToRel(10, 10).close();
   * // => 'm 10 10 z'
   * ```
   *
   * @param {number} x x coordinate to move pen to
   * @param {number} y y coordinate to move pen to
   * @returns {Builder} an instance of the current builder to chain from
   * @memberof Builder
   */
  public moveToRel(x: number, y: number): Builder {
    this.ammend(`m ${x} ${y}`);
    return this;
  }

  /**
   * The "Line To" command takes two parameters—x and y coordinates—and draws a line from the
   * current position to a new position.<br/>
   *
   * **This uses absolute positioning.**<br/>
   *
   * For relative positioning, see:<br/>
   * [lineToRel()](#linetorel)
   *
   * [Line commands - MSD web docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands#Line_commands)
   *
   * ### Example (es imports)
   * ```js
   * import Builder from 'svg-builder-js'
   * const builder = new Builder();
   * const path = builder.lineTo(10, 10).close();
   * // => 'L 10 10 z'
   * ```
   *
   * ### Example (commonjs)
   * ```js
   * var Builder = require('svg-builder-js').Builder;
   * const builder = new Builder();
   * const path = builder.lineTo(10, 10).close();
   * // => 'L 10 10 z'
   * ```
   *
   * @param {number} x x coordinate to draw a line to
   * @param {number} y y coordinate to draw a line to
   * @returns {Builder} an instance of the current builder to chain from
   * @memberof Builder
   */
  public lineTo(x: number, y: number): Builder {
    this.ammend(`L ${x} ${y}`);
    return this;
  }

  /**
   * The "Line To" command takes two parameters—x and y coordinates—and draws a line from the
   * current position to a new position.<br/>
   *
   * **This uses relative positioning.**<br/>
   *
   * For absolute positioning, see:<br/>
   * [lineTo()](#lineto)
   *
   * [Line commands - MSD web docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands#Line_commands)
   *
   * ### Example (es imports)
   * ```js
   * import Builder from 'svg-builder-js'
   * const builder = new Builder();
   * const path = builder.lineToRel(10, 10).close();
   * // => 'l 10 10 z'
   * ```
   *
   * ### Example (commonjs)
   * ```js
   * var Builder = require('svg-builder-js').Builder;
   * const builder = new Builder();
   * const path = builder.lineToRel(10, 10).close();
   * // => 'l 10 10 z'
   * ```
   *
   * @param {number} x x coordinate to draw a line to
   * @param {number} y y coordinate to draw a line to
   * @returns {Builder} an instance of the current builder to chain from
   * @memberof Builder
   */
  public lineToRel(x: number, y: number): Builder {
    this.ammend(`l ${x} ${y}`);
    return this;
  }

  /**
   * The "Horizontal To" command takes one parameter—x coordinate—and draws a line from the
   * current position horizontally to a new position.<br/>
   *
   * **This uses absolute positioning.**<br/>
   *
   * For relative positioning, see:<br/>
   * [horizontalToRel()](#horizontaltorel)
   *
   * [Line commands - MSD web docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands#Line_commands)
   *
   * ### Example (es imports)
   * ```js
   * import Builder from 'svg-builder-js'
   * const builder = new Builder();
   * const path = builder.horizontalTo(10).close();
   * // => 'H 10 z'
   * ```
   *
   * ### Example (commonjs)
   * ```js
   * var Builder = require('svg-builder-js').Builder;
   * const builder = new Builder();
   * const path = builder.horizontalTo(10).close();
   * // => 'H 10 z'
   * ```
   *
   * @param {number} x x coordinate to draw a horizontal line on
   * @returns {Builder} an instance of the current builder to chain from
   * @memberof Builder
   */
  public horizontalTo(x: number): Builder {
    this.ammend(`H ${x}`);
    return this;
  }

  /**
   * The "Horizontal To" command takes one parameter—x coordinate—and draws a line from the
   * current position horizontally to a new position.<br/>
   *
   * **This uses relative positioning.**<br/>
   *
   * For absolute positioning, see:<br/>
   * [horizontalTo()](#horizontalto)
   *
   * [Line commands - MSD web docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands#Line_commands)
   *
   * ### Example (es imports)
   * ```js
   * import Builder from 'svg-builder-js'
   * const builder = new Builder();
   * const path = builder.horizontalToRel(10).close();
   * // => 'h 10 z'
   * ```
   *
   * ### Example (commonjs)
   * ```js
   * var Builder = require('svg-builder-js').Builder;
   * const builder = new Builder();
   * const path = builder.horizontalToRel(10).close();
   * // => 'h 10 z'
   * ```
   *
   * @param {number} x x coordinate to draw a horizontal line on
   * @returns {Builder} an instance of the current builder to chain from
   * @memberof Builder
   */
  public horizontalToRel(x: number): Builder {
    this.ammend(`h ${x}`);
    return this;
  }

  /**
   * The "Vertical To" command takes one parameter—y coordinate—and draws a line from the
   * current position vertically to a new position.<br/>
   *
   * **This uses absolute positioning.**<br/>
   *
   * For relative positioning, see:<br/>
   * [verticalToRel()](#verticaltorel)
   *
   * [Line commands - MSD web docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands#Line_commands)
   *
   * ### Example (es imports)
   * ```js
   * import Builder from 'svg-builder-js'
   * const builder = new Builder();
   * const path = builder.verticalTo(10).close();
   * // => 'V 10 z'
   * ```
   *
   * ### Example (commonjs)
   * ```js
   * var Builder = require('svg-builder-js').Builder;
   * const builder = new Builder();
   * const path = builder.verticalTo(10).close();
   * // => 'V 10 z'
   * ```
   *
   * @param {number} y y coordinate to draw a vertical line on
   * @returns {Builder} an instance of the current builder to chain from
   * @memberof Builder
   */
  public verticalTo(y: number): Builder {
    this.ammend(`V ${y}`);
    return this;
  }

  /**
   * The "Vertical To" command takes one parameter—y coordinate—and draws a line from the
   * current position vertically to a new position.<br/>
   *
   * **This uses relative positioning.**<br/>
   *
   * For absolute positioning, see:<br/>
   * [verticalTo()](#verticalto)
   *
   * [Line commands - MSD web docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands#Line_commands)
   *
   * ### Example (es imports)
   * ```js
   * import Builder from 'svg-builder-js'
   * const builder = new Builder();
   * const path = builder.verticalToRel(10).close();
   * // => 'v 10 z'
   * ```
   *
   * ### Example (commonjs)
   * ```js
   * var Builder = require('svg-builder-js').Builder;
   * const builder = new Builder();
   * const path = builder.verticalToRel(10).close();
   * // => 'v 10 z'
   * ```
   *
   * @param {number} y y coordinate to draw a vertical line on
   * @returns {Builder} an instance of the current builder to chain from
   * @memberof Builder
   */
  public verticalToRel(x: number): Builder {
    this.ammend(`v ${x}`);
    return this;
  }

  /**
   * Cubic Beziers take in two control points for each point.
   * Therefore, to create a cubic Bezier, you need to specify three sets of coordinates.<br/>
   * The last set of coordinates (x,y) are where you want the line to end.
   * The other two are control points. (x1,y1) is the control point for the start of
   * your curve, and (x2,y2) is the control point for the end.
   * The control points essentially describe the slope of your line starting at each point.
   * The Bezier function then creates a smooth curve that transfers you from the slope
   * you established at the beginning of your line, to the slope at the other end.<br/>
   *
   * **This uses absolute positioning.**<br/>
   *
   * For relative positioning, see:<br/>
   * [cubicToRel()](#cubictorel)
   *
   * [Curve commands - MSD web docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands#Curve_commands)
   *
   * ### Example (es imports)
   * ```js
   * import Builder from 'svg-builder-js'
   * const builder = new Builder();
   * const path = builder.cubicTo(10, 10, 10, 10, 10, 10).close();
   * // => 'C 10 10 10 10 10 10 z'
   * ```
   *
   * ### Example (commonjs)
   * ```js
   * var Builder = require('svg-builder-js').Builder;
   * const builder = new Builder();
   * const path = builder.cubicTo(10, 10, 10, 10, 10, 10).close();
   * // => 'C 10 10 10 10 10 10 z'
   * ```
   *
   * @param {number} x1 x1 coordinate of the start control point
   * @param {number} y1 y1 coordinate of the start control point
   * @param {number} x2 x2 coordinate of the end control point
   * @param {number} y2 y2 coordinate of the end control point
   * @param {number} x x coordinate of where to end the curve
   * @param {number} y y coordinate of where to end the curve
   * @returns {Builder} an instance of the current builder to chain from
   * @memberof Builder
   */
  public cubicTo(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x: number,
    y: number
  ): Builder {
    this.ammend(`C ${x1} ${y1} ${x2} ${y2} ${x} ${y}`);
    return this;
  }

  /**
   * Cubic Beziers take in two control points for each point.
   * Therefore, to create a cubic Bezier, you need to specify three sets of coordinates.<br/>
   * The last set of coordinates (x,y) are where you want the line to end.
   * The other two are control points. (x1,y1) is the control point for the start of
   * your curve, and (x2,y2) is the control point for the end.
   * The control points essentially describe the slope of your line starting at each point.
   * The Bezier function then creates a smooth curve that transfers you from the slope
   * you established at the beginning of your line, to the slope at the other end.<br/>
   *
   * **This uses relative positioning.**<br/>
   *
   * For absolute positioning, see:<br/>
   * [cubicTo()](#cubicto)
   *
   * [Curve commands - MSD web docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands#Curve_commands)
   *
   * ### Example (es imports)
   * ```js
   * import Builder from 'svg-builder-js'
   * const builder = new Builder();
   * const path = builder.cubicToRel(10, 10, 10, 10, 10, 10).close();
   * // => 'c 10 10 10 10 10 10 z'
   * ```
   *
   * ### Example (commonjs)
   * ```js
   * var Builder = require('svg-builder-js').Builder;
   * const builder = new Builder();
   * const path = builder.cubicToRel(10, 10, 10, 10, 10, 10).close();
   * // => 'c 10 10 10 10 10 10 z'
   * ```
   *
   * @param {number} x1 x1 coordinate of the start control point
   * @param {number} y1 y1 coordinate of the start control point
   * @param {number} x2 x2 coordinate of the end control point
   * @param {number} y2 y2 coordinate of the end control point
   * @param {number} x x coordinate of where to end the curve
   * @param {number} y y coordinate of where to end the curve
   * @returns {Builder} an instance of the current builder to chain from
   * @memberof Builder
   */
  public cubicToRel(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x: number,
    y: number
  ): Builder {
    this.ammend(`c ${x1} ${y1} ${x2} ${y2} ${x} ${y}`);
    return this;
  }

  /**
   * The "Smooth To" command produces the same type of curve as the Cubic Bezier,
   * but if it follows another "Smooth To" command or a "Cubic Bezier" command,
   * the first control point is assumed to be a reflection of the one used previously.
   * If the "Smooth To" command doesn't follow another "Smooth To" command or "Cubic Bezier"
   * command, then the current position of the cursor is used as the first control point.<br/>
   *
   * **This uses absolute positioning.**<br/>
   *
   * For relative positioning, see:<br/>
   * [smoothToRel()](#smoothtorel)
   *
   * [Curve commands - MSD web docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands#Curve_commands)
   *
   * ### Example (es imports)
   * ```js
   * import Builder from 'svg-builder-js'
   * const builder = new Builder();
   * const path = builder.smoothTo(10, 10, 10, 10).close();
   * // => 'S 10 10 10 10 z'
   * ```
   *
   * ### Example (commonjs)
   * ```js
   * var Builder = require('svg-builder-js').Builder;
   * const builder = new Builder();
   * const path = builder.smoothTo(10, 10, 10, 10).close();
   * // => 'S 10 10 10 10 z'
   * ```
   *
   * @param {number} x2 x2 coordinate of the end control point
   * @param {number} y2 y2 coordinate of the end control point
   * @param {number} x x coordinate of where to end the curve
   * @param {number} y y coordinate of where to end the curve
   * @returns {Builder} an instance of the current builder to chain from
   * @memberof Builder
   */
  public smoothTo(x2: number, y2: number, x: number, y: number): Builder {
    this.ammend(`S ${x2} ${y2} ${x} ${y}`);
    return this;
  }

  /**
   * The "Smooth To" command produces the same type of curve as the Cubic Bezier,
   * but if it follows another "Smooth To" command or a "Cubic Bezier" command,
   * the first control point is assumed to be a reflection of the one used previously.
   * If the "Smooth To" command doesn't follow another "Smooth To" command or "Cubic Bezier"
   * command, then the current position of the cursor is used as the first control point.<br/>
   *
   * **This uses relative positioning.**<br/>
   *
   * For absolute positioning, see:<br/>
   * [smoothTo()](#smoothto)
   *
   * [Curve commands - MSD web docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands#Curve_commands)
   *
   * ### Example (es imports)
   * ```js
   * import Builder from 'svg-builder-js'
   * const builder = new Builder();
   * const path = builder.smoothToRel(10, 10, 10, 10).close();
   * // => 's 10 10 10 10 z'
   * ```
   *
   * ### Example (commonjs)
   * ```js
   * var Builder = require('svg-builder-js').Builder;
   * const builder = new Builder();
   * const path = builder.smoothToRel(10, 10, 10, 10).close();
   * // => 's 10 10 10 10 z'
   * ```
   *
   * @param {number} x2 x2 coordinate of the end control point
   * @param {number} y2 y2 coordinate of the end control point
   * @param {number} x x coordinate of where to end the curve
   * @param {number} y y coordinate of where to end the curve
   * @returns {Builder} an instance of the current builder to chain from
   * @memberof Builder
   */
  public smoothToRel(x2: number, y2: number, x: number, y: number): Builder {
    this.ammend(`s ${x2} ${y2} ${x} ${y}`);
    return this;
  }

  /**
   * The "Quadradic To" command produces the same type of curve as the Cubic Bezier,
   * requires one control point which determines the slope of the curve at both
   * the start point and the end point. It takes two arguments: the control point
   * and the end point of the curve.<br/>
   *
   * **This uses absolute positioning.**<br/>
   *
   * For relative positioning, see:<br/>
   * [quadToRel()](#quadtorel)
   *
   * [Curve commands - MSD web docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands#Curve_commands)
   *
   * ### Example (es imports)
   * ```js
   * import Builder from 'svg-builder-js'
   * const builder = new Builder();
   * const path = builder.quadTo(10, 10, 10, 10).close();
   * // => 'Q 10 10 10 10 z'
   * ```
   *
   * ### Example (commonjs)
   * ```js
   * var Builder = require('svg-builder-js').Builder;
   * const builder = new Builder();
   * const path = builder.quadTo(10, 10, 10, 10).close();
   * // => 'Q 10 10 10 10 z'
   * ```
   *
   * @param {number} x1 x2 coordinate of the control point
   * @param {number} y1 y2 coordinate of the control point
   * @param {number} x x coordinate of where to end the curve
   * @param {number} y y coordinate of where to end the curve
   * @returns {Builder} an instance of the current builder to chain from
   * @memberof Builder
   */
  public quadTo(x1: number, y1: number, x: number, y: number): Builder {
    this.ammend(`Q ${x1} ${y1} ${x} ${y}`);
    return this;
  }

  /**
   * The "Quadradic To" command produces the same type of curve as the Cubic Bezier,
   * requires one control point which determines the slope of the curve at both
   * the start point and the end point. It takes two arguments: the control point
   * and the end point of the curve.<br/>
   *
   * **This uses relative positioning.**<br/>
   *
   * For absolute positioning, see:<br/>
   * [quadTo()](#quadto)
   *
   * [Curve commands - MSD web docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands#Curve_commands)
   *
   * ### Example (es imports)
   * ```js
   * import Builder from 'svg-builder-js'
   * const builder = new Builder();
   * const path = builder.quadToRel(10, 10, 10, 10).close();
   * // => 'q 10 10 10 10 z'
   * ```
   *
   * ### Example (commonjs)
   * ```js
   * var Builder = require('svg-builder-js').Builder;
   * const builder = new Builder();
   * const path = builder.quadToRel(10, 10, 10, 10).close();
   * // => 'q 10 10 10 10 z'
   * ```
   *
   * @param {number} x1 x2 coordinate of the control point
   * @param {number} y1 y2 coordinate of the control point
   * @param {number} x x coordinate of where to end the curve
   * @param {number} y y coordinate of where to end the curve
   * @returns {Builder} an instance of the current builder to chain from
   * @memberof Builder
   */
  public quadToRel(x1: number, y1: number, x: number, y: number): Builder {
    this.ammend(`q ${x1} ${y1} ${x} ${y}`);
    return this;
  }

  /**
   * The "Quadradic String To" command is a shortcut for stringing together
   * multiple quadratic Beziers.<br/>
   * This shortcut looks at the previous control point you used and infers a
   * new one from it. This means that after your first control point, you can
   * make fairly complex shapes by specifying only end points.<br/>
   * This only works if the previous command was a "Quadratic To" or a "Quadradic String To"
   * command. If it is not, then the control point is assumed to be the same as
   * the previous point, and you'll only draw lines.
   *
   * **This uses absolute positioning.**<br/>
   *
   * For relative positioning, see:<br/>
   * [quadStringToRel()](#quadstringtorel)
   *
   * [Curve commands - MSD web docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands#Curve_commands)
   *
   * ### Example (es imports)
   * ```js
   * import Builder from 'svg-builder-js'
   * const builder = new Builder();
   * const path = builder.quadStringTo(180, 80).close();
   * // => 'T 180 80 z'
   * ```
   *
   * ### Example (commonjs)
   * ```js
   * var Builder = require('svg-builder-js').Builder;
   * const builder = new Builder();
   * const path = builder.quadStringTo(180, 80).close();
   * // => 'T 180 80 z'
   * ```
   *
   * @param {number} x x coordinate of where to end the curve
   * @param {number} y y coordinate of where to end the curve
   * @returns {Builder} an instance of the current builder to chain from
   * @memberof Builder
   */
  public quadStringTo(x: number, y: number): Builder {
    this.ammend(`T ${x} ${y}`);
    return this;
  }

  /**
   * The "Quadradic String To" command is a shortcut for stringing together
   * multiple quadratic Beziers.<br/>
   * This shortcut looks at the previous control point you used and infers a
   * new one from it. This means that after your first control point, you can
   * make fairly complex shapes by specifying only end points.<br/>
   * This only works if the previous command was a "Quadratic To" or a "Quadradic String To"
   * command. If it is not, then the control point is assumed to be the same as
   * the previous point, and you'll only draw lines.
   *
   * **This uses relative positioning.**<br/>
   *
   * For absolute positioning, see:<br/>
   * [quadStringTo()](#quadstringto)
   *
   * [Curve commands - MSD web docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands#Curve_commands)
   *
   * ### Example (es imports)
   * ```js
   * import Builder from 'svg-builder-js'
   * const builder = new Builder();
   * const path = builder.quadStringToRel(180, 80).close();
   * // => 't 180 80 z'
   * ```
   *
   * ### Example (commonjs)
   * ```js
   * var Builder = require('svg-builder-js').Builder;
   * const builder = new Builder();
   * const path = builder.quadStringToRel(180, 80).close();
   * // => 't 180 80 z'
   * ```
   *
   * @param {number} x x coordinate of where to end the curve
   * @param {number} y y coordinate of where to end the curve
   * @returns {Builder} an instance of the current builder to chain from
   * @memberof Builder
   */
  public quadStringToRel(x: number, y: number): Builder {
    this.ammend(`t ${x} ${y}`);
    return this;
  }

  /**
   * Arcs are sections of circles or ellipses. For a given x-radius and y-radius,
   * there are two ellipses that can connect any two points (as long as they're within
   * the radius of the circle). Along either of those circles there are two possible
   * paths that you can take to connect the points, so in any situation there are
   * four possible arcs available.<br/>
   * At its start, the arc element takes in two arguments for the x-radius and y-radius.
   * The final two arguments designate the x and y coordinates to end the stroke.
   * Together, these four values define the basic structure of the arc.<br/>
   * The third parameter describes the rotation of the arc.<br/>
   * The fourth argument, is the large arc flag and simply determines if the arc should
   * be greater than or less than 180 degrees; in the end, this flag determines which
   * direction the arc will travel around a given circle.<br/>
   * The fifth argument is the sweep-flag. It determines if the arc should begin moving
   * at positive angles or negative ones, which essentially picks which of the two circles
   * you will travel around.
   *
   * **This uses absolute positioning.**<br/>
   *
   * For relative positioning, see:<br/>
   * [arcToRel()](#arctorel)
   *
   * [Arc commands - MSD web docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands#Arcs)
   *
   * ### Example (es imports)
   * ```js
   * import Builder from 'svg-builder-js'
   * const builder = new Builder();
   * const path = builder.arcTo(30, 50, 0, false, true, 165.55, 162.45).close();
   * // => 'A 30 50 0 0 1 165.55 162.45 z'
   * ```
   *
   * ### Example (commonjs)
   * ```js
   * var Builder = require('svg-builder-js').Builder;
   * const builder = new Builder();
   * const path = builder.arcTo(30, 50, 0, false, true, 165.55, 162.45).close();
   * // => 'A 30 50 0 0 1 165.55 162.45 z'
   * ```
   *
   * @param {number} rx radius of the ellipse across the x axis
   * @param {number} ry radius of the ellipse across the y axis
   * @param {number} xAxisRotation rotation of the arc across the x axis
   * @param {boolean} largeArc a value indicating whether or not the arc should be greater
   * than 180deg or not
   * @param {boolean} sweep a value indicating whether or not the arc should be moving in
   * positive angles or not
   * @param {number} x x coordinate of the ellipse
   * @param {number} y y coordinate of the ellipse
   * @returns {Builder} an instance of the current builder to chain from
   * @memberof Builder
   */
  public arcTo(
    rx: number,
    ry: number,
    xAxisRotation: number,
    largeArc: boolean,
    sweep: boolean,
    x: number,
    y: number
  ): Builder {
    this.ammend(
      `A ${rx} ${ry} ${xAxisRotation} ${largeArc ? 1 : 0} ${
        sweep ? 1 : 0
      } ${x} ${y}`
    );
    return this;
  }

  /**
   * Arcs are sections of circles or ellipses. For a given x-radius and y-radius,
   * there are two ellipses that can connect any two points (as long as they're within
   * the radius of the circle). Along either of those circles there are two possible
   * paths that you can take to connect the points, so in any situation there are
   * four possible arcs available.<br/>
   * At its start, the arc element takes in two arguments for the x-radius and y-radius.
   * The final two arguments designate the x and y coordinates to end the stroke.
   * Together, these four values define the basic structure of the arc.<br/>
   * The third parameter describes the rotation of the arc.<br/>
   * The fourth argument, is the large arc flag and simply determines if the arc should
   * be greater than or less than 180 degrees; in the end, this flag determines which
   * direction the arc will travel around a given circle.<br/>
   * The fifth argument is the sweep-flag. It determines if the arc should begin moving
   * at positive angles or negative ones, which essentially picks which of the two circles
   * you will travel around.
   *
   * **This uses relative positioning.**<br/>
   *
   * For absolute positioning, see:<br/>
   * [arcTo()](#arcto)
   *
   * [Arc commands - MSD web docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands#Arcs)
   *
   * ### Example (es imports)
   * ```js
   * import Builder from 'svg-builder-js'
   * const builder = new Builder();
   * const path = builder.arcToRel(30, 50, 0, false, true, 165.55, 162.45).close();
   * // => 'a 30 50 0 0 1 165.55 162.45 z'
   * ```
   *
   * ### Example (commonjs)
   * ```js
   * var Builder = require('svg-builder-js').Builder;
   * const builder = new Builder();
   * const path = builder.arcToRel(30, 50, 0, false, true, 165.55, 162.45).close();
   * // => 'a 30 50 0 0 1 165.55 162.45 z'
   * ```
   *
   * @param {number} rx radius of the ellipse across the x axis
   * @param {number} ry radius of the ellipse across the y axis
   * @param {number} xAxisRotation rotation of the arc across the x axis
   * @param {boolean} largeArc a value indicating whether or not the arc should be greater
   * than 180deg or not
   * @param {boolean} sweep a value indicating whether or not the arc should be moving in
   * positive angles or not
   * @param {number} x x coordinate of the ellipse
   * @param {number} y y coordinate of the ellipse
   * @returns {Builder} an instance of the current builder to chain from
   * @memberof Builder
   */
  public arcToRel(
    rx: number,
    ry: number,
    xAxisRotation: number,
    largeArc: boolean,
    sweep: boolean,
    x: number,
    y: number
  ): Builder {
    this.ammend(
      `a ${rx} ${ry} ${xAxisRotation} ${largeArc ? 1 : 0} ${
        sweep ? 1 : 0
      } ${x} ${y}`
    );
    return this;
  }
  /**
   * Closes the path by amending a 'Z' and returning the string.
   *
   * @returns {string} A path as a string
   * @memberof Builder
   */
  public close(): string {
    this.ammend(`z`);
    return this.path;
  }

  /**
   * A private function used to combine previous commands with path string.
   *
   * @private
   * @param {string} value string to amend to current path string
   * @memberof Builder
   */
  private ammend(value: string): void {
    if (this.path) {
      this.path += ` ${value}`;
    } else {
      this.path = value;
    }
  }
}
