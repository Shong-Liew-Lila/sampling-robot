/**
 * @license Highcharts JS v@product.version@ (@product.date@)
 * @module highcharts/modules/xrange
 * @requires highcharts
 *
 * X-range series
 *
 * (c) 2010-2025 Torstein Honsi, Lars A. V. Cabrera
 *
 * License: www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import XRangeSeries from '../../Series/XRange/XRangeSeries.js';
var G = Highcharts;
XRangeSeries.compose(G.Axis);
export default Highcharts;
