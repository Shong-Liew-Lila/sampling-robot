/* *
 *
 *  (c) 2010-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
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
import SeriesRegistry from '../../Core/Series/SeriesRegistry.js';
var LineSeries = SeriesRegistry.seriesTypes.line;
import U from '../../Core/Utilities.js';
var merge = U.merge, pick = U.pick;
/* *
 *
 *  Class
 *
 * */
/**
 * Spline series type.
 *
 * @private
 */
var SplineSeries = /** @class */ (function (_super) {
    __extends(SplineSeries, _super);
    function SplineSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     *  Functions
     *
     * */
    /* eslint-disable valid-jsdoc */
    /**
     * Get the spline segment from a given point's previous neighbour to the
     * given point.
     *
     * @private
     * @function Highcharts.seriesTypes.spline#getPointSpline
     */
    SplineSeries.prototype.getPointSpline = function (points, point, i) {
        var 
        // 1 means control points midway between points, 2 means 1/3
        // from the point, 3 is 1/4 etc
        smoothing = 1.5, denom = smoothing + 1, plotX = point.plotX || 0, plotY = point.plotY || 0, lastPoint = points[i - 1], nextPoint = points[i + 1];
        var leftContX, leftContY, rightContX, rightContY;
        /**
         * @private
         */
        function doCurve(otherPoint) {
            return otherPoint &&
                !otherPoint.isNull &&
                otherPoint.doCurve !== false &&
                // #6387, area splines next to null:
                !point.isCliff;
        }
        // Find control points
        if (doCurve(lastPoint) && doCurve(nextPoint)) {
            var lastX = lastPoint.plotX || 0, lastY = lastPoint.plotY || 0, nextX = nextPoint.plotX || 0, nextY = nextPoint.plotY || 0;
            var correction = 0;
            leftContX = (smoothing * plotX + lastX) / denom;
            leftContY = (smoothing * plotY + lastY) / denom;
            rightContX = (smoothing * plotX + nextX) / denom;
            rightContY = (smoothing * plotY + nextY) / denom;
            // Have the two control points make a straight line through main
            // point
            if (rightContX !== leftContX) { // #5016, division by zero
                correction = (((rightContY - leftContY) *
                    (rightContX - plotX)) /
                    (rightContX - leftContX) + plotY - rightContY);
            }
            leftContY += correction;
            rightContY += correction;
            // To prevent false extremes, check that control points are
            // between neighbouring points' y values
            if (leftContY > lastY && leftContY > plotY) {
                leftContY = Math.max(lastY, plotY);
                // Mirror of left control point
                rightContY = 2 * plotY - leftContY;
            }
            else if (leftContY < lastY && leftContY < plotY) {
                leftContY = Math.min(lastY, plotY);
                rightContY = 2 * plotY - leftContY;
            }
            if (rightContY > nextY && rightContY > plotY) {
                rightContY = Math.max(nextY, plotY);
                leftContY = 2 * plotY - rightContY;
            }
            else if (rightContY < nextY && rightContY < plotY) {
                rightContY = Math.min(nextY, plotY);
                leftContY = 2 * plotY - rightContY;
            }
            // Record for drawing in next point
            point.rightContX = rightContX;
            point.rightContY = rightContY;
            // Visualize control points for debugging
            /*
            if (leftContX) {
                this.chart.renderer
                    .circle(
                        leftContX + this.chart.plotLeft,
                        leftContY + this.chart.plotTop,
                        2
                    )
                    .attr({
                        stroke: 'red',
                        'stroke-width': 2,
                        fill: 'none',
                        zIndex: 9
                    })
                    .add();
                this.chart.renderer
                    .path([['M', leftContX + this.chart.plotLeft,
                        leftContY + this.chart.plotTop
                    ], ['L', plotX + this.chart.plotLeft,
                        plotY + this.chart.plotTop
                    ]])
                    .attr({
                        stroke: 'red',
                        'stroke-width': 2,
                        zIndex: 9
                    })
                    .add();
            }
            if (rightContX) {
                this.chart.renderer
                    .circle(
                        rightContX + this.chart.plotLeft,
                        rightContY + this.chart.plotTop,
                        2
                    )
                    .attr({
                        stroke: 'green',
                        'stroke-width': 2,
                        fill: 'none',
                        zIndex: 9
                    })
                    .add();
                this.chart.renderer
                    .path([[
                        'M', rightContX + this.chart.plotLeft,
                        rightContY + this.chart.plotTop
                    ], [
                        'L', plotX + this.chart.plotLeft,
                        plotY + this.chart.plotTop
                    ]])
                    .attr({
                        stroke: 'green',
                        'stroke-width': 2,
                        zIndex: 9
                    })
                    .add();
            }
            // */
            point.controlPoints = {
                low: [leftContX, leftContY],
                high: [rightContX, rightContY]
            };
        }
        var ret = [
            'C',
            pick(lastPoint.rightContX, lastPoint.plotX, 0),
            pick(lastPoint.rightContY, lastPoint.plotY, 0),
            pick(leftContX, plotX, 0),
            pick(leftContY, plotY, 0),
            plotX,
            plotY
        ];
        // Reset for updating series later
        lastPoint.rightContX = lastPoint.rightContY = void 0;
        return ret;
    };
    /* *
     *
     *  Static Properties
     *
     * */
    /**
     * A spline series is a special type of line series, where the segments
     * between the data points are smoothed.
     *
     * @sample {highcharts} highcharts/demo/spline-irregular-time/
     *         Spline chart
     * @sample {highstock} stock/demo/spline/
     *         Spline chart
     *
     * @extends      plotOptions.series
     * @excluding    step, boostThreshold, boostBlending
     * @product      highcharts highstock
     * @optionparent plotOptions.spline
     */
    SplineSeries.defaultOptions = merge(LineSeries.defaultOptions);
    return SplineSeries;
}(LineSeries));
SeriesRegistry.registerSeriesType('spline', SplineSeries);
/* *
 *
 *  Default Export
 *
 * */
export default SplineSeries;
/* *
 *
 *  API Options
 *
 * */
/**
 * A `spline` series. If the [type](#series.spline.type) option is
 * not specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.spline
 * @excluding dataParser, dataURL, step, boostThreshold, boostBlending
 * @product   highcharts highstock
 * @apioption series.spline
 */
/**
 * An array of data points for the series. For the `spline` series type,
 * points can be given in the following ways:
 *
 * 1. An array of numerical values. In this case, the numerical values will be
 *    interpreted as `y` options. The `x` values will be automatically
 *    calculated, either starting at 0 and incremented by 1, or from
 *    `pointStart` and `pointInterval` given in the series options. If the axis
 *    has categories, these will be used. Example:
 *    ```js
 *    data: [0, 5, 3, 5]
 *    ```
 *
 * 2. An array of arrays with 2 values. In this case, the values correspond to
 *    `x,y`. If the first value is a string, it is applied as the name of the
 *    point, and the `x` value is inferred.
 *    ```js
 *    data: [
 *        [0, 9],
 *        [1, 2],
 *        [2, 8]
 *    ]
 *    ```
 *
 * 3. An array of objects with named values. The following snippet shows only a
 *    few settings, see the complete options set below. If the total number of
 *    data points exceeds the series'
 *    [turboThreshold](#series.spline.turboThreshold),
 *    this option is not available.
 *    ```js
 *    data: [{
 *        x: 1,
 *        y: 9,
 *        name: "Point2",
 *        color: "#00FF00"
 *    }, {
 *        x: 1,
 *        y: 0,
 *        name: "Point1",
 *        color: "#FF00FF"
 *    }]
 *    ```
 *
 * @sample {highcharts} highcharts/chart/reflow-true/
 *         Numerical values
 * @sample {highcharts} highcharts/series/data-array-of-arrays/
 *         Arrays of numeric x and y
 * @sample {highcharts} highcharts/series/data-array-of-arrays-datetime/
 *         Arrays of datetime x and y
 * @sample {highcharts} highcharts/series/data-array-of-name-value/
 *         Arrays of point.name and y
 * @sample {highcharts} highcharts/series/data-array-of-objects/
 *         Config objects
 *
 * @type      {Array<number|Array<(number|string),(number|null)>|null|*>}
 * @extends   series.line.data
 * @product   highcharts highstock
 * @apioption series.spline.data
 */
''; // Adds doclets above intro transpiled
