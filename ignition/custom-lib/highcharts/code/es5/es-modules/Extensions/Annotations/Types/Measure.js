/* *
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Annotation from '../Annotation.js';
import ControlPoint from '../ControlPoint.js';
import U from '../../../Core/Utilities.js';
var defined = U.defined, extend = U.extend, isNumber = U.isNumber, merge = U.merge, pick = U.pick;
/* *
 *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function average() {
    var average = 0, pointsTotal = 0, pointsAmount = 0;
    var series = this.chart.series, ext = getExtremes(this.xAxisMin, this.xAxisMax, this.yAxisMin, this.yAxisMax);
    series.forEach(function (s) {
        if (s.visible &&
            s.options.id !== 'highcharts-navigator-series') {
            s.points.forEach(function (point) {
                if (isPointWithinExtremes(point, ext) &&
                    isNumber(point.y)) {
                    pointsTotal += point.y;
                    pointsAmount++;
                }
            });
        }
    });
    if (pointsAmount > 0) {
        average = pointsTotal / pointsAmount;
    }
    return average;
}
/**
 * @private
 */
function isPointWithinExtremes(point, ext) {
    return (!point.isNull &&
        isNumber(point.y) &&
        point.x > ext.xAxisMin &&
        point.x <= ext.xAxisMax &&
        point.y > ext.yAxisMin &&
        point.y <= ext.yAxisMax);
}
/**
 * @private
 */
function bins() {
    var series = this.chart.series, ext = getExtremes(this.xAxisMin, this.xAxisMax, this.yAxisMin, this.yAxisMax);
    var bins = 0;
    series.forEach(function (s) {
        if (s.visible &&
            s.options.id !== 'highcharts-navigator-series') {
            s.points.forEach(function (point) {
                if (isPointWithinExtremes(point, ext)) {
                    bins++;
                }
            });
        }
    });
    return bins;
}
/**
 * Default formatter of label's content
 * @private
 */
function defaultFormatter() {
    return 'Min: ' + this.min +
        '<br>Max: ' + this.max +
        '<br>Average: ' + this.average.toFixed(2) +
        '<br>Bins: ' + this.bins;
}
/**
 * Set values for xAxisMin, xAxisMax, yAxisMin, yAxisMax, also
 * when chart is inverted
 * @private
 */
function getExtremes(xAxisMin, xAxisMax, yAxisMin, yAxisMax) {
    return {
        xAxisMin: Math.min(xAxisMax, xAxisMin),
        xAxisMax: Math.max(xAxisMax, xAxisMin),
        yAxisMin: Math.min(yAxisMax, yAxisMin),
        yAxisMax: Math.max(yAxisMax, yAxisMin)
    };
}
/**
 * Set current xAxisMin, xAxisMax, yAxisMin, yAxisMax.
 * Calculations of measure values (min, max, average, bins).
 * @private
 * @param {Highcharts.Axis} axis
 *        X or y axis reference
 * @param {number} value
 *        Point's value (x or y)
 * @param {number} offset
 *        Amount of pixels
 */
function getPointPos(axis, value, offset) {
    return axis.toValue(axis.toPixels(value) + offset);
}
/**
 * Set starting points
 * @private
 */
function init() {
    var options = this.options.typeOptions, chart = this.chart, inverted = chart.inverted, xAxis = chart.xAxis[options.xAxis], yAxis = chart.yAxis[options.yAxis], bg = options.background, width = inverted ? bg.height : bg.width, height = inverted ? bg.width : bg.height, selectType = options.selectType, top = inverted ? xAxis.left : yAxis.top, // #13664
    left = inverted ? yAxis.top : xAxis.left; // #13664
    this.startXMin = options.point.x;
    this.startYMin = options.point.y;
    if (isNumber(width)) {
        this.startXMax = this.startXMin + width;
    }
    else {
        this.startXMax = getPointPos(xAxis, this.startXMin, parseFloat(width));
    }
    if (isNumber(height)) {
        this.startYMax = this.startYMin - height;
    }
    else {
        this.startYMax = getPointPos(yAxis, this.startYMin, parseFloat(height));
    }
    // X / y selection type
    if (selectType === 'x') {
        this.startYMin = yAxis.toValue(top);
        this.startYMax = yAxis.toValue(top + yAxis.len);
    }
    else if (selectType === 'y') {
        this.startXMin = xAxis.toValue(left);
        this.startXMax = xAxis.toValue(left + xAxis.len);
    }
}
/**
 * @private
 */
function max() {
    var series = this.chart.series, ext = getExtremes(this.xAxisMin, this.xAxisMax, this.yAxisMin, this.yAxisMax);
    var max = -Infinity, isCalculated = false; // To avoid Infinity in formatter
    series.forEach(function (s) {
        if (s.visible &&
            s.options.id !== 'highcharts-navigator-series') {
            s.points.forEach(function (point) {
                if (isNumber(point.y) &&
                    point.y > max &&
                    isPointWithinExtremes(point, ext)) {
                    max = point.y;
                    isCalculated = true;
                }
            });
        }
    });
    if (!isCalculated) {
        max = 0;
    }
    return max;
}
/**
 * Definitions of calculations (min, max, average, bins)
 * @private
 */
function min() {
    var series = this.chart.series, ext = getExtremes(this.xAxisMin, this.xAxisMax, this.yAxisMin, this.yAxisMax);
    var min = Infinity, isCalculated = false; // To avoid Infinity in formatter
    series.forEach(function (s) {
        if (s.visible &&
            s.options.id !== 'highcharts-navigator-series') {
            s.points.forEach(function (point) {
                if (isNumber(point.y) &&
                    point.y < min &&
                    isPointWithinExtremes(point, ext)) {
                    min = point.y;
                    isCalculated = true;
                }
            });
        }
    });
    if (!isCalculated) {
        min = 0;
    }
    return min;
}
/**
 * Set current xAxisMin, xAxisMax, yAxisMin, yAxisMax.
 * Calculations of measure values (min, max, average, bins).
 * @private
 * @param {boolean} [resize]
 *        Flag if shape is resized.
 */
function recalculate(resize) {
    var options = this.options.typeOptions, xAxis = this.chart.xAxis[options.xAxis], yAxis = this.chart.yAxis[options.yAxis], offsetX = this.offsetX, offsetY = this.offsetY;
    this.xAxisMin = getPointPos(xAxis, this.startXMin, offsetX);
    this.xAxisMax = getPointPos(xAxis, this.startXMax, offsetX);
    this.yAxisMin = getPointPos(yAxis, this.startYMin, offsetY);
    this.yAxisMax = getPointPos(yAxis, this.startYMax, offsetY);
    this.min = min.call(this);
    this.max = max.call(this);
    this.average = average.call(this);
    this.bins = bins.call(this);
    if (resize) {
        this.resize(0, 0);
    }
}
/**
 * Update position of start points
 * (startXMin, startXMax, startYMin, startYMax)
 * @private
 * @param {boolean} redraw
 *        Flag if shape is redraw
 * @param {boolean} resize
 *        Flag if shape is resized
 * @param {number} cpIndex
 *        Index of controlPoint
 */
function updateStartPoints(redraw, resize, cpIndex, dx, dy) {
    var options = this.options.typeOptions, selectType = options.selectType, xAxis = this.chart.xAxis[options.xAxis], yAxis = this.chart.yAxis[options.yAxis], startXMin = this.startXMin, startXMax = this.startXMax, startYMin = this.startYMin, startYMax = this.startYMax, offsetX = this.offsetX, offsetY = this.offsetY;
    if (resize) {
        if (selectType === 'x') {
            if (cpIndex === 0) {
                this.startXMin = getPointPos(xAxis, startXMin, dx);
            }
            else {
                this.startXMax = getPointPos(xAxis, startXMax, dx);
            }
        }
        else if (selectType === 'y') {
            if (cpIndex === 0) {
                this.startYMin = getPointPos(yAxis, startYMin, dy);
            }
            else {
                this.startYMax = getPointPos(yAxis, startYMax, dy);
            }
        }
        else {
            this.startXMax = getPointPos(xAxis, startXMax, dx);
            this.startYMax = getPointPos(yAxis, startYMax, dy);
        }
    }
    if (redraw) {
        this.startXMin = getPointPos(xAxis, startXMin, offsetX);
        this.startXMax = getPointPos(xAxis, startXMax, offsetX);
        this.startYMin = getPointPos(yAxis, startYMin, offsetY);
        this.startYMax = getPointPos(yAxis, startYMax, offsetY);
        this.offsetX = 0;
        this.offsetY = 0;
    }
    this.options.typeOptions.point = {
        x: this.startXMin,
        y: this.startYMin
    };
    // We need to update userOptions as well as they are used in
    // the Annotation.update() method to initialize the annotation, #19121.
    this.userOptions.typeOptions.point = {
        x: this.startXMin,
        y: this.startYMin
    };
}
/* *
 *
 *  Class
 *
 * */
var Measure = /** @class */ (function (_super) {
    __extends(Measure, _super);
    function Measure() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Init annotation object.
     * @private
     */
    Measure.prototype.init = function (annotationOrChart, userOptions, index) {
        _super.prototype.init.call(this, annotationOrChart, userOptions, index);
        this.offsetX = 0;
        this.offsetY = 0;
        this.resizeX = 0;
        this.resizeY = 0;
        init.call(this);
        this.addValues();
        this.addShapes();
    };
    /**
     * Overrides default setter to get axes from typeOptions.
     * @private
     */
    Measure.prototype.setClipAxes = function () {
        this.clipXAxis = this.chart.xAxis[this.options.typeOptions.xAxis];
        this.clipYAxis = this.chart.yAxis[this.options.typeOptions.yAxis];
    };
    /**
     * Get points configuration objects for shapes.
     * @private
     */
    Measure.prototype.shapePointsOptions = function () {
        var options = this.options.typeOptions, xAxis = options.xAxis, yAxis = options.yAxis;
        return [
            {
                x: this.xAxisMin,
                y: this.yAxisMin,
                xAxis: xAxis,
                yAxis: yAxis
            },
            {
                x: this.xAxisMax,
                y: this.yAxisMin,
                xAxis: xAxis,
                yAxis: yAxis
            },
            {
                x: this.xAxisMax,
                y: this.yAxisMax,
                xAxis: xAxis,
                yAxis: yAxis
            },
            {
                x: this.xAxisMin,
                y: this.yAxisMax,
                xAxis: xAxis,
                yAxis: yAxis
            },
            {
                command: 'Z'
            }
        ];
    };
    Measure.prototype.addControlPoints = function () {
        var _a, _b;
        var inverted = this.chart.inverted, options = this.options.controlPointOptions, selectType = this.options.typeOptions.selectType;
        if (!defined((_b = (_a = this.userOptions.controlPointOptions) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.cursor)) {
            if (selectType === 'x') {
                options.style.cursor = inverted ? 'ns-resize' : 'ew-resize';
            }
            else if (selectType === 'y') {
                options.style.cursor = inverted ? 'ew-resize' : 'ns-resize';
            }
        }
        var controlPoint = new ControlPoint(this.chart, this, this.options.controlPointOptions, 0);
        this.controlPoints.push(controlPoint);
        // Add extra controlPoint for horizontal and vertical range
        if (selectType !== 'xy') {
            controlPoint = new ControlPoint(this.chart, this, this.options.controlPointOptions, 1);
            this.controlPoints.push(controlPoint);
        }
    };
    /**
     * Add label with calculated values (min, max, average, bins).
     * @private
     * @param {boolean} [resize]
     * The flag for resize shape
     */
    Measure.prototype.addValues = function (resize) {
        var typeOptions = this.options.typeOptions, formatter = typeOptions.label.formatter;
        // Set xAxisMin, xAxisMax, yAxisMin, yAxisMax
        recalculate.call(this, resize);
        if (!typeOptions.label.enabled) {
            return;
        }
        if (this.labels.length > 0) {
            (this.labels[0]).text = ((formatter && formatter.call(this)) ||
                defaultFormatter.call(this));
        }
        else {
            this.initLabel(extend({
                shape: 'rect',
                backgroundColor: 'none',
                color: 'black',
                borderWidth: 0,
                dashStyle: 'Dash',
                overflow: 'allow',
                align: 'left',
                y: 0,
                x: 0,
                verticalAlign: 'top',
                crop: true,
                xAxis: 0,
                yAxis: 0,
                point: function (target) {
                    var annotation = target.annotation, options = target.options;
                    return {
                        x: annotation.xAxisMin,
                        y: annotation.yAxisMin,
                        xAxis: pick(typeOptions.xAxis, options.xAxis),
                        yAxis: pick(typeOptions.yAxis, options.yAxis)
                    };
                },
                text: ((formatter && formatter.call(this)) ||
                    defaultFormatter.call(this))
            }, typeOptions.label), void 0);
        }
    };
    /**
     * Crosshair, background (rect).
     * @private
     */
    Measure.prototype.addShapes = function () {
        this.addCrosshairs();
        this.addBackground();
    };
    /**
     * Add background shape.
     * @private
     */
    Measure.prototype.addBackground = function () {
        var shapePoints = this.shapePointsOptions();
        if (typeof shapePoints[0].x === 'undefined') {
            return;
        }
        this.initShape(extend({
            type: 'path',
            points: shapePoints,
            className: 'highcharts-measure-background'
        }, this.options.typeOptions.background), 2);
    };
    /**
     * Add internal crosshair shapes (on top and bottom).
     * @private
     */
    Measure.prototype.addCrosshairs = function () {
        var chart = this.chart, options = this.options.typeOptions, point = this.options.typeOptions.point, xAxis = chart.xAxis[options.xAxis], yAxis = chart.yAxis[options.yAxis], inverted = chart.inverted, defaultOptions = {
            point: point,
            type: 'path'
        };
        var xAxisMin = xAxis.toPixels(this.xAxisMin), xAxisMax = xAxis.toPixels(this.xAxisMax), yAxisMin = yAxis.toPixels(this.yAxisMin), yAxisMax = yAxis.toPixels(this.yAxisMax), pathH = [], pathV = [], crosshairOptionsX, crosshairOptionsY, temp;
        if (inverted) {
            temp = xAxisMin;
            xAxisMin = yAxisMin;
            yAxisMin = temp;
            temp = xAxisMax;
            xAxisMax = yAxisMax;
            yAxisMax = temp;
        }
        // Horizontal line
        if (options.crosshairX.enabled) {
            pathH = [[
                    'M',
                    xAxisMin,
                    yAxisMin + ((yAxisMax - yAxisMin) / 2)
                ], [
                    'L',
                    xAxisMax,
                    yAxisMin + ((yAxisMax - yAxisMin) / 2)
                ]];
        }
        // Vertical line
        if (options.crosshairY.enabled) {
            pathV = [[
                    'M',
                    xAxisMin + ((xAxisMax - xAxisMin) / 2),
                    yAxisMin
                ], [
                    'L',
                    xAxisMin + ((xAxisMax - xAxisMin) / 2),
                    yAxisMax
                ]];
        }
        // Update existed crosshair
        if (this.shapes.length > 0) {
            this.shapes[0].options.d = pathH;
            this.shapes[1].options.d = pathV;
        }
        else {
            // Add new crosshairs
            crosshairOptionsX = merge(defaultOptions, { className: 'highcharts-measure-crosshair-x' }, options.crosshairX);
            crosshairOptionsY = merge(defaultOptions, { className: 'highcharts-measure-crosshair-y' }, options.crosshairY);
            this.initShape(extend({ d: pathH }, crosshairOptionsX), 0);
            this.initShape(extend({ d: pathV }, crosshairOptionsY), 1);
        }
    };
    Measure.prototype.onDrag = function (e) {
        var translation = this.mouseMoveToTranslation(e), selectType = this.options.typeOptions.selectType, x = selectType === 'y' ? 0 : translation.x, y = selectType === 'x' ? 0 : translation.y;
        this.translate(x, y);
        this.offsetX += x;
        this.offsetY += y;
        // Animation, resize, setStartPoints
        this.redraw(false, false, true);
    };
    /**
     * Translate start or end ("left" or "right") side of the measure.
     * Update start points (startXMin, startXMax, startYMin, startYMax)
     * @private
     * @param {number} dx
     * the amount of x translation
     * @param {number} dy
     * the amount of y translation
     * @param {number} cpIndex
     * index of control point
     * @param {Highcharts.AnnotationDraggableValue} selectType
     * x / y / xy
     */
    Measure.prototype.resize = function (dx, dy, cpIndex, selectType) {
        // Background shape
        var bckShape = this.shapes[2];
        if (selectType === 'x') {
            if (cpIndex === 0) {
                bckShape.translatePoint(dx, 0, 0);
                bckShape.translatePoint(dx, dy, 3);
            }
            else {
                bckShape.translatePoint(dx, 0, 1);
                bckShape.translatePoint(dx, dy, 2);
            }
        }
        else if (selectType === 'y') {
            if (cpIndex === 0) {
                bckShape.translatePoint(0, dy, 0);
                bckShape.translatePoint(0, dy, 1);
            }
            else {
                bckShape.translatePoint(0, dy, 2);
                bckShape.translatePoint(0, dy, 3);
            }
        }
        else {
            bckShape.translatePoint(dx, 0, 1);
            bckShape.translatePoint(dx, dy, 2);
            bckShape.translatePoint(0, dy, 3);
        }
        updateStartPoints.call(this, false, true, cpIndex, dx, dy);
        this.options.typeOptions.background.height = Math.abs(this.startYMax - this.startYMin);
        this.options.typeOptions.background.width = Math.abs(this.startXMax - this.startXMin);
    };
    /**
     * Redraw event which render elements and update start points if needed.
     * @private
     * @param {boolean} animation
     * @param {boolean} [resize]
     * flag if resized
     * @param {boolean} [setStartPoints]
     * update position of start points
     */
    Measure.prototype.redraw = function (animation, resize, setStartPoints) {
        var _a;
        this.linkPoints();
        if (!this.graphic) {
            this.render();
        }
        if (setStartPoints) {
            updateStartPoints.call(this, true, false);
        }
        // #11174 - clipBox was not recalculate during resize / redraw
        if (this.clipRect) {
            this.clipRect.animate(this.getClipBox());
        }
        this.addValues(resize);
        this.addCrosshairs();
        this.redrawItems(this.shapes, animation);
        this.redrawItems(this.labels, animation);
        var backgroundOptions = this.options.typeOptions.background;
        if ((backgroundOptions === null || backgroundOptions === void 0 ? void 0 : backgroundOptions.strokeWidth) &&
            ((_a = this.shapes[2]) === null || _a === void 0 ? void 0 : _a.graphic)) {
            var offset = (backgroundOptions.strokeWidth) / 2;
            var background = this.shapes[2];
            var path = background.graphic.pathArray;
            var p1 = path[0];
            var p2 = path[1];
            var p3 = path[2];
            var p4 = path[3];
            p1[1] = (p1[1] || 0) + offset;
            p2[1] = (p2[1] || 0) - offset;
            p3[1] = (p3[1] || 0) - offset;
            p4[1] = (p4[1] || 0) + offset;
            p1[2] = (p1[2] || 0) + offset;
            p2[2] = (p2[2] || 0) + offset;
            p3[2] = (p3[2] || 0) - offset;
            p4[2] = (p4[2] || 0) - offset;
            background.graphic.attr({
                d: path
            });
        }
        // Redraw control point to run positioner
        this.controlPoints.forEach(function (controlPoint) {
            return controlPoint.redraw();
        });
    };
    Measure.prototype.translate = function (dx, dy) {
        this.shapes.forEach(function (item) {
            return item.translate(dx, dy);
        });
    };
    return Measure;
}(Annotation));
Measure.prototype.defaultOptions = merge(Annotation.prototype.defaultOptions, 
/**
 * A measure annotation.
 *
 * @extends annotations.crookedLine
 * @excluding labels, labelOptions, shapes, shapeOptions
 * @sample highcharts/annotations-advanced/measure/
 *         Measure
 * @product highstock
 * @optionparent annotations.measure
 */
{
    typeOptions: {
        /**
         * Decides in what dimensions the user can resize by dragging the
         * mouse. Can be one of x, y or xy.
         */
        selectType: 'xy',
        /**
         * This number defines which xAxis the point is connected to.
         * It refers to either the axis id or the index of the axis
         * in the xAxis array.
         */
        xAxis: 0,
        /**
         * This number defines which yAxis the point is connected to.
         * It refers to either the axis id or the index of the axis
         * in the yAxis array.
         */
        yAxis: 0,
        background: {
            /**
             * The color of the rectangle.
             */
            fill: 'rgba(130, 170, 255, 0.4)',
            /**
             * The width of border.
             */
            strokeWidth: 0,
            /**
             * The color of border.
             */
            stroke: void 0
        },
        /**
         * Configure a crosshair that is horizontally placed in middle of
         * rectangle.
         *
         */
        crosshairX: {
            /**
             * Enable or disable the horizontal crosshair.
             *
             */
            enabled: true,
            /**
             * The Z index of the crosshair in annotation.
             */
            zIndex: 6,
            /**
             * The dash or dot style of the crosshair's line. For possible
             * values, see
             * [this demonstration](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-dashstyle-all/).
             *
             * @type    {Highcharts.DashStyleValue}
             * @default Dash
             */
            dashStyle: 'Dash',
            /**
             * The marker-end defines the arrowhead that will be drawn
             * at the final vertex of the given crosshair's path.
             *
             * @type       {string}
             * @default    arrow
             */
            markerEnd: 'arrow'
        },
        /**
         * Configure a crosshair that is vertically placed in middle of
         * rectangle.
         */
        crosshairY: {
            /**
             * Enable or disable the vertical crosshair.
             *
             */
            enabled: true,
            /**
             * The Z index of the crosshair in annotation.
             */
            zIndex: 6,
            /**
             * The dash or dot style of the crosshair's line. For possible
             * values, see
             * [this demonstration](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-dashstyle-all/).
             *
             * @type      {Highcharts.DashStyleValue}
             * @default   Dash
             * @apioption annotations.measure.typeOptions.crosshairY.dashStyle
             *
             */
            dashStyle: 'Dash',
            /**
             * The marker-end defines the arrowhead that will be drawn
             * at the final vertex of the given crosshair's path.
             *
             * @type       {string}
             * @default    arrow
             * @validvalue ["none", "arrow"]
             *
             */
            markerEnd: 'arrow'
        },
        label: {
            /**
             * Enable or disable the label text (min, max, average,
             * bins values).
             *
             * Defaults to true.
             */
            enabled: true,
            /**
             * CSS styles for the measure label.
             *
             * @type    {Highcharts.CSSObject}
             * @default {"color": "#666666", "fontSize": "11px"}
             */
            style: {
                fontSize: '0.7em',
                color: "#666666" /* Palette.neutralColor60 */
            },
            /**
             * Formatter function for the label text.
             *
             * Available data are:
             *
             * <table>
             *
             * <tbody>
             *
             * <tr>
             *
             * <td>`this.min`</td>
             *
             * <td>The minimum value of the points in the selected
             * range.</td>
             *
             * </tr>
             *
             * <tr>
             *
             * <td>`this.max`</td>
             *
             * <td>The maximum value of the points in the selected
             * range.</td>
             *
             * </tr>
             *
             * <tr>
             *
             * <td>`this.average`</td>
             *
             * <td>The average value of the points in the selected
             * range.</td>
             *
             * </tr>
             *
             * <tr>
             *
             * <td>`this.bins`</td>
             *
             * <td>The amount of the points in the selected range.</td>
             *
             * </tr>
             *
             * </table>
             *
             * @type {Function}
             *
             */
            formatter: void 0
        }
    },
    controlPointOptions: {
        positioner: function (target) {
            var cpIndex = this.index, chart = target.chart, options = target.options, typeOptions = options.typeOptions, selectType = typeOptions.selectType, controlPointOptions = options.controlPointOptions, inverted = chart.inverted, xAxis = chart.xAxis[typeOptions.xAxis], yAxis = chart.yAxis[typeOptions.yAxis], ext = getExtremes(target.xAxisMin, target.xAxisMax, target.yAxisMin, target.yAxisMax);
            var targetX = target.xAxisMax, targetY = target.yAxisMax, x, y;
            if (selectType === 'x') {
                targetY = (ext.yAxisMax + ext.yAxisMin) / 2;
                // First control point
                if (cpIndex === 0) {
                    targetX = target.xAxisMin;
                }
            }
            if (selectType === 'y') {
                targetX = ext.xAxisMin +
                    ((ext.xAxisMax - ext.xAxisMin) / 2);
                // First control point
                if (cpIndex === 0) {
                    targetY = target.yAxisMin;
                }
            }
            if (inverted) {
                x = yAxis.toPixels(targetY);
                y = xAxis.toPixels(targetX);
            }
            else {
                x = xAxis.toPixels(targetX);
                y = yAxis.toPixels(targetY);
            }
            return {
                x: x - (controlPointOptions.width / 2),
                y: y - (controlPointOptions.height / 2)
            };
        },
        events: {
            drag: function (e, target) {
                var translation = this.mouseMoveToTranslation(e), selectType = target.options.typeOptions.selectType, index = this.index, x = selectType === 'y' ? 0 : translation.x, y = selectType === 'x' ? 0 : translation.y;
                target.resize(x, y, index, selectType);
                target.resizeX += x;
                target.resizeY += y;
                target.redraw(false, true);
            }
        }
    }
});
Annotation.types.measure = Measure;
/* *
 *
 *  Default Export
 *
 * */
export default Measure;
