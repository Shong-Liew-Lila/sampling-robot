/* *
 *
 *  (c) 2009-2025 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */
'use strict';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/* *
 *
 *  Imports
 *
 * */
import FormulaParser from './FormulaParser.js';
import FormulaProcessor from './FormulaProcessor.js';
import FormulaType from './FormulaTypes.js';
import './Functions/ABS.js';
import './Functions/AND.js';
import './Functions/AVERAGE.js';
import './Functions/AVERAGEA.js';
import './Functions/COUNT.js';
import './Functions/COUNTA.js';
import './Functions/IF.js';
import './Functions/ISNA.js';
import './Functions/MAX.js';
import './Functions/MEDIAN.js';
import './Functions/MIN.js';
import './Functions/MOD.js';
import './Functions/MODE.js';
import './Functions/NOT.js';
import './Functions/OR.js';
import './Functions/PRODUCT.js';
import './Functions/SUM.js';
import './Functions/XOR.js';
/* *
 *
 *  Default Export
 *
 * */
/**
 * Formula engine to make use of spreadsheet formula strings.
 * @internal
 */
var Formula = __assign(__assign(__assign({}, FormulaParser), FormulaProcessor), FormulaType);
export default Formula;
