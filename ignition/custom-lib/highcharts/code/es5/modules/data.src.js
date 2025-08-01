/**
 * @license Highcharts JS v12.2.0 (2025-04-07)
 * @module highcharts/modules/data
 * @requires highcharts
 *
 * Data module
 *
 * (c) 2012-2025 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("highcharts"), require("highcharts")["Axis"], require("highcharts")["Chart"], require("highcharts")["Point"], require("highcharts")["SeriesRegistry"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/modules/data", [["highcharts/highcharts"], ["highcharts/highcharts","Axis"], ["highcharts/highcharts","Chart"], ["highcharts/highcharts","Point"], ["highcharts/highcharts","SeriesRegistry"]], factory);
	else if(typeof exports === 'object')
		exports["highcharts/modules/data"] = factory(require("highcharts"), require("highcharts")["Axis"], require("highcharts")["Chart"], require("highcharts")["Point"], require("highcharts")["SeriesRegistry"]);
	else
		root["Highcharts"] = factory(root["Highcharts"], root["Highcharts"]["Axis"], root["Highcharts"]["Chart"], root["Highcharts"]["Point"], root["Highcharts"]["SeriesRegistry"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__944__, __WEBPACK_EXTERNAL_MODULE__532__, __WEBPACK_EXTERNAL_MODULE__960__, __WEBPACK_EXTERNAL_MODULE__260__, __WEBPACK_EXTERNAL_MODULE__512__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 260:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__260__;

/***/ }),

/***/ 512:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__512__;

/***/ }),

/***/ 532:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__532__;

/***/ }),

/***/ 944:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__944__;

/***/ }),

/***/ 960:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__960__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ data_src; }
});

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts"],"commonjs":["highcharts"],"commonjs2":["highcharts"],"root":["Highcharts"]}
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_ = __webpack_require__(944);
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default = /*#__PURE__*/__webpack_require__.n(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_);
;// ./code/es5/es-modules/Core/HttpUtilities.js
/* *
 *
 *  (c) 2010-2025 Christer Vasseng, Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

var __assign = (undefined && undefined.__assign) || function () {
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

var win = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).win;

var discardElement = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).discardElement, objectEach = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).objectEach;
/* *
 *
 *  Functions
 *
 * */
/**
 * Perform an Ajax call.
 *
 * @function Highcharts.ajax
 *
 * @param {Highcharts.AjaxSettingsObject} settings
 *        The Ajax settings to use.
 *
 * @return {false|undefined}
 *         Returns false, if error occurred.
 */
function ajax(settings) {
    var _a;
    var headers = {
            json: 'application/json',
            xml: 'application/xml',
            text: 'text/plain',
            octet: 'application/octet-stream'
        },
        r = new XMLHttpRequest();
    /**
     * Private error handler.
     * @private
     * @param {XMLHttpRequest} xhr
     * Internal request object.
     * @param {string|Error} err
     * Occurred error.
     */
    function handleError(xhr, err) {
        if (settings.error) {
            settings.error(xhr, err);
        }
        else {
            // @todo Maybe emit a highcharts error event here
        }
    }
    if (!settings.url) {
        return false;
    }
    r.open((settings.type || 'get').toUpperCase(), settings.url, true);
    if (!((_a = settings.headers) === null || _a === void 0 ? void 0 : _a['Content-Type'])) {
        r.setRequestHeader('Content-Type', headers[settings.dataType || 'json'] || headers.text);
    }
    objectEach(settings.headers, function (val, key) {
        r.setRequestHeader(key, val);
    });
    if (settings.responseType) {
        r.responseType = settings.responseType;
    }
    // @todo lacking timeout handling
    r.onreadystatechange = function () {
        var _a;
        var res;
        if (r.readyState === 4) {
            if (r.status === 200) {
                if (settings.responseType !== 'blob') {
                    res = r.responseText;
                    if (settings.dataType === 'json') {
                        try {
                            res = JSON.parse(res);
                        }
                        catch (e) {
                            if (e instanceof Error) {
                                return handleError(r, e);
                            }
                        }
                    }
                }
                return (_a = settings.success) === null || _a === void 0 ? void 0 : _a.call(settings, res, r);
            }
            handleError(r, r.responseText);
        }
    };
    if (settings.data && typeof settings.data !== 'string') {
        settings.data = JSON.stringify(settings.data);
    }
    r.send(settings.data);
}
/**
 * Get a JSON resource over XHR, also supporting CORS without preflight.
 *
 * @function Highcharts.getJSON
 * @param {string} url
 *        The URL to load.
 * @param {Function} success
 *        The success callback. For error handling, use the `Highcharts.ajax`
 *        function instead.
 */
function getJSON(url, success) {
    HttpUtilities.ajax({
        url: url,
        success: success,
        dataType: 'json',
        headers: {
            // Override the Content-Type to avoid preflight problems with CORS
            // in the Highcharts demos
            'Content-Type': 'text/plain'
        }
    });
}
/**
 * The post utility
 *
 * @private
 * @function Highcharts.post
 *
 * @param {string} url
 * Post URL
 *
 * @param {Object} data
 * Post data
 *
 * @param {RequestInit} [fetchOptions]
 * Additional attributes for the post request
 */
/**
 *
 */
function post(url, data, fetchOptions) {
    var formData = new win.FormData();
    // Add the data
    objectEach(data, function (val, name) {
        formData.append(name, val);
    });
    formData.append('b64', 'true');
    var filename = data.filename,
        type = data.type;
    return win.fetch(url, __assign({ method: 'POST', body: formData }, fetchOptions)).then(function (res) {
        if (res.ok) {
            res.text().then(function (text) {
                var link = document.createElement('a');
                link.href = "data:".concat(type, ";base64,").concat(text);
                link.download = filename;
                link.click();
                discardElement(link);
            });
        }
    });
}
/* *
 *
 *  Default Export
 *
 * */
var HttpUtilities = {
    ajax: ajax,
    getJSON: getJSON,
    post: post
};
/* harmony default export */ var Core_HttpUtilities = (HttpUtilities);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * @interface Highcharts.AjaxSettingsObject
 */ /**
* The payload to send.
*
* @name Highcharts.AjaxSettingsObject#data
* @type {string|Highcharts.Dictionary<any>|undefined}
*/ /**
* The data type expected.
* @name Highcharts.AjaxSettingsObject#dataType
* @type {"json"|"xml"|"text"|"octet"|undefined}
*/ /**
* Function to call on error.
* @name Highcharts.AjaxSettingsObject#error
* @type {Function|undefined}
*/ /**
* The headers; keyed on header name.
* @name Highcharts.AjaxSettingsObject#headers
* @type {Highcharts.Dictionary<string>|undefined}
*/ /**
* Function to call on success.
* @name Highcharts.AjaxSettingsObject#success
* @type {Function|undefined}
*/ /**
* The HTTP method to use. For example GET or POST.
* @name Highcharts.AjaxSettingsObject#type
* @type {string|undefined}
*/ /**
* The URL to call.
* @name Highcharts.AjaxSettingsObject#url
* @type {string}
*/
(''); // Keeps doclets above in JS file

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Axis"],"commonjs":["highcharts","Axis"],"commonjs2":["highcharts","Axis"],"root":["Highcharts","Axis"]}
var highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_ = __webpack_require__(532);
var highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_default = /*#__PURE__*/__webpack_require__.n(highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Chart"],"commonjs":["highcharts","Chart"],"commonjs2":["highcharts","Chart"],"root":["Highcharts","Chart"]}
var highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_ = __webpack_require__(960);
var highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_default = /*#__PURE__*/__webpack_require__.n(highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Point"],"commonjs":["highcharts","Point"],"commonjs2":["highcharts","Point"],"root":["Highcharts","Point"]}
var highcharts_Point_commonjs_highcharts_Point_commonjs2_highcharts_Point_root_Highcharts_Point_ = __webpack_require__(260);
var highcharts_Point_commonjs_highcharts_Point_commonjs2_highcharts_Point_root_Highcharts_Point_default = /*#__PURE__*/__webpack_require__.n(highcharts_Point_commonjs_highcharts_Point_commonjs2_highcharts_Point_root_Highcharts_Point_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","SeriesRegistry"],"commonjs":["highcharts","SeriesRegistry"],"commonjs2":["highcharts","SeriesRegistry"],"root":["Highcharts","SeriesRegistry"]}
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_ = __webpack_require__(512);
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_);
;// ./code/es5/es-modules/Extensions/Data.js
/* *
 *
 *  Data module
 *
 *  (c) 2012-2025 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */




var getOptions = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).getOptions;

var doc = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).doc;

var Data_ajax = Core_HttpUtilities.ajax;


var seriesTypes = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes;

var addEvent = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).addEvent, defined = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).defined, extend = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).extend, fireEvent = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).fireEvent, isNumber = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).isNumber, merge = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).merge, Data_objectEach = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).objectEach, pick = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).pick, splat = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).splat;
/* *
 *
 *  Functions
 *
 * */
/**
 * @private
 */
function getFreeIndexes(numberOfColumns, seriesBuilders) {
    var freeIndexes = [],
        freeIndexValues = [];
    var s,
        i,
        referencedIndexes;
    // Add all columns as free
    for (i = 0; i < numberOfColumns; i = i + 1) {
        freeIndexes.push(true);
    }
    // Loop all defined builders and remove their referenced columns
    for (s = 0; s < seriesBuilders.length; s = s + 1) {
        referencedIndexes = seriesBuilders[s].getReferencedColumnIndexes();
        for (i = 0; i < referencedIndexes.length; i = i + 1) {
            freeIndexes[referencedIndexes[i]] = false;
        }
    }
    // Collect the values for the free indexes
    for (i = 0; i < freeIndexes.length; i = i + 1) {
        if (freeIndexes[i]) {
            freeIndexValues.push(i);
        }
    }
    return freeIndexValues;
}
/**
 *
 */
function hasURLOption(options) {
    return Boolean(options &&
        (options.rowsURL || options.csvURL || options.columnsURL));
}
/* *
 *
 *  Class
 *
 * */
/**
 * The Data class
 *
 * @requires modules/data
 *
 * @class
 * @name Highcharts.Data
 *
 * @param {Highcharts.DataOptions} dataOptions
 *
 * @param {Highcharts.Options} [chartOptions]
 *
 * @param {Highcharts.Chart} [chart]
 */
var Data = /** @class */ (function () {
    /* *
     *
     *  Constructors
     *
     * */
    function Data(dataOptions, chartOptions, chart) {
        if (chartOptions === void 0) { chartOptions = {}; }
        this.rowsToColumns = Data.rowsToColumns; // Backwards compatibility
        /**
         * A collection of available date formats, extendable from the outside to
         * support custom date formats.
         *
         * @name Highcharts.Data#dateFormats
         * @type {Highcharts.Dictionary<Highcharts.DataDateFormatObject>}
         */
        this.dateFormats = {
            'YYYY/mm/dd': {
                regex: /^(\d{4})[\-\/\.](\d{1,2})[\-\/\.](\d{1,2})$/,
                parser: function (match) {
                    return (match ?
                        Date.UTC(+match[1], +match[2] - 1, +match[3]) :
                        NaN);
                }
            },
            'dd/mm/YYYY': {
                regex: /^(\d{1,2})[\-\/\.](\d{1,2})[\-\/\.](\d{4})$/,
                parser: function (match) {
                    return (match ?
                        Date.UTC(+match[3], +match[2] - 1, +match[1]) :
                        NaN);
                },
                alternative: 'mm/dd/YYYY' // Different format with the same regex
            },
            'mm/dd/YYYY': {
                regex: /^(\d{1,2})[\-\/\.](\d{1,2})[\-\/\.](\d{4})$/,
                parser: function (match) {
                    return (match ?
                        Date.UTC(+match[3], +match[1] - 1, +match[2]) :
                        NaN);
                }
            },
            'dd/mm/YY': {
                regex: /^(\d{1,2})[\-\/\.](\d{1,2})[\-\/\.](\d{2})$/,
                parser: function (match) {
                    if (!match) {
                        return NaN;
                    }
                    var d = new Date();
                    var year = +match[3];
                    if (year > (d.getFullYear() - 2000)) {
                        year += 1900;
                    }
                    else {
                        year += 2000;
                    }
                    return Date.UTC(year, +match[2] - 1, +match[1]);
                },
                alternative: 'mm/dd/YY' // Different format with the same regex
            },
            'mm/dd/YY': {
                regex: /^(\d{1,2})[\-\/\.](\d{1,2})[\-\/\.](\d{2})$/,
                parser: function (match) {
                    return (match ?
                        Date.UTC(+match[3] + 2000, +match[1] - 1, +match[2]) :
                        NaN);
                }
            }
        };
        this.chart = chart;
        this.chartOptions = chartOptions;
        this.options = dataOptions;
        this.rawColumns = [];
        this.init(dataOptions, chartOptions, chart);
    }
    /* *
     *
     *  Static Properties
     *
     * */
    /**
     * Creates a data object to parse data for a chart.
     *
     * @function Highcharts.data
     */
    Data.data = function (dataOptions, chartOptions, chart) {
        if (chartOptions === void 0) { chartOptions = {}; }
        return new Data(dataOptions, chartOptions, chart);
    };
    /**
     * Reorganize rows into columns.
     *
     * @function Highcharts.Data.rowsToColumns
     */
    Data.rowsToColumns = function (rows) {
        var row,
            rowsLength,
            col,
            colsLength,
            columns;
        if (rows) {
            columns = [];
            rowsLength = rows.length;
            for (row = 0; row < rowsLength; row++) {
                colsLength = rows[row].length;
                for (col = 0; col < colsLength; col++) {
                    if (!columns[col]) {
                        columns[col] = [];
                    }
                    columns[col][row] = rows[row][col];
                }
            }
        }
        return columns;
    };
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Initialize the Data object with the given options
     *
     * @private
     * @function Highcharts.Data#init
     */
    Data.prototype.init = function (dataOptions, chartOptions, chart) {
        var decimalPoint = dataOptions.decimalPoint,
            hasData;
        if (chartOptions) {
            this.chartOptions = chartOptions;
        }
        if (chart) {
            this.chart = chart;
        }
        if (decimalPoint !== '.' && decimalPoint !== ',') {
            decimalPoint = void 0;
        }
        this.options = dataOptions;
        this.columns = (dataOptions.columns ||
            this.rowsToColumns(dataOptions.rows) ||
            []);
        this.firstRowAsNames = pick(dataOptions.firstRowAsNames, this.firstRowAsNames, true);
        this.decimalRegex = (decimalPoint &&
            new RegExp('^(-?[0-9]+)' + decimalPoint + '([0-9]+)$'));
        // Always stop old polling when we have new options
        if (this.liveDataTimeout !== void 0) {
            clearTimeout(this.liveDataTimeout);
        }
        // This is a two-dimensional array holding the raw, trimmed string
        // values with the same organisation as the columns array. It makes it
        // possible for example to revert from interpreted timestamps to
        // string-based categories.
        this.rawColumns = [];
        // No need to parse or interpret anything
        if (this.columns.length) {
            this.dataFound();
            hasData = !hasURLOption(dataOptions);
        }
        if (!hasData) {
            // Fetch live data
            hasData = this.fetchLiveData();
        }
        if (!hasData) {
            // Parse a CSV string if options.csv is given. The parseCSV function
            // returns a columns array, if it has no length, we have no data
            hasData = Boolean(this.parseCSV().length);
        }
        if (!hasData) {
            // Parse a HTML table if options.table is given
            hasData = Boolean(this.parseTable().length);
        }
        if (!hasData) {
            // Parse a Google Spreadsheet
            hasData = this.parseGoogleSpreadsheet();
        }
        if (!hasData && dataOptions.afterComplete) {
            dataOptions.afterComplete(this);
        }
    };
    /**
     * Get the column distribution. For example, a line series takes a single
     * column for Y values. A range series takes two columns for low and high
     * values respectively, and an OHLC series takes four columns.
     *
     * @function Highcharts.Data#getColumnDistribution
     */
    Data.prototype.getColumnDistribution = function () {
        var _a,
            _b;
        var chartOptions = this.chartOptions,
            options = this.options,
            xColumns = [],
            getValueCount = function (type) {
                if (type === void 0) { type = 'line'; }
                return (seriesTypes[type].prototype.pointArrayMap || [0]).length;
        }, getPointArrayMap = function (type) {
            if (type === void 0) { type = 'line'; }
            return seriesTypes[type].prototype.pointArrayMap;
        }, globalType = (_a = chartOptions === null || chartOptions === void 0 ? void 0 : chartOptions.chart) === null || _a === void 0 ? void 0 : _a.type, individualCounts = [], seriesBuilders = [], 
        // If no series mapping is defined, check if the series array is
        // defined with types.
        seriesMapping = ((options === null || options === void 0 ? void 0 : options.seriesMapping) ||
            ((_b = chartOptions === null || chartOptions === void 0 ? void 0 : chartOptions.series) === null || _b === void 0 ? void 0 : _b.map(function () {
                return { x: 0 };
            })) ||
            []);
        var seriesIndex = 0;
        ((chartOptions === null || chartOptions === void 0 ? void 0 : chartOptions.series) || []).forEach(function (series) {
            individualCounts.push(getValueCount(series.type || globalType));
        });
        // Collect the x-column indexes from seriesMapping
        seriesMapping.forEach(function (mapping) {
            xColumns.push(mapping.x || 0);
        });
        // If there are no defined series with x-columns, use the first column
        // as x column
        if (xColumns.length === 0) {
            xColumns.push(0);
        }
        // Loop all seriesMappings and constructs SeriesBuilders from
        // the mapping options.
        seriesMapping.forEach(function (mapping) {
            var _a,
                _b;
            var builder = new SeriesBuilder(),
                numberOfValueColumnsNeeded = individualCounts[seriesIndex] ||
                    getValueCount(globalType),
                seriesArr = (_a = chartOptions === null || chartOptions === void 0 ? void 0 : chartOptions.series) !== null && _a !== void 0 ? _a : [],
                series = (_b = seriesArr[seriesIndex]) !== null && _b !== void 0 ? _b : {},
                defaultPointArrayMap = getPointArrayMap(series.type || globalType),
                pointArrayMap = defaultPointArrayMap !== null && defaultPointArrayMap !== void 0 ? defaultPointArrayMap : ['y'];
            if (
            // User-defined x.mapping
            defined(mapping.x) ||
                // All non cartesian don't need 'x'
                series.isCartesian ||
                // Except pie series:
                !defaultPointArrayMap) {
                // Add an x reader from the x property or from an undefined
                // column if the property is not set. It will then be auto
                // populated later.
                builder.addColumnReader(mapping.x, 'x');
            }
            // Add all column mappings
            Data_objectEach(mapping, function (val, name) {
                if (name !== 'x') {
                    builder.addColumnReader(val, name);
                }
            });
            // Add missing columns
            for (var i = 0; i < numberOfValueColumnsNeeded; i++) {
                if (!builder.hasReader(pointArrayMap[i])) {
                    // Create and add a column reader for the next free column
                    // index
                    builder.addColumnReader(void 0, pointArrayMap[i]);
                }
            }
            seriesBuilders.push(builder);
            seriesIndex++;
        });
        var globalPointArrayMap = getPointArrayMap(globalType);
        if (typeof globalPointArrayMap === 'undefined') {
            globalPointArrayMap = ['y'];
        }
        this.valueCount = {
            global: getValueCount(globalType),
            xColumns: xColumns,
            individual: individualCounts,
            seriesBuilders: seriesBuilders,
            globalPointArrayMap: globalPointArrayMap
        };
    };
    /**
     * When the data is parsed into columns, either by CSV, table, GS or direct
     * input, continue with other operations.
     *
     * @private
     * @function Highcharts.Data#dataFound
     */
    Data.prototype.dataFound = function () {
        if (this.options.switchRowsAndColumns) {
            this.columns = this.rowsToColumns(this.columns);
        }
        // Interpret the info about series and columns
        this.getColumnDistribution();
        // Interpret the values into right types
        this.parseTypes();
        // Handle columns if a handleColumns callback is given
        if (this.parsed() !== false) {
            // Complete if a complete callback is given
            this.complete();
        }
    };
    /**
     * Parse a CSV input string
     *
     * @function Highcharts.Data#parseCSV
     */
    Data.prototype.parseCSV = function (inOptions) {
        var self = this, columns = this.columns = [], options = inOptions || this.options, startColumn = options.startColumn || 0, endColumn = options.endColumn || Number.MAX_VALUE, dataTypes = [], 
            // We count potential delimiters in the prepass, and use the
            // result as the basis of half-intelligent guesses.
            potDelimiters = {
                ',': 0,
                ';': 0,
                '\t': 0
            };
        var csv = options.csv,
            startRow = options.startRow || 0,
            endRow = options.endRow || Number.MAX_VALUE,
            itemDelimiter,
            lines,
            rowIt = 0;
        /*
            This implementation is quite verbose. It will be shortened once
            it's stable and passes all the test.

            It's also not written with speed in mind, instead everything is
            very segregated, and there a several redundant loops.
            This is to make it easier to stabilize the code initially.

            We do a pre-pass on the first 4 rows to make some intelligent
            guesses on the set. Guessed delimiters are in this pass counted.

            Auto detecting delimiters
                - If we meet a quoted string, the next symbol afterwards
                  (that's not \s, \t) is the delimiter
                - If we meet a date, the next symbol afterwards is the delimiter

            Date formats
                - If we meet a column with date formats, check all of them to
                  see if one of the potential months crossing 12. If it does,
                  we now know the format

            It would make things easier to guess the delimiter before
            doing the actual parsing.

            General rules:
                - Quoting is allowed, e.g: "Col 1",123,321
                - Quoting is optional, e.g.: Col1,123,321
                - Double quoting is escaping, e.g. "Col ""Hello world""",123
                - Spaces are considered part of the data: Col1 ,123
                - New line is always the row delimiter
                - Potential column delimiters are , ; \t
                - First row may optionally contain headers
                - The last row may or may not have a row delimiter
                - Comments are optionally supported, in which case the comment
                  must start at the first column, and the rest of the line will
                  be ignored
        */
        /**
         * Parse a single row.
         * @private
         */
        function parseRow(columnStr, rowNumber, noAdd, callbacks) {
            var i = 0, c = '', cl = '', cn = '', token = '', actualColumn = 0, column = 0;
            /**
             * @private
             */
            function read(j) {
                c = columnStr[j];
                cl = columnStr[j - 1];
                cn = columnStr[j + 1];
            }
            /**
             * @private
             */
            function pushType(type) {
                if (dataTypes.length < column + 1) {
                    dataTypes.push([type]);
                }
                if (dataTypes[column][dataTypes[column].length - 1] !== type) {
                    dataTypes[column].push(type);
                }
            }
            /**
             * @private
             */
            function push() {
                if (startColumn > actualColumn || actualColumn > endColumn) {
                    // Skip this column, but increment the column count (#7272)
                    ++actualColumn;
                    token = '';
                    return;
                }
                if (!options.columnTypes) {
                    if (!isNaN(parseFloat(token)) && isFinite(token)) {
                        token = parseFloat(token);
                        pushType('number');
                    }
                    else if (!isNaN(Date.parse(token))) {
                        token = token.replace(/\//g, '-');
                        pushType('date');
                    }
                    else {
                        pushType('string');
                    }
                }
                if (columns.length < column + 1) {
                    columns.push([]);
                }
                if (!noAdd) {
                    // Don't push - if there's a varying amount of columns
                    // for each row, pushing will skew everything down n slots
                    columns[column][rowNumber] = token;
                }
                token = '';
                ++column;
                ++actualColumn;
            }
            if (!columnStr.trim().length) {
                return;
            }
            if (columnStr.trim()[0] === '#') {
                return;
            }
            for (; i < columnStr.length; i++) {
                read(i);
                if (c === '"') {
                    read(++i);
                    while (i < columnStr.length) {
                        if (c === '"' && cl !== '"' && cn !== '"') {
                            break;
                        }
                        if (c !== '"' || (c === '"' && cl !== '"')) {
                            token += c;
                        }
                        read(++i);
                    }
                    // Perform "plugin" handling
                }
                else if (callbacks === null || callbacks === void 0 ? void 0 : callbacks[c]) {
                    if (callbacks[c](c, token)) {
                        push();
                    }
                    // Delimiter - push current token
                }
                else if (c === itemDelimiter) {
                    push();
                    // Actual column data
                }
                else {
                    token += c;
                }
            }
            push();
        }
        /**
         * Attempt to guess the delimiter. We do a separate parse pass here
         * because we need to count potential delimiters softly without making
         * any assumptions.
         * @private
         */
        function guessDelimiter(lines) {
            var points = 0,
                commas = 0,
                guessed = false;
            lines.some(function (columnStr, i) {
                var inStr = false,
                    c,
                    cn,
                    cl,
                    token = '';
                // We should be able to detect dateformats within 13 rows
                if (i > 13) {
                    return true;
                }
                for (var j = 0; j < columnStr.length; j++) {
                    c = columnStr[j];
                    cn = columnStr[j + 1];
                    cl = columnStr[j - 1];
                    if (c === '#') {
                        // Skip the rest of the line - it's a comment
                        return;
                    }
                    if (c === '"') {
                        if (inStr) {
                            if (cl !== '"' && cn !== '"') {
                                while (cn === ' ' && j < columnStr.length) {
                                    cn = columnStr[++j];
                                }
                                // After parsing a string, the next non-blank
                                // should be a delimiter if the CSV is properly
                                // formed.
                                if (typeof potDelimiters[cn] !== 'undefined') {
                                    potDelimiters[cn]++;
                                }
                                inStr = false;
                            }
                        }
                        else {
                            inStr = true;
                        }
                    }
                    else if (typeof potDelimiters[c] !== 'undefined') {
                        token = token.trim();
                        if (!isNaN(Date.parse(token))) {
                            potDelimiters[c]++;
                        }
                        else if (isNaN(token) ||
                            !isFinite(token)) {
                            potDelimiters[c]++;
                        }
                        token = '';
                    }
                    else {
                        token += c;
                    }
                    if (c === ',') {
                        commas++;
                    }
                    if (c === '.') {
                        points++;
                    }
                }
            });
            // Count the potential delimiters.
            // This could be improved by checking if the number of delimiters
            // equals the number of columns - 1
            if (potDelimiters[';'] > potDelimiters[',']) {
                guessed = ';';
            }
            else if (potDelimiters[','] > potDelimiters[';']) {
                guessed = ',';
            }
            else {
                // No good guess could be made..
                guessed = ',';
            }
            // Try to deduce the decimal point if it's not explicitly set.
            // If both commas or points is > 0 there is likely an issue
            if (!options.decimalPoint) {
                if (points > commas) {
                    options.decimalPoint = '.';
                }
                else {
                    options.decimalPoint = ',';
                }
                // Apply a new decimal regex based on the presumed decimal sep.
                self.decimalRegex = new RegExp('^(-?[0-9]+)' +
                    options.decimalPoint +
                    '([0-9]+)$');
            }
            return guessed;
        }
        /**
         * Tries to guess the date format
         *  - Check if either month candidate exceeds 12
         *  - Check if year is missing (use current year)
         *  - Check if a shortened year format is used (e.g. 1/1/99)
         *  - If no guess can be made, the user must be prompted
         * data is the data to deduce a format based on
         * @private
         */
        function deduceDateFormat(data, limit) {
            var _a;
            var format = 'YYYY/mm/dd', stable = [], max = [];
            var thing,
                guessedFormat = [],
                calculatedFormat,
                i = 0,
                madeDeduction = false,
                j;
            if (!limit || limit > data.length) {
                limit = data.length;
            }
            for (; i < limit; i++) {
                if (typeof data[i] !== 'undefined' &&
                    ((_a = data[i]) === null || _a === void 0 ? void 0 : _a.length)) {
                    thing = data[i]
                        .trim()
                        .replace(/\//g, ' ')
                        .replace(/\-/g, ' ')
                        .replace(/\./g, ' ')
                        .split(' ');
                    guessedFormat = [
                        '',
                        '',
                        ''
                    ];
                    for (j = 0; j < thing.length; j++) {
                        if (j < guessedFormat.length) {
                            thing[j] = parseInt(thing[j], 10);
                            if (thing[j]) {
                                max[j] = (!max[j] || max[j] < thing[j]) ?
                                    thing[j] :
                                    max[j];
                                if (typeof stable[j] !== 'undefined') {
                                    if (stable[j] !== thing[j]) {
                                        stable[j] = false;
                                    }
                                }
                                else {
                                    stable[j] = thing[j];
                                }
                                if (thing[j] > 31) {
                                    if (thing[j] < 100) {
                                        guessedFormat[j] = 'YY';
                                    }
                                    else {
                                        guessedFormat[j] = 'YYYY';
                                    }
                                }
                                else if (thing[j] > 12 &&
                                    thing[j] <= 31) {
                                    guessedFormat[j] = 'dd';
                                    madeDeduction = true;
                                }
                                else if (!guessedFormat[j].length) {
                                    guessedFormat[j] = 'mm';
                                }
                            }
                        }
                    }
                }
            }
            if (madeDeduction) {
                // This handles a few edge cases with hard to guess dates
                for (j = 0; j < stable.length; j++) {
                    if (stable[j] !== false) {
                        if (max[j] > 12 &&
                            guessedFormat[j] !== 'YY' &&
                            guessedFormat[j] !== 'YYYY') {
                            guessedFormat[j] = 'YY';
                        }
                    }
                    else if (max[j] > 12 && guessedFormat[j] === 'mm') {
                        guessedFormat[j] = 'dd';
                    }
                }
                // If the middle one is dd, and the last one is dd,
                // the last should likely be year.
                if (guessedFormat.length === 3 &&
                    guessedFormat[1] === 'dd' &&
                    guessedFormat[2] === 'dd') {
                    guessedFormat[2] = 'YY';
                }
                calculatedFormat = guessedFormat.join('/');
                // If the calculated format is not valid, we need to present an
                // error.
                if (!(options.dateFormats || self.dateFormats)[calculatedFormat]) {
                    // This should emit an event instead
                    fireEvent(self, 'deduceDateFailed');
                    return format;
                }
                return calculatedFormat;
            }
            return format;
        }
        if (csv && options.beforeParse) {
            csv = options.beforeParse.call(this, csv);
        }
        if (csv) {
            lines = csv
                .replace(/\r\n/g, '\n') // Unix
                .replace(/\r/g, '\n') // Mac
                .split(options.lineDelimiter || '\n');
            if (!startRow || startRow < 0) {
                startRow = 0;
            }
            if (!endRow || endRow >= lines.length) {
                endRow = lines.length - 1;
            }
            if (options.itemDelimiter) {
                itemDelimiter = options.itemDelimiter;
            }
            else {
                itemDelimiter = guessDelimiter(lines);
            }
            var offset = 0;
            for (rowIt = startRow; rowIt <= endRow; rowIt++) {
                if (lines[rowIt][0] === '#') {
                    offset++;
                }
                else {
                    parseRow(lines[rowIt], rowIt - startRow - offset);
                }
            }
            if ((!options.columnTypes || options.columnTypes.length === 0) &&
                dataTypes.length &&
                dataTypes[0].length &&
                dataTypes[0][1] === 'date' &&
                !options.dateFormat) {
                options.dateFormat = deduceDateFormat(columns[0]);
            }
            /// lines.forEach(function (line, rowNo) {
            //    let trimmed = self.trim(line),
            //        isComment = trimmed.indexOf('#') === 0,
            //        isBlank = trimmed === '',
            //        items;
            //    if (
            //        rowNo >= startRow &&
            //        rowNo <= endRow &&
            //        !isComment && !isBlank
            //    ) {
            //        items = line.split(itemDelimiter);
            //        items.forEach(function (item, colNo) {
            //            if (colNo >= startColumn && colNo <= endColumn) {
            //                if (!columns[colNo - startColumn]) {
            //                    columns[colNo - startColumn] = [];
            //                }
            //                columns[colNo - startColumn][activeRowNo] = item;
            //            }
            //        });
            //        activeRowNo += 1;
            //    }
            // });
            //
            this.dataFound();
        }
        return columns;
    };
    /**
     * Parse a HTML table
     *
     * @function Highcharts.Data#parseTable
     */
    Data.prototype.parseTable = function () {
        var options = this.options,
            columns = this.columns || [],
            startRow = options.startRow || 0,
            endRow = options.endRow || Number.MAX_VALUE,
            startColumn = options.startColumn || 0,
            endColumn = options.endColumn || Number.MAX_VALUE;
        if (options.table) {
            var table = options.table;
            if (typeof table === 'string') {
                table = doc.getElementById(table);
            }
            [].forEach.call(table.getElementsByTagName('tr'), function (tr, rowNo) {
                if (rowNo >= startRow && rowNo <= endRow) {
                    [].forEach.call(tr.children, function (item, colNo) {
                        var row = columns[colNo - startColumn];
                        var i = 1;
                        if ((item.tagName === 'TD' ||
                            item.tagName === 'TH') &&
                            colNo >= startColumn &&
                            colNo <= endColumn) {
                            if (!columns[colNo - startColumn]) {
                                columns[colNo - startColumn] = [];
                            }
                            columns[colNo - startColumn][rowNo - startRow] = item.innerHTML;
                            // Loop over all previous indices and make sure
                            // they are nulls, not undefined.
                            while (rowNo - startRow >= i &&
                                row[rowNo - startRow - i] === void 0) {
                                row[rowNo - startRow - i] = null;
                                i++;
                            }
                        }
                    });
                }
            });
            this.dataFound(); // Continue
        }
        return columns;
    };
    /**
     * Fetch or refetch live data
     *
     * @function Highcharts.Data#fetchLiveData
     *
     * @return {boolean}
     *         The URLs that were tried can be found in the options
     */
    Data.prototype.fetchLiveData = function () {
        var data = this,
            chart = this.chart,
            options = this.options,
            maxRetries = 3,
            pollingEnabled = options.enablePolling,
            originalOptions = merge(options);
        var currentRetries = 0,
            updateIntervalMs = (options.dataRefreshRate || 2) * 1000;
        if (!hasURLOption(options)) {
            return false;
        }
        // Do not allow polling more than once a second
        if (updateIntervalMs < 1000) {
            updateIntervalMs = 1000;
        }
        delete options.csvURL;
        delete options.rowsURL;
        delete options.columnsURL;
        /**
         * @private
         */
        function performFetch(initialFetch) {
            /**
             * Helper function for doing the data fetch + polling.
             * @private
             */
            function request(url, done, tp) {
                if (!url ||
                    !/^(http|\/|\.\/|\.\.\/)/.test(url)) {
                    if (url && options.error) {
                        options.error('Invalid URL');
                    }
                    return false;
                }
                if (initialFetch) {
                    clearTimeout(data.liveDataTimeout);
                    chart.liveDataURL = url;
                }
                /**
                 * @private
                 */
                function poll() {
                    // Poll
                    if (pollingEnabled && chart.liveDataURL === url) {
                        // We need to stop doing this if the URL has changed
                        data.liveDataTimeout =
                            setTimeout(performFetch, updateIntervalMs);
                    }
                }
                Data_ajax({
                    url: url,
                    dataType: tp || 'json',
                    success: function (res) {
                        if (chart === null || chart === void 0 ? void 0 : chart.series) {
                            done(res);
                        }
                        poll();
                    },
                    error: function (xhr, text) {
                        var _a;
                        if (++currentRetries < maxRetries) {
                            poll();
                        }
                        return (_a = options.error) === null || _a === void 0 ? void 0 : _a.call(options, text, xhr);
                    }
                });
                return true;
            }
            if (!request(originalOptions.csvURL, function (res) {
                chart.update({
                    data: {
                        csv: res
                    }
                });
            }, 'text')) {
                if (!request(originalOptions.rowsURL, function (res) {
                    chart.update({
                        data: {
                            rows: res
                        }
                    });
                })) {
                    request(originalOptions.columnsURL, function (res) {
                        chart.update({
                            data: {
                                columns: res
                            }
                        });
                    });
                }
            }
        }
        performFetch(true);
        return hasURLOption(options);
    };
    /**
     * Parse a Google spreadsheet.
     *
     * @function Highcharts.Data#parseGoogleSpreadsheet
     *
     * @return {boolean}
     *         Always returns false, because it is an intermediate fetch.
     */
    Data.prototype.parseGoogleSpreadsheet = function () {
        var data = this,
            options = this.options,
            googleSpreadsheetKey = options.googleSpreadsheetKey,
            chart = this.chart,
            refreshRate = Math.max((options.dataRefreshRate || 2) * 1000, 4000);
        /**
         * Form the `values` field after range settings, unless the
         * googleSpreadsheetRange option is set.
         */
        var getRange = function () {
                if (options.googleSpreadsheetRange) {
                    return options.googleSpreadsheetRange;
            }
            var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var start = (alphabet.charAt(options.startColumn || 0) || 'A') +
                    ((options.startRow || 0) + 1);
            var end = alphabet.charAt(pick(options.endColumn, -1)) || 'ZZ';
            if (defined(options.endRow)) {
                end += options.endRow + 1;
            }
            return "" + start + ":".concat(end);
        };
        /**
         * Fetch the actual spreadsheet using XMLHttpRequest.
         * @private
         */
        function fetchSheet(fn) {
            var url = [
                    'https://sheets.googleapis.com/v4/spreadsheets',
                    googleSpreadsheetKey,
                    'values',
                    getRange(),
                    '?alt=json&' +
                        'majorDimension=COLUMNS&' +
                        'valueRenderOption=UNFORMATTED_VALUE&' +
                        'dateTimeRenderOption=FORMATTED_STRING&' +
                        'key=' + options.googleAPIKey
                ].join('/');
            Data_ajax({
                url: url,
                dataType: 'json',
                success: function (json) {
                    fn(json);
                    if (options.enablePolling) {
                        data.liveDataTimeout = setTimeout(function () {
                            fetchSheet(fn);
                        }, refreshRate);
                    }
                },
                error: function (xhr, text) {
                    var _a;
                    return (_a = options.error) === null || _a === void 0 ? void 0 : _a.call(options, text, xhr);
                }
            });
        }
        if (googleSpreadsheetKey) {
            delete options.googleSpreadsheetKey;
            fetchSheet(function (json) {
                // Prepare the data from the spreadsheet
                var columns = json.values;
                if (!columns || columns.length === 0) {
                    return false;
                }
                // Find the maximum row count in order to extend shorter columns
                var rowCount = columns.reduce(function (rowCount,
                    column) { return Math.max(rowCount,
                    column.length); }, 0);
                // Insert null for empty spreadsheet cells (#5298)
                columns.forEach(function (column) {
                    for (var i = 0; i < rowCount; i++) {
                        if (typeof column[i] === 'undefined') {
                            column[i] = null;
                        }
                    }
                });
                if (chart === null || chart === void 0 ? void 0 : chart.series) {
                    chart.update({
                        data: {
                            columns: columns
                        }
                    });
                }
                else { // #8245
                    data.columns = columns;
                    data.dataFound();
                }
            });
        }
        // This is an intermediate fetch, so always return false.
        return false;
    };
    /**
     * Trim a string from whitespaces.
     *
     * @function Highcharts.Data#trim
     *
     * @param {string} str
     *        String to trim
     *
     * @param {boolean} [inside=false]
     *        Remove all spaces between numbers.
     *
     * @return {string}
     *         Trimed string
     */
    Data.prototype.trim = function (str, inside) {
        if (typeof str === 'string') {
            str = str.replace(/^\s+|\s+$/g, '');
            // Clear white space inside the string, like thousands separators
            if (inside && /[\d\s]+/.test(str)) {
                str = str.replace(/\s/g, '');
            }
            if (this.decimalRegex) {
                str = str.replace(this.decimalRegex, '$1.$2');
            }
        }
        return str;
    };
    /**
     * Parse numeric cells in to number types and date types in to true dates.
     *
     * @function Highcharts.Data#parseTypes
     */
    Data.prototype.parseTypes = function () {
        var columns = this.columns || [];
        var col = columns.length;
        while (col--) {
            this.parseColumn(columns[col], col);
        }
    };
    /**
     * Parse a single column. Set properties like .isDatetime and .isNumeric.
     *
     * @function Highcharts.Data#parseColumn
     *
     * @param {Array<Highcharts.DataValueType>} column
     *        Column to parse
     *
     * @param {number} col
     *        Column index
     */
    Data.prototype.parseColumn = function (column, col) {
        var _a;
        var rawColumns = this.rawColumns,
            columns = this.columns = this.columns || [],
            firstRowAsNames = this.firstRowAsNames,
            isXColumn = ((_a = this.valueCount) === null || _a === void 0 ? void 0 : _a.xColumns.indexOf(col)) !== -1,
            backup = [],
            chartOptions = this.chartOptions,
            columnTypes = this.options.columnTypes || [],
            columnType = columnTypes[col],
            forceCategory = (isXColumn &&
                ((chartOptions === null || chartOptions === void 0 ? void 0 : chartOptions.xAxis) &&
                    splat(chartOptions.xAxis)[0].type === 'category')) || columnType === 'string',
            columnHasName = defined(column.name);
        var row = column.length,
            val,
            floatVal,
            trimVal,
            trimInsideVal,
            dateVal,
            diff,
            descending;
        if (!rawColumns[col]) {
            rawColumns[col] = [];
        }
        while (row--) {
            val = backup[row] || column[row];
            trimVal = this.trim(val);
            trimInsideVal = this.trim(val, true);
            floatVal = parseFloat(trimInsideVal);
            // Set it the first time
            if (typeof rawColumns[col][row] === 'undefined') {
                rawColumns[col][row] = trimVal;
            }
            // Disable number or date parsing by setting the X axis type to
            // category
            if (forceCategory ||
                (row === 0 && firstRowAsNames && !columnHasName)) {
                column[row] = '' + trimVal;
            }
            else if (+trimInsideVal === floatVal) { // Is numeric
                column[row] = floatVal;
                // If the number is greater than milliseconds in a year, assume
                // datetime
                if (floatVal > 365 * 24 * 3600 * 1000 &&
                    columnType !== 'float') {
                    column.isDatetime = true;
                }
                else {
                    column.isNumeric = true;
                }
                if (typeof column[row + 1] !== 'undefined') {
                    descending = floatVal > column[row + 1];
                }
                // String, continue to determine if it is a date string or really a
                // string
            }
            else {
                if (trimVal === null || trimVal === void 0 ? void 0 : trimVal.length) {
                    dateVal = this.parseDate(val);
                }
                // Only allow parsing of dates if this column is an x-column
                if (isXColumn && isNumber(dateVal) && columnType !== 'float') {
                    backup[row] = val;
                    column[row] = dateVal;
                    column.isDatetime = true;
                    // Check if the dates are uniformly descending or ascending.
                    // If they are not, chances are that they are a different
                    // time format, so check for alternative.
                    if (typeof column[row + 1] !== 'undefined') {
                        diff = dateVal > column[row + 1];
                        if (diff !== descending &&
                            typeof descending !== 'undefined') {
                            if (this.alternativeFormat) {
                                this.dateFormat = this.alternativeFormat;
                                row = column.length;
                                this.alternativeFormat =
                                    this.dateFormats[this.dateFormat]
                                        .alternative;
                            }
                            else {
                                column.unsorted = true;
                            }
                        }
                        descending = diff;
                    }
                }
                else { // String
                    column[row] = trimVal === '' ? null : trimVal;
                    if (row !== 0 &&
                        (column.isDatetime ||
                            column.isNumeric)) {
                        column.mixed = true;
                    }
                }
            }
        }
        // If strings are intermixed with numbers or dates in a parsed column,
        // it is an indication that parsing went wrong or the data was not
        // intended to display as numbers or dates and parsing is too
        // aggressive. Fall back to categories. Demonstrated in the
        // highcharts/demo/column-drilldown sample.
        if (isXColumn && column.mixed) {
            columns[col] = rawColumns[col];
        }
        // If the 0 column is date or number and descending, reverse all
        // columns.
        if (isXColumn && descending && this.options.sort) {
            for (col = 0; col < columns.length; col++) {
                columns[col].reverse();
                if (firstRowAsNames) {
                    var poppedColumn = columns[col].pop();
                    if (poppedColumn) {
                        columns[col].unshift(poppedColumn);
                    }
                }
            }
        }
    };
    /**
     * Parse a date and return it as a number. Overridable through
     * `options.parseDate`.
     *
     * @function Highcharts.Data#parseDate
     */
    Data.prototype.parseDate = function (val) {
        var parseDate = this.options.parseDate;
        var ret,
            key,
            format,
            dateFormat = this.options.dateFormat || this.dateFormat,
            match;
        if (parseDate) {
            ret = parseDate(val);
        }
        else if (typeof val === 'string') {
            // Auto-detect the date format the first time
            if (!dateFormat) {
                for (key in this.dateFormats) { // eslint-disable-line guard-for-in
                    format = this.dateFormats[key];
                    match = val.match(format.regex);
                    if (match) {
                        this.dateFormat = dateFormat = key;
                        this.alternativeFormat = format.alternative;
                        ret = format.parser(match);
                        break;
                    }
                }
                // Next time, use the one previously found
            }
            else {
                format = this.dateFormats[dateFormat];
                if (!format) {
                    // The selected format is invalid
                    format = this.dateFormats['YYYY/mm/dd'];
                }
                match = val.match(format.regex);
                if (match) {
                    ret = format.parser(match);
                }
            }
            // Fall back to Date.parse
            if (!match) {
                if (val.match(/:.+(GMT|UTC|[Z+\-])/)) {
                    val = val
                        .replace(/\s*(?:GMT|UTC)?([+\-])(\d\d)(\d\d)$/, '$1$2:$3')
                        .replace(/(?:\s+|GMT|UTC)([+\-])/, '$1')
                        .replace(/(\d)\s*(?:GMT|UTC|Z)$/, '$1+00:00');
                }
                match = Date.parse(val);
                // External tools like Date.js and MooTools extend Date object
                // and return a date.
                if (typeof match === 'object' &&
                    match !== null &&
                    match.getTime) {
                    ret = (match.getTime() -
                        match.getTimezoneOffset() *
                            60000);
                    // Timestamp
                }
                else if (isNumber(match)) {
                    ret = match - (new Date(match)).getTimezoneOffset() * 60000;
                }
            }
        }
        return ret;
    };
    /**
     * Get the parsed data in a form that we can apply directly to the
     * `series.data` config. Array positions can be mapped using the
     * `series.keys` option.
     *
     * @example
     * const data = Highcharts.data({
     *   csv: document.getElementById('data').innerHTML
     * }).getData();
     *
     * @function Highcharts.Data#getData
     *
     * @return {Array<Array<DataValueType>>|undefined} Data rows
     */
    Data.prototype.getData = function () {
        var _a;
        if (this.columns) {
            return (_a = this.rowsToColumns(this.columns)) === null || _a === void 0 ? void 0 : _a.slice(1);
        }
    };
    /**
     * A hook for working directly on the parsed columns
     *
     * @function Highcharts.Data#parsed
     */
    Data.prototype.parsed = function () {
        if (this.options.parsed) {
            return this.options.parsed.call(this, this.columns);
        }
    };
    /**
     * If a complete callback function is provided in the options, interpret the
     * columns into a Highcharts options object.
     *
     * The function requires that the context has the `valueCount` property set.
     *
     * @function Highcharts.Data#complete
     */
    Data.prototype.complete = function () {
        var _a,
            _b,
            _c,
            _d,
            _e;
        var columns = this.columns = this.columns || [],
            xColumns = [],
            options = this.options,
            allSeriesBuilders = [];
        var type = 'linear',
            series,
            data,
            i,
            j,
            r,
            seriesIndex,
            chartOptions,
            builder,
            freeIndexes,
            typeCol,
            index;
        xColumns.length = columns.length;
        if (options.complete || options.afterComplete) {
            // Get the names and shift the top row
            if (this.firstRowAsNames) {
                for (i = 0; i < columns.length; i++) {
                    var curCol = columns[i];
                    if (!defined(curCol.name)) {
                        curCol.name = pick(curCol.shift(), '').toString();
                    }
                }
            }
            // Use the next columns for series
            series = [];
            freeIndexes = getFreeIndexes((columns === null || columns === void 0 ? void 0 : columns.length) || 0, this.valueCount.seriesBuilders);
            // Populate defined series
            for (seriesIndex = 0; seriesIndex < this.valueCount.seriesBuilders.length; seriesIndex++) {
                builder = this.valueCount.seriesBuilders[seriesIndex];
                // If the builder can be populated with remaining columns, then
                // add it to allBuilders
                if (builder.populateColumns(freeIndexes)) {
                    allSeriesBuilders.push(builder);
                }
            }
            // Populate dynamic series
            while (freeIndexes.length > 0) {
                builder = new SeriesBuilder();
                builder.addColumnReader(0, 'x');
                // Mark index as used (not free)
                index = freeIndexes.indexOf(0);
                if (index !== -1) {
                    freeIndexes.splice(index, 1);
                }
                for (i = 0; i < this.valueCount.global; i++) {
                    // Create and add a column reader for the next free column
                    // index
                    builder.addColumnReader(void 0, this.valueCount.globalPointArrayMap[i]);
                }
                // If the builder can be populated with remaining columns, then
                // add it to allBuilders
                if (builder.populateColumns(freeIndexes)) {
                    allSeriesBuilders.push(builder);
                }
            }
            // Get the data-type from the first series x column
            if (allSeriesBuilders.length > 0 &&
                allSeriesBuilders[0].readers.length > 0) {
                typeCol = columns === null || columns === void 0 ? void 0 : columns[(_a = allSeriesBuilders[0].readers[0].columnIndex) !== null && _a !== void 0 ? _a : -1];
                if (typeof typeCol !== 'undefined') {
                    if (typeCol.isDatetime) {
                        type = 'datetime';
                    }
                    else if (!typeCol.isNumeric) {
                        type = 'category';
                    }
                }
            }
            // Axis type is category, then the "x" column should be called
            // "name"
            if (type === 'category') {
                for (seriesIndex = 0; seriesIndex < allSeriesBuilders.length; seriesIndex++) {
                    builder = allSeriesBuilders[seriesIndex];
                    for (r = 0; r < builder.readers.length; r++) {
                        if (builder.readers[r].configName === 'x') {
                            builder.readers[r].configName = 'name';
                        }
                    }
                }
            }
            // Read data for all builders
            for (seriesIndex = 0; seriesIndex < allSeriesBuilders.length; seriesIndex++) {
                builder = allSeriesBuilders[seriesIndex];
                // Iterate down the cells of each column and add data to the
                // series
                data = [];
                for (j = 0; j < columns[0].length; j++) {
                    data[j] = builder.read(columns, j);
                }
                // Add the series
                series[seriesIndex] = {
                    data: data,
                    pointStart: data[0] && (builder.pointIsArray ?
                        (_b = data[0]) === null || _b === void 0 ? void 0 : _b[0] :
                        (_c = data[0]) === null || _c === void 0 ? void 0 : _c.x) || void 0
                };
                if (builder.name) {
                    series[seriesIndex].name = builder.name;
                }
                if (type === 'category') {
                    series[seriesIndex].turboThreshold = 0;
                    series[seriesIndex].pointStart = 0;
                }
            }
            // Do the callback
            chartOptions = { series: series };
            // Prepare the axis options
            if (type === 'linear' && (!this.xAxisOptions ||
                this.xAxisOptions.type === type)) {
                // Clear default value ('linear') if it is not changing the
                // axis type to avoid loosing animation
                type = this.xAxisOptions = void 0;
            }
            else {
                this.xAxisOptions = { type: type };
                if (type === 'category') {
                    this.xAxisOptions.uniqueNames = false;
                }
            }
            // Merge the xAxisOptions for the standalone Data module
            if (!this.chart) {
                merge(true, chartOptions, { xAxis: this.xAxisOptions || {} });
            }
            (_d = options.complete) === null || _d === void 0 ? void 0 : _d.call(options, chartOptions);
            // The afterComplete hook is used internally to avoid conflict with
            // the externally available complete option.
            (_e = options.afterComplete) === null || _e === void 0 ? void 0 : _e.call(options, this, chartOptions);
        }
    };
    /**
     * Sets properties directly on the xAxis object.
     *
     * @private
     */
    Data.prototype.xAxisUpdateHandler = function (axis) {
        var options = this.xAxisOptions;
        if (!options) {
            return;
        }
        // Set the axis properties if not blocked by the axis options that could
        // have changed in the update event.
        if (!axis.options.type && options.type) {
            axis.type = options.type;
        }
        if (!axis.options.uniqueNames &&
            options.uniqueNames === false) {
            axis.uniqueNames = options.uniqueNames;
        }
    };
    /**
     * Updates the chart with new data options.
     *
     * @function Highcharts.Data#update
     *
     * @param {Highcharts.DataOptions} options
     *        The new data options.
     *
     * @param {boolean} [redraw=true]
     *        Whether to redraw the chart after the new options are set.
     */
    Data.prototype.update = function (options, redraw) {
        var _a;
        var chart = this.chart,
            chartOptions = chart.options;
        if (options) {
            // Set the complete handler
            options.afterComplete = function (dataInstance, dataOptions) {
                if (!dataOptions) {
                    return;
                }
                // Avoid setting axis options unless they change. Running
                // Axis.update will cause the whole structure to be
                // destroyed and rebuilt, and animation is lost.
                var xAxis = chart.xAxis[0],
                    xAxisOptions = dataInstance.xAxisOptions;
                // Update axis if xAxisOptions are different from the current
                // and not blocked by the axis options.
                if (xAxisOptions && xAxis && ((xAxis.type !== xAxisOptions.type && !xAxis.options.type) ||
                    (xAxis.uniqueNames &&
                        xAxisOptions.uniqueNames === false &&
                        xAxis.options.uniqueNames === void 0))) {
                    xAxis.update({}, false);
                }
                else {
                    // Prefer smooth points update when no axis update
                    ((dataOptions === null || dataOptions === void 0 ? void 0 : dataOptions.series) || []).forEach(function (seriesOptions) {
                        delete seriesOptions.pointStart;
                    });
                }
                chart.update(dataOptions, redraw, true);
            };
            // Apply it
            merge(true, chartOptions.data, options);
            // Reset columns if fetching spreadsheet, to force a re-fetch
            if (((_a = chartOptions.data) === null || _a === void 0 ? void 0 : _a.googleSpreadsheetKey) && !options.columns) {
                delete chartOptions.data.columns;
            }
            this.init(chartOptions.data || {}, chartOptions);
        }
    };
    return Data;
}());
// Fire 1st xAxis properties modifier after the options are set.
addEvent((highcharts_Axis_commonjs_highcharts_Axis_commonjs2_highcharts_Axis_root_Highcharts_Axis_default()), 'afterSetOptions', function () {
    var _a;
    // Target first xAxis only
    if (this.isXAxis &&
        // Init or update
        (!this.chart.xAxis.length || this.chart.xAxis[0] === this)) {
        (_a = this.chart.data) === null || _a === void 0 ? void 0 : _a.xAxisUpdateHandler(this);
    }
});
// Extend Chart.init so that the Chart constructor accepts a new configuration
// option group, data.
addEvent((highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_default()), 'init', function (e) {
    var chart = this,
        callback = e.args[1],
        defaultDataOptions = getOptions().data;
    var userOptions = (e.args[0] || {});
    if ((defaultDataOptions || userOptions && userOptions.data) &&
        !chart.hasDataDef) {
        chart.hasDataDef = true;
        /**
         * The data parser for this chart.
         *
         * @name Highcharts.Chart#data
         * @type {Highcharts.Data|undefined}
         */
        var dataOptions = merge(defaultDataOptions,
            userOptions.data);
        chart.data = new Data(extend(dataOptions, {
            afterComplete: function (dataInstance, dataOptions) {
                var _a,
                    _b,
                    _c,
                    _d;
                var i,
                    series;
                // Merge series configs
                if (Object.hasOwnProperty.call(userOptions, 'series')) {
                    if (typeof userOptions.series === 'object') {
                        i = Math.max(userOptions.series.length, (_b = (_a = dataOptions === null || dataOptions === void 0 ? void 0 : dataOptions.series) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0);
                        while (i--) {
                            series = userOptions.series[i] || {};
                            userOptions.series[i] = merge(series, (_d = (_c = dataOptions === null || dataOptions === void 0 ? void 0 : dataOptions.series) === null || _c === void 0 ? void 0 : _c[i]) !== null && _d !== void 0 ? _d : {});
                        }
                    }
                    else { // Allow merging in dataOptions.series (#2856)
                        delete userOptions.series;
                    }
                }
                // Do the merge
                userOptions = merge(dataOptions, userOptions);
                // Register for access in events (Axis' afterSetOptions)
                chart.data = dataInstance;
                // Run chart.init again
                chart.init(userOptions, callback);
            }
        }), userOptions, chart);
        e.preventDefault();
    }
});
/**
 * Creates a new SeriesBuilder. A SeriesBuilder consists of a number
 * of ColumnReaders that reads columns and give them a name.
 * Ex: A series builder can be constructed to read column 3 as 'x' and
 * column 7 and 8 as 'y1' and 'y2'.
 * The output would then be points/rows of the form {x: 11, y1: 22, y2: 33}
 *
 * The name of the builder is taken from the second column. In the above
 * example it would be the column with index 7.
 *
 * @private
 * @class
 * @name SeriesBuilder
 */
var SeriesBuilder = /** @class */ (function () {
    function SeriesBuilder() {
        /* eslint-disable no-invalid-this */
        this.readers = [];
        this.pointIsArray = true;
    }
    /**
     * Populates readers with column indexes. A reader can be added without
     * a specific index and for those readers the index is taken sequentially
     * from the free columns (this is handled by the ColumnCursor instance).
     *
     * @function SeriesBuilder#populateColumns
     */
    SeriesBuilder.prototype.populateColumns = function (freeIndexes) {
        var builder = this;
        var enoughColumns = true;
        // Loop each reader and give it an index if its missing.
        // The freeIndexes.shift() will return undefined if there
        // are no more columns.
        builder.readers.forEach(function (reader) {
            if (typeof reader.columnIndex === 'undefined') {
                reader.columnIndex = freeIndexes.shift();
            }
        });
        // Now, all readers should have columns mapped. If not
        // then return false to signal that this series should
        // not be added.
        builder.readers.forEach(function (reader) {
            if (typeof reader.columnIndex === 'undefined') {
                enoughColumns = false;
            }
        });
        return enoughColumns;
    };
    /**
     * Reads a row from the dataset and returns a point or array depending
     * on the names of the readers.
     *
     * @function SeriesBuilder#read<T>
     */
    SeriesBuilder.prototype.read = function (columns, rowIndex) {
        var builder = this,
            pointIsArray = builder.pointIsArray,
            point = pointIsArray ? [] : {};
        // Loop each reader and ask it to read its value.
        // Then, build an array or point based on the readers names.
        builder.readers.forEach(function (reader) {
            var value = columns[reader.columnIndex][rowIndex];
            if (pointIsArray) {
                point.push(value);
            }
            else {
                if (reader.configName.indexOf('.') > 0) {
                    // Handle nested property names
                    highcharts_Point_commonjs_highcharts_Point_commonjs2_highcharts_Point_root_Highcharts_Point_default().prototype.setNestedProperty(point, value, reader.configName);
                }
                else {
                    point[reader.configName] = value;
                }
            }
        });
        // The name comes from the first column (excluding the x column)
        if (typeof this.name === 'undefined' && builder.readers.length >= 2) {
            var columnIndexes_1 = [];
            builder.readers.forEach(function (reader) {
                if (reader.configName === 'x' ||
                    reader.configName === 'name' ||
                    reader.configName === 'y') {
                    if (typeof reader.columnIndex !== 'undefined') {
                        columnIndexes_1.push(reader.columnIndex);
                    }
                }
            });
            if (columnIndexes_1.length >= 2) {
                // Remove the first one (x col)
                columnIndexes_1.shift();
                // Sort the remaining
                columnIndexes_1.sort(function (a, b) {
                    return a - b;
                });
            }
            // Now use the lowest index as name column
            this.name = columns[pick(columnIndexes_1.shift(), 0)].name;
        }
        return point;
    };
    /**
     * Creates and adds ColumnReader from the given columnIndex and configName.
     * ColumnIndex can be undefined and in that case the reader will be given
     * an index when columns are populated.
     *
     * @function SeriesBuilder#addColumnReader
     */
    SeriesBuilder.prototype.addColumnReader = function (columnIndex, configName) {
        this.readers.push({
            columnIndex: columnIndex,
            configName: configName
        });
        if (!(configName === 'x' ||
            configName === 'y' ||
            typeof configName === 'undefined')) {
            this.pointIsArray = false;
        }
    };
    /**
     * Returns an array of column indexes that the builder will use when
     * reading data.
     *
     * @function SeriesBuilder#getReferencedColumnIndexes
     */
    SeriesBuilder.prototype.getReferencedColumnIndexes = function () {
        var referencedColumnIndexes = [];
        var i,
            columnReader;
        for (i = 0; i < this.readers.length; i = i + 1) {
            columnReader = this.readers[i];
            if (typeof columnReader.columnIndex !== 'undefined') {
                referencedColumnIndexes.push(columnReader.columnIndex);
            }
        }
        return referencedColumnIndexes;
    };
    /**
     * Returns true if the builder has a reader for the given configName.
     *
     * @function SeriesBuilder#hasReader
     */
    SeriesBuilder.prototype.hasReader = function (configName) {
        var i,
            columnReader;
        for (i = 0; i < this.readers.length; i = i + 1) {
            columnReader = this.readers[i];
            if (columnReader.configName === configName) {
                return true;
            }
        }
        // Else return undefined
    };
    return SeriesBuilder;
}());
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ var Extensions_Data = (Data);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Callback function to modify the CSV before parsing it by the data module.
 *
 * @callback Highcharts.DataBeforeParseCallbackFunction
 *
 * @param {string} csv
 *        The CSV to modify.
 *
 * @return {string}
 *         The CSV to parse.
 */
/**
 * Callback function that gets called after parsing data.
 *
 * @callback Highcharts.DataCompleteCallbackFunction
 *
 * @param {Highcharts.Options} chartOptions
 *        The chart options that were used.
 */
/**
 * Callback function that returns the corresponding Date object to a match.
 *
 * @callback Highcharts.DataDateFormatCallbackFunction
 *
 * @param {Array<number>} match
 *
 * @return {number}
 */
/**
 * Structure for alternative date formats to parse.
 *
 * @interface Highcharts.DataDateFormatObject
 */ /**
* @name Highcharts.DataDateFormatObject#alternative
* @type {string|undefined}
*/ /**
* @name Highcharts.DataDateFormatObject#parser
* @type {Highcharts.DataDateFormatCallbackFunction}
*/ /**
* @name Highcharts.DataDateFormatObject#regex
* @type {global.RegExp}
*/
/**
 * Possible types for a data item in a column or row.
 *
 * @typedef {number|string|null} Highcharts.DataValueType
 */
/**
 * Callback function to parse string representations of dates into
 * JavaScript timestamps (milliseconds since 1.1.1970).
 *
 * @callback Highcharts.DataParseDateCallbackFunction
 *
 * @param {string} dateValue
 *
 * @return {number}
 *         Timestamp (milliseconds since 1.1.1970) as integer for Date class.
 */
/**
 * Callback function to access the parsed columns, the two-dimensional
 * input data array directly, before they are interpreted into series
 * data and categories.
 *
 * @callback Highcharts.DataParsedCallbackFunction
 *
 * @param {Array<Array<*>>} columns
 *        The parsed columns by the data module.
 *
 * @return {boolean|undefined}
 *         Return `false` to stop completion, or call `this.complete()` to
 *         continue async.
 */
/* *
 *
 *  API Options
 *
 * */
/**
 * The Data module provides a simplified interface for adding data to
 * a chart from sources like CVS, HTML tables or grid views. See also
 * the [tutorial article on the Data module](
 * https://www.highcharts.com/docs/working-with-data/data-module).
 *
 * It requires the `modules/data.js` file to be loaded.
 *
 * Please note that the default way of adding data in Highcharts, without
 * the need of a module, is through the [series._type_.data](#series.line.data)
 * option.
 *
 * @sample {highcharts} highcharts/demo/column-parsed/
 *         HTML table
 * @sample {highcharts} highcharts/data/csv/
 *         CSV
 *
 * @since     4.0
 * @requires  modules/data
 * @apioption data
 */
/**
 * A callback function to modify the CSV before parsing it. Return the modified
 * string.
 *
 * @sample {highcharts} highcharts/demo/line-csv/
 *         Modify CSV before parse
 *
 * @type      {Highcharts.DataBeforeParseCallbackFunction}
 * @since     6.1
 * @apioption data.beforeParse
 */
/**
 * A two-dimensional array representing the input data on tabular form.
 * This input can be used when the data is already parsed, for example
 * from a grid view component. Each cell can be a string or number.
 * If not switchRowsAndColumns is set, the columns are interpreted as
 * series.
 *
 * @see [data.rows](#data.rows)
 *
 * @sample {highcharts} highcharts/data/columns/
 *         Columns
 *
 * @type      {Array<Array<Highcharts.DataValueType>>}
 * @since     4.0
 * @apioption data.columns
 */
/**
 * An array option that specifies the data type for each column in the series
 * loaded within the data module.
 *
 * Possible values: `"string"`, `"number"`, `"float"`, `"date"`.
 *
 * @sample {highcharts|highstock} highcharts/data/column-types/
 *         X-axis categories based on CSV data
 * @sample {highmaps} highcharts/data/column-types-map/
 *         Map chart created with fips from CSV
 *
 * @type       {Array<'string'|'number'|'float'|'date'>}
 * @since      11.3.0
 * @validvalue ["string", "number", "float", "date"]
 * @apioption  data.columnTypes
 */
/**
 * The callback that is evaluated when the data is finished loading,
 * optionally from an external source, and parsed. The first argument
 * passed is a finished chart options object, containing the series.
 * These options can be extended with additional options and passed
 * directly to the chart constructor.
 *
 * @see [data.parsed](#data.parsed)
 *
 * @sample {highcharts} highcharts/data/complete/
 *         Modify data on complete
 *
 * @type      {Highcharts.DataCompleteCallbackFunction}
 * @since     4.0
 * @apioption data.complete
 */
/**
 * A comma delimited string to be parsed. Related options are [startRow](
 * #data.startRow), [endRow](#data.endRow), [startColumn](#data.startColumn)
 * and [endColumn](#data.endColumn) to delimit what part of the table
 * is used. The [lineDelimiter](#data.lineDelimiter) and [itemDelimiter](
 * #data.itemDelimiter) options define the CSV delimiter formats.
 *
 * The built-in CSV parser doesn't support all flavours of CSV, so in
 * some cases it may be necessary to use an external CSV parser. See
 * [this example](https://jsfiddle.net/highcharts/u59176h4/) of parsing
 * CSV through the MIT licensed [Papa Parse](http://papaparse.com/)
 * library.
 *
 * @sample {highcharts} highcharts/data/csv/
 *         Data from CSV
 *
 * @type      {string}
 * @since     4.0
 * @apioption data.csv
 */
/**
 * Which of the predefined date formats in Date.prototype.dateFormats
 * to use to parse date values. Defaults to a best guess based on what
 * format gives valid and ordered dates. Valid options include: `YYYY/mm/dd`,
 * `dd/mm/YYYY`, `mm/dd/YYYY`, `dd/mm/YY`, `mm/dd/YY`.
 *
 * @see [data.parseDate](#data.parseDate)
 *
 * @sample {highcharts} highcharts/data/dateformat-auto/
 *         Best guess date format
 *
 * @type       {string}
 * @since      4.0
 * @validvalue ["YYYY/mm/dd", "dd/mm/YYYY", "mm/dd/YYYY", "dd/mm/YYYY",
 *             "dd/mm/YY", "mm/dd/YY"]
 * @apioption  data.dateFormat
 */
/**
 * The decimal point used for parsing numbers in the CSV.
 *
 * If both this and data.delimiter is set to `undefined`, the parser will
 * attempt to deduce the decimal point automatically.
 *
 * @sample {highcharts} highcharts/data/delimiters/
 *         Comma as decimal point
 *
 * @type      {string}
 * @default   .
 * @since     4.1.0
 * @apioption data.decimalPoint
 */
/**
 * In tabular input data, the last column (indexed by 0) to use. Defaults
 * to the last column containing data.
 *
 * @sample {highcharts} highcharts/data/start-end/
 *         Limited data
 *
 * @type      {number}
 * @since     4.0
 * @apioption data.endColumn
 */
/**
 * In tabular input data, the last row (indexed by 0) to use. Defaults
 * to the last row containing data.
 *
 * @sample {highcharts} highcharts/data/start-end/
 *         Limited data
 *
 * @type      {number}
 * @since     4.0.4
 * @apioption data.endRow
 */
/**
 * Whether to use the first row in the data set as series names.
 *
 * @sample {highcharts} highcharts/data/start-end/
 *         Don't get series names from the CSV
 * @sample {highstock} highcharts/data/start-end/
 *         Don't get series names from the CSV
 *
 * @type      {boolean}
 * @default   true
 * @since     4.1.0
 * @product   highcharts highstock gantt
 * @apioption data.firstRowAsNames
 */
/**
 * The Google Spreadsheet API key required for access generated at [API Services
 * / Credentials](https://console.cloud.google.com/apis/credentials). See a
 * comprehensive tutorial for setting up the key at the
 * [Hands-On Data Visualization](https://handsondataviz.org/google-sheets-api-key.html)
 * book website.
 *
 * @sample {highcharts} highcharts/data/google-spreadsheet/
 *         Load a Google Spreadsheet
 *
 * @type      {string}
 * @since     9.2.2
 * @apioption data.googleAPIKey
 */
/**
 * The key or `spreadsheetId` value for a Google Spreadsheet to load. See
 * [developers.google.com](https://developers.google.com/sheets/api/guides/concepts)
 * for how to find the `spreadsheetId`.
 *
 * In order for Google Sheets to load, a valid [googleAPIKey](#data.googleAPIKey)
 * must also be given.
 *
 * @sample {highcharts} highcharts/data/google-spreadsheet/
 *         Load a Google Spreadsheet
 *
 * @type      {string}
 * @since     4.0
 * @apioption data.googleSpreadsheetKey
 */
/**
 * The Google Spreadsheet `range` to use in combination with
 * [googleSpreadsheetKey](#data.googleSpreadsheetKey). See
 * [developers.google.com](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get)
 * for details.
 *
 * If given, it takes precedence over `startColumn`, `endColumn`, `startRow` and
 * `endRow`.
 *
 * @example
 * googleSpreadsheetRange: 'Fruit Consumption' // Load a named worksheet
 * googleSpreadsheetRange: 'A:Z' // Load columns A to Z
 *
 * @sample {highcharts} highcharts/data/google-spreadsheet/
 *         Load a Google Spreadsheet
 *
 * @type      {string|undefined}
 * @since     9.2.2
 * @apioption data.googleSpreadsheetRange
 */
/**
 * No longer works since v9.2.2, that uses Google Sheets API v4. Instead, use
 * the [googleSpreadsheetRange](#data.googleSpreadsheetRange) option to load a
 * specific sheet.
 *
 * @deprecated
 * @type      {string}
 * @since     4.0
 * @apioption data.googleSpreadsheetWorksheet
 */
/**
 * Item or cell delimiter for parsing CSV. Defaults to the tab character
 * `\t` if a tab character is found in the CSV string, if not it defaults
 * to `,`.
 *
 * If this is set to false or undefined, the parser will attempt to deduce
 * the delimiter automatically.
 *
 * @sample {highcharts} highcharts/data/delimiters/
 *         Delimiters
 *
 * @type      {string}
 * @since     4.0
 * @apioption data.itemDelimiter
 */
/**
 * Line delimiter for parsing CSV.
 *
 * @sample {highcharts} highcharts/data/delimiters/
 *         Delimiters
 *
 * @type      {string}
 * @default   \n
 * @since     4.0
 * @apioption data.lineDelimiter
 */
/**
 * A callback function to access the parsed columns, the two-dimensional
 * input data array directly, before they are interpreted into series
 * data and categories. Return `false` to stop completion, or call
 * `this.complete()` to continue async.
 *
 * @see [data.complete](#data.complete)
 *
 * @sample {highcharts} highcharts/data/parsed/
 *         Modify data after parse
 *
 * @type      {Highcharts.DataParsedCallbackFunction}
 * @since     4.0
 * @apioption data.parsed
 */
/**
 * A callback function to parse string representations of dates into
 * JavaScript timestamps. Should return an integer timestamp on success.
 *
 * @see [dateFormat](#data.dateFormat)
 *
 * @type      {Highcharts.DataParseDateCallbackFunction}
 * @since     4.0
 * @apioption data.parseDate
 */
/**
 * The same as the columns input option, but defining rows instead of
 * columns.
 *
 * @see [data.columns](#data.columns)
 *
 * @sample {highcharts} highcharts/data/rows/
 *         Data in rows
 *
 * @type      {Array<Array<Highcharts.DataValueType>>}
 * @since     4.0
 * @apioption data.rows
 */
/**
 * An array containing dictionaries for each series. A dictionary exists of
 * Point property names as the key and the CSV column index as the value.
 *
 * @sample {highcharts} highcharts/data/seriesmapping-label/
 *         Label from data set
 *
 * @type      {Array<Highcharts.Dictionary<number>>}
 * @since     4.0.4
 * @apioption data.seriesMapping
 */
/**
 * In tabular input data, the first column (indexed by 0) to use.
 *
 * @sample {highcharts} highcharts/data/start-end/
 *         Limited data
 *
 * @type      {number}
 * @default   0
 * @since     4.0
 * @apioption data.startColumn
 */
/**
 * In tabular input data, the first row (indexed by 0) to use.
 *
 * @sample {highcharts} highcharts/data/start-end/
 *         Limited data
 *
 * @type      {number}
 * @default   0
 * @since     4.0
 * @apioption data.startRow
 */
/**
 * Switch rows and columns of the input data, so that `this.columns`
 * effectively becomes the rows of the data set, and the rows are interpreted
 * as series.
 *
 * @sample {highcharts} highcharts/data/switchrowsandcolumns/
 *         Switch rows and columns
 *
 * @type      {boolean}
 * @default   false
 * @since     4.0
 * @apioption data.switchRowsAndColumns
 */
/**
 * An HTML table or the id of such to be parsed as input data. Related
 * options are `startRow`, `endRow`, `startColumn` and `endColumn` to
 * delimit what part of the table is used.
 *
 * @sample {highcharts} highcharts/demo/column-parsed/
 *         Parsed table
 *
 * @type      {string|global.HTMLElement}
 * @since     4.0
 * @apioption data.table
 */
/**
 * An URL to a remote CSV dataset. Will be fetched when the chart is created
 * using Ajax.
 *
 * @sample highcharts/data/livedata-columns
 *         Categorized bar chart with CSV and live polling
 * @sample highcharts/data/livedata-csv
 *         Time based line chart with CSV and live polling
 *
 * @type      {string}
 * @apioption data.csvURL
 */
/**
 * A URL to a remote JSON dataset, structured as a row array.
 * Will be fetched when the chart is created using Ajax.
 *
 * @sample highcharts/data/livedata-rows
 *         Rows with live polling
 *
 * @type      {string}
 * @apioption data.rowsURL
 */
/**
 * A URL to a remote JSON dataset, structured as a column array.
 * Will be fetched when the chart is created using Ajax.
 *
 * @sample highcharts/data/livedata-columns
 *         Columns with live polling
 *
 * @type      {string}
 * @apioption data.columnsURL
 */
/**
 * Sets the refresh rate for data polling when importing remote dataset by
 * setting [data.csvURL](data.csvURL), [data.rowsURL](data.rowsURL),
 * [data.columnsURL](data.columnsURL), or
 * [data.googleSpreadsheetKey](data.googleSpreadsheetKey).
 *
 * Note that polling must be enabled by setting
 * [data.enablePolling](data.enablePolling) to true.
 *
 * The value is the number of seconds between pollings.
 * It cannot be set to less than 1 second.
 *
 * @sample highcharts/demo/live-data
 *         Live data with user set refresh rate
 *
 * @default   1
 * @type      {number}
 * @apioption data.dataRefreshRate
 */
/**
 * Enables automatic refetching of remote datasets every _n_ seconds (defined by
 * setting [data.dataRefreshRate](data.dataRefreshRate)).
 *
 * Only works when either [data.csvURL](data.csvURL),
 * [data.rowsURL](data.rowsURL), [data.columnsURL](data.columnsURL), or
 * [data.googleSpreadsheetKey](data.googleSpreadsheetKey).
 *
 * @sample highcharts/demo/live-data
 *         Live data
 * @sample highcharts/data/livedata-columns
 *         Categorized bar chart with CSV and live polling
 *
 * @type      {boolean}
 * @default   false
 * @apioption data.enablePolling
 */
(''); // Keeps doclets above in JS file

;// ./code/es5/es-modules/masters/modules/data.src.js





var G = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
// Classes
G.Data = G.Data || Extensions_Data;
G.HttpUtilities = G.HttpUtilities || Core_HttpUtilities;
// Functions
G.ajax = G.HttpUtilities.ajax;
G.data = G.Data.data;
G.getJSON = G.HttpUtilities.getJSON;
G.post = G.HttpUtilities.post;
/* harmony default export */ var data_src = ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()));

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});