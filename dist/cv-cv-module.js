(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cv-cv-module"],{

/***/ "./node_modules/@angular/common/esm5/http.js":
/*!***************************************************!*\
  !*** ./node_modules/@angular/common/esm5/http.js ***!
  \***************************************************/
/*! exports provided: HttpBackend, HttpHandler, HttpClient, HttpHeaders, HTTP_INTERCEPTORS, JsonpClientBackend, JsonpInterceptor, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, ɵinterceptingHandler, HttpParams, HttpUrlEncodingCodec, HttpRequest, HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpResponse, HttpResponseBase, HttpXhrBackend, XhrFactory, HttpXsrfTokenExtractor, ɵa, ɵb, ɵc, ɵd, ɵe, ɵh, ɵi, ɵf, ɵg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpBackend", function() { return HttpBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHandler", function() { return HttpHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return HttpClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaders", function() { return HttpHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function() { return HTTP_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function() { return JsonpClientBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function() { return JsonpInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function() { return HttpClientJsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientModule", function() { return HttpClientModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function() { return HttpClientXsrfModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵinterceptingHandler", function() { return interceptingHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpParams", function() { return HttpParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function() { return HttpUrlEncodingCodec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequest", function() { return HttpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function() { return HttpErrorResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpEventType", function() { return HttpEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function() { return HttpHeaderResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return HttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function() { return HttpResponseBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function() { return HttpXhrBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrFactory", function() { return XhrFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function() { return HttpXsrfTokenExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NoopInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return JsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return HttpInterceptingHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return jsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return HttpXsrfCookieExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return HttpXsrfInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return XSRF_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return XSRF_HEADER_NAME; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var rxjs_operator_concatMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operator/concatMap */ "./node_modules/rxjs/_esm5/operator/concatMap.js");
/* harmony import */ var rxjs_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operator/filter */ "./node_modules/rxjs/_esm5/operator/filter.js");
/* harmony import */ var rxjs_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operator/map */ "./node_modules/rxjs/_esm5/operator/map.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/**
 * @license Angular v5.2.11
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * \@stable
 * @abstract
 */
var HttpHandler = /** @class */ (function () {
    function HttpHandler() {
    }
    return HttpHandler;
}());
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * \@stable
 * @abstract
 */
var HttpBackend = /** @class */ (function () {
    function HttpBackend() {
    }
    return HttpBackend;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @record
 */
/**
 * Immutable set of Http headers, with lazy parsing.
 * \@stable
 */
var HttpHeaders = /** @class */ (function () {
    function HttpHeaders(headers) {
        var _this = this;
        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */
        this.lazyUpdate = null;
        if (!headers) {
            this.headers = new Map();
        }
        else if (typeof headers === 'string') {
            this.lazyInit = function () {
                _this.headers = new Map();
                headers.split('\n').forEach(function (line) {
                    var /** @type {?} */ index = line.indexOf(':');
                    if (index > 0) {
                        var /** @type {?} */ name_1 = line.slice(0, index);
                        var /** @type {?} */ key = name_1.toLowerCase();
                        var /** @type {?} */ value = line.slice(index + 1).trim();
                        _this.maybeSetNormalizedName(name_1, key);
                        if (_this.headers.has(key)) {
                            /** @type {?} */ ((_this.headers.get(key))).push(value);
                        }
                        else {
                            _this.headers.set(key, [value]);
                        }
                    }
                });
            };
        }
        else {
            this.lazyInit = function () {
                _this.headers = new Map();
                Object.keys(headers).forEach(function (name) {
                    var /** @type {?} */ values = headers[name];
                    var /** @type {?} */ key = name.toLowerCase();
                    if (typeof values === 'string') {
                        values = [values];
                    }
                    if (values.length > 0) {
                        _this.headers.set(key, values);
                        _this.maybeSetNormalizedName(name, key);
                    }
                });
            };
        }
    }
    /**
     * Checks for existence of header by given name.
     */
    /**
     * Checks for existence of header by given name.
     * @param {?} name
     * @return {?}
     */
    HttpHeaders.prototype.has = /**
     * Checks for existence of header by given name.
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.init();
        return this.headers.has(name.toLowerCase());
    };
    /**
     * Returns first header that matches given name.
     */
    /**
     * Returns first header that matches given name.
     * @param {?} name
     * @return {?}
     */
    HttpHeaders.prototype.get = /**
     * Returns first header that matches given name.
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.init();
        var /** @type {?} */ values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
    };
    /**
     * Returns the names of the headers
     */
    /**
     * Returns the names of the headers
     * @return {?}
     */
    HttpHeaders.prototype.keys = /**
     * Returns the names of the headers
     * @return {?}
     */
    function () {
        this.init();
        return Array.from(this.normalizedNames.values());
    };
    /**
     * Returns list of header values for a given name.
     */
    /**
     * Returns list of header values for a given name.
     * @param {?} name
     * @return {?}
     */
    HttpHeaders.prototype.getAll = /**
     * Returns list of header values for a given name.
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    HttpHeaders.prototype.append = /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        return this.clone({ name: name, value: value, op: 'a' });
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    HttpHeaders.prototype.set = /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        return this.clone({ name: name, value: value, op: 's' });
    };
    /**
     * @param {?} name
     * @param {?=} value
     * @return {?}
     */
    HttpHeaders.prototype.delete = /**
     * @param {?} name
     * @param {?=} value
     * @return {?}
     */
    function (name, value) {
        return this.clone({ name: name, value: value, op: 'd' });
    };
    /**
     * @param {?} name
     * @param {?} lcName
     * @return {?}
     */
    HttpHeaders.prototype.maybeSetNormalizedName = /**
     * @param {?} name
     * @param {?} lcName
     * @return {?}
     */
    function (name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
        }
    };
    /**
     * @return {?}
     */
    HttpHeaders.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
                this.copyFrom(this.lazyInit);
            }
            else {
                this.lazyInit();
            }
            this.lazyInit = null;
            if (!!this.lazyUpdate) {
                this.lazyUpdate.forEach(function (update) { return _this.applyUpdate(update); });
                this.lazyUpdate = null;
            }
        }
    };
    /**
     * @param {?} other
     * @return {?}
     */
    HttpHeaders.prototype.copyFrom = /**
     * @param {?} other
     * @return {?}
     */
    function (other) {
        var _this = this;
        other.init();
        Array.from(other.headers.keys()).forEach(function (key) {
            _this.headers.set(key, /** @type {?} */ ((other.headers.get(key))));
            _this.normalizedNames.set(key, /** @type {?} */ ((other.normalizedNames.get(key))));
        });
    };
    /**
     * @param {?} update
     * @return {?}
     */
    HttpHeaders.prototype.clone = /**
     * @param {?} update
     * @return {?}
     */
    function (update) {
        var /** @type {?} */ clone = new HttpHeaders();
        clone.lazyInit =
            (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
    };
    /**
     * @param {?} update
     * @return {?}
     */
    HttpHeaders.prototype.applyUpdate = /**
     * @param {?} update
     * @return {?}
     */
    function (update) {
        var /** @type {?} */ key = update.name.toLowerCase();
        switch (update.op) {
            case 'a':
            case 's':
                var /** @type {?} */ value = /** @type {?} */ ((update.value));
                if (typeof value === 'string') {
                    value = [value];
                }
                if (value.length === 0) {
                    return;
                }
                this.maybeSetNormalizedName(update.name, key);
                var /** @type {?} */ base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                base.push.apply(base, value);
                this.headers.set(key, base);
                break;
            case 'd':
                var /** @type {?} */ toDelete_1 = /** @type {?} */ (update.value);
                if (!toDelete_1) {
                    this.headers.delete(key);
                    this.normalizedNames.delete(key);
                }
                else {
                    var /** @type {?} */ existing = this.headers.get(key);
                    if (!existing) {
                        return;
                    }
                    existing = existing.filter(function (value) { return toDelete_1.indexOf(value) === -1; });
                    if (existing.length === 0) {
                        this.headers.delete(key);
                        this.normalizedNames.delete(key);
                    }
                    else {
                        this.headers.set(key, existing);
                    }
                }
                break;
        }
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @param {?} fn
     * @return {?}
     */
    HttpHeaders.prototype.forEach = /**
     * \@internal
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        var _this = this;
        this.init();
        Array.from(this.normalizedNames.keys())
            .forEach(function (key) { return fn(/** @type {?} */ ((_this.normalizedNames.get(key))), /** @type {?} */ ((_this.headers.get(key)))); });
    };
    return HttpHeaders;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A codec for encoding and decoding parameters in URLs.
 *
 * Used by `HttpParams`.
 *
 * \@stable
 *
 * @record
 */

/**
 * A `HttpParameterCodec` that uses `encodeURIComponent` and `decodeURIComponent` to
 * serialize and parse URL parameter keys and values.
 *
 * \@stable
 */
var HttpUrlEncodingCodec = /** @class */ (function () {
    function HttpUrlEncodingCodec() {
    }
    /**
     * @param {?} k
     * @return {?}
     */
    HttpUrlEncodingCodec.prototype.encodeKey = /**
     * @param {?} k
     * @return {?}
     */
    function (k) { return standardEncoding(k); };
    /**
     * @param {?} v
     * @return {?}
     */
    HttpUrlEncodingCodec.prototype.encodeValue = /**
     * @param {?} v
     * @return {?}
     */
    function (v) { return standardEncoding(v); };
    /**
     * @param {?} k
     * @return {?}
     */
    HttpUrlEncodingCodec.prototype.decodeKey = /**
     * @param {?} k
     * @return {?}
     */
    function (k) { return decodeURIComponent(k); };
    /**
     * @param {?} v
     * @return {?}
     */
    HttpUrlEncodingCodec.prototype.decodeValue = /**
     * @param {?} v
     * @return {?}
     */
    function (v) { return decodeURIComponent(v); };
    return HttpUrlEncodingCodec;
}());
/**
 * @param {?} rawParams
 * @param {?} codec
 * @return {?}
 */
function paramParser(rawParams, codec) {
    var /** @type {?} */ map$$1 = new Map();
    if (rawParams.length > 0) {
        var /** @type {?} */ params = rawParams.split('&');
        params.forEach(function (param) {
            var /** @type {?} */ eqIdx = param.indexOf('=');
            var _a = eqIdx == -1 ?
                [codec.decodeKey(param), ''] :
                [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))], key = _a[0], val = _a[1];
            var /** @type {?} */ list = map$$1.get(key) || [];
            list.push(val);
            map$$1.set(key, list);
        });
    }
    return map$$1;
}
/**
 * @param {?} v
 * @return {?}
 */
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable - all mutation operations return a new instance.
 *
 * \@stable
 */
var HttpParams = /** @class */ (function () {
    function HttpParams(options) {
        if (options === void 0) { options = /** @type {?} */ ({}); }
        var _this = this;
        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        if (!!options.fromString) {
            if (!!options.fromObject) {
                throw new Error("Cannot specify both fromString and fromObject.");
            }
            this.map = paramParser(options.fromString, this.encoder);
        }
        else if (!!options.fromObject) {
            this.map = new Map();
            Object.keys(options.fromObject).forEach(function (key) {
                var /** @type {?} */ value = (/** @type {?} */ (options.fromObject))[key]; /** @type {?} */
                ((_this.map)).set(key, Array.isArray(value) ? value : [value]);
            });
        }
        else {
            this.map = null;
        }
    }
    /**
     * Check whether the body has one or more values for the given parameter name.
     */
    /**
     * Check whether the body has one or more values for the given parameter name.
     * @param {?} param
     * @return {?}
     */
    HttpParams.prototype.has = /**
     * Check whether the body has one or more values for the given parameter name.
     * @param {?} param
     * @return {?}
     */
    function (param) {
        this.init();
        return /** @type {?} */ ((this.map)).has(param);
    };
    /**
     * Get the first value for the given parameter name, or `null` if it's not present.
     */
    /**
     * Get the first value for the given parameter name, or `null` if it's not present.
     * @param {?} param
     * @return {?}
     */
    HttpParams.prototype.get = /**
     * Get the first value for the given parameter name, or `null` if it's not present.
     * @param {?} param
     * @return {?}
     */
    function (param) {
        this.init();
        var /** @type {?} */ res = /** @type {?} */ ((this.map)).get(param);
        return !!res ? res[0] : null;
    };
    /**
     * Get all values for the given parameter name, or `null` if it's not present.
     */
    /**
     * Get all values for the given parameter name, or `null` if it's not present.
     * @param {?} param
     * @return {?}
     */
    HttpParams.prototype.getAll = /**
     * Get all values for the given parameter name, or `null` if it's not present.
     * @param {?} param
     * @return {?}
     */
    function (param) {
        this.init();
        return /** @type {?} */ ((this.map)).get(param) || null;
    };
    /**
     * Get all the parameter names for this body.
     */
    /**
     * Get all the parameter names for this body.
     * @return {?}
     */
    HttpParams.prototype.keys = /**
     * Get all the parameter names for this body.
     * @return {?}
     */
    function () {
        this.init();
        return Array.from(/** @type {?} */ ((this.map)).keys());
    };
    /**
     * Construct a new body with an appended value for the given parameter name.
     */
    /**
     * Construct a new body with an appended value for the given parameter name.
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    HttpParams.prototype.append = /**
     * Construct a new body with an appended value for the given parameter name.
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    function (param, value) { return this.clone({ param: param, value: value, op: 'a' }); };
    /**
     * Construct a new body with a new value for the given parameter name.
     */
    /**
     * Construct a new body with a new value for the given parameter name.
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    HttpParams.prototype.set = /**
     * Construct a new body with a new value for the given parameter name.
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    function (param, value) { return this.clone({ param: param, value: value, op: 's' }); };
    /**
     * Construct a new body with either the given value for the given parameter
     * removed, if a value is given, or all values for the given parameter removed
     * if not.
     */
    /**
     * Construct a new body with either the given value for the given parameter
     * removed, if a value is given, or all values for the given parameter removed
     * if not.
     * @param {?} param
     * @param {?=} value
     * @return {?}
     */
    HttpParams.prototype.delete = /**
     * Construct a new body with either the given value for the given parameter
     * removed, if a value is given, or all values for the given parameter removed
     * if not.
     * @param {?} param
     * @param {?=} value
     * @return {?}
     */
    function (param, value) { return this.clone({ param: param, value: value, op: 'd' }); };
    /**
     * Serialize the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     */
    /**
     * Serialize the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     * @return {?}
     */
    HttpParams.prototype.toString = /**
     * Serialize the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     * @return {?}
     */
    function () {
        var _this = this;
        this.init();
        return this.keys()
            .map(function (key) {
            var /** @type {?} */ eKey = _this.encoder.encodeKey(key);
            return /** @type {?} */ ((/** @type {?} */ ((_this.map)).get(key))).map(function (value) { return eKey + '=' + _this.encoder.encodeValue(value); }).join('&');
        })
            .join('&');
    };
    /**
     * @param {?} update
     * @return {?}
     */
    HttpParams.prototype.clone = /**
     * @param {?} update
     * @return {?}
     */
    function (update) {
        var /** @type {?} */ clone = new HttpParams({ encoder: this.encoder });
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat([update]);
        return clone;
    };
    /**
     * @return {?}
     */
    HttpParams.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.map === null) {
            this.map = new Map();
        }
        if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(function (key) { return ((_this.map)).set(key, /** @type {?} */ ((/** @type {?} */ ((/** @type {?} */ ((_this.cloneFrom)).map)).get(key)))); }); /** @type {?} */
            ((this.updates)).forEach(function (update) {
                switch (update.op) {
                    case 'a':
                    case 's':
                        var /** @type {?} */ base = (update.op === 'a' ? /** @type {?} */ ((_this.map)).get(update.param) : undefined) || [];
                        base.push(/** @type {?} */ ((update.value))); /** @type {?} */
                        ((_this.map)).set(update.param, base);
                        break;
                    case 'd':
                        if (update.value !== undefined) {
                            var /** @type {?} */ base_1 = /** @type {?} */ ((_this.map)).get(update.param) || [];
                            var /** @type {?} */ idx = base_1.indexOf(update.value);
                            if (idx !== -1) {
                                base_1.splice(idx, 1);
                            }
                            if (base_1.length > 0) {
                                /** @type {?} */ ((_this.map)).set(update.param, base_1);
                            }
                            else {
                                /** @type {?} */ ((_this.map)).delete(update.param);
                            }
                        }
                        else {
                            /** @type {?} */ ((_this.map)).delete(update.param);
                            break;
                        }
                }
            });
            this.cloneFrom = null;
        }
    };
    return HttpParams;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Determine whether the given HTTP method may include a body.
 * @param {?} method
 * @return {?}
 */
function mightHaveBody(method) {
    switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
            return false;
        default:
            return true;
    }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 * @param {?} value
 * @return {?}
 */
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 * @param {?} value
 * @return {?}
 */
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 * @param {?} value
 * @return {?}
 */
function isFormData(value) {
    return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * \@stable
 * @template T
 */
var HttpRequest = /** @class */ (function () {
    function HttpRequest(method, url, third, fourth) {
        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */
        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */
        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */
        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */
        this.responseType = 'json';
        this.method = method.toUpperCase();
        // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.
        var /** @type {?} */ options;
        // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.
        if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = (third !== undefined) ? /** @type {?} */ (third) : null;
            options = fourth;
        }
        else {
            // No body required, options are the third argument. The body stays null.
            options = /** @type {?} */ (third);
        }
        // If options have been passed, interpret them.
        if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials;
            // Override default response type of 'json' if one is provided.
            if (!!options.responseType) {
                this.responseType = options.responseType;
            }
            // Override headers if they're provided.
            if (!!options.headers) {
                this.headers = options.headers;
            }
            if (!!options.params) {
                this.params = options.params;
            }
        }
        // If no headers have been passed in, construct a new HttpHeaders instance.
        if (!this.headers) {
            this.headers = new HttpHeaders();
        }
        // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
        if (!this.params) {
            this.params = new HttpParams();
            this.urlWithParams = url;
        }
        else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            var /** @type {?} */ params = this.params.toString();
            if (params.length === 0) {
                // No parameters, the visible URL is just the URL given at creation time.
                this.urlWithParams = url;
            }
            else {
                // Does the URL already have query parameters? Look for '?'.
                var /** @type {?} */ qIdx = url.indexOf('?');
                // There are 3 cases to handle:
                // 1) No existing parameters -> append '?' followed by params.
                // 2) '?' exists and is followed by existing query string ->
                //    append '&' followed by params.
                // 3) '?' exists at the end of the url -> append params directly.
                // This basically amounts to determining the character, if any, with
                // which to join the URL and parameters.
                var /** @type {?} */ sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                this.urlWithParams = url + sep + params;
            }
        }
    }
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     */
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     * @return {?}
     */
    HttpRequest.prototype.serializeBody = /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     * @return {?}
     */
    function () {
        // If no body is present, no need to serialize it.
        if (this.body === null) {
            return null;
        }
        // Check whether the body is already in a serialized form. If so,
        // it can just be returned directly.
        if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
            typeof this.body === 'string') {
            return this.body;
        }
        // Check whether the body is an instance of HttpUrlEncodedParams.
        if (this.body instanceof HttpParams) {
            return this.body.toString();
        }
        // Check whether the body is an object or array, and serialize with JSON if so.
        if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
            Array.isArray(this.body)) {
            return JSON.stringify(this.body);
        }
        // Fall back on toString() for everything else.
        return (/** @type {?} */ (this.body)).toString();
    };
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     */
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     * @return {?}
     */
    HttpRequest.prototype.detectContentTypeHeader = /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     * @return {?}
     */
    function () {
        // An empty body has no content type.
        if (this.body === null) {
            return null;
        }
        // FormData bodies rely on the browser's content type assignment.
        if (isFormData(this.body)) {
            return null;
        }
        // Blobs usually have their own content type. If it doesn't, then
        // no type can be inferred.
        if (isBlob(this.body)) {
            return this.body.type || null;
        }
        // Array buffers have unknown contents and thus no type can be inferred.
        if (isArrayBuffer(this.body)) {
            return null;
        }
        // Technically, strings could be a form of JSON data, but it's safe enough
        // to assume they're plain strings.
        if (typeof this.body === 'string') {
            return 'text/plain';
        }
        // `HttpUrlEncodedParams` has its own content-type.
        if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        // Arrays, objects, and numbers will be encoded as JSON.
        if (typeof this.body === 'object' || typeof this.body === 'number' ||
            Array.isArray(this.body)) {
            return 'application/json';
        }
        // No type could be inferred.
        return null;
    };
    /**
     * @param {?=} update
     * @return {?}
     */
    HttpRequest.prototype.clone = /**
     * @param {?=} update
     * @return {?}
     */
    function (update) {
        if (update === void 0) { update = {}; }
        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.
        var /** @type {?} */ method = update.method || this.method;
        var /** @type {?} */ url = update.url || this.url;
        var /** @type {?} */ responseType = update.responseType || this.responseType;
        // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.
        var /** @type {?} */ body = (update.body !== undefined) ? update.body : this.body;
        // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.
        var /** @type {?} */ withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        var /** @type {?} */ reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.
        var /** @type {?} */ headers = update.headers || this.headers;
        var /** @type {?} */ params = update.params || this.params;
        // Check whether the caller has asked to add headers.
        if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers =
                Object.keys(update.setHeaders)
                    .reduce(function (headers, name) { return headers.set(name, /** @type {?} */ ((update.setHeaders))[name]); }, headers);
        }
        // Check whether the caller has asked to set params.
        if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams)
                .reduce(function (params, param) { return params.set(param, /** @type {?} */ ((update.setParams))[param]); }, params);
        }
        // Finally, construct the new HttpRequest using the pieces from above.
        return new HttpRequest(method, url, body, {
            params: params, headers: headers, reportProgress: reportProgress, responseType: responseType, withCredentials: withCredentials,
        });
    };
    return HttpRequest;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @enum {number} */
var HttpEventType = {
    /**
       * The request was sent out over the wire.
       */
    Sent: 0,
    /**
       * An upload progress event was received.
       */
    UploadProgress: 1,
    /**
       * The response status code and headers were received.
       */
    ResponseHeader: 2,
    /**
       * A download progress event was received.
       */
    DownloadProgress: 3,
    /**
       * The full response including the body was received.
       */
    Response: 4,
    /**
       * A custom event from an interceptor or a backend.
       */
    User: 5,
};
HttpEventType[HttpEventType.Sent] = "Sent";
HttpEventType[HttpEventType.UploadProgress] = "UploadProgress";
HttpEventType[HttpEventType.ResponseHeader] = "ResponseHeader";
HttpEventType[HttpEventType.DownloadProgress] = "DownloadProgress";
HttpEventType[HttpEventType.Response] = "Response";
HttpEventType[HttpEventType.User] = "User";
/**
 * Base interface for progress events.
 *
 * \@stable
 * @record
 */

/**
 * A download progress event.
 *
 * \@stable
 * @record
 */

/**
 * An upload progress event.
 *
 * \@stable
 * @record
 */

/**
 * An event indicating that the request was sent to the server. Useful
 * when a request may be retried multiple times, to distinguish between
 * retries on the final event stream.
 *
 * \@stable
 * @record
 */

/**
 * A user-defined event.
 *
 * Grouping all custom events under this type ensures they will be handled
 * and forwarded by all implementations of interceptors.
 *
 * \@stable
 * @record
 * @template T
 */

/**
 * An error that represents a failed attempt to JSON.parse text coming back
 * from the server.
 *
 * It bundles the Error object with the actual response body that failed to parse.
 *
 * \@stable
 * @record
 */

/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * \@stable
 * @abstract
 */
var HttpResponseBase = /** @class */ (function () {
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     */
    function HttpResponseBase(init, defaultStatus, defaultStatusText) {
        if (defaultStatus === void 0) { defaultStatus = 200; }
        if (defaultStatusText === void 0) { defaultStatusText = 'OK'; }
        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        // Cache the ok value to avoid defining a getter.
        this.ok = this.status >= 200 && this.status < 300;
    }
    return HttpResponseBase;
}());
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * \@stable
 */
var HttpHeaderResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(HttpHeaderResponse, _super);
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     */
    function HttpHeaderResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.ResponseHeader;
        return _this;
    }
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     */
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     * @param {?=} update
     * @return {?}
     */
    HttpHeaderResponse.prototype.clone = /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     * @param {?=} update
     * @return {?}
     */
    function (update) {
        if (update === void 0) { update = {}; }
        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpHeaderResponse;
}(HttpResponseBase));
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * \@stable
 * @template T
 */
var HttpResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(HttpResponse, _super);
    /**
     * Construct a new `HttpResponse`.
     */
    function HttpResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.Response;
        _this.body = init.body !== undefined ? init.body : null;
        return _this;
    }
    /**
     * @param {?=} update
     * @return {?}
     */
    HttpResponse.prototype.clone = /**
     * @param {?=} update
     * @return {?}
     */
    function (update) {
        if (update === void 0) { update = {}; }
        return new HttpResponse({
            body: (update.body !== undefined) ? update.body : this.body,
            headers: update.headers || this.headers,
            status: (update.status !== undefined) ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpResponse;
}(HttpResponseBase));
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * \@stable
 */
var HttpErrorResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(HttpErrorResponse, _super);
    function HttpErrorResponse(init) {
        var _this = 
        // Initialize with a default status of 0 / Unknown Error.
        _super.call(this, init, 0, 'Unknown Error') || this;
        _this.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */
        _this.ok = false;
        // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.
        if (_this.status >= 200 && _this.status < 300) {
            _this.message = "Http failure during parsing for " + (init.url || '(unknown url)');
        }
        else {
            _this.message =
                "Http failure response for " + (init.url || '(unknown url)') + ": " + init.status + " " + init.statusText;
        }
        _this.error = init.error || null;
        return _this;
    }
    return HttpErrorResponse;
}(HttpResponseBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Construct an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. Basically, this clones the object and adds the body.
 * @template T
 * @param {?} options
 * @param {?} body
 * @return {?}
 */
function addBody(options, body) {
    return {
        body: body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials,
    };
}
/**
 * Perform HTTP requests.
 *
 * `HttpClient` is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies according to which
 * signature is called (mainly the values of `observe` and `responseType`).
 *
 * \@stable
 */
var HttpClient = /** @class */ (function () {
    function HttpClient(handler) {
        this.handler = handler;
    }
    /**
     * Constructs an `Observable` for a particular HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * This method can be called in one of two ways. Either an `HttpRequest`
     * instance can be passed directly as the only parameter, or a method can be
     * passed as the first parameter, a string URL as the second, and an
     * options hash as the third.
     *
     * If a `HttpRequest` object is passed directly, an `Observable` of the
     * raw `HttpEvent` stream will be returned.
     *
     * If a request is instead built by providing a URL, the options object
     * determines the return type of `request()`. In addition to configuring
     * request parameters such as the outgoing headers and/or the body, the options
     * hash specifies two key pieces of information about the request: the
     * `responseType` and what to `observe`.
     *
     * The `responseType` value determines how a successful response body will be
     * parsed. If `responseType` is the default `json`, a type interface for the
     * resulting object may be passed as a type parameter to `request()`.
     *
     * The `observe` value determines the return type of `request()`, based on what
     * the consumer is interested in observing. A value of `events` will return an
     * `Observable<HttpEvent>` representing the raw `HttpEvent` stream,
     * including progress events by default. A value of `response` will return an
     * `Observable<HttpResponse<T>>` where the `T` parameter of `HttpResponse`
     * depends on the `responseType` and any optionally provided type parameter.
     * A value of `body` will return an `Observable<T>` with the same `T` body type.
     */
    /**
     * Constructs an `Observable` for a particular HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * This method can be called in one of two ways. Either an `HttpRequest`
     * instance can be passed directly as the only parameter, or a method can be
     * passed as the first parameter, a string URL as the second, and an
     * options hash as the third.
     *
     * If a `HttpRequest` object is passed directly, an `Observable` of the
     * raw `HttpEvent` stream will be returned.
     *
     * If a request is instead built by providing a URL, the options object
     * determines the return type of `request()`. In addition to configuring
     * request parameters such as the outgoing headers and/or the body, the options
     * hash specifies two key pieces of information about the request: the
     * `responseType` and what to `observe`.
     *
     * The `responseType` value determines how a successful response body will be
     * parsed. If `responseType` is the default `json`, a type interface for the
     * resulting object may be passed as a type parameter to `request()`.
     *
     * The `observe` value determines the return type of `request()`, based on what
     * the consumer is interested in observing. A value of `events` will return an
     * `Observable<HttpEvent>` representing the raw `HttpEvent` stream,
     * including progress events by default. A value of `response` will return an
     * `Observable<HttpResponse<T>>` where the `T` parameter of `HttpResponse`
     * depends on the `responseType` and any optionally provided type parameter.
     * A value of `body` will return an `Observable<T>` with the same `T` body type.
     * @param {?} first
     * @param {?=} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.request = /**
     * Constructs an `Observable` for a particular HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * This method can be called in one of two ways. Either an `HttpRequest`
     * instance can be passed directly as the only parameter, or a method can be
     * passed as the first parameter, a string URL as the second, and an
     * options hash as the third.
     *
     * If a `HttpRequest` object is passed directly, an `Observable` of the
     * raw `HttpEvent` stream will be returned.
     *
     * If a request is instead built by providing a URL, the options object
     * determines the return type of `request()`. In addition to configuring
     * request parameters such as the outgoing headers and/or the body, the options
     * hash specifies two key pieces of information about the request: the
     * `responseType` and what to `observe`.
     *
     * The `responseType` value determines how a successful response body will be
     * parsed. If `responseType` is the default `json`, a type interface for the
     * resulting object may be passed as a type parameter to `request()`.
     *
     * The `observe` value determines the return type of `request()`, based on what
     * the consumer is interested in observing. A value of `events` will return an
     * `Observable<HttpEvent>` representing the raw `HttpEvent` stream,
     * including progress events by default. A value of `response` will return an
     * `Observable<HttpResponse<T>>` where the `T` parameter of `HttpResponse`
     * depends on the `responseType` and any optionally provided type parameter.
     * A value of `body` will return an `Observable<T>` with the same `T` body type.
     * @param {?} first
     * @param {?=} url
     * @param {?=} options
     * @return {?}
     */
    function (first, url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var /** @type {?} */ req;
        // Firstly, check whether the primary argument is an instance of `HttpRequest`.
        if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req = /** @type {?} */ (first);
        }
        else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming GET unless a method is
            // provided.
            // Figure out the headers.
            var /** @type {?} */ headers = undefined;
            if (options.headers instanceof HttpHeaders) {
                headers = options.headers;
            }
            else {
                headers = new HttpHeaders(options.headers);
            }
            // Sort out parameters.
            var /** @type {?} */ params = undefined;
            if (!!options.params) {
                if (options.params instanceof HttpParams) {
                    params = options.params;
                }
                else {
                    params = new HttpParams({ fromObject: options.params });
                }
            }
            // Construct the request.
            req = new HttpRequest(first, /** @type {?} */ ((url)), (options.body !== undefined ? options.body : null), {
                headers: headers,
                params: params,
                reportProgress: options.reportProgress,
                // By default, JSON is assumed to be returned for all calls.
                responseType: options.responseType || 'json',
                withCredentials: options.withCredentials,
            });
        }
        // Start with an Observable.of() the initial request, and run the handler (which
        // includes all interceptors) inside a concatMap(). This way, the handler runs
        // inside an Observable chain, which causes interceptors to be re-run on every
        // subscription (this also makes retries re-run the handler, including interceptors).
        var /** @type {?} */ events$ = rxjs_operator_concatMap__WEBPACK_IMPORTED_MODULE_2__["concatMap"].call(Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(req), function (req) { return _this.handler.handle(req); });
        // If coming via the API signature which accepts a previously constructed HttpRequest,
        // the only option is to get the event stream. Otherwise, return the event stream if
        // that is what was requested.
        if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
        }
        // The requested stream contains either the full response or the body. In either
        // case, the first step is to filter the event stream to extract a stream of
        // responses(s).
        var /** @type {?} */ res$ = rxjs_operator_filter__WEBPACK_IMPORTED_MODULE_3__["filter"].call(events$, function (event) { return event instanceof HttpResponse; });
        // Decide which stream to return.
        switch (options.observe || 'body') {
            case 'body':
                // The requested stream is the body. Map the response stream to the response
                // body. This could be done more simply, but a misbehaving interceptor might
                // transform the response body into a different format and ignore the requested
                // responseType. Guard against this by validating that the response is of the
                // requested type.
                switch (req.responseType) {
                    case 'arraybuffer':
                        return rxjs_operator_map__WEBPACK_IMPORTED_MODULE_4__["map"].call(res$, function (res) {
                            // Validate that the body is an ArrayBuffer.
                            if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                throw new Error('Response is not an ArrayBuffer.');
                            }
                            return res.body;
                        });
                    case 'blob':
                        return rxjs_operator_map__WEBPACK_IMPORTED_MODULE_4__["map"].call(res$, function (res) {
                            // Validate that the body is a Blob.
                            if (res.body !== null && !(res.body instanceof Blob)) {
                                throw new Error('Response is not a Blob.');
                            }
                            return res.body;
                        });
                    case 'text':
                        return rxjs_operator_map__WEBPACK_IMPORTED_MODULE_4__["map"].call(res$, function (res) {
                            // Validate that the body is a string.
                            if (res.body !== null && typeof res.body !== 'string') {
                                throw new Error('Response is not a string.');
                            }
                            return res.body;
                        });
                    case 'json':
                    default:
                        // No validation needed for JSON responses, as they can be of any type.
                        return rxjs_operator_map__WEBPACK_IMPORTED_MODULE_4__["map"].call(res$, function (res) { return res.body; });
                }
            case 'response':
                // The response stream was requested directly, so return it.
                return res$;
            default:
                // Guard against new future observe types being added.
                throw new Error("Unreachable: unhandled observe type " + options.observe + "}");
        }
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * DELETE request to be executed on the server. See the individual overloads for
     * details of `delete()`'s return type based on the provided options.
     */
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * DELETE request to be executed on the server. See the individual overloads for
     * details of `delete()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.delete = /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * DELETE request to be executed on the server. See the individual overloads for
     * details of `delete()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('DELETE', url, /** @type {?} */ (options));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * GET request to be executed on the server. See the individual overloads for
     * details of `get()`'s return type based on the provided options.
     */
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * GET request to be executed on the server. See the individual overloads for
     * details of `get()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.get = /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * GET request to be executed on the server. See the individual overloads for
     * details of `get()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('GET', url, /** @type {?} */ (options));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * HEAD request to be executed on the server. See the individual overloads for
     * details of `head()`'s return type based on the provided options.
     */
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * HEAD request to be executed on the server. See the individual overloads for
     * details of `head()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.head = /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * HEAD request to be executed on the server. See the individual overloads for
     * details of `head()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('HEAD', url, /** @type {?} */ (options));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause a request
     * with the special method `JSONP` to be dispatched via the interceptor pipeline.
     *
     * A suitable interceptor must be installed (e.g. via the `HttpClientJsonpModule`).
     * If no such interceptor is reached, then the `JSONP` request will likely be
     * rejected by the configured backend.
     */
    /**
     * Constructs an `Observable` which, when subscribed, will cause a request
     * with the special method `JSONP` to be dispatched via the interceptor pipeline.
     *
     * A suitable interceptor must be installed (e.g. via the `HttpClientJsonpModule`).
     * If no such interceptor is reached, then the `JSONP` request will likely be
     * rejected by the configured backend.
     * @template T
     * @param {?} url
     * @param {?} callbackParam
     * @return {?}
     */
    HttpClient.prototype.jsonp = /**
     * Constructs an `Observable` which, when subscribed, will cause a request
     * with the special method `JSONP` to be dispatched via the interceptor pipeline.
     *
     * A suitable interceptor must be installed (e.g. via the `HttpClientJsonpModule`).
     * If no such interceptor is reached, then the `JSONP` request will likely be
     * rejected by the configured backend.
     * @template T
     * @param {?} url
     * @param {?} callbackParam
     * @return {?}
     */
    function (url, callbackParam) {
        return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
        });
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * OPTIONS request to be executed on the server. See the individual overloads for
     * details of `options()`'s return type based on the provided options.
     */
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * OPTIONS request to be executed on the server. See the individual overloads for
     * details of `options()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.options = /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * OPTIONS request to be executed on the server. See the individual overloads for
     * details of `options()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('OPTIONS', url, /** @type {?} */ (options));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * PATCH request to be executed on the server. See the individual overloads for
     * details of `patch()`'s return type based on the provided options.
     */
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * PATCH request to be executed on the server. See the individual overloads for
     * details of `patch()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.patch = /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * PATCH request to be executed on the server. See the individual overloads for
     * details of `patch()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PATCH', url, addBody(options, body));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     */
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.post = /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('POST', url, addBody(options, body));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     */
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.put = /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PUT', url, addBody(options, body));
    };
    HttpClient.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    HttpClient.ctorParameters = function () { return [
        { type: HttpHandler, },
    ]; };
    return HttpClient;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Intercepts `HttpRequest` and handles them.
 *
 * Most interceptors will transform the outgoing request before passing it to the
 * next interceptor in the chain, by calling `next.handle(transformedReq)`.
 *
 * In rare cases, interceptors may wish to completely handle a request themselves,
 * and not delegate to the remainder of the chain. This behavior is allowed.
 *
 * \@stable
 * @record
 */

/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 * \@stable
 */
var HttpInterceptorHandler = /** @class */ (function () {
    function HttpInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    HttpInterceptorHandler.prototype.handle = /**
     * @param {?} req
     * @return {?}
     */
    function (req) {
        return this.interceptor.intercept(req, this.next);
    };
    return HttpInterceptorHandler;
}());
/**
 * A multi-provider token which represents the array of `HttpInterceptor`s that
 * are registered.
 *
 * \@stable
 */
var HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('HTTP_INTERCEPTORS');
var NoopInterceptor = /** @class */ (function () {
    function NoopInterceptor() {
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    NoopInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        return next.handle(req);
    };
    NoopInterceptor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NoopInterceptor.ctorParameters = function () { return []; };
    return NoopInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
var nextRequestId = 0;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
var JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 * \@stable
 * @abstract
 */
var JsonpCallbackContext = /** @class */ (function () {
    function JsonpCallbackContext() {
    }
    return JsonpCallbackContext;
}());
/**
 * `HttpBackend` that only processes `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 *
 * \@stable
 */
var JsonpClientBackend = /** @class */ (function () {
    function JsonpClientBackend(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     * @return {?}
     */
    JsonpClientBackend.prototype.nextCallback = /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     * @return {?}
     */
    function () { return "ng_jsonp_callback_" + nextRequestId++; };
    /**
     * Process a JSONP request and return an event stream of the results.
     */
    /**
     * Process a JSONP request and return an event stream of the results.
     * @param {?} req
     * @return {?}
     */
    JsonpClientBackend.prototype.handle = /**
     * Process a JSONP request and return an event stream of the results.
     * @param {?} req
     * @return {?}
     */
    function (req) {
        var _this = this;
        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
        }
        else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        // Everything else happens inside the Observable boundary.
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"](function (observer) {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.
            var /** @type {?} */ callback = _this.nextCallback();
            var /** @type {?} */ url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=" + callback + "$1");
            // Construct the <script> tag and point it at the URL.
            var /** @type {?} */ node = _this.document.createElement('script');
            node.src = url;
            // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.
            var /** @type {?} */ body = null;
            // Whether the response callback has been called.
            var /** @type {?} */ finished = false;
            // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.
            var /** @type {?} */ cancelled = false;
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            _this.callbackMap[callback] = function (data) {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete _this.callbackMap[callback];
                // Next, make sure the request wasn't cancelled in the meantime.
                if (cancelled) {
                    return;
                }
                // Set state to indicate data was received.
                body = data;
                finished = true;
            };
            // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.
            var /** @type {?} */ cleanup = function () {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                // Remove the response callback from the callbackMap (window object in the
                // browser).
                delete _this.callbackMap[callback];
            };
            // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.
            var /** @type {?} */ onLoad = function (event) {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                    return;
                }
                // Cleanup the page.
                cleanup();
                // Check whether the response callback has run.
                if (!finished) {
                    // It hasn't, something went wrong with the request. Return an error via
                    // the Observable error path. All JSONP errors have status 0.
                    observer.error(new HttpErrorResponse({
                        url: url,
                        status: 0,
                        statusText: 'JSONP Error',
                        error: new Error(JSONP_ERR_NO_CALLBACK),
                    }));
                    return;
                }
                // Success. body either contains the response body or null if none was
                // returned.
                observer.next(new HttpResponse({
                    body: body,
                    status: 200,
                    statusText: 'OK', url: url,
                }));
                // Complete the stream, the response is over.
                observer.complete();
            };
            // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.
            var /** @type {?} */ onError = function (error) {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                    return;
                }
                cleanup();
                // Wrap the error in a HttpErrorResponse.
                observer.error(new HttpErrorResponse({
                    error: error,
                    status: 0,
                    statusText: 'JSONP Error', url: url,
                }));
            };
            // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.
            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);
            _this.document.body.appendChild(node);
            // The request has now been successfully sent.
            observer.next({ type: HttpEventType.Sent });
            // Cancellation handler.
            return function () {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true;
                // Remove the event listeners so they won't run if the events later fire.
                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError);
                // And finally, clean up the page.
                cleanup();
            };
        });
    };
    JsonpClientBackend.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    JsonpClientBackend.ctorParameters = function () { return [
        { type: JsonpCallbackContext, },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] },] },
    ]; };
    return JsonpClientBackend;
}());
/**
 * An `HttpInterceptor` which identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * \@stable
 */
var JsonpInterceptor = /** @class */ (function () {
    function JsonpInterceptor(jsonp) {
        this.jsonp = jsonp;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    JsonpInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        if (req.method === 'JSONP') {
            return this.jsonp.handle(/** @type {?} */ (req));
        }
        // Fall through for normal HTTP requests.
        return next.handle(req);
    };
    JsonpInterceptor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    JsonpInterceptor.ctorParameters = function () { return [
        { type: JsonpClientBackend, },
    ]; };
    return JsonpInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 * @param {?} xhr
 * @return {?}
 */
function getResponseUrl(xhr) {
    if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * \@stable
 * @abstract
 */
var XhrFactory = /** @class */ (function () {
    function XhrFactory() {
    }
    return XhrFactory;
}());
/**
 * A factory for \@{link HttpXhrBackend} that uses the `XMLHttpRequest` browser API.
 *
 * \@stable
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    /**
     * @return {?}
     */
    BrowserXhr.prototype.build = /**
     * @return {?}
     */
    function () { return /** @type {?} */ ((new XMLHttpRequest())); };
    BrowserXhr.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    BrowserXhr.ctorParameters = function () { return []; };
    return BrowserXhr;
}());
/**
 * An `HttpBackend` which uses the XMLHttpRequest API to send
 * requests to a backend server.
 *
 * \@stable
 */
var HttpXhrBackend = /** @class */ (function () {
    function HttpXhrBackend(xhrFactory) {
        this.xhrFactory = xhrFactory;
    }
    /**
     * Process a request and return a stream of response events.
     */
    /**
     * Process a request and return a stream of response events.
     * @param {?} req
     * @return {?}
     */
    HttpXhrBackend.prototype.handle = /**
     * Process a request and return a stream of response events.
     * @param {?} req
     * @return {?}
     */
    function (req) {
        var _this = this;
        // Quick check to give a better error message when a user attempts to use
        // HttpClient.jsonp() without installing the JsonpClientModule
        if (req.method === 'JSONP') {
            throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
        }
        // Everything happens on Observable subscription.
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"](function (observer) {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.
            var /** @type {?} */ xhr = _this.xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (!!req.withCredentials) {
                xhr.withCredentials = true;
            }
            // Add all the requested headers.
            req.headers.forEach(function (name, values) { return xhr.setRequestHeader(name, values.join(',')); });
            // Add an Accept header if one isn't present already.
            if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            // Auto-detect the Content-Type header if one isn't present already.
            if (!req.headers.has('Content-Type')) {
                var /** @type {?} */ detectedType = req.detectContentTypeHeader();
                // Sometimes Content-Type detection fails.
                if (detectedType !== null) {
                    xhr.setRequestHeader('Content-Type', detectedType);
                }
            }
            // Set the responseType if one was requested.
            if (req.responseType) {
                var /** @type {?} */ responseType = req.responseType.toLowerCase();
                // JSON responses need to be processed as text. This is because if the server
                // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                // xhr.response will be null, and xhr.responseText cannot be accessed to
                // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                // is parsed by first requesting text and then applying JSON.parse.
                xhr.responseType = /** @type {?} */ (((responseType !== 'json') ? responseType : 'text'));
            }
            // Serialize the request body if one is present. If not, this will be set to null.
            var /** @type {?} */ reqBody = req.serializeBody();
            // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.
            var /** @type {?} */ headerResponse = null;
            // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.
            var /** @type {?} */ partialFromXhr = function () {
                if (headerResponse !== null) {
                    return headerResponse;
                }
                // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).
                var /** @type {?} */ status = xhr.status === 1223 ? 204 : xhr.status;
                var /** @type {?} */ statusText = xhr.statusText || 'OK';
                // Parse headers from XMLHttpRequest - this step is lazy.
                var /** @type {?} */ headers = new HttpHeaders(xhr.getAllResponseHeaders());
                // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.
                var /** @type {?} */ url = getResponseUrl(xhr) || req.url;
                // Construct the HttpHeaderResponse and memoize it.
                headerResponse = new HttpHeaderResponse({ headers: headers, status: status, statusText: statusText, url: url });
                return headerResponse;
            };
            // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.
            var /** @type {?} */ onLoad = function () {
                // Read response state from the memoized partial data.
                var _a = partialFromXhr(), headers = _a.headers, status = _a.status, statusText = _a.statusText, url = _a.url;
                // The body will be read out if present.
                var /** @type {?} */ body = null;
                if (status !== 204) {
                    // Use XMLHttpRequest.response if set, responseText otherwise.
                    body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                }
                // Normalize another potential bug (this one comes from CORS).
                if (status === 0) {
                    status = !!body ? 200 : 0;
                }
                // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.
                var /** @type {?} */ ok = status >= 200 && status < 300;
                // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).
                if (req.responseType === 'json' && typeof body === 'string') {
                    // Save the original body, before attempting XSSI prefix stripping.
                    var /** @type {?} */ originalBody = body;
                    body = body.replace(XSSI_PREFIX, '');
                    try {
                        // Attempt the parse. If it fails, a parse error should be delivered to the user.
                        body = body !== '' ? JSON.parse(body) : null;
                    }
                    catch (/** @type {?} */ error) {
                        // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                        // JSON response. Restore the original body (including any XSSI prefix) to deliver
                        // a better error response.
                        body = originalBody;
                        // If this was an error request to begin with, leave it as a string, it probably
                        // just isn't JSON. Otherwise, deliver the parsing error to the user.
                        if (ok) {
                            // Even though the response status was 2xx, this is still an error.
                            ok = false;
                            // The parse error contains the text of the body that failed to parse.
                            body = /** @type {?} */ ({ error: error, text: body });
                        }
                    }
                }
                if (ok) {
                    // A successful response is delivered on the event stream.
                    observer.next(new HttpResponse({
                        body: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    observer.complete();
                }
                else {
                    // An unsuccessful request is delivered on the error channel.
                    observer.error(new HttpErrorResponse({
                        // The error in this case is the response body (error from the server).
                        error: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                }
            };
            // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.
            var /** @type {?} */ onError = function (error) {
                var /** @type {?} */ res = new HttpErrorResponse({
                    error: error,
                    status: xhr.status || 0,
                    statusText: xhr.statusText || 'Unknown Error',
                });
                observer.error(res);
            };
            // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.
            var /** @type {?} */ sentHeaders = false;
            // The download progress event handler, which is only registered if
            // progress events are enabled.
            var /** @type {?} */ onDownProgress = function (event) {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                    observer.next(partialFromXhr());
                    sentHeaders = true;
                }
                // Start building the download progress event to deliver on the response
                // event stream.
                var /** @type {?} */ progressEvent = {
                    type: HttpEventType.DownloadProgress,
                    loaded: event.loaded,
                };
                // Set the total number of bytes in the event if it's available.
                if (event.lengthComputable) {
                    progressEvent.total = event.total;
                }
                // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.
                if (req.responseType === 'text' && !!xhr.responseText) {
                    progressEvent.partialText = xhr.responseText;
                }
                // Finally, fire the event.
                observer.next(progressEvent);
            };
            // The upload progress event handler, which is only registered if
            // progress events are enabled.
            var /** @type {?} */ onUpProgress = function (event) {
                // Upload progress events are simpler. Begin building the progress
                // event.
                var /** @type {?} */ progress = {
                    type: HttpEventType.UploadProgress,
                    loaded: event.loaded,
                };
                // If the total number of bytes being uploaded is available, include
                // it.
                if (event.lengthComputable) {
                    progress.total = event.total;
                }
                // Send the event.
                observer.next(progress);
            };
            // By default, register for load and error events.
            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError);
            // Progress events are only enabled if requested.
            if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress);
                // Upload progress depends on whether there is a body to upload.
                if (reqBody !== null && xhr.upload) {
                    xhr.upload.addEventListener('progress', onUpProgress);
                }
            }
            // Fire the request, and notify the event stream that it was fired.
            xhr.send(reqBody);
            observer.next({ type: HttpEventType.Sent });
            // This is the return from the Observable function, which is the
            // request cancellation handler.
            return function () {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('load', onLoad);
                if (req.reportProgress) {
                    xhr.removeEventListener('progress', onDownProgress);
                    if (reqBody !== null && xhr.upload) {
                        xhr.upload.removeEventListener('progress', onUpProgress);
                    }
                }
                // Finally, abort the in-flight request.
                xhr.abort();
            };
        });
    };
    HttpXhrBackend.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    HttpXhrBackend.ctorParameters = function () { return [
        { type: XhrFactory, },
    ]; };
    return HttpXhrBackend;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_COOKIE_NAME');
var XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * \@stable
 * @abstract
 */
var HttpXsrfTokenExtractor = /** @class */ (function () {
    function HttpXsrfTokenExtractor() {
    }
    return HttpXsrfTokenExtractor;
}());
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
var HttpXsrfCookieExtractor = /** @class */ (function () {
    function HttpXsrfCookieExtractor(doc, platform, cookieName) {
        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * \@internal for testing
         */
        this.parseCount = 0;
    }
    /**
     * @return {?}
     */
    HttpXsrfCookieExtractor.prototype.getToken = /**
     * @return {?}
     */
    function () {
        if (this.platform === 'server') {
            return null;
        }
        var /** @type {?} */ cookieString = this.doc.cookie || '';
        if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵparseCookieValue"])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
        }
        return this.lastToken;
    };
    HttpXsrfCookieExtractor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    HttpXsrfCookieExtractor.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [XSRF_COOKIE_NAME,] },] },
    ]; };
    return HttpXsrfCookieExtractor;
}());
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
var HttpXsrfInterceptor = /** @class */ (function () {
    function HttpXsrfInterceptor(tokenService, headerName) {
        this.tokenService = tokenService;
        this.headerName = headerName;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    HttpXsrfInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        var /** @type {?} */ lcUrl = req.url.toLowerCase();
        // Skip both non-mutating requests and absolute URLs.
        // Non-mutating requests don't require a token, and absolute URLs require special handling
        // anyway as the cookie set
        // on our origin is not the same as the token expected by another origin.
        if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
            lcUrl.startsWith('https://')) {
            return next.handle(req);
        }
        var /** @type {?} */ token = this.tokenService.getToken();
        // Be careful not to overwrite an existing header of the same name.
        if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({ headers: req.headers.set(this.headerName, token) });
        }
        return next.handle(req);
    };
    HttpXsrfInterceptor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    HttpXsrfInterceptor.ctorParameters = function () { return [
        { type: HttpXsrfTokenExtractor, },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [XSRF_HEADER_NAME,] },] },
    ]; };
    return HttpXsrfInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An `HttpHandler` that applies a bunch of `HttpInterceptor`s
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 */
var HttpInterceptingHandler = /** @class */ (function () {
    function HttpInterceptingHandler(backend, injector) {
        this.backend = backend;
        this.injector = injector;
        this.chain = null;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    HttpInterceptingHandler.prototype.handle = /**
     * @param {?} req
     * @return {?}
     */
    function (req) {
        if (this.chain === null) {
            var /** @type {?} */ interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            this.chain = interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }, this.backend);
        }
        return this.chain.handle(req);
    };
    HttpInterceptingHandler.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    HttpInterceptingHandler.ctorParameters = function () { return [
        { type: HttpBackend, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
    ]; };
    return HttpInterceptingHandler;
}());
/**
 * Constructs an `HttpHandler` that applies a bunch of `HttpInterceptor`s
 * to a request before passing it to the given `HttpBackend`.
 *
 * Meant to be used as a factory function within `HttpClientModule`.
 *
 * \@stable
 * @param {?} backend
 * @param {?=} interceptors
 * @return {?}
 */
function interceptingHandler(backend, interceptors) {
    if (interceptors === void 0) { interceptors = []; }
    if (!interceptors) {
        return backend;
    }
    return interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }, backend);
}
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 * \@stable
 * @return {?}
 */
function jsonpCallbackContext() {
    if (typeof window === 'object') {
        return window;
    }
    return {};
}
/**
 * `NgModule` which adds XSRF protection support to outgoing requests.
 *
 * Provided the server supports a cookie-based XSRF protection system, this
 * module can be used directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no such names are provided, the default is to use `X-XSRF-TOKEN` for
 * the header name and `XSRF-TOKEN` for the cookie name.
 *
 * \@stable
 */
var HttpClientXsrfModule = /** @class */ (function () {
    function HttpClientXsrfModule() {
    }
    /**
     * Disable the default XSRF protection.
     */
    /**
     * Disable the default XSRF protection.
     * @return {?}
     */
    HttpClientXsrfModule.disable = /**
     * Disable the default XSRF protection.
     * @return {?}
     */
    function () {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
            ],
        };
    };
    /**
     * Configure XSRF protection to use the given cookie name or header name,
     * or the default names (as described above) if not provided.
     */
    /**
     * Configure XSRF protection to use the given cookie name or header name,
     * or the default names (as described above) if not provided.
     * @param {?=} options
     * @return {?}
     */
    HttpClientXsrfModule.withOptions = /**
     * Configure XSRF protection to use the given cookie name or header name,
     * or the default names (as described above) if not provided.
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
            ],
        };
    };
    HttpClientXsrfModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [
                        HttpXsrfInterceptor,
                        { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                        { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                        { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                        { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
                    ],
                },] },
    ];
    /** @nocollapse */
    HttpClientXsrfModule.ctorParameters = function () { return []; };
    return HttpClientXsrfModule;
}());
/**
 * `NgModule` which provides the `HttpClient` and associated services.
 *
 * Interceptors can be added to the chain behind `HttpClient` by binding them
 * to the multiprovider for `HTTP_INTERCEPTORS`.
 *
 * \@stable
 */
var HttpClientModule = /** @class */ (function () {
    function HttpClientModule() {
    }
    HttpClientModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        HttpClientXsrfModule.withOptions({
                            cookieName: 'XSRF-TOKEN',
                            headerName: 'X-XSRF-TOKEN',
                        }),
                    ],
                    providers: [
                        HttpClient,
                        { provide: HttpHandler, useClass: HttpInterceptingHandler },
                        HttpXhrBackend,
                        { provide: HttpBackend, useExisting: HttpXhrBackend },
                        BrowserXhr,
                        { provide: XhrFactory, useExisting: BrowserXhr },
                    ],
                },] },
    ];
    /** @nocollapse */
    HttpClientModule.ctorParameters = function () { return []; };
    return HttpClientModule;
}());
/**
 * `NgModule` which enables JSONP support in `HttpClient`.
 *
 * Without this module, Jsonp requests will reach the backend
 * with method JSONP, where they'll be rejected.
 *
 * \@stable
 */
var HttpClientJsonpModule = /** @class */ (function () {
    function HttpClientJsonpModule() {
    }
    HttpClientJsonpModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [
                        JsonpClientBackend,
                        { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                        { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
                    ],
                },] },
    ];
    /** @nocollapse */
    HttpClientJsonpModule.ctorParameters = function () { return []; };
    return HttpClientJsonpModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "./node_modules/linq-es2015/lib/generators.js":
/*!****************************************************!*\
  !*** ./node_modules/linq-es2015/lib/generators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

///////////////////////////////////////////////////////////////////////////////
//
// Licensed under the Apache License, Version 2.0  ( the  "License" );  you may 
// not use this file except in compliance with the License.  You may  obtain  a 
// copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required  by  applicable  law  or  agreed  to  in  writing,  software 
// distributed under the License is distributed on an "AS  IS"  BASIS,  WITHOUT
// WARRANTIES OR CONDITIONS  OF  ANY  KIND, either express or implied.  See the 
// License for the specific  language  governing  permissions  and  limitations 
// under the License.
Object.defineProperty(exports, "__esModule", { value: true });
function* Forward(target) {
    yield* target;
}
exports.Forward = Forward;
function* Reverse(target) {
    for (let i = target.length - 1; i >= 0; i--) {
        yield target[i];
    }
}
exports.Reverse = Reverse;
function* Select(target, transform) {
    let index = 0;
    for (let value of target) {
        yield transform(value, index++);
    }
}
exports.Select = Select;
function* DefaultIfEmpty(target, defaultValue) {
    let iterator = target[Symbol.iterator]();
    let result = iterator.next();
    if (result.done) {
        yield defaultValue;
    }
    else {
        yield* target;
    }
}
exports.DefaultIfEmpty = DefaultIfEmpty;
function* ChunkBy(target, keySelect, elementSelector, resultSelector) {
    let key, box, i = 0;
    for (let value of target) {
        let newKey = keySelect(value, i++);
        if (key !== newKey && box) {
            yield resultSelector(key, box);
            box = undefined;
        }
        if (!box) {
            box = new Array();
        }
        key = newKey;
        box.push(elementSelector(value));
    }
    if (box) {
        yield resultSelector(key, box);
    }
}
exports.ChunkBy = ChunkBy;
function* Distinct(target, keySelector) {
    let set = new Set();
    for (let value of target) {
        let key = keySelector(value);
        if (set.has(key))
            continue;
        set.add(key);
        yield value;
    }
}
exports.Distinct = Distinct;
function* DistinctFast(target) {
    let set = new Set();
    for (let value of target) {
        if (set.has(value))
            continue;
        set.add(value);
        yield value;
    }
}
exports.DistinctFast = DistinctFast;
function* OfType(target, obj, typeName) {
    if (typeName) {
        for (let value of target) {
            if (typeName == typeof (value)) {
                yield value;
            }
            else if (value instanceof obj) {
                yield value;
            }
        }
    }
    else {
        for (let value of target) {
            if (value instanceof obj) {
                yield value;
            }
        }
    }
}
exports.OfType = OfType;
function* Where(target, predicate) {
    let index = 0;
    for (let value of target) {
        if (!predicate(value, index++))
            continue;
        yield value;
    }
}
exports.Where = Where;
function* Skip(target, skip) {
    let index = 0;
    for (let value of target) {
        if (skip > index++)
            continue;
        yield value;
    }
}
exports.Skip = Skip;
function* SkipWhile(target, predicate) {
    let index = 0, skipped = false;
    for (let value of target) {
        if (!skipped && !(skipped = !predicate(value, index++)))
            continue;
        yield value;
    }
}
exports.SkipWhile = SkipWhile;
function* TakeWhile(target, predicate) {
    let index = 0;
    for (let value of target) {
        if (!predicate(value, index++))
            break;
        yield value;
    }
}
exports.TakeWhile = TakeWhile;
function* Intersect(target, exceptions, condition, keySelect) {
    if (keySelect) {
        for (let value of target) {
            if (condition == exceptions.has(keySelect(value)))
                continue;
            yield value;
        }
    }
    else {
        for (let value of target) {
            if (condition == exceptions.has(value))
                continue;
            yield value;
        }
    }
}
exports.Intersect = Intersect;
function* Repeat(value, count) {
    for (let i = 0; i < count; i++) {
        yield value;
    }
}
exports.Repeat = Repeat;
function* Range(value, count) {
    let current = value;
    for (let i = 0; i < count; i++) {
        yield current;
        current++;
    }
}
exports.Range = Range;
function* Union(first, second, keySelector) {
    let set = new Set();
    for (let value of first) {
        let key = keySelector(value);
        if (set.has(key))
            continue;
        set.add(key);
        yield value;
    }
    for (let value of second) {
        let key = keySelector(value);
        if (set.has(key))
            continue;
        set.add(key);
        yield value;
    }
}
exports.Union = Union;
function* UnionFast(first, second) {
    let set = new Set();
    for (let value of first) {
        if (set.has(value))
            continue;
        set.add(value);
        yield value;
    }
    for (let value of second) {
        if (set.has(value))
            continue;
        set.add(value);
        yield value;
    }
}
exports.UnionFast = UnionFast;
function* Join(target, oKeySelect, transform, map) {
    for (let value of target) {
        let key = oKeySelect(value);
        if (!key)
            continue;
        let innerSet = map.get(key);
        if (!innerSet)
            continue;
        for (let inner of innerSet) {
            yield transform(value, inner);
        }
    }
}
exports.Join = Join;
function* GroupJoin(target, oKeySelect, transform, map) {
    for (let value of target) {
        let innerSet = undefined;
        let key = oKeySelect(value);
        if (key) {
            innerSet = map.get(key);
        }
        yield transform(value, innerSet);
    }
}
exports.GroupJoin = GroupJoin;
function* GroupBy(map, resultSelect) {
    for (let key of map.keys()) {
        yield resultSelect(key, map.get(key));
    }
}
exports.GroupBy = GroupBy;
function* SelectMany(target, selector, transform) {
    let index = 0;
    for (let item of target) {
        for (let collectionItem of selector(item, index++)) {
            yield transform(item, collectionItem);
        }
    }
}
exports.SelectMany = SelectMany;
function* Concat(target, second) {
    yield* target;
    yield* second;
}
exports.Concat = Concat;
function* Zip(first, second, transform, _index = 0) {
    let iteratorOne = first[Symbol.iterator]();
    let iteratorTwo = second[Symbol.iterator]();
    let retOne, retTwo;
    while (!(retOne = iteratorOne.next()).done && !(retTwo = iteratorTwo.next()).done) {
        yield transform(retOne.value, retTwo.value);
    }
}
exports.Zip = Zip;
/** Copyright (c) ENikS.  All rights reserved. */
//# sourceMappingURL=generators.js.map

/***/ }),

/***/ "./node_modules/linq-es2015/lib/iterators.js":
/*!***************************************************!*\
  !*** ./node_modules/linq-es2015/lib/iterators.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

///////////////////////////////////////////////////////////////////////////////
//
// Licensed under the Apache License, Version 2.0  ( the  "License" );  you may 
// not use this file except in compliance with the License.  You may  obtain  a 
// copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required  by  applicable  law  or  agreed  to  in  writing,  software 
// distributed under the License is distributed on an "AS  IS"  BASIS,  WITHOUT
// WARRANTIES OR CONDITIONS  OF  ANY  KIND, either express or implied.  See the 
// License for the specific  language  governing  permissions  and  limitations 
// under the License.
Object.defineProperty(exports, "__esModule", { value: true });
//-----------------------------------------------------------------------------
//  CSharp Enumerator implementation
//-----------------------------------------------------------------------------
//  Gets Iterator and turns it into CSharpEnumerator 
class CSharpEnumerator {
    constructor(sourceIterator) {
        this._iterator = sourceIterator;
    }
    /** Gets the current element in the collection. */
    get Current() {
        return this._result.value;
    }
    /** Advances the enumerator to the next element of the collection.*/
    MoveNext() {
        this._result = this._iterator.next();
        return !this._result.done;
    }
    /** Sets the enumerator to its initial position, which is before the first
    * element in the collection. */
    Reset() {
        throw "JavaScript iterators could not be Reset";
    }
}
exports.CSharpEnumerator = CSharpEnumerator;
/** Copyright (c) ENikS.  All rights reserved. */
//# sourceMappingURL=iterators.js.map

/***/ }),

/***/ "./node_modules/linq-es2015/lib/linq.js":
/*!**********************************************!*\
  !*** ./node_modules/linq-es2015/lib/linq.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

///////////////////////////////////////////////////////////////////////////////
//
// Licensed under the Apache License, Version 2.0  ( the  "License" );  you may 
// not use this file except in compliance with the License.  You may  obtain  a 
// copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required  by  applicable  law  or  agreed  to  in  writing,  software 
// distributed under the License is distributed on an "AS  IS"  BASIS,  WITHOUT
// WARRANTIES OR CONDITIONS  OF  ANY  KIND, either express or implied.  See the 
// License for the specific  language  governing  permissions  and  limitations 
// under the License.
Object.defineProperty(exports, "__esModule", { value: true });
const Generator = __webpack_require__(/*! ./generators */ "./node_modules/linq-es2015/lib/generators.js");
const Constant = __webpack_require__(/*! ./utilities */ "./node_modules/linq-es2015/lib/utilities.js");
const Iterator = __webpack_require__(/*! ./iterators */ "./node_modules/linq-es2015/lib/iterators.js");
//-----------------------------------------------------------------------------
//  Implementation of EnumerableConstructor interface
//-----------------------------------------------------------------------------
/**
* Converts any Iterable<T> object into LINQ-able object
* @param TSource An Array, Map, Set, String or other Iterable object.
*/
function getEnumerable(TSource) {
    return new EnumerableImpl(TSource);
}
exports.default = getEnumerable;
exports.AsEnumerable = getEnumerable;
exports.asEnumerable = getEnumerable;
exports.From = getEnumerable;
exports.from = getEnumerable;
/**
* Generates <count> of <T> elements starting with <start>. T is any
* type which could be cast to number: number, enum, etc.
* @param start First value in sequence.
* @param count Number of elements to iteratel.
* @example
*     var sum = Range(0, 7).Sum();
*/
function getRange(start, count) {
    return new EnumerableImpl(undefined, Generator.Range, [start, count]);
}
exports.range = getRange;
exports.Range = getRange;
/**
* Repeat element <start> of type T <count> of times.
* @param start First value in sequence.
* @param count Number of elements to iteratel.
* @example
*     var sum = Repeat("v", 7);
*/
function getRepeat(value, count) {
    return new EnumerableImpl(undefined, Generator.Repeat, [value, count]);
}
exports.repeat = getRepeat;
exports.Repeat = getRepeat;
//-----------------------------------------------------------------------------
//  Enumerable Implementation
//-----------------------------------------------------------------------------
class EnumerableImpl {
    constructor(target, factory, arg) {
        this._target = target;
        this._factory = factory;
        this._factoryArg = arg;
        // JavaScript naming convention
        this['aggregate'] = this.Aggregate;
        this['all'] = this.All;
        this['any'] = this.Any;
        this['average'] = this.Average;
        this['chunkBy'] = this.ChunkBy;
        this['contains'] = this.Contains;
        this['count'] = this.Count;
        this['max'] = this.Max;
        this['min'] = this.Min;
        this['elementAt'] = this.ElementAt;
        this['elementAtOrDefault'] = this.ElementAtOrDefault;
        this['first'] = this.First;
        this['firstOrDefault'] = this.FirstOrDefault;
        this['last'] = this.Last;
        this['lastOrDefault'] = this.LastOrDefault;
        this['sequenceEqual'] = this.SequenceEqual;
        this['single'] = this.Single;
        this['singleOrDefault'] = this.SingleOrDefault;
        this['sum'] = this.Sum;
        this['toArray'] = this.ToArray;
        this['toMap'] = this.ToMap;
        this['toDictionary'] = this.ToDictionary;
        this['defaultIfEmpty'] = this.DefaultIfEmpty;
        this['concat'] = this.Concat;
        this['distinct'] = this.Distinct;
        this['except'] = this.Except;
        this['groupBy'] = this.GroupBy;
        this['groupJoin'] = this.GroupJoin;
        this['intersect'] = this.Intersect;
        this['join'] = this.Join;
        this['ofType'] = this.OfType;
        this['orderBy'] = this.OrderBy;
        this['orderByDescend'] = this.OrderByDescending;
        this['range'] = this.Range;
        this['repeat'] = this.Repeat;
        this['reverse'] = this.Reverse;
        this['select'] = this.Select;
        this['selectMany'] = this.SelectMany;
        this['skip'] = this.Skip;
        this['skipWhile'] = this.SkipWhile;
        this['take'] = this.Take;
        this['takeWhile'] = this.TakeWhile;
        this['union'] = this.Union;
        this['where'] = this.Where;
        this['zip'] = this.Zip;
    }
    ///////////////////////////////////////////////////////////////////////////
    /** Returns JavaScript iterator */
    [Symbol.iterator]() {
        return (null != this._factory) ? this._factory.apply(this, this._factoryArg)
            : this._target[Symbol.iterator]();
    }
    /** Returns C# style enumerator */
    GetEnumerator() {
        return new Iterator.CSharpEnumerator(this[Symbol.iterator]());
    }
    Aggregate(alpha, beta = Constant.selfFn, gamma = Constant.selfFn) {
        let zero;
        let method;
        let selector;
        if (Constant.CONST_FUNCTION === typeof alpha) {
            method = alpha;
            selector = beta;
        }
        else {
            zero = alpha;
            method = beta;
            selector = gamma;
        }
        let result = zero;
        for (let value of this) {
            if ([null, undefined].indexOf(result) > -1 || (isNaN(result) && !result))
                result = Constant.getDefaultVal(typeof (value));
            result = method(result, value);
        }
        return selector(result);
    }
    All(predicate = Constant.trueFn) {
        for (let value of this) {
            if (!predicate(value)) {
                return false;
            }
        }
        return true;
    }
    Any(predicate) {
        let iterator;
        // Check if at least one exist
        if (!predicate && (iterator = this[Symbol.iterator]())) {
            return !iterator.next().done;
        }
        // Check if any satisfy the criteria
        for (let value of this) {
            if (predicate(value)) {
                return true;
            }
        }
        return false;
    }
    Average(func = Constant.selfFn) {
        let sum = 0, count = 0;
        for (let value of this) {
            sum += func(value);
            count++;
        }
        return sum / count;
    }
    Contains(value, equal = (a, b) => a === b) {
        for (let item of this) {
            if (equal(item, value)) {
                return true;
            }
        }
        return false;
    }
    Count(predicate) {
        let count = 0;
        if (predicate) {
            for (let value of this) {
                if (predicate(value)) {
                    count++;
                }
            }
        }
        else if (this._target && this._target[Constant.CONST_LENGTH]) {
            count = this._target[Constant.CONST_LENGTH];
        }
        else {
            for (let value of this) {
                count++;
            }
        }
        return count;
    }
    Max(transform = Constant.selfFn) {
        let value, max, hasValue = false;
        for (let item of this) {
            value = transform(item);
            if (hasValue) {
                if (max < value)
                    max = value;
            }
            else {
                max = value;
                hasValue = true;
            }
        }
        if (!hasValue)
            throw Constant.CONST_NO_ELEMENTS;
        return max;
    }
    Min(transform = Constant.selfFn) {
        let value, min, hasValue = false;
        for (let item of this) {
            value = transform(item);
            if (hasValue) {
                if (min > value)
                    min = value;
            }
            else {
                min = value;
                hasValue = true;
            }
        }
        if (!hasValue)
            throw Constant.CONST_NO_ELEMENTS;
        return min;
    }
    ElementAt(index) {
        if (Array.isArray(this._target)) {
            if (0 > index ||
                this._target[Constant.CONST_LENGTH] <= index) {
                throw Constant.CONST_OUTOFRANGE;
            }
            return this._target[index];
        }
        let count = 0;
        for (let value of this) {
            if (index > count++) {
                continue;
            }
            return value;
        }
        throw Constant.CONST_OUTOFRANGE;
    }
    ElementAtOrDefault(index) {
        if (Array.isArray(this._target)) {
            let length = this._target[Constant.CONST_LENGTH];
            if (0 > index || length <= index) {
                let value = this._target[0];
                return 0 < length
                    ? Constant.getDefaultVal(typeof (value), value)
                    : undefined;
            }
            return this._target[index];
        }
        let value, count = 0;
        for (let item of this) {
            if (index === count++) {
                return item;
            }
            value = item;
        }
        return Constant.getDefaultVal(typeof value, value); // Last good value
    }
    First(predicate = Constant.trueFn) {
        for (let value of this) {
            if (predicate(value)) {
                return value;
            }
        }
        throw Constant.CONST_NOTHING_FOUND;
    }
    FirstOrDefault(predicate = Constant.trueFn) {
        let value;
        for (let item of this) {
            value = item;
            if (predicate(item)) {
                return item;
            }
        }
        return Constant.getDefaultVal(typeof value); // Last good value
    }
    Last(predicate = Constant.trueFn) {
        let value, found = false;
        for (let item of this) {
            if (predicate(item)) {
                value = item;
                found = true;
            }
        }
        if (!found) {
            throw Constant.CONST_NOTHING_FOUND;
        }
        return value;
    }
    LastOrDefault(predicate = Constant.trueFn) {
        let value, lastKnown, found = false;
        for (let item of this) {
            if (predicate(item)) {
                value = item;
                found = true;
            }
            lastKnown = item;
        }
        return (found) ? value : Constant.getDefaultVal(typeof lastKnown);
    }
    SequenceEqual(other, equal = (a, b) => a === b) {
        let res1, res2;
        let it1 = this[Symbol.iterator]();
        let it2 = other[Symbol.iterator]();
        while (true) {
            res1 = it1.next();
            res2 = it2.next();
            if (res1.done && res2.done)
                return true;
            if ((res1.done != res2.done) || !equal(res1.value, res2.value)) {
                return false;
            }
        }
        ;
    }
    Single(predicate = Constant.trueFn) {
        let value, hasValue = false;
        for (let item of this) {
            if (predicate(item)) {
                if (!hasValue) {
                    value = item;
                    hasValue = true;
                }
                else {
                    throw Constant.CONST_TOO_MANY;
                }
            }
        }
        if (hasValue)
            return value;
        throw Constant.CONST_NOTHING_FOUND;
    }
    SingleOrDefault(predicate = Constant.trueFn) {
        let value, lastKnown, hasValue = false;
        for (let item of this) {
            if (predicate(item)) {
                if (!hasValue) {
                    value = item;
                    hasValue = true;
                }
                else {
                    throw Constant.CONST_TOO_MANY;
                }
            }
            lastKnown = item;
        }
        return (hasValue) ? value : Constant.getDefaultVal(typeof lastKnown);
    }
    Sum(transform = Constant.selfFn) {
        let sum = 0;
        for (let value of this) {
            sum += transform(value);
        }
        return sum;
    }
    ToArray() {
        let array = [];
        for (let value of this) {
            array.push(value);
        }
        return array;
    }
    ToMap(keySelector, elementSelector = Constant.selfFn) {
        let dictionary = new Map();
        for (let value of this) {
            dictionary.set(keySelector(value), elementSelector(value));
        }
        return dictionary;
    }
    ToDictionary(keySelector, elementSelector = Constant.selfFn) {
        let dictionary = new Map();
        for (let value of this) {
            dictionary.set(keySelector(value), elementSelector(value));
        }
        return dictionary;
    }
    Cast() {
        // TODO: Remove any once TypeScript 2.0 out
        return this;
    }
    //-------------------------------------------------------------------------
    //  Deferred execution methods
    //-------------------------------------------------------------------------
    DefaultIfEmpty(defaultValue = undefined) {
        return new EnumerableImpl(undefined, Generator.DefaultIfEmpty, [this, defaultValue]);
    }
    Concat(second) {
        return new EnumerableImpl(undefined, Generator.Concat, [this, second]);
    }
    ChunkBy(keySelect, elementSelector = Constant.selfFn, resultSelector = (a, b) => b) {
        return new EnumerableImpl(undefined, Generator.ChunkBy, [this, keySelect, elementSelector, resultSelector]);
    }
    Distinct(keySelector) {
        if (keySelector)
            return new EnumerableImpl(undefined, Generator.Distinct, [this, keySelector]);
        return new EnumerableImpl(undefined, Generator.DistinctFast, [this]);
    }
    Except(other, keySelector) {
        return new EnumerableImpl(undefined, Generator.Intersect, [this, Constant.getKeys(other, keySelector), true, keySelector]);
    }
    GroupBy(selKey, selElement = Constant.selfFn, selResult = Constant.defGrouping) {
        let map = Constant.getKeyedMap(this, selKey, selElement);
        return new EnumerableImpl(undefined, Generator.GroupBy, [map, selResult]);
    }
    GroupJoin(inner, oKeySelect, iKeySelect, resultSelector = Constant.defGrouping) {
        return new EnumerableImpl(undefined, Generator.GroupJoin, [this, oKeySelect, resultSelector,
            Constant.getKeyedMapFast(inner, iKeySelect)]);
    }
    Intersect(other, keySelector) {
        return new EnumerableImpl(undefined, Generator.Intersect, [this,
            Constant.getKeys(other, keySelector),
            false, keySelector]);
    }
    Join(inner, oSelector, iSelector, transform) {
        return new EnumerableImpl(undefined, Generator.Join, [this, oSelector, transform, Constant.getKeyedMapFast(inner, iSelector)]);
    }
    OfType(obj) {
        let typeName;
        switch (obj) {
            case Number:
                typeName = Constant.CONST_NUMBER;
                break;
            case Boolean:
                typeName = Constant.CONST_BOOLEAN;
                break;
            case String:
                typeName = Constant.CONST_STRING;
                break;
            case Symbol:
                typeName = Constant.CONST_SYMBOL;
                break;
            default:
                typeName = undefined;
        }
        return new EnumerableImpl(undefined, Generator.OfType, [this, obj, typeName]);
    }
    OrderBy(keySelect, equal) {
        return new OrderedLinq(this, (array) => Generator.Forward(array), keySelect, equal);
    }
    OrderByDescending(keySelect, equal) {
        return new OrderedLinq(this, (array) => Generator.Reverse(array), keySelect, equal, true);
    }
    Range(start, count) {
        return new EnumerableImpl(undefined, Generator.Range, [start, count]);
    }
    Repeat(element, count) {
        return new EnumerableImpl(undefined, Generator.Repeat, [element, count]);
    }
    Reverse() {
        let array = Array.isArray(this._target)
            ? this._target : this.ToArray();
        return new EnumerableImpl(undefined, Generator.Reverse, [array]);
    }
    Select(transform) {
        return new EnumerableImpl(undefined, Generator.Select, [this, transform]);
    }
    SelectMany(selector = Constant.selfFn, result = (x, s) => s) {
        return new EnumerableImpl(undefined, Generator.SelectMany, [this, selector, result]);
    }
    Skip(skip) {
        return new EnumerableImpl(undefined, Generator.Skip, [this, skip]);
    }
    SkipWhile(predicate) {
        return new EnumerableImpl(undefined, Generator.SkipWhile, [this, predicate]);
    }
    Take(take) {
        return new EnumerableImpl(undefined, Generator.TakeWhile, [this, (a, n) => take > n]);
    }
    TakeWhile(predicate) {
        return new EnumerableImpl(undefined, Generator.TakeWhile, [this, predicate]);
    }
    Union(second, keySelector) {
        if (keySelector)
            return new EnumerableImpl(undefined, Generator.Union, [this, second, keySelector]);
        return new EnumerableImpl(undefined, Generator.UnionFast, [this, second]);
    }
    Where(predicate = Constant.trueFn) {
        return new EnumerableImpl(undefined, Generator.Where, [this, predicate]);
    }
    Zip(second, func) {
        return new EnumerableImpl(undefined, Generator.Zip, [this, second, func]);
    }
}
class OrderedLinq extends EnumerableImpl {
    constructor(target, factory, keySelect, equal, reversed = false) {
        super(target, factory);
        this.reversed = reversed;
        if (keySelect) {
            this.comparer = equal ? (a, b) => equal(keySelect(a), keySelect(b))
                : (a, b) => Constant.defCompare(keySelect(a), keySelect(b));
        }
        else {
            this.comparer = equal;
        }
        this['thenBy'] = this.ThenBy;
        this['thenByDescending'] = this.ThenByDescending;
    }
    [Symbol.iterator]() {
        if (!this._factoryArg) {
            this._factoryArg = this._target.ToArray();
            if (this.comparer) {
                this._factoryArg.sort(this.comparer);
            }
            else {
                this._factoryArg.sort();
            }
        }
        return this._factory(this._factoryArg);
    }
    ThenBy(keySelect, equal) {
        if (!keySelect && !equal)
            return this;
        var compare = keySelect ? equal ? (a, b) => equal(keySelect(a), keySelect(b))
            : (a, b) => Constant.defCompare(keySelect(a), keySelect(b))
            : equal;
        if (!this.comparer) {
            this.comparer = compare;
        }
        else {
            let superEqual = this.comparer;
            this.comparer = (a, b) => {
                let result = superEqual(a, b);
                return (0 != result) ? result : this.reversed ? -compare(a, b) : compare(a, b);
            };
        }
        return this;
    }
    ThenByDescending(keySelect, equal) {
        if (!keySelect && !equal)
            return this;
        var compare = keySelect ? equal ? (a, b) => equal(keySelect(a), keySelect(b))
            : (a, b) => Constant.defCompare(keySelect(a), keySelect(b))
            : equal;
        if (!this.comparer) {
            this.comparer = compare;
        }
        else {
            let superEqual = this.comparer;
            this.comparer = (a, b) => {
                let result = superEqual(a, b);
                return (0 != result) ? result : this.reversed ? compare(a, b) : -compare(a, b);
            };
        }
        return this;
    }
}
/** Copyright (c) ENikS.  All rights reserved. */
//# sourceMappingURL=linq.js.map

/***/ }),

/***/ "./node_modules/linq-es2015/lib/utilities.js":
/*!***************************************************!*\
  !*** ./node_modules/linq-es2015/lib/utilities.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

///////////////////////////////////////////////////////////////////////////////
//
// Licensed under the Apache License, Version 2.0  ( the  "License" );  you may 
// not use this file except in compliance with the License.  You may  obtain  a 
// copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required  by  applicable  law  or  agreed  to  in  writing,  software 
// distributed under the License is distributed on an "AS  IS"  BASIS,  WITHOUT
// WARRANTIES OR CONDITIONS  OF  ANY  KIND, either express or implied.  See the 
// License for the specific  language  governing  permissions  and  limitations 
// under the License.
Object.defineProperty(exports, "__esModule", { value: true });
//-----------------------------------------------------------------------------
// Utility Functions
//-----------------------------------------------------------------------------
/** Default predicate, always true */
exports.trueFn = () => true;
/** Default transformer, returns self */
exports.selfFn = (o) => o;
/** Default Grouping */
exports.defGrouping = (a, b) => {
    if (!b[exports.CONST_KEY]) {
        b[exports.CONST_KEY] = a;
    }
    return b;
};
exports.defCompare = (a, b) => {
    return a == b ? 0 : a > b ? 1 : -1;
};
/** Returns default value for the type */
function getDefaultVal(type, value = undefined) {
    if (typeof type !== exports.CONST_STRING)
        throw new TypeError(exports.CONST_NO_STRING);
    // Handle simple types (primitives and plain function/object)
    switch (type) {
        case exports.CONST_BOOLEAN: return false;
        case exports.CONST_NUMBER: return 0;
        case exports.CONST_OBJECT: return null === value ? null : undefined;
        case exports.CONST_STRING: return exports.CONST_EMPTY_STRING;
        case exports.CONST_SYMBOL: return Symbol();
    }
    return undefined;
}
exports.getDefaultVal = getDefaultVal;
/** Returns a map of element bsed on extracted keys  **/
function getKeyedMap(iterable, keySelector, selElement = exports.selfFn) {
    let map = new Map();
    for (let value of iterable) {
        let key = keySelector(value);
        if (!key)
            continue;
        let group = map.get(key);
        if (!group) {
            group = [];
            map.set(key, group);
        }
        group.push(selElement(value));
    }
    return map;
}
exports.getKeyedMap = getKeyedMap;
function getKeyedMapFast(iterable, keySelector) {
    let map = new Map();
    for (let value of iterable) {
        let key = keySelector(value);
        if (!key)
            continue;
        let group = map.get(key);
        if (!group) {
            group = [];
            map.set(key, group);
        }
        group.push(value);
    }
    return map;
}
exports.getKeyedMapFast = getKeyedMapFast;
function getKeys(iterable, keySelector) {
    let set = new Set();
    if (keySelector) {
        for (let value of iterable) {
            let key = keySelector(value);
            if (!key)
                continue;
            set.add(key);
        }
    }
    else {
        for (let value of iterable) {
            if (!value)
                continue;
            set.add(value);
        }
    }
    return set;
}
exports.getKeys = getKeys;
//-----------------------------------------------------------------------------
//  Constants
//-----------------------------------------------------------------------------
exports.CONST_INVALID_KEY = "Key selector returned undefined Key";
exports.CONST_NO_STRING = "Type must be a string.";
exports.CONST_DUPLICATE = "Object already has property [key]";
exports.CONST_NOTHING_FOUND = "No element satisfies the condition in predicate";
exports.CONST_NO_ELEMENTS = "The source sequence is empty.";
exports.CONST_TOO_MANY = "More than one element satisfies the condition in predicate.";
exports.CONST_OUTOFRANGE = "Argument Out Of Range";
exports.CONST_KEY = "key";
exports.CONST_UNDEFINED = "undefined";
exports.CONST_LENGTH = "length";
exports.CONST_FUNCTION = "function";
exports.CONST_BOOLEAN = "boolean";
exports.CONST_NUMBER = "number";
exports.CONST_OBJECT = "object";
exports.CONST_STRING = "string";
exports.CONST_SYMBOL = "symbol";
exports.CONST_EMPTY_STRING = "";
/** Copyright (c) ENikS.  All rights reserved. */
//# sourceMappingURL=utilities.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/component-loader/component-loader.class.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/component-loader/component-loader.class.js ***!
  \*******************************************************************************/
/*! exports provided: ComponentLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLoader", function() { return ComponentLoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _utils_triggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/triggers */ "./node_modules/ngx-bootstrap/utils/triggers.js");
/* harmony import */ var _content_ref_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-ref.class */ "./node_modules/ngx-bootstrap/component-loader/content-ref.class.js");
// tslint:disable:max-file-line-count
// todo: add delay support
// todo: merge events onShow, onShown, etc...
// todo: add global positioning configuration?



var ComponentLoader = (function () {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * @internal
     */
    // tslint:disable-next-line
    function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBeforeHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._providers = [];
        this._isHiding = false;
        this._listenOpts = {};
        this._globalListener = Function.prototype;
    }
    Object.defineProperty(ComponentLoader.prototype, "isShown", {
        get: function () {
            if (this._isHiding) {
                return false;
            }
            return !!this._componentRef;
        },
        enumerable: true,
        configurable: true
    });
    ComponentLoader.prototype.attach = function (compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    };
    // todo: add behaviour: to target element, `body`, custom element
    ComponentLoader.prototype.to = function (container) {
        this.container = container || this.container;
        return this;
    };
    ComponentLoader.prototype.position = function (opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = opts.target || this._elementRef;
        return this;
    };
    ComponentLoader.prototype.provide = function (provider) {
        this._providers.push(provider);
        return this;
    };
    // todo: appendChild to element or document.querySelector(this.container)
    ComponentLoader.prototype.show = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
            var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].resolveAndCreate(this._providers, this._injector);
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) {
                this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
            }
            if (this.container === 'body' && typeof document !== 'undefined') {
                document
                    .querySelector(this.container)
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (!this.container &&
                this._elementRef &&
                this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            if (this._contentRef.componentRef) {
                this._innerComponent = this._contentRef.componentRef.instance;
                this._contentRef.componentRef.changeDetectorRef.markForCheck();
                this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }
            this._componentRef.changeDetectorRef.markForCheck();
            this._componentRef.changeDetectorRef.detectChanges();
            this.onShown.emit(this._componentRef.instance);
        }
        this._registerOutsideClick();
        return this._componentRef;
    };
    ComponentLoader.prototype.hide = function () {
        if (!this._componentRef) {
            return this;
        }
        this.onBeforeHide.emit(this._componentRef.instance);
        var componentEl = this._componentRef.location.nativeElement;
        componentEl.parentNode.removeChild(componentEl);
        if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
        }
        this._componentRef.destroy();
        if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        }
        if (this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
        }
        // this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._componentRef.hostView));
        //
        // if (this._contentRef.viewRef && this._viewContainerRef.indexOf(this._contentRef.viewRef) !== -1) {
        //   this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        // }
        this._contentRef = null;
        this._componentRef = null;
        this._removeGlobalListener();
        this.onHidden.emit();
        return this;
    };
    ComponentLoader.prototype.toggle = function () {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    };
    ComponentLoader.prototype.dispose = function () {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    };
    ComponentLoader.prototype.listen = function (listenOpts) {
        var _this = this;
        this.triggers = listenOpts.triggers || this.triggers;
        this._listenOpts.outsideClick = listenOpts.outsideClick;
        listenOpts.target = listenOpts.target || this._elementRef.nativeElement;
        var hide = (this._listenOpts.hide = function () {
            return listenOpts.hide ? listenOpts.hide() : void _this.hide();
        });
        var show = (this._listenOpts.show = function (registerHide) {
            listenOpts.show ? listenOpts.show(registerHide) : _this.show(registerHide);
            registerHide();
        });
        var toggle = function (registerHide) {
            _this.isShown ? hide() : show(registerHide);
        };
        this._unregisterListenersFn = Object(_utils_triggers__WEBPACK_IMPORTED_MODULE_1__["listenToTriggersV2"])(this._renderer, {
            target: listenOpts.target,
            triggers: listenOpts.triggers,
            show: show,
            hide: hide,
            toggle: toggle
        });
        return this;
    };
    ComponentLoader.prototype._removeGlobalListener = function () {
        if (this._globalListener) {
            this._globalListener();
            this._globalListener = null;
        }
    };
    ComponentLoader.prototype.attachInline = function (vRef, template) {
        this._inlineViewRef = vRef.createEmbeddedView(template);
        return this;
    };
    ComponentLoader.prototype._registerOutsideClick = function () {
        var _this = this;
        if (!this._componentRef || !this._componentRef.location) {
            return;
        }
        // why: should run after first event bubble
        if (this._listenOpts.outsideClick) {
            var target_1 = this._componentRef.location.nativeElement;
            setTimeout(function () {
                _this._globalListener = Object(_utils_triggers__WEBPACK_IMPORTED_MODULE_1__["registerOutsideClick"])(_this._renderer, {
                    targets: [target_1, _this._elementRef.nativeElement],
                    outsideClick: _this._listenOpts.outsideClick,
                    hide: function () { return _this._listenOpts.hide(); }
                });
            });
        }
    };
    ComponentLoader.prototype.getInnerComponent = function () {
        return this._innerComponent;
    };
    ComponentLoader.prototype._subscribePositioning = function () {
        var _this = this;
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone.onStable.subscribe(function () {
            if (!_this._componentRef) {
                return;
            }
            _this._posService.position({
                element: _this._componentRef.location,
                target: _this._elementRef,
                attachment: _this.attachment,
                appendToBody: _this.container === 'body'
            });
        });
    };
    ComponentLoader.prototype._unsubscribePositioning = function () {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    };
    ComponentLoader.prototype._getContentRef = function (content, context, initialState) {
        if (!content) {
            return new _content_ref_class__WEBPACK_IMPORTED_MODULE_2__["ContentRef"]([]);
        }
        if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            if (this._viewContainerRef) {
                var _viewRef = this._viewContainerRef
                    .createEmbeddedView(content, context);
                _viewRef.markForCheck();
                return new _content_ref_class__WEBPACK_IMPORTED_MODULE_2__["ContentRef"]([_viewRef.rootNodes], _viewRef);
            }
            var viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new _content_ref_class__WEBPACK_IMPORTED_MODULE_2__["ContentRef"]([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            var contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            var modalContentInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].resolveAndCreate(this._providers.slice(), this._injector);
            var componentRef = contentCmptFactory.create(modalContentInjector);
            Object.assign(componentRef.instance, initialState);
            this._applicationRef.attachView(componentRef.hostView);
            return new _content_ref_class__WEBPACK_IMPORTED_MODULE_2__["ContentRef"]([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new _content_ref_class__WEBPACK_IMPORTED_MODULE_2__["ContentRef"]([[this._renderer.createText("" + content)]]);
    };
    return ComponentLoader;
}());

//# sourceMappingURL=component-loader.class.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/component-loader/component-loader.factory.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/component-loader/component-loader.factory.js ***!
  \*********************************************************************************/
/*! exports provided: ComponentLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLoaderFactory", function() { return ComponentLoaderFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _component_loader_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-loader.class */ "./node_modules/ngx-bootstrap/component-loader/component-loader.class.js");
/* harmony import */ var _positioning_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../positioning/index */ "./node_modules/ngx-bootstrap/positioning/index.js");



var ComponentLoaderFactory = (function () {
    function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @param _elementRef
     * @param _viewContainerRef
     * @param _renderer
     * @returns {ComponentLoader}
     */
    ComponentLoaderFactory.prototype.createLoader = function (_elementRef, _viewContainerRef, _renderer) {
        return new _component_loader_class__WEBPACK_IMPORTED_MODULE_1__["ComponentLoader"](_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    };
    ComponentLoaderFactory.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ComponentLoaderFactory.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
        { type: _positioning_index__WEBPACK_IMPORTED_MODULE_2__["PositioningService"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], },
    ]; };
    return ComponentLoaderFactory;
}());

//# sourceMappingURL=component-loader.factory.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/component-loader/content-ref.class.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/component-loader/content-ref.class.js ***!
  \**************************************************************************/
/*! exports provided: ContentRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentRef", function() { return ContentRef; });
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var ContentRef = (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());

//# sourceMappingURL=content-ref.class.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/component-loader/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/component-loader/index.js ***!
  \**************************************************************/
/*! exports provided: ComponentLoader, ComponentLoaderFactory, ContentRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_loader_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component-loader.class */ "./node_modules/ngx-bootstrap/component-loader/component-loader.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentLoader", function() { return _component_loader_class__WEBPACK_IMPORTED_MODULE_0__["ComponentLoader"]; });

/* harmony import */ var _component_loader_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-loader.factory */ "./node_modules/ngx-bootstrap/component-loader/component-loader.factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentLoaderFactory", function() { return _component_loader_factory__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"]; });

/* harmony import */ var _content_ref_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-ref.class */ "./node_modules/ngx-bootstrap/component-loader/content-ref.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentRef", function() { return _content_ref_class__WEBPACK_IMPORTED_MODULE_2__["ContentRef"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/positioning/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/positioning/index.js ***!
  \*********************************************************/
/*! exports provided: positionElements, Positioning, PositioningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ng_positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng-positioning */ "./node_modules/ngx-bootstrap/positioning/ng-positioning.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionElements", function() { return _ng_positioning__WEBPACK_IMPORTED_MODULE_0__["positionElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Positioning", function() { return _ng_positioning__WEBPACK_IMPORTED_MODULE_0__["Positioning"]; });

/* harmony import */ var _positioning_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./positioning.service */ "./node_modules/ngx-bootstrap/positioning/positioning.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PositioningService", function() { return _positioning_service__WEBPACK_IMPORTED_MODULE_1__["PositioningService"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/positioning/ng-positioning.js":
/*!******************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/positioning/ng-positioning.js ***!
  \******************************************************************/
/*! exports provided: Positioning, positionElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Positioning", function() { return Positioning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionElements", function() { return positionElements; });
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
// tslint:disable
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = {
            width: 0,
            height: 0,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        };
        if (this.getStyle(element, 'position') === 'fixed') {
            var bcRect = element.getBoundingClientRect();
            elPosition = {
                width: bcRect.width,
                height: bcRect.height,
                top: bcRect.top,
                bottom: bcRect.bottom,
                left: bcRect.left,
                right: bcRect.right
            };
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody
            ? this.offset(hostElement, false)
            : this.position(hostElement, false);
        var targetElStyles = this.getAllStyles(targetElement);
        var shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left +
                hostElPosition.width / 2 -
                targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        var shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top +
                hostElPosition.height / 2 -
                targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split(' ')[0] || 'top';
        var placementSecondary = placement.split(' ')[1] || 'center';
        var targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        if (placementPrimary === 'auto') {
            var newPlacementPrimary = this.autoPosition(targetElPosition, hostElPosition, targetElement, placementSecondary);
            if (!newPlacementPrimary)
                newPlacementPrimary = this.autoPosition(targetElPosition, hostElPosition, targetElement);
            if (newPlacementPrimary)
                placementPrimary = newPlacementPrimary;
            targetElement.classList.add(placementPrimary);
        }
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top =
                    hostElPosition.top -
                        (targetElement.offsetHeight +
                            parseFloat(targetElStyles.marginBottom));
                targetElPosition.bottom +=
                    hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'bottom':
                targetElPosition.top = shiftHeight[placementPrimary];
                targetElPosition.bottom += shiftHeight[placementPrimary];
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'left':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left =
                    hostElPosition.left -
                        (targetElement.offsetWidth + parseFloat(targetElStyles.marginRight));
                targetElPosition.right +=
                    hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = shiftWidth[placementPrimary];
                targetElPosition.right += shiftWidth[placementPrimary];
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    Positioning.prototype.autoPosition = function (targetElPosition, hostElPosition, targetElement, preferredPosition) {
        if ((!preferredPosition || preferredPosition === 'right') &&
            targetElPosition.left + hostElPosition.left - targetElement.offsetWidth <
                0) {
            return 'right';
        }
        else if ((!preferredPosition || preferredPosition === 'top') &&
            targetElPosition.bottom +
                hostElPosition.bottom +
                targetElement.offsetHeight >
                window.innerHeight) {
            return 'top';
        }
        else if ((!preferredPosition || preferredPosition === 'bottom') &&
            targetElPosition.top + hostElPosition.top - targetElement.offsetHeight < 0) {
            return 'bottom';
        }
        else if ((!preferredPosition || preferredPosition === 'left') &&
            targetElPosition.right +
                hostElPosition.right +
                targetElement.offsetWidth >
                window.innerWidth) {
            return 'left';
        }
        return null;
    };
    Positioning.prototype.getAllStyles = function (element) {
        return window.getComputedStyle(element);
    };
    Positioning.prototype.getStyle = function (element, prop) {
        return this.getAllStyles(element)[prop];
    };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl &&
            offsetParentEl !== document.documentElement &&
            this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    return Positioning;
}());

var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}
//# sourceMappingURL=ng-positioning.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/positioning/positioning.service.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/positioning/positioning.service.js ***!
  \***********************************************************************/
/*! exports provided: PositioningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositioningService", function() { return PositioningService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _ng_positioning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-positioning */ "./node_modules/ngx-bootstrap/positioning/ng-positioning.js");


var PositioningService = (function () {
    function PositioningService() {
    }
    PositioningService.prototype.position = function (options) {
        var element = options.element, target = options.target, attachment = options.attachment, appendToBody = options.appendToBody;
        Object(_ng_positioning__WEBPACK_IMPORTED_MODULE_1__["positionElements"])(_getHtmlElement(target), _getHtmlElement(element), attachment, appendToBody);
    };
    PositioningService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PositioningService.ctorParameters = function () { return []; };
    return PositioningService;
}());

function _getHtmlElement(element) {
    // it means that we got a selector
    if (typeof element === 'string') {
        return document.querySelector(element);
    }
    if (element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) {
        return element.nativeElement;
    }
    return element;
}
//# sourceMappingURL=positioning.service.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/typeahead/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/ngx-bootstrap/typeahead/index.js ***!
  \*******************************************************/
/*! exports provided: latinMap, TypeaheadOptions, TypeaheadMatch, escapeRegexp, getValueFromObject, tokenize, latinize, TypeaheadContainerComponent, TypeaheadDirective, TypeaheadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _latin_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./latin-map */ "./node_modules/ngx-bootstrap/typeahead/latin-map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "latinMap", function() { return _latin_map__WEBPACK_IMPORTED_MODULE_0__["latinMap"]; });

/* harmony import */ var _typeahead_options_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typeahead-options.class */ "./node_modules/ngx-bootstrap/typeahead/typeahead-options.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadOptions", function() { return _typeahead_options_class__WEBPACK_IMPORTED_MODULE_1__["TypeaheadOptions"]; });

/* harmony import */ var _typeahead_match_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typeahead-match.class */ "./node_modules/ngx-bootstrap/typeahead/typeahead-match.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadMatch", function() { return _typeahead_match_class__WEBPACK_IMPORTED_MODULE_2__["TypeaheadMatch"]; });

/* harmony import */ var _typeahead_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typeahead-utils */ "./node_modules/ngx-bootstrap/typeahead/typeahead-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escapeRegexp", function() { return _typeahead_utils__WEBPACK_IMPORTED_MODULE_3__["escapeRegexp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getValueFromObject", function() { return _typeahead_utils__WEBPACK_IMPORTED_MODULE_3__["getValueFromObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tokenize", function() { return _typeahead_utils__WEBPACK_IMPORTED_MODULE_3__["tokenize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "latinize", function() { return _typeahead_utils__WEBPACK_IMPORTED_MODULE_3__["latinize"]; });

/* harmony import */ var _typeahead_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typeahead-container.component */ "./node_modules/ngx-bootstrap/typeahead/typeahead-container.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadContainerComponent", function() { return _typeahead_container_component__WEBPACK_IMPORTED_MODULE_4__["TypeaheadContainerComponent"]; });

/* harmony import */ var _typeahead_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./typeahead.directive */ "./node_modules/ngx-bootstrap/typeahead/typeahead.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadDirective", function() { return _typeahead_directive__WEBPACK_IMPORTED_MODULE_5__["TypeaheadDirective"]; });

/* harmony import */ var _typeahead_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typeahead.module */ "./node_modules/ngx-bootstrap/typeahead/typeahead.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadModule", function() { return _typeahead_module__WEBPACK_IMPORTED_MODULE_6__["TypeaheadModule"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/typeahead/latin-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/typeahead/latin-map.js ***!
  \***********************************************************/
/*! exports provided: latinMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latinMap", function() { return latinMap; });
/* tslint:disable */
var latinMap = {
    'Á': 'A',
    'Ă': 'A',
    'Ắ': 'A',
    'Ặ': 'A',
    'Ằ': 'A',
    'Ẳ': 'A',
    'Ẵ': 'A',
    'Ǎ': 'A',
    'Â': 'A',
    'Ấ': 'A',
    'Ậ': 'A',
    'Ầ': 'A',
    'Ẩ': 'A',
    'Ẫ': 'A',
    'Ä': 'A',
    'Ǟ': 'A',
    'Ȧ': 'A',
    'Ǡ': 'A',
    'Ạ': 'A',
    'Ȁ': 'A',
    'À': 'A',
    'Ả': 'A',
    'Ȃ': 'A',
    'Ā': 'A',
    'Ą': 'A',
    'Å': 'A',
    'Ǻ': 'A',
    'Ḁ': 'A',
    'Ⱥ': 'A',
    'Ã': 'A',
    'Ꜳ': 'AA',
    'Æ': 'AE',
    'Ǽ': 'AE',
    'Ǣ': 'AE',
    'Ꜵ': 'AO',
    'Ꜷ': 'AU',
    'Ꜹ': 'AV',
    'Ꜻ': 'AV',
    'Ꜽ': 'AY',
    'Ḃ': 'B',
    'Ḅ': 'B',
    'Ɓ': 'B',
    'Ḇ': 'B',
    'Ƀ': 'B',
    'Ƃ': 'B',
    'Ć': 'C',
    'Č': 'C',
    'Ç': 'C',
    'Ḉ': 'C',
    'Ĉ': 'C',
    'Ċ': 'C',
    'Ƈ': 'C',
    'Ȼ': 'C',
    'Ď': 'D',
    'Ḑ': 'D',
    'Ḓ': 'D',
    'Ḋ': 'D',
    'Ḍ': 'D',
    'Ɗ': 'D',
    'Ḏ': 'D',
    'ǲ': 'D',
    'ǅ': 'D',
    'Đ': 'D',
    'Ƌ': 'D',
    'Ǳ': 'DZ',
    'Ǆ': 'DZ',
    'É': 'E',
    'Ĕ': 'E',
    'Ě': 'E',
    'Ȩ': 'E',
    'Ḝ': 'E',
    'Ê': 'E',
    'Ế': 'E',
    'Ệ': 'E',
    'Ề': 'E',
    'Ể': 'E',
    'Ễ': 'E',
    'Ḙ': 'E',
    'Ë': 'E',
    'Ė': 'E',
    'Ẹ': 'E',
    'Ȅ': 'E',
    'È': 'E',
    'Ẻ': 'E',
    'Ȇ': 'E',
    'Ē': 'E',
    'Ḗ': 'E',
    'Ḕ': 'E',
    'Ę': 'E',
    'Ɇ': 'E',
    'Ẽ': 'E',
    'Ḛ': 'E',
    'Ꝫ': 'ET',
    'Ḟ': 'F',
    'Ƒ': 'F',
    'Ǵ': 'G',
    'Ğ': 'G',
    'Ǧ': 'G',
    'Ģ': 'G',
    'Ĝ': 'G',
    'Ġ': 'G',
    'Ɠ': 'G',
    'Ḡ': 'G',
    'Ǥ': 'G',
    'Ḫ': 'H',
    'Ȟ': 'H',
    'Ḩ': 'H',
    'Ĥ': 'H',
    'Ⱨ': 'H',
    'Ḧ': 'H',
    'Ḣ': 'H',
    'Ḥ': 'H',
    'Ħ': 'H',
    'Í': 'I',
    'Ĭ': 'I',
    'Ǐ': 'I',
    'Î': 'I',
    'Ï': 'I',
    'Ḯ': 'I',
    'İ': 'I',
    'Ị': 'I',
    'Ȉ': 'I',
    'Ì': 'I',
    'Ỉ': 'I',
    'Ȋ': 'I',
    'Ī': 'I',
    'Į': 'I',
    'Ɨ': 'I',
    'Ĩ': 'I',
    'Ḭ': 'I',
    'Ꝺ': 'D',
    'Ꝼ': 'F',
    'Ᵹ': 'G',
    'Ꞃ': 'R',
    'Ꞅ': 'S',
    'Ꞇ': 'T',
    'Ꝭ': 'IS',
    'Ĵ': 'J',
    'Ɉ': 'J',
    'Ḱ': 'K',
    'Ǩ': 'K',
    'Ķ': 'K',
    'Ⱪ': 'K',
    'Ꝃ': 'K',
    'Ḳ': 'K',
    'Ƙ': 'K',
    'Ḵ': 'K',
    'Ꝁ': 'K',
    'Ꝅ': 'K',
    'Ĺ': 'L',
    'Ƚ': 'L',
    'Ľ': 'L',
    'Ļ': 'L',
    'Ḽ': 'L',
    'Ḷ': 'L',
    'Ḹ': 'L',
    'Ⱡ': 'L',
    'Ꝉ': 'L',
    'Ḻ': 'L',
    'Ŀ': 'L',
    'Ɫ': 'L',
    'ǈ': 'L',
    'Ł': 'L',
    'Ǉ': 'LJ',
    'Ḿ': 'M',
    'Ṁ': 'M',
    'Ṃ': 'M',
    'Ɱ': 'M',
    'Ń': 'N',
    'Ň': 'N',
    'Ņ': 'N',
    'Ṋ': 'N',
    'Ṅ': 'N',
    'Ṇ': 'N',
    'Ǹ': 'N',
    'Ɲ': 'N',
    'Ṉ': 'N',
    'Ƞ': 'N',
    'ǋ': 'N',
    'Ñ': 'N',
    'Ǌ': 'NJ',
    'Ó': 'O',
    'Ŏ': 'O',
    'Ǒ': 'O',
    'Ô': 'O',
    'Ố': 'O',
    'Ộ': 'O',
    'Ồ': 'O',
    'Ổ': 'O',
    'Ỗ': 'O',
    'Ö': 'O',
    'Ȫ': 'O',
    'Ȯ': 'O',
    'Ȱ': 'O',
    'Ọ': 'O',
    'Ő': 'O',
    'Ȍ': 'O',
    'Ò': 'O',
    'Ỏ': 'O',
    'Ơ': 'O',
    'Ớ': 'O',
    'Ợ': 'O',
    'Ờ': 'O',
    'Ở': 'O',
    'Ỡ': 'O',
    'Ȏ': 'O',
    'Ꝋ': 'O',
    'Ꝍ': 'O',
    'Ō': 'O',
    'Ṓ': 'O',
    'Ṑ': 'O',
    'Ɵ': 'O',
    'Ǫ': 'O',
    'Ǭ': 'O',
    'Ø': 'O',
    'Ǿ': 'O',
    'Õ': 'O',
    'Ṍ': 'O',
    'Ṏ': 'O',
    'Ȭ': 'O',
    'Ƣ': 'OI',
    'Ꝏ': 'OO',
    'Ɛ': 'E',
    'Ɔ': 'O',
    'Ȣ': 'OU',
    'Ṕ': 'P',
    'Ṗ': 'P',
    'Ꝓ': 'P',
    'Ƥ': 'P',
    'Ꝕ': 'P',
    'Ᵽ': 'P',
    'Ꝑ': 'P',
    'Ꝙ': 'Q',
    'Ꝗ': 'Q',
    'Ŕ': 'R',
    'Ř': 'R',
    'Ŗ': 'R',
    'Ṙ': 'R',
    'Ṛ': 'R',
    'Ṝ': 'R',
    'Ȑ': 'R',
    'Ȓ': 'R',
    'Ṟ': 'R',
    'Ɍ': 'R',
    'Ɽ': 'R',
    'Ꜿ': 'C',
    'Ǝ': 'E',
    'Ś': 'S',
    'Ṥ': 'S',
    'Š': 'S',
    'Ṧ': 'S',
    'Ş': 'S',
    'Ŝ': 'S',
    'Ș': 'S',
    'Ṡ': 'S',
    'Ṣ': 'S',
    'Ṩ': 'S',
    'Ť': 'T',
    'Ţ': 'T',
    'Ṱ': 'T',
    'Ț': 'T',
    'Ⱦ': 'T',
    'Ṫ': 'T',
    'Ṭ': 'T',
    'Ƭ': 'T',
    'Ṯ': 'T',
    'Ʈ': 'T',
    'Ŧ': 'T',
    'Ɐ': 'A',
    'Ꞁ': 'L',
    'Ɯ': 'M',
    'Ʌ': 'V',
    'Ꜩ': 'TZ',
    'Ú': 'U',
    'Ŭ': 'U',
    'Ǔ': 'U',
    'Û': 'U',
    'Ṷ': 'U',
    'Ü': 'U',
    'Ǘ': 'U',
    'Ǚ': 'U',
    'Ǜ': 'U',
    'Ǖ': 'U',
    'Ṳ': 'U',
    'Ụ': 'U',
    'Ű': 'U',
    'Ȕ': 'U',
    'Ù': 'U',
    'Ủ': 'U',
    'Ư': 'U',
    'Ứ': 'U',
    'Ự': 'U',
    'Ừ': 'U',
    'Ử': 'U',
    'Ữ': 'U',
    'Ȗ': 'U',
    'Ū': 'U',
    'Ṻ': 'U',
    'Ų': 'U',
    'Ů': 'U',
    'Ũ': 'U',
    'Ṹ': 'U',
    'Ṵ': 'U',
    'Ꝟ': 'V',
    'Ṿ': 'V',
    'Ʋ': 'V',
    'Ṽ': 'V',
    'Ꝡ': 'VY',
    'Ẃ': 'W',
    'Ŵ': 'W',
    'Ẅ': 'W',
    'Ẇ': 'W',
    'Ẉ': 'W',
    'Ẁ': 'W',
    'Ⱳ': 'W',
    'Ẍ': 'X',
    'Ẋ': 'X',
    'Ý': 'Y',
    'Ŷ': 'Y',
    'Ÿ': 'Y',
    'Ẏ': 'Y',
    'Ỵ': 'Y',
    'Ỳ': 'Y',
    'Ƴ': 'Y',
    'Ỷ': 'Y',
    'Ỿ': 'Y',
    'Ȳ': 'Y',
    'Ɏ': 'Y',
    'Ỹ': 'Y',
    'Ź': 'Z',
    'Ž': 'Z',
    'Ẑ': 'Z',
    'Ⱬ': 'Z',
    'Ż': 'Z',
    'Ẓ': 'Z',
    'Ȥ': 'Z',
    'Ẕ': 'Z',
    'Ƶ': 'Z',
    'Ĳ': 'IJ',
    'Œ': 'OE',
    'ᴀ': 'A',
    'ᴁ': 'AE',
    'ʙ': 'B',
    'ᴃ': 'B',
    'ᴄ': 'C',
    'ᴅ': 'D',
    'ᴇ': 'E',
    'ꜰ': 'F',
    'ɢ': 'G',
    'ʛ': 'G',
    'ʜ': 'H',
    'ɪ': 'I',
    'ʁ': 'R',
    'ᴊ': 'J',
    'ᴋ': 'K',
    'ʟ': 'L',
    'ᴌ': 'L',
    'ᴍ': 'M',
    'ɴ': 'N',
    'ᴏ': 'O',
    'ɶ': 'OE',
    'ᴐ': 'O',
    'ᴕ': 'OU',
    'ᴘ': 'P',
    'ʀ': 'R',
    'ᴎ': 'N',
    'ᴙ': 'R',
    'ꜱ': 'S',
    'ᴛ': 'T',
    'ⱻ': 'E',
    'ᴚ': 'R',
    'ᴜ': 'U',
    'ᴠ': 'V',
    'ᴡ': 'W',
    'ʏ': 'Y',
    'ᴢ': 'Z',
    'á': 'a',
    'ă': 'a',
    'ắ': 'a',
    'ặ': 'a',
    'ằ': 'a',
    'ẳ': 'a',
    'ẵ': 'a',
    'ǎ': 'a',
    'â': 'a',
    'ấ': 'a',
    'ậ': 'a',
    'ầ': 'a',
    'ẩ': 'a',
    'ẫ': 'a',
    'ä': 'a',
    'ǟ': 'a',
    'ȧ': 'a',
    'ǡ': 'a',
    'ạ': 'a',
    'ȁ': 'a',
    'à': 'a',
    'ả': 'a',
    'ȃ': 'a',
    'ā': 'a',
    'ą': 'a',
    'ᶏ': 'a',
    'ẚ': 'a',
    'å': 'a',
    'ǻ': 'a',
    'ḁ': 'a',
    'ⱥ': 'a',
    'ã': 'a',
    'ꜳ': 'aa',
    'æ': 'ae',
    'ǽ': 'ae',
    'ǣ': 'ae',
    'ꜵ': 'ao',
    'ꜷ': 'au',
    'ꜹ': 'av',
    'ꜻ': 'av',
    'ꜽ': 'ay',
    'ḃ': 'b',
    'ḅ': 'b',
    'ɓ': 'b',
    'ḇ': 'b',
    'ᵬ': 'b',
    'ᶀ': 'b',
    'ƀ': 'b',
    'ƃ': 'b',
    'ɵ': 'o',
    'ć': 'c',
    'č': 'c',
    'ç': 'c',
    'ḉ': 'c',
    'ĉ': 'c',
    'ɕ': 'c',
    'ċ': 'c',
    'ƈ': 'c',
    'ȼ': 'c',
    'ď': 'd',
    'ḑ': 'd',
    'ḓ': 'd',
    'ȡ': 'd',
    'ḋ': 'd',
    'ḍ': 'd',
    'ɗ': 'd',
    'ᶑ': 'd',
    'ḏ': 'd',
    'ᵭ': 'd',
    'ᶁ': 'd',
    'đ': 'd',
    'ɖ': 'd',
    'ƌ': 'd',
    'ı': 'i',
    'ȷ': 'j',
    'ɟ': 'j',
    'ʄ': 'j',
    'ǳ': 'dz',
    'ǆ': 'dz',
    'é': 'e',
    'ĕ': 'e',
    'ě': 'e',
    'ȩ': 'e',
    'ḝ': 'e',
    'ê': 'e',
    'ế': 'e',
    'ệ': 'e',
    'ề': 'e',
    'ể': 'e',
    'ễ': 'e',
    'ḙ': 'e',
    'ë': 'e',
    'ė': 'e',
    'ẹ': 'e',
    'ȅ': 'e',
    'è': 'e',
    'ẻ': 'e',
    'ȇ': 'e',
    'ē': 'e',
    'ḗ': 'e',
    'ḕ': 'e',
    'ⱸ': 'e',
    'ę': 'e',
    'ᶒ': 'e',
    'ɇ': 'e',
    'ẽ': 'e',
    'ḛ': 'e',
    'ꝫ': 'et',
    'ḟ': 'f',
    'ƒ': 'f',
    'ᵮ': 'f',
    'ᶂ': 'f',
    'ǵ': 'g',
    'ğ': 'g',
    'ǧ': 'g',
    'ģ': 'g',
    'ĝ': 'g',
    'ġ': 'g',
    'ɠ': 'g',
    'ḡ': 'g',
    'ᶃ': 'g',
    'ǥ': 'g',
    'ḫ': 'h',
    'ȟ': 'h',
    'ḩ': 'h',
    'ĥ': 'h',
    'ⱨ': 'h',
    'ḧ': 'h',
    'ḣ': 'h',
    'ḥ': 'h',
    'ɦ': 'h',
    'ẖ': 'h',
    'ħ': 'h',
    'ƕ': 'hv',
    'í': 'i',
    'ĭ': 'i',
    'ǐ': 'i',
    'î': 'i',
    'ï': 'i',
    'ḯ': 'i',
    'ị': 'i',
    'ȉ': 'i',
    'ì': 'i',
    'ỉ': 'i',
    'ȋ': 'i',
    'ī': 'i',
    'į': 'i',
    'ᶖ': 'i',
    'ɨ': 'i',
    'ĩ': 'i',
    'ḭ': 'i',
    'ꝺ': 'd',
    'ꝼ': 'f',
    'ᵹ': 'g',
    'ꞃ': 'r',
    'ꞅ': 's',
    'ꞇ': 't',
    'ꝭ': 'is',
    'ǰ': 'j',
    'ĵ': 'j',
    'ʝ': 'j',
    'ɉ': 'j',
    'ḱ': 'k',
    'ǩ': 'k',
    'ķ': 'k',
    'ⱪ': 'k',
    'ꝃ': 'k',
    'ḳ': 'k',
    'ƙ': 'k',
    'ḵ': 'k',
    'ᶄ': 'k',
    'ꝁ': 'k',
    'ꝅ': 'k',
    'ĺ': 'l',
    'ƚ': 'l',
    'ɬ': 'l',
    'ľ': 'l',
    'ļ': 'l',
    'ḽ': 'l',
    'ȴ': 'l',
    'ḷ': 'l',
    'ḹ': 'l',
    'ⱡ': 'l',
    'ꝉ': 'l',
    'ḻ': 'l',
    'ŀ': 'l',
    'ɫ': 'l',
    'ᶅ': 'l',
    'ɭ': 'l',
    'ł': 'l',
    'ǉ': 'lj',
    'ſ': 's',
    'ẜ': 's',
    'ẛ': 's',
    'ẝ': 's',
    'ḿ': 'm',
    'ṁ': 'm',
    'ṃ': 'm',
    'ɱ': 'm',
    'ᵯ': 'm',
    'ᶆ': 'm',
    'ń': 'n',
    'ň': 'n',
    'ņ': 'n',
    'ṋ': 'n',
    'ȵ': 'n',
    'ṅ': 'n',
    'ṇ': 'n',
    'ǹ': 'n',
    'ɲ': 'n',
    'ṉ': 'n',
    'ƞ': 'n',
    'ᵰ': 'n',
    'ᶇ': 'n',
    'ɳ': 'n',
    'ñ': 'n',
    'ǌ': 'nj',
    'ó': 'o',
    'ŏ': 'o',
    'ǒ': 'o',
    'ô': 'o',
    'ố': 'o',
    'ộ': 'o',
    'ồ': 'o',
    'ổ': 'o',
    'ỗ': 'o',
    'ö': 'o',
    'ȫ': 'o',
    'ȯ': 'o',
    'ȱ': 'o',
    'ọ': 'o',
    'ő': 'o',
    'ȍ': 'o',
    'ò': 'o',
    'ỏ': 'o',
    'ơ': 'o',
    'ớ': 'o',
    'ợ': 'o',
    'ờ': 'o',
    'ở': 'o',
    'ỡ': 'o',
    'ȏ': 'o',
    'ꝋ': 'o',
    'ꝍ': 'o',
    'ⱺ': 'o',
    'ō': 'o',
    'ṓ': 'o',
    'ṑ': 'o',
    'ǫ': 'o',
    'ǭ': 'o',
    'ø': 'o',
    'ǿ': 'o',
    'õ': 'o',
    'ṍ': 'o',
    'ṏ': 'o',
    'ȭ': 'o',
    'ƣ': 'oi',
    'ꝏ': 'oo',
    'ɛ': 'e',
    'ᶓ': 'e',
    'ɔ': 'o',
    'ᶗ': 'o',
    'ȣ': 'ou',
    'ṕ': 'p',
    'ṗ': 'p',
    'ꝓ': 'p',
    'ƥ': 'p',
    'ᵱ': 'p',
    'ᶈ': 'p',
    'ꝕ': 'p',
    'ᵽ': 'p',
    'ꝑ': 'p',
    'ꝙ': 'q',
    'ʠ': 'q',
    'ɋ': 'q',
    'ꝗ': 'q',
    'ŕ': 'r',
    'ř': 'r',
    'ŗ': 'r',
    'ṙ': 'r',
    'ṛ': 'r',
    'ṝ': 'r',
    'ȑ': 'r',
    'ɾ': 'r',
    'ᵳ': 'r',
    'ȓ': 'r',
    'ṟ': 'r',
    'ɼ': 'r',
    'ᵲ': 'r',
    'ᶉ': 'r',
    'ɍ': 'r',
    'ɽ': 'r',
    'ↄ': 'c',
    'ꜿ': 'c',
    'ɘ': 'e',
    'ɿ': 'r',
    'ś': 's',
    'ṥ': 's',
    'š': 's',
    'ṧ': 's',
    'ş': 's',
    'ŝ': 's',
    'ș': 's',
    'ṡ': 's',
    'ṣ': 's',
    'ṩ': 's',
    'ʂ': 's',
    'ᵴ': 's',
    'ᶊ': 's',
    'ȿ': 's',
    'ɡ': 'g',
    'ᴑ': 'o',
    'ᴓ': 'o',
    'ᴝ': 'u',
    'ť': 't',
    'ţ': 't',
    'ṱ': 't',
    'ț': 't',
    'ȶ': 't',
    'ẗ': 't',
    'ⱦ': 't',
    'ṫ': 't',
    'ṭ': 't',
    'ƭ': 't',
    'ṯ': 't',
    'ᵵ': 't',
    'ƫ': 't',
    'ʈ': 't',
    'ŧ': 't',
    'ᵺ': 'th',
    'ɐ': 'a',
    'ᴂ': 'ae',
    'ǝ': 'e',
    'ᵷ': 'g',
    'ɥ': 'h',
    'ʮ': 'h',
    'ʯ': 'h',
    'ᴉ': 'i',
    'ʞ': 'k',
    'ꞁ': 'l',
    'ɯ': 'm',
    'ɰ': 'm',
    'ᴔ': 'oe',
    'ɹ': 'r',
    'ɻ': 'r',
    'ɺ': 'r',
    'ⱹ': 'r',
    'ʇ': 't',
    'ʌ': 'v',
    'ʍ': 'w',
    'ʎ': 'y',
    'ꜩ': 'tz',
    'ú': 'u',
    'ŭ': 'u',
    'ǔ': 'u',
    'û': 'u',
    'ṷ': 'u',
    'ü': 'u',
    'ǘ': 'u',
    'ǚ': 'u',
    'ǜ': 'u',
    'ǖ': 'u',
    'ṳ': 'u',
    'ụ': 'u',
    'ű': 'u',
    'ȕ': 'u',
    'ù': 'u',
    'ủ': 'u',
    'ư': 'u',
    'ứ': 'u',
    'ự': 'u',
    'ừ': 'u',
    'ử': 'u',
    'ữ': 'u',
    'ȗ': 'u',
    'ū': 'u',
    'ṻ': 'u',
    'ų': 'u',
    'ᶙ': 'u',
    'ů': 'u',
    'ũ': 'u',
    'ṹ': 'u',
    'ṵ': 'u',
    'ᵫ': 'ue',
    'ꝸ': 'um',
    'ⱴ': 'v',
    'ꝟ': 'v',
    'ṿ': 'v',
    'ʋ': 'v',
    'ᶌ': 'v',
    'ⱱ': 'v',
    'ṽ': 'v',
    'ꝡ': 'vy',
    'ẃ': 'w',
    'ŵ': 'w',
    'ẅ': 'w',
    'ẇ': 'w',
    'ẉ': 'w',
    'ẁ': 'w',
    'ⱳ': 'w',
    'ẘ': 'w',
    'ẍ': 'x',
    'ẋ': 'x',
    'ᶍ': 'x',
    'ý': 'y',
    'ŷ': 'y',
    'ÿ': 'y',
    'ẏ': 'y',
    'ỵ': 'y',
    'ỳ': 'y',
    'ƴ': 'y',
    'ỷ': 'y',
    'ỿ': 'y',
    'ȳ': 'y',
    'ẙ': 'y',
    'ɏ': 'y',
    'ỹ': 'y',
    'ź': 'z',
    'ž': 'z',
    'ẑ': 'z',
    'ʑ': 'z',
    'ⱬ': 'z',
    'ż': 'z',
    'ẓ': 'z',
    'ȥ': 'z',
    'ẕ': 'z',
    'ᵶ': 'z',
    'ᶎ': 'z',
    'ʐ': 'z',
    'ƶ': 'z',
    'ɀ': 'z',
    'ﬀ': 'ff',
    'ﬃ': 'ffi',
    'ﬄ': 'ffl',
    'ﬁ': 'fi',
    'ﬂ': 'fl',
    'ĳ': 'ij',
    'œ': 'oe',
    'ﬆ': 'st',
    'ₐ': 'a',
    'ₑ': 'e',
    'ᵢ': 'i',
    'ⱼ': 'j',
    'ₒ': 'o',
    'ᵣ': 'r',
    'ᵤ': 'u',
    'ᵥ': 'v',
    'ₓ': 'x'
};
//# sourceMappingURL=latin-map.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/typeahead/typeahead-container.component.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/typeahead/typeahead-container.component.js ***!
  \*******************************************************************************/
/*! exports provided: TypeaheadContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadContainerComponent", function() { return TypeaheadContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/ngx-bootstrap/utils/index.js");
/* harmony import */ var _typeahead_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typeahead-utils */ "./node_modules/ngx-bootstrap/typeahead/typeahead-utils.js");



var TypeaheadContainerComponent = (function () {
    function TypeaheadContainerComponent(element, renderer) {
        this.renderer = renderer;
        this.isFocused = false;
        this._matches = [];
        this.isScrolledIntoView = function (elem) {
            var containerViewTop = this.ulElement.nativeElement.scrollTop;
            var containerViewBottom = containerViewTop + this.ulElement.nativeElement.offsetHeight;
            var elemTop = elem.offsetTop;
            var elemBottom = elemTop + elem.offsetHeight;
            return ((elemBottom <= containerViewBottom) && (elemTop >= containerViewTop));
        };
        this.element = element;
    }
    Object.defineProperty(TypeaheadContainerComponent.prototype, "isBs4", {
        get: function () {
            return !Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "matches", {
        get: function () {
            return this._matches;
        },
        set: function (value) {
            var _this = this;
            this._matches = value;
            this.needScrollbar = this.typeaheadScrollable && this.typeaheadOptionsInScrollableView < this.matches.length;
            if (this.typeaheadScrollable) {
                setTimeout(function () {
                    _this.setScrollableMode();
                });
            }
            if (this._matches.length > 0) {
                this._active = this._matches[0];
                if (this._active.isHeader()) {
                    this.nextActiveMatch();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "optionsListTemplate", {
        get: function () {
            return this.parent ? this.parent.optionsListTemplate : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadScrollable", {
        get: function () {
            return this.parent ? this.parent.typeaheadScrollable : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadOptionsInScrollableView", {
        get: function () {
            return this.parent ? this.parent.typeaheadOptionsInScrollableView : 5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "itemTemplate", {
        get: function () {
            return this.parent ? this.parent.typeaheadItemTemplate : undefined;
        },
        enumerable: true,
        configurable: true
    });
    TypeaheadContainerComponent.prototype.selectActiveMatch = function () {
        this.selectMatch(this._active);
    };
    TypeaheadContainerComponent.prototype.prevActiveMatch = function () {
        var index = this.matches.indexOf(this._active);
        this._active = this.matches[index - 1 < 0 ? this.matches.length - 1 : index - 1];
        if (this._active.isHeader()) {
            this.prevActiveMatch();
        }
        if (this.typeaheadScrollable) {
            this.scrollPrevious(index);
        }
    };
    TypeaheadContainerComponent.prototype.nextActiveMatch = function () {
        var index = this.matches.indexOf(this._active);
        this._active = this.matches[index + 1 > this.matches.length - 1 ? 0 : index + 1];
        if (this._active.isHeader()) {
            this.nextActiveMatch();
        }
        if (this.typeaheadScrollable) {
            this.scrollNext(index);
        }
    };
    TypeaheadContainerComponent.prototype.selectActive = function (value) {
        this.isFocused = true;
        this._active = value;
    };
    TypeaheadContainerComponent.prototype.hightlight = function (match, query) {
        var itemStr = match.value;
        var itemStrHelper = (this.parent && this.parent.typeaheadLatinize
            ? Object(_typeahead_utils__WEBPACK_IMPORTED_MODULE_2__["latinize"])(itemStr)
            : itemStr).toLowerCase();
        var startIdx;
        var tokenLen;
        // Replaces the capture string with the same string inside of a "strong" tag
        if (typeof query === 'object') {
            var queryLen = query.length;
            for (var i = 0; i < queryLen; i += 1) {
                // query[i] is already latinized and lower case
                startIdx = itemStrHelper.indexOf(query[i]);
                tokenLen = query[i].length;
                if (startIdx >= 0 && tokenLen > 0) {
                    itemStr =
                        itemStr.substring(0, startIdx) + "<strong>" + itemStr.substring(startIdx, startIdx + tokenLen) + "</strong>" +
                            ("" + itemStr.substring(startIdx + tokenLen));
                    itemStrHelper =
                        itemStrHelper.substring(0, startIdx) + "        " + ' '.repeat(tokenLen) + "         " +
                            ("" + itemStrHelper.substring(startIdx + tokenLen));
                }
            }
        }
        else if (query) {
            // query is already latinized and lower case
            startIdx = itemStrHelper.indexOf(query);
            tokenLen = query.length;
            if (startIdx >= 0 && tokenLen > 0) {
                itemStr =
                    itemStr.substring(0, startIdx) + "<strong>" + itemStr.substring(startIdx, startIdx + tokenLen) + "</strong>" +
                        ("" + itemStr.substring(startIdx + tokenLen));
            }
        }
        return itemStr;
    };
    TypeaheadContainerComponent.prototype.focusLost = function () {
        this.isFocused = false;
    };
    TypeaheadContainerComponent.prototype.isActive = function (value) {
        return this._active === value;
    };
    TypeaheadContainerComponent.prototype.selectMatch = function (value, e) {
        var _this = this;
        if (e === void 0) { e = void 0; }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.parent.changeModel(value);
        setTimeout(function () { return _this.parent.typeaheadOnSelect.emit(value); }, 0);
        return false;
    };
    TypeaheadContainerComponent.prototype.setScrollableMode = function () {
        if (!this.ulElement) {
            this.ulElement = this.element;
        }
        if (this.liElements.first) {
            var ulStyles = _utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getStyles(this.ulElement.nativeElement);
            var liStyles = _utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getStyles(this.liElements.first.nativeElement);
            var ulPaddingBottom = parseFloat((ulStyles['padding-bottom'] ? ulStyles['padding-bottom'] : '').replace('px', ''));
            var ulPaddingTop = parseFloat((ulStyles['padding-top'] ? ulStyles['padding-top'] : '0').replace('px', ''));
            var optionHeight = parseFloat((liStyles['height'] ? liStyles['height'] : '0').replace('px', ''));
            var height = this.typeaheadOptionsInScrollableView * optionHeight;
            this.guiHeight = height + ulPaddingTop + ulPaddingBottom + "px";
        }
        this.renderer.setStyle(this.element.nativeElement, 'visibility', 'visible');
    };
    TypeaheadContainerComponent.prototype.scrollPrevious = function (index) {
        if (index === 0) {
            this.scrollToBottom();
            return;
        }
        if (this.liElements) {
            var liElement = this.liElements.toArray()[index - 1];
            if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                this.ulElement.nativeElement.scrollTop = liElement.nativeElement.offsetTop;
            }
        }
    };
    TypeaheadContainerComponent.prototype.scrollNext = function (index) {
        if (index + 1 > this.matches.length - 1) {
            this.scrollToTop();
            return;
        }
        if (this.liElements) {
            var liElement = this.liElements.toArray()[index + 1];
            if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                this.ulElement.nativeElement.scrollTop =
                    liElement.nativeElement.offsetTop -
                        this.ulElement.nativeElement.offsetHeight +
                        liElement.nativeElement.offsetHeight;
            }
        }
    };
    TypeaheadContainerComponent.prototype.scrollToBottom = function () {
        this.ulElement.nativeElement.scrollTop = this.ulElement.nativeElement.scrollHeight;
    };
    TypeaheadContainerComponent.prototype.scrollToTop = function () {
        this.ulElement.nativeElement.scrollTop = 0;
    };
    TypeaheadContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'typeahead-container',
                    // tslint:disable-next-line
                    template: "<!-- inject options list template --> <ng-template [ngTemplateOutlet]=\"optionsListTemplate || (isBs4 ? bs4Template : bs3Template)\" [ngTemplateOutletContext]=\"{matches:matches, itemTemplate:itemTemplate, query:query}\"></ng-template> <!-- default options item template --> <ng-template #bsItemTemplate let-match=\"match\" let-query=\"query\"><span [innerHtml]=\"hightlight(match, query)\"></span> </ng-template> <!-- Bootstrap 3 options list template --> <ng-template #bs3Template> <ul class=\"dropdown-menu\" #ulElement [style.overflow-y]=\"needScrollbar ? 'scroll': 'auto'\" [style.height]=\"needScrollbar ? guiHeight: 'auto'\"> <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\"> <li #liElements *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</li> <li #liElements *ngIf=\"!match.isHeader()\" [class.active]=\"isActive(match)\" (mouseenter)=\"selectActive(match)\"> <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\"> <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\" [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template> </a> </li> </ng-template> </ul> </ng-template> <!-- Bootstrap 4 options list template --> <ng-template #bs4Template> <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\"> <h6 *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</h6> <ng-template [ngIf]=\"!match.isHeader()\"> <button #liElements class=\"dropdown-item\" (click)=\"selectMatch(match, $event)\" (mouseenter)=\"selectActive(match)\" [class.active]=\"isActive(match)\"> <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\" [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template> </button> </ng-template> </ng-template> </ng-template> ",
                    host: {
                        class: 'dropdown open',
                        '[class.dropdown-menu]': 'isBs4',
                        '[style.overflow-y]': "isBs4 && needScrollbar ? 'scroll': 'visible'",
                        '[style.height]': "isBs4 && needScrollbar ? guiHeight: 'auto'",
                        '[style.visibility]': "typeaheadScrollable ? 'hidden' : 'visible'",
                        '[class.dropup]': 'dropup',
                        style: 'position: absolute;display: block;'
                    }
                },] },
    ];
    /** @nocollapse */
    TypeaheadContainerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    TypeaheadContainerComponent.propDecorators = {
        'ulElement': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['ulElement',] },],
        'liElements': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: ['liElements',] },],
        'focusLost': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur',] },],
    };
    return TypeaheadContainerComponent;
}());

//# sourceMappingURL=typeahead-container.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/typeahead/typeahead-match.class.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/typeahead/typeahead-match.class.js ***!
  \***********************************************************************/
/*! exports provided: TypeaheadMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadMatch", function() { return TypeaheadMatch; });
var TypeaheadMatch = (function () {
    function TypeaheadMatch(item, value, header) {
        if (value === void 0) { value = item; }
        if (header === void 0) { header = false; }
        this.item = item;
        this.value = value;
        this.header = header;
    }
    TypeaheadMatch.prototype.isHeader = function () {
        return this.header;
    };
    TypeaheadMatch.prototype.toString = function () {
        return this.value;
    };
    return TypeaheadMatch;
}());

//# sourceMappingURL=typeahead-match.class.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/typeahead/typeahead-options.class.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/typeahead/typeahead-options.class.js ***!
  \*************************************************************************/
/*! exports provided: TypeaheadOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadOptions", function() { return TypeaheadOptions; });
var TypeaheadOptions = (function () {
    function TypeaheadOptions(options) {
        Object.assign(this, options);
    }
    return TypeaheadOptions;
}());

//# sourceMappingURL=typeahead-options.class.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/typeahead/typeahead-utils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/typeahead/typeahead-utils.js ***!
  \*****************************************************************/
/*! exports provided: latinize, escapeRegexp, tokenize, getValueFromObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latinize", function() { return latinize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeRegexp", function() { return escapeRegexp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenize", function() { return tokenize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueFromObject", function() { return getValueFromObject; });
/* harmony import */ var _latin_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./latin-map */ "./node_modules/ngx-bootstrap/typeahead/latin-map.js");

function latinize(str) {
    if (!str) {
        return '';
    }
    return str.replace(/[^A-Za-z0-9\[\] ]/g, function (a) {
        return _latin_map__WEBPACK_IMPORTED_MODULE_0__["latinMap"][a] || a;
    });
}
function escapeRegexp(queryToEscape) {
    // Regex: capture the whole query string and replace it with the string
    // that will be used to match the results, for example if the capture is
    // 'a' the result will be \a
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
/* tslint:disable */
function tokenize(str, wordRegexDelimiters, phraseRegexDelimiters) {
    if (wordRegexDelimiters === void 0) { wordRegexDelimiters = ' '; }
    if (phraseRegexDelimiters === void 0) { phraseRegexDelimiters = ''; }
    /* tslint:enable */
    var regexStr = "(?:[" + phraseRegexDelimiters + "])([^" + phraseRegexDelimiters + "]+)" +
        ("(?:[" + phraseRegexDelimiters + "])|([^" + wordRegexDelimiters + "]+)");
    var preTokenized = str.split(new RegExp(regexStr, 'g'));
    var result = [];
    var preTokenizedLength = preTokenized.length;
    var token;
    var replacePhraseDelimiters = new RegExp("[" + phraseRegexDelimiters + "]+", 'g');
    for (var i = 0; i < preTokenizedLength; i += 1) {
        token = preTokenized[i];
        if (token && token.length && token !== wordRegexDelimiters) {
            result.push(token.replace(replacePhraseDelimiters, ''));
        }
    }
    return result;
}
function getValueFromObject(object, option) {
    if (!option || typeof object !== 'object') {
        return object.toString();
    }
    if (option.endsWith('()')) {
        var functionName = option.slice(0, option.length - 2);
        return object[functionName]().toString();
    }
    var properties = option
        .replace(/\[(\w+)\]/g, '.$1')
        .replace(/^\./, '');
    var propertiesArray = properties.split('.');
    for (var _i = 0, propertiesArray_1 = propertiesArray; _i < propertiesArray_1.length; _i++) {
        var property = propertiesArray_1[_i];
        if (property in object) {
            // tslint:disable-next-line
            object = object[property];
        }
    }
    if (!object) {
        return '';
    }
    return object.toString();
}
//# sourceMappingURL=typeahead-utils.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/typeahead/typeahead.directive.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/typeahead/typeahead.directive.js ***!
  \*********************************************************************/
/*! exports provided: TypeaheadDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadDirective", function() { return TypeaheadDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var rxjs_add_observable_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/from */ "./node_modules/rxjs/_esm5/add/observable/from.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var rxjs_add_operator_toArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/toArray */ "./node_modules/rxjs/_esm5/add/operator/toArray.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var _component_loader_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component-loader/index */ "./node_modules/ngx-bootstrap/component-loader/index.js");
/* harmony import */ var _typeahead_container_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./typeahead-container.component */ "./node_modules/ngx-bootstrap/typeahead/typeahead-container.component.js");
/* harmony import */ var _typeahead_match_class__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./typeahead-match.class */ "./node_modules/ngx-bootstrap/typeahead/typeahead-match.class.js");
/* harmony import */ var _typeahead_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./typeahead-utils */ "./node_modules/ngx-bootstrap/typeahead/typeahead-utils.js");
/* tslint:disable:max-file-line-count */














var TypeaheadDirective = (function () {
    function TypeaheadDirective(ngControl, element, viewContainerRef, renderer, cis, changeDetection) {
        this.ngControl = ngControl;
        this.element = element;
        this.renderer = renderer;
        this.changeDetection = changeDetection;
        /** minimal no of characters that needs to be entered before
         * typeahead kicks-in. When set to 0, typeahead shows on focus with full
         * list of options (limited as normal by typeaheadOptionsLimit)
         */
        this.typeaheadMinLength = void 0;
        /** should be used only in case of typeahead attribute is array.
         * If true - loading of options will be async, otherwise - sync.
         * true make sense if options array is large.
         */
        this.typeaheadAsync = void 0;
        /** match latin symbols.
         * If true the word súper would match super and vice versa.
         */
        this.typeaheadLatinize = true;
        /** Can be use to search words by inserting a single white space between each characters
         *  for example 'C a l i f o r n i a' will match 'California'.
         */
        this.typeaheadSingleWords = true;
        /** should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to break words. Defaults to space.
         */
        this.typeaheadWordDelimiters = ' ';
        /** should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to match exact phrase.
         * Defaults to simple and double quotes.
         */
        this.typeaheadPhraseDelimiters = '\'"';
        /** specifies if typeahead is scrollable  */
        this.typeaheadScrollable = false;
        /** specifies number of options to show in scroll view  */
        this.typeaheadOptionsInScrollableView = 5;
        /** fired when 'busy' state of this component was changed,
         * fired on async mode only, returns boolean
         */
        this.typeaheadLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** fired on every key event and returns true
         * in case of matches are not detected
         */
        this.typeaheadNoResults = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** fired when option was selected, return object with data of this option */
        this.typeaheadOnSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** fired when blur event occurres. returns the active item */
        this.typeaheadOnBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** This attribute indicates that the dropdown should be opened upwards */
        this.dropup = false;
        this.isTypeaheadOptionsListActive = false;
        this.keyUpEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.placement = 'bottom-left';
        this._subscriptions = [];
        this._typeahead = cis.createLoader(element, viewContainerRef, renderer);
    }
    TypeaheadDirective.prototype.ngOnInit = function () {
        this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
        this.typeaheadMinLength =
            this.typeaheadMinLength === void 0 ? 1 : this.typeaheadMinLength;
        this.typeaheadWaitMs = this.typeaheadWaitMs || 0;
        // async should be false in case of array
        if (this.typeaheadAsync === undefined &&
            !(this.typeahead instanceof rxjs_Observable__WEBPACK_IMPORTED_MODULE_9__["Observable"])) {
            this.typeaheadAsync = false;
        }
        if (this.typeahead instanceof rxjs_Observable__WEBPACK_IMPORTED_MODULE_9__["Observable"]) {
            this.typeaheadAsync = true;
        }
        if (this.typeaheadAsync) {
            this.asyncActions();
        }
        else {
            this.syncActions();
        }
    };
    TypeaheadDirective.prototype.onInput = function (e) {
        // For `<input>`s, use the `value` property. For others that don't have a
        // `value` (such as `<span contenteditable="true">`), use either
        // `textContent` or `innerText` (depending on which one is supported, i.e.
        // Firefox or IE).
        var value = e.target.value !== undefined
            ? e.target.value
            : e.target.textContent !== undefined
                ? e.target.textContent
                : e.target.innerText;
        if (value != null && value.trim().length >= this.typeaheadMinLength) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit(e.target.value);
        }
        else {
            this.typeaheadLoading.emit(false);
            this.typeaheadNoResults.emit(false);
            this.hide();
        }
    };
    TypeaheadDirective.prototype.onChange = function (e) {
        if (this._container) {
            // esc
            if (e.keyCode === 27) {
                this.hide();
                return;
            }
            // up
            if (e.keyCode === 38) {
                this._container.prevActiveMatch();
                return;
            }
            // down
            if (e.keyCode === 40) {
                this._container.nextActiveMatch();
                return;
            }
            // enter, tab
            if (e.keyCode === 13) {
                this._container.selectActiveMatch();
                return;
            }
        }
    };
    TypeaheadDirective.prototype.onFocus = function () {
        if (this.typeaheadMinLength === 0) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit(this.element.nativeElement.value || '');
        }
    };
    TypeaheadDirective.prototype.onBlur = function () {
        if (this._container && !this._container.isFocused) {
            this.typeaheadOnBlur.emit(this._container.active);
        }
    };
    TypeaheadDirective.prototype.onKeydown = function (e) {
        // no container - no problems
        if (!this._container) {
            return;
        }
        // if an item is visible - prevent form submission
        if (e.keyCode === 13) {
            e.preventDefault();
            return;
        }
        // if an item is visible - don't change focus
        if (e.keyCode === 9) {
            e.preventDefault();
            this._container.selectActiveMatch();
            return;
        }
    };
    TypeaheadDirective.prototype.changeModel = function (match) {
        var valueStr = match.value;
        this.ngControl.viewToModelUpdate(valueStr);
        (this.ngControl.control).setValue(valueStr);
        this.changeDetection.markForCheck();
        this.hide();
    };
    Object.defineProperty(TypeaheadDirective.prototype, "matches", {
        get: function () {
            return this._matches;
        },
        enumerable: true,
        configurable: true
    });
    TypeaheadDirective.prototype.show = function () {
        var _this = this;
        this._typeahead
            .attach(_typeahead_container_component__WEBPACK_IMPORTED_MODULE_11__["TypeaheadContainerComponent"])
            .to(this.container)
            .position({ attachment: (this.dropup ? 'top' : 'bottom') + " left" })
            .show({
            typeaheadRef: this,
            placement: this.placement,
            animation: false,
            dropup: this.dropup
        });
        this._outsideClickListener = this.renderer.listen('document', 'click', function (e) {
            if (_this.typeaheadMinLength === 0 && _this.element.nativeElement.contains(e.target)) {
                return;
            }
            _this.onOutsideClick();
        });
        this._container = this._typeahead.instance;
        this._container.parent = this;
        // This improves the speed as it won't have to be done for each list item
        var normalizedQuery = (this.typeaheadLatinize
            ? Object(_typeahead_utils__WEBPACK_IMPORTED_MODULE_13__["latinize"])(this.ngControl.control.value)
            : this.ngControl.control.value)
            .toString()
            .toLowerCase();
        this._container.query = this.typeaheadSingleWords
            ? Object(_typeahead_utils__WEBPACK_IMPORTED_MODULE_13__["tokenize"])(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        this._container.matches = this._matches;
        this.element.nativeElement.focus();
    };
    TypeaheadDirective.prototype.hide = function () {
        if (this._typeahead.isShown) {
            this._typeahead.hide();
            this._outsideClickListener();
            this._container = null;
        }
    };
    TypeaheadDirective.prototype.onOutsideClick = function () {
        if (this._container && !this._container.isFocused) {
            this.hide();
        }
    };
    TypeaheadDirective.prototype.ngOnDestroy = function () {
        // clean up subscriptions
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._typeahead.dispose();
    };
    TypeaheadDirective.prototype.asyncActions = function () {
        var _this = this;
        this._subscriptions.push(this.keyUpEventEmitter
            .debounceTime(this.typeaheadWaitMs)
            .switchMap(function () { return _this.typeahead; })
            .subscribe(function (matches) {
            _this.finalizeAsyncCall(matches);
        }));
    };
    TypeaheadDirective.prototype.syncActions = function () {
        var _this = this;
        this._subscriptions.push(this.keyUpEventEmitter
            .debounceTime(this.typeaheadWaitMs)
            .mergeMap(function (value) {
            var normalizedQuery = _this.normalizeQuery(value);
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_9__["Observable"].from(_this.typeahead)
                .filter(function (option) {
                return (option &&
                    _this.testMatch(_this.normalizeOption(option), normalizedQuery));
            })
                .toArray();
        })
            .subscribe(function (matches) {
            _this.finalizeAsyncCall(matches);
        }));
    };
    TypeaheadDirective.prototype.normalizeOption = function (option) {
        var optionValue = Object(_typeahead_utils__WEBPACK_IMPORTED_MODULE_13__["getValueFromObject"])(option, this.typeaheadOptionField);
        var normalizedOption = this.typeaheadLatinize
            ? Object(_typeahead_utils__WEBPACK_IMPORTED_MODULE_13__["latinize"])(optionValue)
            : optionValue;
        return normalizedOption.toLowerCase();
    };
    TypeaheadDirective.prototype.normalizeQuery = function (value) {
        // If singleWords, break model here to not be doing extra work on each
        // iteration
        var normalizedQuery = (this.typeaheadLatinize
            ? Object(_typeahead_utils__WEBPACK_IMPORTED_MODULE_13__["latinize"])(value)
            : value)
            .toString()
            .toLowerCase();
        normalizedQuery = this.typeaheadSingleWords
            ? Object(_typeahead_utils__WEBPACK_IMPORTED_MODULE_13__["tokenize"])(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        return normalizedQuery;
    };
    TypeaheadDirective.prototype.testMatch = function (match, test) {
        var spaceLength;
        if (typeof test === 'object') {
            spaceLength = test.length;
            for (var i = 0; i < spaceLength; i += 1) {
                if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
                    return false;
                }
            }
            return true;
        }
        return match.indexOf(test) >= 0;
    };
    TypeaheadDirective.prototype.finalizeAsyncCall = function (matches) {
        this.prepareMatches(matches);
        this.typeaheadLoading.emit(false);
        this.typeaheadNoResults.emit(!this.hasMatches());
        if (!this.hasMatches()) {
            this.hide();
            return;
        }
        if (this._container) {
            // This improves the speed as it won't have to be done for each list item
            var normalizedQuery = (this.typeaheadLatinize
                ? Object(_typeahead_utils__WEBPACK_IMPORTED_MODULE_13__["latinize"])(this.ngControl.control.value)
                : this.ngControl.control.value)
                .toString()
                .toLowerCase();
            this._container.query = this.typeaheadSingleWords
                ? Object(_typeahead_utils__WEBPACK_IMPORTED_MODULE_13__["tokenize"])(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                : normalizedQuery;
            this._container.matches = this._matches;
        }
        else {
            this.show();
        }
    };
    TypeaheadDirective.prototype.prepareMatches = function (options) {
        var _this = this;
        var limited = options.slice(0, this.typeaheadOptionsLimit);
        if (this.typeaheadGroupField) {
            var matches_1 = [];
            // extract all group names
            var groups = limited
                .map(function (option) {
                return Object(_typeahead_utils__WEBPACK_IMPORTED_MODULE_13__["getValueFromObject"])(option, _this.typeaheadGroupField);
            })
                .filter(function (v, i, a) { return a.indexOf(v) === i; });
            groups.forEach(function (group) {
                // add group header to array of matches
                matches_1.push(new _typeahead_match_class__WEBPACK_IMPORTED_MODULE_12__["TypeaheadMatch"](group, group, true));
                // add each item of group to array of matches
                matches_1 = matches_1.concat(limited
                    .filter(function (option) {
                    return Object(_typeahead_utils__WEBPACK_IMPORTED_MODULE_13__["getValueFromObject"])(option, _this.typeaheadGroupField) === group;
                })
                    .map(function (option) {
                    return new _typeahead_match_class__WEBPACK_IMPORTED_MODULE_12__["TypeaheadMatch"](option, Object(_typeahead_utils__WEBPACK_IMPORTED_MODULE_13__["getValueFromObject"])(option, _this.typeaheadOptionField));
                }));
            });
            this._matches = matches_1;
        }
        else {
            this._matches = limited.map(function (option) {
                return new _typeahead_match_class__WEBPACK_IMPORTED_MODULE_12__["TypeaheadMatch"](option, Object(_typeahead_utils__WEBPACK_IMPORTED_MODULE_13__["getValueFromObject"])(option, _this.typeaheadOptionField));
            });
        }
    };
    TypeaheadDirective.prototype.hasMatches = function () {
        return this._matches.length > 0;
    };
    TypeaheadDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[typeahead]', exportAs: 'bs-typeahead' },] },
    ];
    /** @nocollapse */
    TypeaheadDirective.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _component_loader_index__WEBPACK_IMPORTED_MODULE_10__["ComponentLoaderFactory"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    TypeaheadDirective.propDecorators = {
        'typeahead': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'typeaheadMinLength': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'typeaheadWaitMs': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'typeaheadOptionsLimit': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'typeaheadOptionField': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'typeaheadGroupField': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'typeaheadAsync': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'typeaheadLatinize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'typeaheadSingleWords': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'typeaheadWordDelimiters': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'typeaheadPhraseDelimiters': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'typeaheadItemTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'optionsListTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'typeaheadScrollable': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'typeaheadOptionsInScrollableView': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'typeaheadLoading': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'typeaheadNoResults': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'typeaheadOnSelect': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'typeaheadOnBlur': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'container': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'dropup': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'onInput': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['input', ['$event'],] },],
        'onChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keyup', ['$event'],] },],
        'onFocus': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focus',] },],
        'onBlur': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur',] },],
        'onKeydown': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] },],
    };
    return TypeaheadDirective;
}());

//# sourceMappingURL=typeahead.directive.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/typeahead/typeahead.module.js":
/*!******************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/typeahead/typeahead.module.js ***!
  \******************************************************************/
/*! exports provided: TypeaheadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadModule", function() { return TypeaheadModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _typeahead_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typeahead-container.component */ "./node_modules/ngx-bootstrap/typeahead/typeahead-container.component.js");
/* harmony import */ var _typeahead_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typeahead.directive */ "./node_modules/ngx-bootstrap/typeahead/typeahead.directive.js");
/* harmony import */ var _component_loader_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component-loader/index */ "./node_modules/ngx-bootstrap/component-loader/index.js");
/* harmony import */ var _positioning_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../positioning/index */ "./node_modules/ngx-bootstrap/positioning/index.js");






var TypeaheadModule = (function () {
    function TypeaheadModule() {
    }
    TypeaheadModule.forRoot = function () {
        return {
            ngModule: TypeaheadModule,
            providers: [_component_loader_index__WEBPACK_IMPORTED_MODULE_4__["ComponentLoaderFactory"], _positioning_index__WEBPACK_IMPORTED_MODULE_5__["PositioningService"]]
        };
    };
    TypeaheadModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                    declarations: [_typeahead_container_component__WEBPACK_IMPORTED_MODULE_2__["TypeaheadContainerComponent"], _typeahead_directive__WEBPACK_IMPORTED_MODULE_3__["TypeaheadDirective"]],
                    exports: [_typeahead_container_component__WEBPACK_IMPORTED_MODULE_2__["TypeaheadContainerComponent"], _typeahead_directive__WEBPACK_IMPORTED_MODULE_3__["TypeaheadDirective"]],
                    entryComponents: [_typeahead_container_component__WEBPACK_IMPORTED_MODULE_2__["TypeaheadContainerComponent"]]
                },] },
    ];
    /** @nocollapse */
    TypeaheadModule.ctorParameters = function () { return []; };
    return TypeaheadModule;
}());

//# sourceMappingURL=typeahead.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/decorators.js":
/*!********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/decorators.js ***!
  \********************************************************/
/*! exports provided: OnChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnChange", function() { return OnChange; });
/*tslint:disable:no-invalid-this */
function OnChange(defaultValue) {
    var sufix = 'Change';
    return function OnChangeHandler(target, propertyKey) {
        var _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return this[_key];
            },
            set: function (value) {
                var prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
/* tslint:enable */
//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/facade/browser.js":
/*!************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/facade/browser.js ***!
  \************************************************************/
/*! exports provided: window, document, location, gc, performance, Event, MouseEvent, KeyboardEvent, EventTarget, History, Location, EventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return document; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "location", function() { return location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gc", function() { return gc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performance", function() { return performance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseEvent", function() { return MouseEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardEvent", function() { return KeyboardEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTarget", function() { return EventTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "History", function() { return History; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListener", function() { return EventListener; });
/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
var win = (typeof window !== 'undefined' && window) || {};

var document = win.document;
var location = win.location;
var gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
var performance = win['performance'] ? win['performance'] : null;
var Event = win['Event'];
var MouseEvent = win['MouseEvent'];
var KeyboardEvent = win['KeyboardEvent'];
var EventTarget = win['EventTarget'];
var History = win['History'];
var Location = win['Location'];
var EventListener = win['EventListener'];
//# sourceMappingURL=browser.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/index.js ***!
  \***************************************************/
/*! exports provided: OnChange, LinkedList, isBs3, Trigger, Utils, setTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators */ "./node_modules/ngx-bootstrap/utils/decorators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnChange", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["OnChange"]; });

/* harmony import */ var _linked_list_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linked-list.class */ "./node_modules/ngx-bootstrap/utils/linked-list.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return _linked_list_class__WEBPACK_IMPORTED_MODULE_1__["LinkedList"]; });

/* harmony import */ var _theme_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-provider */ "./node_modules/ngx-bootstrap/utils/theme-provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBs3", function() { return _theme_provider__WEBPACK_IMPORTED_MODULE_2__["isBs3"]; });

/* harmony import */ var _trigger_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trigger.class */ "./node_modules/ngx-bootstrap/utils/trigger.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return _trigger_class__WEBPACK_IMPORTED_MODULE_3__["Trigger"]; });

/* harmony import */ var _utils_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.class */ "./node_modules/ngx-bootstrap/utils/utils.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return _utils_class__WEBPACK_IMPORTED_MODULE_4__["Utils"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTheme", function() { return _theme_provider__WEBPACK_IMPORTED_MODULE_2__["setTheme"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/linked-list.class.js":
/*!***************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/linked-list.class.js ***!
  \***************************************************************/
/*! exports provided: LinkedList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return LinkedList; });
var LinkedList = (function () {
    function LinkedList() {
        this.length = 0;
        this.asArray = [];
        // Array methods overriding END
    }
    LinkedList.prototype.get = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    };
    LinkedList.prototype.add = function (value, position) {
        if (position === void 0) { position = this.length; }
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        var node = {
            value: value,
            next: undefined,
            previous: undefined
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                // node in middle
                var currentPreviousNode = this.getNode(position - 1);
                var currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.remove = function (position) {
        if (position === void 0) { position = 0; }
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            // middle node
            var removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.set = function (position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.toArray = function () {
        return this.asArray;
    };
    LinkedList.prototype.findAll = function (fn) {
        var current = this.head;
        var result = [];
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index: index, value: current.value });
            }
            current = current.next;
        }
        return result;
    };
    // Array methods overriding start
    LinkedList.prototype.push = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.forEach(function (arg) {
            _this.add(arg);
        });
        return this.length;
    };
    LinkedList.prototype.pop = function () {
        if (this.length === 0) {
            return undefined;
        }
        var last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    };
    LinkedList.prototype.unshift = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.reverse();
        args.forEach(function (arg) {
            _this.add(arg, 0);
        });
        return this.length;
    };
    LinkedList.prototype.shift = function () {
        if (this.length === 0) {
            return undefined;
        }
        var lastItem = this.head.value;
        this.remove();
        return lastItem;
    };
    LinkedList.prototype.forEach = function (fn) {
        var current = this.head;
        for (var index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    };
    LinkedList.prototype.indexOf = function (value) {
        var current = this.head;
        var position = 0;
        for (var index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    };
    LinkedList.prototype.some = function (fn) {
        var current = this.head;
        var result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.every = function (fn) {
        var current = this.head;
        var result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.toString = function () {
        return '[Linked List]';
    };
    LinkedList.prototype.find = function (fn) {
        var current = this.head;
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.findIndex = function (fn) {
        var current = this.head;
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.getNode = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    };
    LinkedList.prototype.createInternalArrayRepresentation = function () {
        var outArray = [];
        var current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    };
    return LinkedList;
}());

//# sourceMappingURL=linked-list.class.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/theme-provider.js":
/*!************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/theme-provider.js ***!
  \************************************************************/
/*! exports provided: setTheme, isBs3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTheme", function() { return setTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBs3", function() { return isBs3; });
/* harmony import */ var _facade_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facade/browser */ "./node_modules/ngx-bootstrap/utils/facade/browser.js");

var guessedVersion;
function _guessBsVersion() {
    if (typeof document === 'undefined') {
        return null;
    }
    var spanEl = document.createElement('span');
    spanEl.innerText = 'test bs version';
    document.body.appendChild(spanEl);
    spanEl.classList.add('d-none');
    var rect = spanEl.getBoundingClientRect();
    document.body.removeChild(spanEl);
    if (!rect) {
        return 'bs3';
    }
    return rect.top === 0 ? 'bs4' : 'bs3';
}
function setTheme(theme) {
    guessedVersion = theme;
}
// todo: in ngx-bootstrap, bs4 will became a default one
function isBs3() {
    if (typeof _facade_browser__WEBPACK_IMPORTED_MODULE_0__["window"] === 'undefined') {
        return true;
    }
    if (typeof _facade_browser__WEBPACK_IMPORTED_MODULE_0__["window"].__theme === 'undefined') {
        if (guessedVersion) {
            return guessedVersion === 'bs3';
        }
        guessedVersion = _guessBsVersion();
        return guessedVersion === 'bs3';
    }
    return _facade_browser__WEBPACK_IMPORTED_MODULE_0__["window"].__theme !== 'bs4';
}
//# sourceMappingURL=theme-provider.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/trigger.class.js":
/*!***********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/trigger.class.js ***!
  \***********************************************************/
/*! exports provided: Trigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return Trigger; });
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    Trigger.prototype.isManual = function () {
        return this.open === 'manual' || this.close === 'manual';
    };
    return Trigger;
}());

//# sourceMappingURL=trigger.class.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/triggers.js":
/*!******************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/triggers.js ***!
  \******************************************************/
/*! exports provided: parseTriggers, listenToTriggers, listenToTriggersV2, registerOutsideClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTriggers", function() { return parseTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenToTriggers", function() { return listenToTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenToTriggersV2", function() { return listenToTriggersV2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerOutsideClick", function() { return registerOutsideClick; });
/* harmony import */ var _trigger_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trigger.class */ "./node_modules/ngx-bootstrap/utils/trigger.class.js");

var DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var parsedTriggers = trimmedTriggers
        .split(/\s+/)
        .map(function (trigger) { return trigger.split(':'); })
        .map(function (triggerPair) {
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new _trigger_class__WEBPACK_IMPORTED_MODULE_0__["Trigger"](alias[0], alias[1]);
    });
    var manualTriggers = parsedTriggers.filter(function (triggerPair) {
        return triggerPair.isManual();
    });
    if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
    }
    return parsedTriggers;
}
function listenToTriggers(renderer, target, triggers, showFn, hideFn, toggleFn) {
    var parsedTriggers = parseTriggers(triggers);
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    parsedTriggers.forEach(function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
    });
    return function () {
        listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); });
    };
}
function listenToTriggersV2(renderer, options) {
    var parsedTriggers = parseTriggers(options.triggers);
    var target = options.target;
    // do nothing
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    // all listeners
    var listeners = [];
    // lazy listeners registration
    var _registerHide = [];
    var registerHide = function () {
        // add hide listeners to unregister array
        _registerHide.forEach(function (fn) { return listeners.push(fn()); });
        // register hide events only once
        _registerHide.length = 0;
    };
    // register open\close\toggle listeners
    parsedTriggers.forEach(function (trigger) {
        var useToggle = trigger.open === trigger.close;
        var showFn = useToggle ? options.toggle : options.show;
        if (!useToggle) {
            _registerHide.push(function () {
                return renderer.listen(target, trigger.close, options.hide);
            });
        }
        listeners.push(renderer.listen(target, trigger.open, function () { return showFn(registerHide); }));
    });
    return function () {
        listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); });
    };
}
function registerOutsideClick(renderer, options) {
    if (!options.outsideClick) {
        return Function.prototype;
    }
    return renderer.listen('document', 'click', function (event) {
        if (options.target && options.target.contains(event.target)) {
            return;
        }
        if (options.targets &&
            options.targets.some(function (target) { return target.contains(event.target); })) {
            return;
        }
        options.hide();
    });
}
//# sourceMappingURL=triggers.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/utils.class.js":
/*!*********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/utils.class.js ***!
  \*********************************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var _facade_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facade/browser */ "./node_modules/ngx-bootstrap/utils/facade/browser.js");

var Utils = (function () {
    function Utils() {
    }
    Utils.reflow = function (element) {
        (function (bs) { return bs; })(element.offsetHeight);
    };
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    Utils.getStyles = function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = _facade_browser__WEBPACK_IMPORTED_MODULE_0__["window"];
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());

//# sourceMappingURL=utils.class.js.map

/***/ }),

/***/ "./node_modules/ngx-tags-input/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ngx-tags-input/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
var tags_input_component_1 = __webpack_require__(/*! ./src/tags-input.component */ "./node_modules/ngx-tags-input/dist/src/tags-input.component.js");
var typeahead_1 = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/typeahead/index.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var TagsInputModule = (function () {
    function TagsInputModule() {
    }
    TagsInputModule.forRoot = function () {
        return {
            ngModule: TagsInputModule,
            providers: []
        };
    };
    TagsInputModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        forms_1.FormsModule,
                        typeahead_1.TypeaheadModule.forRoot()
                    ],
                    declarations: [
                        tags_input_component_1.TagsInputComponent
                    ],
                    exports: [
                        tags_input_component_1.TagsInputComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    TagsInputModule.ctorParameters = function () { return []; };
    return TagsInputModule;
}());
exports.TagsInputModule = TagsInputModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-tags-input/dist/src/tags-input.component.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ngx-tags-input/dist/src/tags-input.component.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var noop = function () { };
var ɵ0 = noop;
exports.ɵ0 = ɵ0;
var TAGS_INPUT_TEMPLATE = "\n    <div class=\"tags-input\">\n        <span class=\"tags-input__tag label label-primary\" *ngFor=\"let tag of tags\">\n            {{tag[displayField]}}\n            <span *ngIf=\"isDeleteable(tag)\" role=\"button\" class=\"tags-input__tag-remove-btn\" (click)=\"removeTag(tag)\" (touch)=\"removeTag(tag)\">\n                <span aria-hidden=\"true\">&times;</span>\n                <span class=\"sr-only\">Close</span>\n            </span>\n        </span>\n        <input\n            *ngIf=\"options === null\" \n            class=\"tags-input__input-field\" \n            type=\"text\" \n            placeholder=\"{{ getPlaceHolder() }}\"\n            name=\"tags\"\n            (keyup.enter)=\"addTag(tagInput)\" (keydown.backspace)=\"removeLastTag(tagInput)\"\n            [disabled]=\"maximumOfTagsReached()\"\n            [hidden]=\"maximumOfTagsReached()\"\n            #tagInput />\n        <input\n            *ngIf=\"options !== null\" \n            class=\"tags-input__input-field\" \n            type=\"text\" \n            placeholder=\"{{ getPlaceHolder() }}\"\n            name=\"tags\"\n            (keydown.backspace)=\"removeLastTag(tagInput)\"\n            [(ngModel)]=\"selected\" \n            [typeahead]=\"options\"\n            [typeaheadOptionField]=\"displayField\"\n            (typeaheadOnSelect)=\"typeaheadOnSelect($event)\"\n            (typeaheadNoResults)=\"typeaheadOnNoMatch($event)\"\n            [typeaheadMinLength]=\"minLengthBeforeOptions\"\n            [typeaheadScrollable]=\"scrollableOptions\"\n            [typeaheadOptionsInScrollableView]=\"scrollableOptionsInView\"\n            [disabled]=\"maximumOfTagsReached()\"\n            [hidden]=\"maximumOfTagsReached()\"\n            #tagInput />\n    </div>\n";
var TAGS_INPUT_STYLE = "\n    :host {\n        overflow: auto;\n        white-space: nowrap;\n    }\n\n    .tags-input {\n        align-items: center;\n        display: flex;\n        flex-wrap: wrap;\n    }\n\n    .tags-input__tag {\n        display: inline-block;\n        margin-bottom: 2px;\n        margin-right: 5px;\n        padding-right: 0.3em;\n    }\n\n    .tags-input__tag-remove-btn {\n        cursor: pointer;\n        display: inline-block;\n        font-size: 12px;\n        margin: -3px 0 0 3px;\n        padding: 0;\n        vertical-align: top;\n    }\n\n    .tags-input__input-field {\n        border: none;\n        flex-grow: 1;\n        outline: none;\n    }\n";
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return TagsInputComponent; }),
    multi: true
};
var TagsInputComponent = (function () {
    function TagsInputComponent() {
        this.selected = '';
        this.tags = [];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.removeLastOnBackspace = false;
        this.canDeleteTags = true;
        this.placeholder = '';
        this.options = null;
        this.displayField = 'displayValue';
        this.minLengthBeforeOptions = 1;
        this.scrollableOptions = false;
        this.scrollableOptionsInView = 5;
        this.onTagsChanged = new core_1.EventEmitter();
        this.onMaxTagsReached = new core_1.EventEmitter();
        this.onNoOptionsMatch = new core_1.EventEmitter();
    }
    TagsInputComponent.prototype.ngOnInit = function () { };
    TagsInputComponent.prototype.getPlaceHolder = function () {
        if (this.tags && this.tags.length > 0) {
            return '';
        }
        return this.placeholder;
    };
    TagsInputComponent.prototype.tagsChanged = function (type, tag) {
        this.onChangeCallback(this.tags);
        this.onTagsChanged.emit({
            change: type,
            tag: tag
        });
        if (this.maximumOfTagsReached()) {
            this.onMaxTagsReached.emit();
        }
    };
    TagsInputComponent.prototype.removeLastTag = function (tagInput) {
        if (!this.removeLastOnBackspace || !this.tags.length) {
            return;
        }
        if (tagInput.value === '') {
            this.removeTag(this.tags[this.tags.length - 1]);
        }
    };
    TagsInputComponent.prototype.addTag = function (tagInput) {
        if (tagInput.value.trim() !== '') {
            var tag = (_a = {},
                _a[this.displayField] = tagInput.value,
                _a);
            this.addPredefinedTag(tag);
        }
        tagInput.value = '';
        var _a;
    };
    TagsInputComponent.prototype.addPredefinedTag = function (tag) {
        if (!this.maximumOfTagsReached()) {
            this.tags.push(tag);
            this.tagsChanged('add', tag);
        }
    };
    TagsInputComponent.prototype.removeTag = function (tagToRemove) {
        if (!this.isDeleteable(tagToRemove)) {
            return;
        }
        this.tags = this.tags.filter(function (tag) { return tagToRemove !== tag; });
        this.tagsChanged('remove', tagToRemove);
    };
    TagsInputComponent.prototype.maximumOfTagsReached = function () {
        return typeof this.maxTags !== 'undefined' && this.tags.length >= this.maxTags;
    };
    TagsInputComponent.prototype.isDeleteable = function (tag) {
        if (typeof tag.deleteable !== "undefined" && !tag.deleteable) {
            return false;
        }
        return this.canDeleteTags;
    };
    TagsInputComponent.prototype.typeaheadOnSelect = function (e) {
        if (typeof e.item === 'string') {
            this.addPredefinedTag((_a = {},
                _a[this.displayField] = e.value,
                _a));
        }
        else {
            this.addPredefinedTag(e.item);
        }
        this.selected = '';
        var _a;
    };
    TagsInputComponent.prototype.typeaheadOnNoMatch = function (e) {
        if (typeof this.onNoOptionsMatch !== 'undefined') {
            this.onNoOptionsMatch.emit(e);
        }
    };
    TagsInputComponent.prototype.writeValue = function (value) {
        if (value !== this.tags) {
            this.tags = value;
        }
    };
    TagsInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    TagsInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    TagsInputComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'tags-input',
                    template: TAGS_INPUT_TEMPLATE,
                    styles: [TAGS_INPUT_STYLE],
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    TagsInputComponent.ctorParameters = function () { return []; };
    TagsInputComponent.propDecorators = {
        "maxTags": [{ type: core_1.Input },],
        "removeLastOnBackspace": [{ type: core_1.Input },],
        "canDeleteTags": [{ type: core_1.Input },],
        "placeholder": [{ type: core_1.Input },],
        "options": [{ type: core_1.Input },],
        "displayField": [{ type: core_1.Input },],
        "minLengthBeforeOptions": [{ type: core_1.Input },],
        "scrollableOptions": [{ type: core_1.Input },],
        "scrollableOptionsInView": [{ type: core_1.Input },],
        "onTagsChanged": [{ type: core_1.Output },],
        "onMaxTagsReached": [{ type: core_1.Output },],
        "onNoOptionsMatch": [{ type: core_1.Output },],
    };
    return TagsInputComponent;
}());
exports.TagsInputComponent = TagsInputComponent;
//# sourceMappingURL=tags-input.component.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/from.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/add/observable/from.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../observable/from */ "./node_modules/rxjs/_esm5/observable/from.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_from PURE_IMPORTS_END */


_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].from = _observable_from__WEBPACK_IMPORTED_MODULE_1__["from"];
//# sourceMappingURL=from.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/toArray.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/add/operator/toArray.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var _operator_toArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/toArray */ "./node_modules/rxjs/_esm5/operator/toArray.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_toArray PURE_IMPORTS_END */


_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.toArray = _operator_toArray__WEBPACK_IMPORTED_MODULE_1__["toArray"];
//# sourceMappingURL=toArray.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/toArray.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/_esm5/operator/toArray.js ***!
  \*****************************************************/
/*! exports provided: toArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony import */ var _operators_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../operators/toArray */ "./node_modules/rxjs/_esm5/operators/toArray.js");
/** PURE_IMPORTS_START .._operators_toArray PURE_IMPORTS_END */

/**
 * Collects all source emissions and emits them as an array when the source completes.
 *
 * <span class="informal">Get all values inside an array when the source completes</span>
 *
 * <img src="./img/toArray.png" width="100%">
 *
 * `toArray` will wait until the source Observable completes
 * before emitting the array containing all emissions.
 * When the source Observable errors no array will be emitted.
 *
 * @example <caption>Create array from input</caption>
 * const input = Rx.Observable.interval(100).take(4);
 *
 * input.toArray()
 *   .subscribe(arr => console.log(arr)); // [0,1,2,3]
 *
 * @see {@link buffer}
 *
 * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
 * @method toArray
 * @owner Observable
 */
function toArray() {
    return Object(_operators_toArray__WEBPACK_IMPORTED_MODULE_0__["toArray"])()(this);
}
//# sourceMappingURL=toArray.js.map


/***/ }),

/***/ "./src/app/cv/base.model.ts":
/*!**********************************!*\
  !*** ./src/app/cv/base.model.ts ***!
  \**********************************/
/*! exports provided: Base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return Base; });
/* harmony import */ var _utils_dictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/dictionary */ "./src/app/cv/utils/dictionary.ts");

var Base = (function () {
    function Base() {
        this.rss = null;
        this.rss = new _utils_dictionary__WEBPACK_IMPORTED_MODULE_0__["Dictionary"]();
    }
    Base.prototype.AddLiteral = function (key, value) {
        this.rss.Add(key, value);
    };
    Base.prototype.GetLiteral = function (cultura, key) {
        var cadena = "[" + cultura + "]-" + "Literal." + key;
        return this.rss.Item(cadena);
    };
    return Base;
}());



/***/ }),

/***/ "./src/app/cv/capcalera/capcalera.component.css":
/*!******************************************************!*\
  !*** ./src/app/cv/capcalera/capcalera.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.capcalera {\r\n    background:darkblue;\r\n    color:  white;\r\n    width: 100%;\r\n    height: auto;\r\n    \r\n}\r\n\r\ndiv.centrat-text {\r\n    text-align: center;\r\n    padding-left: 40px;\r\n    padding-bottom:5px;\r\n    width: 100%;\r\n}\r\n\r\ndiv.centrat {\r\n    padding-left: 40px;\r\n    padding-bottom:5px;\r\n    width: 100%;\r\n}\r\n\r\nlabel {\r\n    font-weight: bold;\r\n}\r\n\r\nlabel.diferent {\r\n    font-weight: bold;\r\n    font-size: 12pt;\r\n    color: yellow;\r\n    margin-top: 12px;\r\n}\r\n\r\nspan.titol {\r\n    font-weight: bold;\r\n    font-size: 14pt;\r\n    color: black;\r\n    background: yellow;    \r\n    float: left;\r\n    font-style: italic;\r\n    width: 100%;\r\n}\r\n\r\nlabel.diferent-gran {\r\n    font-weight: bold;\r\n    font-size: 18pt;\r\n    color: yellow;\r\n    margin-top: 18px;\r\n    text-align: center;\r\n    width: 80%;\r\n}\r\n\r\n.center_image {\r\n    padding-top:20px;\r\n    width:100%;\r\n    margin:0px auto;\r\n    text-align:center;\r\n}\r\n\r\n.padding-top {\r\n    padding-top: 20px;\r\n}\r\n\r\n.left-margin {\r\n    padding-left: 20px;   \r\n}\r\n\r\n.address {\r\n    float:left;\r\n    padding-top: 10px;\r\n    padding-left: 20px;\r\n}\r\n\r\n.centred-image {\r\n    width: 150px; \r\n    height: 150px;\r\n    text-align: center;\r\n}\r\n\r\n.rounded {\r\n    border-radius: 50% !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YvY2FwY2FsZXJhL2NhcGNhbGVyYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2N2L2NhcGNhbGVyYS9jYXBjYWxlcmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5jYXBjYWxlcmEge1xyXG4gICAgYmFja2dyb3VuZDpkYXJrYmx1ZTtcclxuICAgIGNvbG9yOiAgd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIFxyXG59XHJcblxyXG5kaXYuY2VudHJhdC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuZGl2LmNlbnRyYXQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206NXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5sYWJlbC5kaWZlcmVudCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcblxyXG5zcGFuLnRpdG9sIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZDogeWVsbG93OyAgICBcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmxhYmVsLmRpZmVyZW50LWdyYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHQ7XHJcbiAgICBjb2xvcjogeWVsbG93O1xyXG4gICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5jZW50ZXJfaW1hZ2Uge1xyXG4gICAgcGFkZGluZy10b3A6MjBweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXJnaW46MHB4IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLnBhZGRpbmctdG9wIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi5sZWZ0LW1hcmdpbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7ICAgXHJcbn1cclxuXHJcbi5hZGRyZXNzIHtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuLmNlbnRyZWQtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDE1MHB4OyBcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yb3VuZGVkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/cv/capcalera/capcalera.component.html":
/*!*******************************************************!*\
  !*** ./src/app/cv/capcalera/capcalera.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center_image\">\r\n    <img src=\"assets/images/cv/jo.jpg\" class=\"centred-image rounded\">\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"centrat\"><label class=\"diferent-gran\">{{capcalera.Nom}}<br />{{capcalera.Cognoms}}</label></div>\r\n</div>\r\n\r\n<div>\r\n    <span class=\"titol\"><marquee>FULL STACK: .NET & ANGULAR</marquee></span>\r\n</div>\r\n    \r\n<br><br><br><br>\r\n\r\n<div class=\"row\">\r\n    <div class=\"centrat\"><img src=\"assets/images/cv/phone.png\" /> <span class=\"left-margin\">{{capcalera.Telefon}}</span></div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div style=\"position: relative; left: 40px;\">\r\n        <span style=\"float: left;\">\r\n            <img src=\"assets/images/cv/address.png\">\r\n        </span>\r\n        <span style=\"float: left;margin-left: 20px;\">\r\n            <p>{{capcalera.Adreca}}</p><p>{{capcalera.CodiPostal}} {{capcalera.Ciutat}}</p><p>({{capcalera.Provincia}})</p>\r\n        </span>\r\n    </div>\r\n</div>\r\n    \r\n<div class=\"row\">\r\n    <div class=\"centrat\" ><img src=\"assets/images/cv/email.png\" /><span class=\"left-margin\">{{capcalera.email}}</span></div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"centrat\"><img src=\"assets/images/cv/skype.png\" /><span class=\"left-margin\">{{capcalera.NickSkype}}</span></div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"centrat\"><img src=\"assets/images/cv/birthday.png\" /><span class=\"left-margin\">{{capcalera.Naixament}}</span></div>\r\n</div>\r\n<br><br>\r\n\r\n<div class=\"row\">\r\n    <div class=\"centrat\"><label class=\"diferent\"><img src=\"assets/images/cv/nationality.png\" /><span class=\"left-margin\">{{capcalera.Nacionalitat}} ({{capcalera.Pais}})</span></label></div>\r\n</div>    \r\n\r\n<div class=\"row\">\r\n    <div class=\"centrat\"><img src=\"assets/images/cv/dni.png\" /><label class=\"diferent\"><span class=\"left-margin\">{{capcalera.NIF}}</span></label></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/cv/capcalera/capcalera.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/cv/capcalera/capcalera.component.ts ***!
  \*****************************************************/
/*! exports provided: CapcaleraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapcaleraComponent", function() { return CapcaleraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _capcalera_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./capcalera.model */ "./src/app/cv/capcalera/capcalera.model.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CapcaleraComponent = (function () {
    function CapcaleraComponent(data, globals) {
        var _this = this;
        this.data = data;
        this.capcalera = new _capcalera_model__WEBPACK_IMPORTED_MODULE_2__["Capcalera"]();
        this.literal = new _capcalera_model__WEBPACK_IMPORTED_MODULE_2__["Capcalera"]();
        this.cultura = globals.cultura;
        data.cargarDades(new _capcalera_model__WEBPACK_IMPORTED_MODULE_2__["Capcalera"]()).then(function (res) {
            _this.capcalera = Object.assign({}, res.data, _this.capcalera);
        });
    }
    CapcaleraComponent.prototype.ngOnInit = function () {
    };
    CapcaleraComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-capcalera',
            template: __webpack_require__(/*! ./capcalera.component.html */ "./src/app/cv/capcalera/capcalera.component.html"),
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]],
            styles: [__webpack_require__(/*! ./capcalera.component.css */ "./src/app/cv/capcalera/capcalera.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"]])
    ], CapcaleraComponent);
    return CapcaleraComponent;
}());



/***/ }),

/***/ "./src/app/cv/capcalera/capcalera.model.ts":
/*!*************************************************!*\
  !*** ./src/app/cv/capcalera/capcalera.model.ts ***!
  \*************************************************/
/*! exports provided: Capcalera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Capcalera", function() { return Capcalera; });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base.model */ "./src/app/cv/base.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Capcalera = (function (_super) {
    __extends(Capcalera, _super);
    function Capcalera() {
        var _this = _super.call(this) || this;
        _this.AddLiteral("[ca-ES]-" + "Literal.capcalera.NIF", "NIF");
        _this.AddLiteral("[ca-ES]-" + "Literal.capcalera.Mòvil", "Mòvil");
        _this.AddLiteral("[ca-ES]-" + "Literal.capcalera.Direcció", "Direcció");
        _this.AddLiteral("[ca-ES]-" + "Literal.capcalera.E-mail", "E-mail");
        _this.AddLiteral("[ca-ES]-" + "Literal.capcalera.UsuariSkype", "Usuari Skype");
        _this.AddLiteral("[ca-ES]-" + "Literal.capcalera.DataNaixament", "Data Naixament");
        _this.AddLiteral("[ca-ES]-" + "Literal.capcalera.Nacionalitat", "Nacionalitat");
        _this.AddLiteral("[es-ES]-" + "Literal.capcalera.NIF", "NIF");
        _this.AddLiteral("[es-ES]-" + "Literal.capcalera.Mòvil", "Móbil");
        _this.AddLiteral("[es-ES]-" + "Literal.capcalera.Direcció", "Dirección");
        _this.AddLiteral("[es-ES]-" + "Literal.capcalera.E-mail", "E-mail");
        _this.AddLiteral("[es-ES]-" + "Literal.capcalera.UsuariSkype", "Usuario Skype");
        _this.AddLiteral("[es-ES]-" + "Literal.capcalera.DataNaixament", "Fecha Nacimiento");
        _this.AddLiteral("[es-ES]-" + "Literal.capcalera.Nacionalitat", "Nacionalidad");
        _this.AddLiteral("[en-GB]-" + "Literal.capcalera.NIF", "NIF");
        _this.AddLiteral("[en-GB]-" + "Literal.capcalera.Mòvil", "Mobile");
        _this.AddLiteral("[en-GB]-" + "Literal.capcalera.Direcció", "Address");
        _this.AddLiteral("[en-GB]-" + "Literal.capcalera.E-mail", "E-mail");
        _this.AddLiteral("[en-GB]-" + "Literal.capcalera.UsuariSkype", " Skype's User");
        _this.AddLiteral("[en-GB]-" + "Literal.capcalera.DataNaixament", "Birthday");
        _this.AddLiteral("[en-GB]-" + "Literal.capcalera.Nacionalitat", "Nationality");
        return _this;
    }
    return Capcalera;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["Base"]));



/***/ }),

/***/ "./src/app/cv/coneixements/coneixements.component.css":
/*!************************************************************!*\
  !*** ./src/app/cv/coneixements/coneixements.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tamany_coneixements{\r\n    width:70%;\r\n}\r\ntable tr:nth-child(odd) {\r\n    background-color: darkgrey; \r\n    color: black;\r\n}\r\n.odd {\r\n    background-color: white; \r\n    color: black;\r\n    }\r\n.even {\r\n    background-color: darkgray; \r\n    color: black;\r\n}\r\n.tag {\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YvY29uZWl4ZW1lbnRzL2NvbmVpeGVtZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWjtBQUVKO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEI7QUFFQTs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL2N2L2NvbmVpeGVtZW50cy9jb25laXhlbWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YW1hbnlfY29uZWl4ZW1lbnRze1xyXG4gICAgd2lkdGg6NzAlO1xyXG59XHJcbnRhYmxlIHRyOm50aC1jaGlsZChvZGQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5OyBcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm9kZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4uZXZlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTsgXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi50YWcge1xyXG4gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cv/coneixements/coneixements.component.html":
/*!*************************************************************!*\
  !*** ./src/app/cv/coneixements/coneixements.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tamany_coneixements\">\r\n    <table class=\"table table-bordered table-striped\">\r\n        <thead class=\"thead-dark\">\r\n            <th>{{literal.GetLiteral(cultura, \"Coneixements.Categoria\")}}</th>\r\n            <th>{{literal.GetLiteral(cultura, \"Coneixements.Llenguatge\")}}</th>\r\n            <th>{{literal.GetLiteral(cultura, \"Coneixements.Experiencia\")}}</th>\r\n            <th>{{literal.GetLiteral(cultura, \"Coneixements.Nivell\")}}</th>\r\n            <th>{{literal.GetLiteral(cultura, \"Coneixements.Versio\")}}</th>\r\n        </thead>\r\n        <tr *ngFor=\"let item of coneixements\">\r\n            <th class=\"{{item.td}}\" [attr.rowspan]=\"item.rowSpan\" *ngIf=\"item.rowSpan != 0\">{{item.categoria}}</th>\r\n            <td>{{item.descripcio}}</td>\r\n            <td>\r\n                {{item.experiencia}} {{item.temps}}\r\n            </td>\r\n            <td>{{item.nivell}}</td>\r\n            <td>{{item.versio}}</td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/cv/coneixements/coneixements.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/cv/coneixements/coneixements.component.ts ***!
  \***********************************************************/
/*! exports provided: ConeixementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConeixementsComponent", function() { return ConeixementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _coneixements_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coneixements.model */ "./src/app/cv/coneixements/coneixements.model.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");
/* harmony import */ var linq_es2015__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! linq-es2015 */ "./node_modules/linq-es2015/lib/linq.js");
/* harmony import */ var linq_es2015__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(linq_es2015__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConeixementsComponent = (function () {
    function ConeixementsComponent(data, globals) {
        var _this = this;
        this.data = data;
        this.literal = new _coneixements_model__WEBPACK_IMPORTED_MODULE_1__["Coneixements"]();
        this.coneixements = new Array();
        this.cultura = globals.cultura;
        data.cargarDades(new _coneixements_model__WEBPACK_IMPORTED_MODULE_1__["Coneixements"]()).then(function (res) {
            var items = linq_es2015__WEBPACK_IMPORTED_MODULE_4__["asEnumerable"](JSON.parse(JSON.stringify(res))).ToArray();
            for (var i = 0; i < items.length; i++) {
                var obj = Object.assign({}, items[i]);
                var obj = new _coneixements_model__WEBPACK_IMPORTED_MODULE_1__["Coneixements"]();
                obj.cultura = items[i].cultura;
                obj.categoria = items[i].categoria;
                obj.descripcio = items[i].descripcio;
                obj.experiencia = items[i].experiencia;
                obj.temps = items[i].temps;
                obj.nivell = items[i].nivell;
                obj.versio = items[i].versio;
                obj.rowSpan = items[i].rowSpan;
                obj.td = items[i].td;
                obj.ordre = items[i].ordre;
                if (obj.experiencia != 1) {
                    switch (globals.cultura) {
                        case "ca-ES":
                            if (obj.temps == "any")
                                obj.temps += "s";
                            else
                                obj.temps += "os";
                            break;
                        case "es-ES":
                            if (obj.temps == "año")
                                obj.temps += "s";
                            else
                                obj.temps += "es";
                            break;
                        case "en-GB":
                            obj.temps += "s";
                            break;
                    }
                }
                _this.coneixements.push(obj);
            }
            globals.load = true;
        });
    }
    ConeixementsComponent.prototype.ngOnInit = function () {
    };
    ConeixementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coneixements',
            template: __webpack_require__(/*! ./coneixements.component.html */ "./src/app/cv/coneixements/coneixements.component.html"),
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]],
            styles: [__webpack_require__(/*! ./coneixements.component.css */ "./src/app/cv/coneixements/coneixements.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"]])
    ], ConeixementsComponent);
    return ConeixementsComponent;
}());



/***/ }),

/***/ "./src/app/cv/coneixements/coneixements.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/cv/coneixements/coneixements.model.ts ***!
  \*******************************************************/
/*! exports provided: Coneixements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coneixements", function() { return Coneixements; });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base.model */ "./src/app/cv/base.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Coneixements = (function (_super) {
    __extends(Coneixements, _super);
    function Coneixements() {
        var _this = _super.call(this) || this;
        _this.rowSpan = 0;
        _this.td = "odd";
        _this.ordre = 0;
        _this.AddLiteral("[ca-ES]-" + "Literal.Coneixements.Categoria", "Categoria");
        _this.AddLiteral("[ca-ES]-" + "Literal.Coneixements.Llenguatge", "Llenguatge");
        _this.AddLiteral("[ca-ES]-" + "Literal.Coneixements.Experiencia", "Experiència");
        _this.AddLiteral("[ca-ES]-" + "Literal.Coneixements.Nivell", "Nivell");
        _this.AddLiteral("[ca-ES]-" + "Literal.Coneixements.Versio", "Versió");
        _this.AddLiteral("[es-ES]-" + "Literal.Coneixements.Categoria", "Categoría");
        _this.AddLiteral("[es-ES]-" + "Literal.Coneixements.Llenguatge", "Llenguaje");
        _this.AddLiteral("[es-ES]-" + "Literal.Coneixements.Experiencia", "Experiencia");
        _this.AddLiteral("[es-ES]-" + "Literal.Coneixements.Nivell", "Nivel");
        _this.AddLiteral("[es-ES]-" + "Literal.Coneixements.Versio", "Versión");
        _this.AddLiteral("[en-GB]-" + "Literal.Coneixements.Categoria", "Category");
        _this.AddLiteral("[en-GB]-" + "Literal.Coneixements.Llenguatge", "Language");
        _this.AddLiteral("[en-GB]-" + "Literal.Coneixements.Experiencia", "Experience");
        _this.AddLiteral("[en-GB]-" + "Literal.Coneixements.Nivell", "Level");
        _this.AddLiteral("[en-GB]-" + "Literal.Coneixements.Versio", "Version");
        return _this;
    }
    return Coneixements;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["Base"]));



/***/ }),

/***/ "./src/app/cv/cv.component.css":
/*!*************************************!*\
  !*** ./src/app/cv/cv.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nhtml, body {\r\n    height: 100% ;\r\n  }\r\n\r\n.contentcv {    \r\n    height: 100%;    \r\n    border-right: 1px solid darkblue;\r\n    background: #ECECEC;\r\n    float: left;\r\n}\r\n\r\n.contentmenu {\r\n    background: darkblue;\r\n    width: 45%;    \r\n    color: white;     \r\n    height: unset;\r\n    \r\n}\r\n\r\n.main {\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-justify-content: space-between;\r\n            justify-content: space-between;\r\n    width: 70%;\r\n    background: #ECECEC;\r\n    margin: 0 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YvY3YuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxhQUFhO0VBQ2Y7O0FBRUY7SUFDSSxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLHFCQUFhO0lBQWIsYUFBYTtJQUNiLHNDQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY3YvY3YuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5odG1sLCBib2R5IHtcclxuICAgIGhlaWdodDogMTAwJSA7XHJcbiAgfVxyXG5cclxuLmNvbnRlbnRjdiB7ICAgIFxyXG4gICAgaGVpZ2h0OiAxMDAlOyAgICBcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGRhcmtibHVlO1xyXG4gICAgYmFja2dyb3VuZDogI0VDRUNFQztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uY29udGVudG1lbnUge1xyXG4gICAgYmFja2dyb3VuZDogZGFya2JsdWU7XHJcbiAgICB3aWR0aDogNDUlOyAgICBcclxuICAgIGNvbG9yOiB3aGl0ZTsgICAgIFxyXG4gICAgaGVpZ2h0OiB1bnNldDtcclxuICAgIFxyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGJhY2tncm91bmQ6ICNFQ0VDRUM7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/cv/cv.component.html":
/*!**************************************!*\
  !*** ./src/app/cv/cv.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n    <div class=\"contentmenu\">\r\n        <app-capcalera></app-capcalera>\r\n    </div>\r\n    <div class=\"contentcv\">\r\n        <app-educacio></app-educacio>\r\n        <app-experiencialaboral></app-experiencialaboral>\r\n    </div>    \r\n</div>\r\n\r\n\r\n<!--\r\n\r\n  \r\n<div class=\"dmr_accordion\"> \r\n    <div class=\"panell\"> \r\n        <div class=\"titol\">\r\n            <div class=\"esquerra\">\r\n                <a  (click)='Panel_ClickEvent(\"educacio\")'>Educació</a>\r\n            </div> \r\n            <div>                \r\n                <i class=\"dret actiu\" (click)='Panel_ClickEvent(\"educacio\")' [ngClass]=\"{'actiu': !clase_activa_educacio, 'noactiu': clase_activa_educacio}\"></i>\r\n            </div>        \r\n        </div>    \r\n        <div class=\"template obrir\" [ngClass]=\"{'obrir': clase_activa_educacio, 'tancar': !clase_activa_educacio}\">\r\n            \r\n        </div>\r\n    </div>\r\n    <div class=\"panell\"> \r\n        <div class=\"titol\">\r\n            <div class=\"esquerra\">\r\n                <a (click)='Panel_ClickEvent(\"experiencia\")'>Experiència laboral</a>\r\n            </div>\r\n            <div>                \r\n                <i class=\"dret actiu\" (click)='Panel_ClickEvent(\"experiencia\")' [ngClass]=\"{'actiu': !clase_activa_experiencia, 'noactiu': clase_activa_experiencia}\"></i>\r\n            </div>        \r\n        </div>    \r\n        <div class=\"template obrir\" [ngClass]=\"{'obrir': clase_activa_experiencia, 'tancar': !clase_activa_experiencia}\">\r\n            <app-experiencialaboral></app-experiencialaboral>\r\n        </div>\r\n    </div>\r\n    <div class=\"panell\">\r\n        <div class=\"titol\">\r\n            <div class=\"esquerra\">\r\n                <a (click)='Panel_ClickEvent(\"taula_coneixements\")'>Taula de coneixements</a>\r\n            </div>\r\n            <div>\r\n                <i class=\"dret actiu\" (click)='Panel_ClickEvent(\"taula_coneixements\")' [ngClass]=\"{'actiu': !clase_activa_taula_coneixements, 'noactiu': clase_activa_taula_coneixements}\"></i>                \r\n            </div>        \r\n        </div>    \r\n        <div class=\"template_tc obrir\" [ngClass]=\"{'obrir': clase_activa_taula_coneixements, 'tancar': !clase_activa_taula_coneixements}\">\r\n            <app-coneixements></app-coneixements>\r\n        </div>\r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/cv/cv.component.ts":
/*!************************************!*\
  !*** ./src/app/cv/cv.component.ts ***!
  \************************************/
/*! exports provided: CVComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CVComponent", function() { return CVComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CVComponent = (function () {
    function CVComponent(router) {
        this.router = router;
        //@ViewChild('view') vista:ViewsComponent;
        this.clase_activa_educacio = true;
        this.clase_activa_experiencia = true;
        this.clase_activa_taula_coneixements = true;
        if (this.router.url === '/cv') {
            this.router.navigate(['/']);
        }
    }
    CVComponent.prototype.Panel_ClickEvent = function (objecte) {
        switch (objecte) {
            case "educacio":
                this.clase_activa_educacio = !this.clase_activa_educacio;
                break;
            case "experiencia":
                this.clase_activa_experiencia = !this.clase_activa_experiencia;
                break;
            case "taula_coneixements":
                this.clase_activa_taula_coneixements = !this.clase_activa_taula_coneixements;
                break;
        }
    };
    CVComponent.prototype.ngOnInit = function () {
    };
    CVComponent.prototype.ngAfterViewInit = function () { };
    CVComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cv',
            template: __webpack_require__(/*! ./cv.component.html */ "./src/app/cv/cv.component.html"),
            styles: [__webpack_require__(/*! ./cv.component.css */ "./src/app/cv/cv.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CVComponent);
    return CVComponent;
}());



/***/ }),

/***/ "./src/app/cv/cv.module.ts":
/*!*********************************!*\
  !*** ./src/app/cv/cv.module.ts ***!
  \*********************************/
/*! exports provided: CVModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CVModule", function() { return CVModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _cv_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cv.component */ "./src/app/cv/cv.component.ts");
/* harmony import */ var _capcalera_capcalera_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./capcalera/capcalera.component */ "./src/app/cv/capcalera/capcalera.component.ts");
/* harmony import */ var _experiencialaboral_experiencialaboral_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./experiencialaboral/experiencialaboral.component */ "./src/app/cv/experiencialaboral/experiencialaboral.component.ts");
/* harmony import */ var _coneixements_coneixements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coneixements/coneixements.component */ "./src/app/cv/coneixements/coneixements.component.ts");
/* harmony import */ var _educacio_educacio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./educacio/educacio.component */ "./src/app/cv/educacio/educacio.component.ts");
/* harmony import */ var _educacio_reglada_reglada_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./educacio/reglada/reglada.component */ "./src/app/cv/educacio/reglada/reglada.component.ts");
/* harmony import */ var _educacio_noreglada_noreglada_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./educacio/noreglada/noreglada.component */ "./src/app/cv/educacio/noreglada/noreglada.component.ts");
/* harmony import */ var _educacio_idiomes_idiomes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./educacio/idiomes/idiomes.component */ "./src/app/cv/educacio/idiomes/idiomes.component.ts");
/* harmony import */ var _experiencialaboral_client_client_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./experiencialaboral/client/client.component */ "./src/app/cv/experiencialaboral/client/client.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var ngx_tags_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-tags-input */ "./node_modules/ngx-tags-input/dist/index.js");
/* harmony import */ var ngx_tags_input__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ngx_tags_input__WEBPACK_IMPORTED_MODULE_14__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// Import the library
var routes = [{
        path: '',
        data: {
            title: 'Curriculum Vitae',
            urls: [{ title: 'Detall', url: '/cv' }, { title: 'CV' }]
        },
        component: _cv_component__WEBPACK_IMPORTED_MODULE_4__["CVComponent"]
    }];
var CVModule = (function () {
    function CVModule() {
    }
    CVModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _cv_component__WEBPACK_IMPORTED_MODULE_4__["CVComponent"],
                _experiencialaboral_client_client_component__WEBPACK_IMPORTED_MODULE_12__["ClientComponent"],
                _capcalera_capcalera_component__WEBPACK_IMPORTED_MODULE_5__["CapcaleraComponent"],
                _educacio_educacio_component__WEBPACK_IMPORTED_MODULE_8__["EducacioComponent"],
                _experiencialaboral_experiencialaboral_component__WEBPACK_IMPORTED_MODULE_6__["ExperienciaLaboralComponent"],
                _educacio_reglada_reglada_component__WEBPACK_IMPORTED_MODULE_9__["RegladaComponent"],
                _educacio_noreglada_noreglada_component__WEBPACK_IMPORTED_MODULE_10__["NoRegladaComponent"],
                _educacio_idiomes_idiomes_component__WEBPACK_IMPORTED_MODULE_11__["IdiomesComponent"],
                _educacio_educacio_component__WEBPACK_IMPORTED_MODULE_8__["EducacioComponent"],
                _coneixements_coneixements_component__WEBPACK_IMPORTED_MODULE_7__["ConeixementsComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                ngx_tags_input__WEBPACK_IMPORTED_MODULE_14__["TagsInputModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], CVModule);
    return CVModule;
}());



/***/ }),

/***/ "./src/app/cv/educacio/educacio.component.html":
/*!*****************************************************!*\
  !*** ./src/app/cv/educacio/educacio.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"titol bordejat\">\r\n    Educació\r\n</div>\r\n\r\n<div class=\"subtitol padding-top\">\r\n    Reglada\r\n</div>\r\n<span class=\"contingutSubtitol\">\r\n    <app-reglada></app-reglada>\r\n</span>\r\n\r\n<div class=\"subtitol padding-top\">\r\n    No Reglada\r\n</div>\r\n<span class=\"contingutSubtitol\">\r\n    <app-noreglada></app-noreglada>\r\n</span>\r\n    \r\n<div class=\"subtitol padding-top\">\r\n    Idiomes\r\n</div>\r\n<span class=\"contingutSubtitol\">\r\n    <app-idiomes></app-idiomes>\r\n</span>\r\n    \r\n\r\n"

/***/ }),

/***/ "./src/app/cv/educacio/educacio.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/cv/educacio/educacio.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding-top {\n  margin-top: 20px;\n  height: 30px; }\n\n.contingutSubtitol {\n  margin-top: 20px;\n  width: 80%;\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YvZWR1Y2FjaW8vQzpcXFVzZXJzXFxEYXZpZCBNXFxzb3VyY2VcXGRlcGxveVxcZG1vcmFyb2NhY3ZcXGFjdHVhbC9zcmNcXGFwcFxcY3ZcXGVkdWNhY2lvXFxlZHVjYWNpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jdi9lZHVjYWNpby9lZHVjYWNpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucGFkZGluZy10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGhlaWdodDogMzBweDsgXHJcbn1cclxuXHJcbi5jb250aW5ndXRTdWJ0aXRvbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGZsb2F0OiByaWdodDsgICBcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/cv/educacio/educacio.component.ts":
/*!***************************************************!*\
  !*** ./src/app/cv/educacio/educacio.component.ts ***!
  \***************************************************/
/*! exports provided: EducacioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducacioComponent", function() { return EducacioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducacioComponent = (function () {
    function EducacioComponent() {
        this.clase_noreglada = true;
        this.clase_reglada = true;
        this.clase_idioma = true;
    }
    EducacioComponent.prototype.Panel_ClickEvent = function (objecte) {
        switch (objecte) {
            case "reglada":
                this.clase_reglada = !this.clase_reglada;
                break;
            case "noreglada":
                this.clase_noreglada = !this.clase_noreglada;
                break;
            case "idiomes":
                this.clase_idioma = !this.clase_idioma;
                break;
        }
    };
    EducacioComponent.prototype.ngOnInit = function () {
    };
    EducacioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-educacio',
            template: __webpack_require__(/*! ./educacio.component.html */ "./src/app/cv/educacio/educacio.component.html"),
            styles: [__webpack_require__(/*! ./educacio.component.scss */ "./src/app/cv/educacio/educacio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EducacioComponent);
    return EducacioComponent;
}());



/***/ }),

/***/ "./src/app/cv/educacio/idiomes/Idiomes.component.css":
/*!***********************************************************!*\
  !*** ./src/app/cv/educacio/idiomes/Idiomes.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tamany\r\n{\r\n    width: 25%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YvZWR1Y2FjaW8vaWRpb21lcy9JZGlvbWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY3YvZWR1Y2FjaW8vaWRpb21lcy9JZGlvbWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFtYW55XHJcbntcclxuICAgIHdpZHRoOiAyNSU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cv/educacio/idiomes/Idiomes.component.html":
/*!************************************************************!*\
  !*** ./src/app/cv/educacio/idiomes/Idiomes.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tamany\">\r\n    <table class=\"table table-bordered table-striped\">\r\n        <thead class=\"thead-dark\">\r\n            <th>{{literal.GetLiteral(cultura, \"idiomes.Idioma\")}}</th>\r\n            <th>{{literal.GetLiteral(cultura, \"idiomes.Escriptura\")}}</th>\r\n            <th>{{literal.GetLiteral(cultura, \"idiomes.Lectura\")}}</th>\r\n        </thead>\r\n        <tr *ngFor=\"let item of idiomes\">\r\n            <td>{{item.Idioma}}</td>\r\n            <td>{{item.Escriptura}}</td>\r\n            <td>{{item.Lectura}}</td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/cv/educacio/idiomes/Idiomes.model.ts":
/*!******************************************************!*\
  !*** ./src/app/cv/educacio/idiomes/Idiomes.model.ts ***!
  \******************************************************/
/*! exports provided: Idiomes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Idiomes", function() { return Idiomes; });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base.model */ "./src/app/cv/base.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Idiomes = (function (_super) {
    __extends(Idiomes, _super);
    function Idiomes() {
        var _this = _super.call(this) || this;
        _this.AddLiteral("[ca-ES]-" + "Literal.idiomes.Idioma", "Idioma");
        _this.AddLiteral("[ca-ES]-" + "Literal.idiomes.Escriptura", "Escriptura");
        _this.AddLiteral("[ca-ES]-" + "Literal.idiomes.Lectura", "Lectura");
        _this.AddLiteral("[es-ES]-" + "Literal.idiomes.Idioma", "Idioma");
        _this.AddLiteral("[es-ES]-" + "Literal.idiomes.Escriptura", "Escritura");
        _this.AddLiteral("[es-ES]-" + "Literal.idiomes.Lectura", "Lectura");
        _this.AddLiteral("[en-GB]-" + "Literal.idiomes.Idioma", "Language");
        _this.AddLiteral("[en-GB]-" + "Literal.idiomes.Escriptura", "Write");
        _this.AddLiteral("[en-GB]-" + "Literal.idiomes.Lectura", "Read");
        return _this;
    }
    return Idiomes;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["Base"]));



/***/ }),

/***/ "./src/app/cv/educacio/idiomes/idiomes.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/cv/educacio/idiomes/idiomes.component.ts ***!
  \**********************************************************/
/*! exports provided: IdiomesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdiomesComponent", function() { return IdiomesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _Idiomes_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Idiomes.model */ "./src/app/cv/educacio/idiomes/Idiomes.model.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IdiomesComponent = (function () {
    function IdiomesComponent(data, globals) {
        var _this = this;
        this.data = data;
        this.idiomes = new Array();
        this.literal = new _Idiomes_model__WEBPACK_IMPORTED_MODULE_1__["Idiomes"]();
        this.cultura = globals.cultura;
        data.cargarDades(new _Idiomes_model__WEBPACK_IMPORTED_MODULE_1__["Idiomes"]()).then(function (res) {
            var items = JSON.parse(JSON.stringify(res));
            for (var i = 0; i < items.length; i++) {
                var obj = Object.assign({}, items[i]);
                _this.idiomes.push(obj);
            }
        });
    }
    IdiomesComponent.prototype.ngOnInit = function () {
    };
    IdiomesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-idiomes',
            template: __webpack_require__(/*! ./Idiomes.component.html */ "./src/app/cv/educacio/idiomes/Idiomes.component.html"),
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]],
            styles: [__webpack_require__(/*! ./Idiomes.component.css */ "./src/app/cv/educacio/idiomes/Idiomes.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"]])
    ], IdiomesComponent);
    return IdiomesComponent;
}());



/***/ }),

/***/ "./src/app/cv/educacio/noreglada/noreglada.component.css":
/*!***************************************************************!*\
  !*** ./src/app/cv/educacio/noreglada/noreglada.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N2L2VkdWNhY2lvL25vcmVnbGFkYS9ub3JlZ2xhZGEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/cv/educacio/noreglada/noreglada.component.html":
/*!****************************************************************!*\
  !*** ./src/app/cv/educacio/noreglada/noreglada.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<P *ngFor=\"let item of noreglada\">\r\n    <label class=\"negreta\">{{item.Any}}.</label> {{item.Descripcio}}.{{item.Academia}} ({{item.Hores}} {{item.LiteralHores}}).\r\n</P>   "

/***/ }),

/***/ "./src/app/cv/educacio/noreglada/noreglada.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/cv/educacio/noreglada/noreglada.component.ts ***!
  \**************************************************************/
/*! exports provided: NoRegladaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoRegladaComponent", function() { return NoRegladaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _noreglada_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noreglada.model */ "./src/app/cv/educacio/noreglada/noreglada.model.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../globals */ "./src/app/globals.ts");
/* harmony import */ var linq_es2015__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! linq-es2015 */ "./node_modules/linq-es2015/lib/linq.js");
/* harmony import */ var linq_es2015__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(linq_es2015__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NoRegladaComponent = (function () {
    function NoRegladaComponent(data, globals) {
        var _this = this;
        this.data = data;
        this.noreglada = new Array();
        data.cargarDades(new _noreglada_model__WEBPACK_IMPORTED_MODULE_1__["NoReglada"]()).then(function (res) {
            var items = linq_es2015__WEBPACK_IMPORTED_MODULE_4__["asEnumerable"](JSON.parse(JSON.stringify(res))).OrderByDescending(function (x) { return x["Any"]; }).ToArray();
            for (var i = 0; i < items.length; i++) {
                var obj = Object.assign({}, items[i]);
                switch (globals.cultura) {
                    case "ca-ES":
                        obj.LiteralHores = "hora";
                        if (obj.Hores > 1)
                            obj.LiteralHores = "hores";
                        break;
                    case "es-ES":
                        obj.LiteralHores = "hora";
                        if (obj.Hores > 1)
                            obj.LiteralHores = "horas";
                        break;
                    case "en-GB":
                        obj.LiteralHores = "hour";
                        if (obj.Hores > 1)
                            obj.LiteralHores = "hours";
                        break;
                }
                _this.noreglada.push(obj);
            }
        });
    }
    NoRegladaComponent.prototype.ngOnInit = function () {
    };
    NoRegladaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-noreglada',
            template: __webpack_require__(/*! ./noreglada.component.html */ "./src/app/cv/educacio/noreglada/noreglada.component.html"),
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]],
            styles: [__webpack_require__(/*! ./noreglada.component.css */ "./src/app/cv/educacio/noreglada/noreglada.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"]])
    ], NoRegladaComponent);
    return NoRegladaComponent;
}());



/***/ }),

/***/ "./src/app/cv/educacio/noreglada/noreglada.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/cv/educacio/noreglada/noreglada.model.ts ***!
  \**********************************************************/
/*! exports provided: NoReglada */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoReglada", function() { return NoReglada; });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base.model */ "./src/app/cv/base.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NoReglada = (function (_super) {
    __extends(NoReglada, _super);
    function NoReglada() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoReglada;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["Base"]));



/***/ }),

/***/ "./src/app/cv/educacio/reglada/reglada.component.css":
/*!***********************************************************!*\
  !*** ./src/app/cv/educacio/reglada/reglada.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N2L2VkdWNhY2lvL3JlZ2xhZGEvcmVnbGFkYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cv/educacio/reglada/reglada.component.html":
/*!************************************************************!*\
  !*** ./src/app/cv/educacio/reglada/reglada.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<P *ngFor=\"let item of reglada\">\r\n    <label class=\"negreta\">{{item.Any}}.</label> {{item.Descripcio}}. {{item.Academia}}.\r\n</P>\r\n "

/***/ }),

/***/ "./src/app/cv/educacio/reglada/reglada.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/cv/educacio/reglada/reglada.component.ts ***!
  \**********************************************************/
/*! exports provided: RegladaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegladaComponent", function() { return RegladaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _reglada_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reglada.model */ "./src/app/cv/educacio/reglada/reglada.model.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegladaComponent = (function () {
    function RegladaComponent(data, globals) {
        var _this = this;
        this.data = data;
        this.reglada = new Array();
        this.console = console;
        data.cargarDades(new _reglada_model__WEBPACK_IMPORTED_MODULE_1__["Reglada"]()).then(function (res) {
            var items = JSON.parse(JSON.stringify(res));
            for (var i = 0; i < items.length; i++) {
                var obj = Object.assign({}, items[i]);
                _this.reglada.push(obj);
            }
        });
    }
    RegladaComponent.prototype.ngOnInit = function () {
    };
    RegladaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reglada',
            template: __webpack_require__(/*! ./reglada.component.html */ "./src/app/cv/educacio/reglada/reglada.component.html"),
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]],
            styles: [__webpack_require__(/*! ./reglada.component.css */ "./src/app/cv/educacio/reglada/reglada.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"]])
    ], RegladaComponent);
    return RegladaComponent;
}());



/***/ }),

/***/ "./src/app/cv/educacio/reglada/reglada.model.ts":
/*!******************************************************!*\
  !*** ./src/app/cv/educacio/reglada/reglada.model.ts ***!
  \******************************************************/
/*! exports provided: Reglada */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reglada", function() { return Reglada; });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base.model */ "./src/app/cv/base.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Reglada = (function (_super) {
    __extends(Reglada, _super);
    function Reglada() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Reglada;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["Base"]));



/***/ }),

/***/ "./src/app/cv/experiencialaboral/client/client.component.html":
/*!********************************************************************!*\
  !*** ./src/app/cv/experiencialaboral/client/client.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dmr_accordion_clients\">\r\n    <div *ngFor=\"let item of clients;let pos=index\" class=\"panell_clients\">\r\n        <div class=\"clear\">\r\n            <div *ngIf=\"!item.FromClient\"> \r\n                <div class=\"titol_clients\" *ngIf=\"!item.FromClient\">\r\n                    <div class=\"esquerra_clients\">\r\n                        <a  (click)='Panel_ClickEvent()'>[{{item.NomClient}}]</a>\r\n                    </div>\r\n                    <div class=\"dret_clients\"> \r\n                        \r\n                    </div>\r\n                </div>\r\n                <div>\r\n                    <ul class=\"clients\">\r\n                        <li><u><b>{{literal.GetLiteral(cultura, \"clients.Sector\")}}:</b></u> {{item.Sector}}</li>\r\n                        <li><u><b>{{literal.GetLiteral(cultura, \"clients.Rol\")}}:</b></u> {{item.Rol}}</li>                               \r\n                        <li *ngIf=\"item.Descripcio != '-'\"><u><b>{{literal.GetLiteral(cultura, \"clients.Descripció\")}}:</b></u> {{item.Descripcio}}</li>\r\n                        <li *ngIf=\"item.Descripcio != '-'\"><u>\r\n                            <b>{{literal.GetLiteral(cultura, \"clients.Tecnologies\")}}:</b></u>\r\n                        </li>\r\n                        <li *ngIf=\"item.Descripcio == '-'\"><u><b>{{literal.GetLiteral(cultura, \"clients.Clients\")}}:</b></u></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"item.FromClient\" class=\"padding\">\r\n                <div class=\"titol_clients\" style=\"float:right;left:10%;position: relative;\">\r\n                    <div class=\"esquerra_clients\">\r\n                        <a  (click)='Panel_ClickEvent()'>{{item.NomClient}}</a>\r\n                    </div>\r\n                    <div class=\"dret_clients_$pos actiu_clients\" (click)='Panel_ClickEvent()'> \r\n                        \r\n                    </div>\r\n                </div>\r\n                <div style=\"float:right;left:10%;position: relative;\">\r\n                    <div [ngClass]=\"{'obrir_clients': clase_clients, 'tancar_clients_$pos': !clase_clients_$pos}\"  >\r\n                        <ul class=\"clients\" >\r\n                            <li><u><b>{{literal.GetLiteral(cultura, \"clients.Sector\")}}:</b></u> {{item.Sector}}</li>\r\n                            <li><u><b>{{literal.GetLiteral(cultura, \"clients.Rol\")}}:</b></u> {{item.Rol}}</li>                               \r\n                            <li><u><b>{{literal.GetLiteral(cultura, \"clients.Descripció\")}}:</b></u> {{item.Descripcio}}</li>\r\n                            <li><u><b>{{literal.GetLiteral(cultura, \"clients.Tecnologies\")}}:</b></u> <tags-input data-ng-click=\"close_click($event)\" [canDeleteTags]=\"false\"[displayField]=\"'text'\" [(ngModel)]=\"item.Tags\" name=\"tags\"></tags-input></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>  \r\n\r\n        "

/***/ }),

/***/ "./src/app/cv/experiencialaboral/client/client.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/cv/experiencialaboral/client/client.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dmr_accordion_clients {\n  color: black;\n  position: relative;\n  top: -20px;\n  left: -150px; }\n\ndiv.dmr_accordion_clients .panell {\n  background-color: white;\n  color: black; }\n\n.titol_clients {\n  padding: 5pt;\n  color: black;\n  width: 100%;\n  height: 38px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  float: right;\n  width: 100%; }\n\n.panell_clients {\n  margin-left: 5%;\n  width: 95%;\n  height: auto; }\n\n.esquerra_clients {\n  float: left;\n  width: 99%;\n  padding-left: 30px; }\n\n.dret_clients {\n  color: black;\n  float: right;\n  text-align: center;\n  width: 20px;\n  height: 20px;\n  background-repeat: no-repeat; }\n\n.template_clients {\n  width: 100%;\n  margin-top: 50px; }\n\n.titol_clients a {\n  cursor: pointer;\n  font-weight: bold; }\n\n.titol_clients a:hover {\n  cursor: pointer; }\n\n.noactiu_clients {\n  background-repeat: no-repeat;\n  background-image: url('toggle_menys.png');\n  cursor: pointer; }\n\n.actiu_clients {\n  background-repeat: no-repeat;\n  background-image: url('toggle_mes.png');\n  cursor: pointer; }\n\n.tancar_clients {\n  display: none; }\n\n.obrir_clients {\n  display: block; }\n\nul.clients {\n  position: relative;\n  left: 50px;\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YvZXhwZXJpZW5jaWFsYWJvcmFsL2NsaWVudC9DOlxcVXNlcnNcXERhdmlkIE1cXHNvdXJjZVxcZGVwbG95XFxkbW9yYXJvY2FjdlxcYWN0dWFsL3NyY1xcYXBwXFxjdlxcZXhwZXJpZW5jaWFsYWJvcmFsXFxjbGllbnRcXGNsaWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHaEI7RUFFSSx1QkFBdUI7RUFDdkIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVc7RUFDWCxXQUFVLEVBQUE7O0FBR2Q7RUFFSSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFVO0VBQ1YsVUFBVTtFQUNWLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVc7RUFFWCxZQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksNEJBQTRCO0VBQzVCLHlDQUFvRTtFQUNwRSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksNEJBQTRCO0VBQzVCLHVDQUFrRTtFQUNsRSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY3YvZXhwZXJpZW5jaWFsYWJvcmFsL2NsaWVudC9jbGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG1yX2FjY29yZGlvbl9jbGllbnRzIHtcclxuICAgIGNvbG9yOiBibGFjazsgICAgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0yMHB4O1xyXG4gICAgbGVmdDogLTE1MHB4O1xyXG59XHJcblxyXG5kaXYuZG1yX2FjY29yZGlvbl9jbGllbnRzIC5wYW5lbGxcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7IFxyXG59XHJcblxyXG4udGl0b2xfY2xpZW50cyB7XHJcbiAgICBwYWRkaW5nOiA1cHQ7XHJcbiAgICBjb2xvcjogYmxhY2s7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyAgIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLnBhbmVsbF9jbGllbnRzXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5lc3F1ZXJyYV9jbGllbnRzIHsgICAgXHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgd2lkdGg6IDk5JTtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG5cclxuLmRyZXRfY2xpZW50cyB7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIFxyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi50ZW1wbGF0ZV9jbGllbnRzIHtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi50aXRvbF9jbGllbnRzIGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50aXRvbF9jbGllbnRzIGE6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubm9hY3RpdV9jbGllbnRzIHtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jdi90b2dnbGVfbWVueXMucG5nKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFjdGl1X2NsaWVudHMge1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2N2L3RvZ2dsZV9tZXMucG5nKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRhbmNhcl9jbGllbnRzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5vYnJpcl9jbGllbnRzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrOyAgICBcclxufVxyXG5cclxudWwuY2xpZW50cyAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/cv/experiencialaboral/client/client.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/cv/experiencialaboral/client/client.component.ts ***!
  \******************************************************************/
/*! exports provided: Tag, ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globals */ "./src/app/globals.ts");
/* harmony import */ var _client_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client.model */ "./src/app/cv/experiencialaboral/client/client.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Tag = (function () {
    function Tag(text) {
        this.text = "";
        this.text = text;
    }
    return Tag;
}());

var ClientComponent = (function () {
    function ClientComponent(data, globals) {
        var _this = this;
        this.data = data;
        this.clients = [];
        this.clase_clients = new Array();
        this.literal = new _client_model__WEBPACK_IMPORTED_MODULE_3__["Client"]();
        this.Console = console;
        var that = this;
        this.cultura = globals.cultura;
        data.cargarDades(new _client_model__WEBPACK_IMPORTED_MODULE_3__["Client"]()).then(function (res) {
            _this.clients = new Array();
            var items = [];
            res.forEach(function (item) {
                var obj = new _client_model__WEBPACK_IMPORTED_MODULE_3__["Client"]();
                obj.Id = item["Id"];
                obj.Cultura = item["Cultura"];
                obj.Empresa = item["Empresa"];
                obj.EmpresaId = item["EmpresaId"];
                obj.EsClient = item["EsClient"];
                obj.Empresa = item["Client"];
                obj.Sector = item["Sector"];
                obj.Rol = item["Rol"];
                obj.Descripcio = item["Descripcio"];
                obj.Tecnologies = item["Tecnologies"];
                obj.FromClient = item["FromClient"];
                obj.NomClient = item["Client"];
                if (item["EmpresaId"] == _this.empresaid) {
                    items.push(obj);
                }
            });
            items.forEach(function (item) {
                var obj = Object.assign(item);
                obj["Tags"] = [];
                obj.Tecnologies.split(',').forEach(function (item) {
                    obj["Tags"].push({ text: item });
                });
                that.clients.push(obj);
            });
        });
    }
    ClientComponent.prototype.Panel_ClickEvent = function (pos) {
        this.clase_clients[pos] = !this.clase_clients[pos];
    };
    ClientComponent.prototype.close_click = function (ev) {
    };
    ClientComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ClientComponent.prototype, "empresa", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ClientComponent.prototype, "empresaid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ClientComponent.prototype, "fromClient", void 0);
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/cv/experiencialaboral/client/client.component.html"),
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]],
            styles: [__webpack_require__(/*! ./client.component.scss */ "./src/app/cv/experiencialaboral/client/client.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/cv/experiencialaboral/client/client.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/cv/experiencialaboral/client/client.model.ts ***!
  \**************************************************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base.model */ "./src/app/cv/base.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Client = (function (_super) {
    __extends(Client, _super);
    function Client() {
        var _this = _super.call(this) || this;
        _this.AddLiteral("[ca-ES]-" + "Literal.clients.Sector", "Sector");
        _this.AddLiteral("[ca-ES]-" + "Literal.clients.Rol", "Rol");
        _this.AddLiteral("[ca-ES]-" + "Literal.clients.Descripció", "Descripció");
        _this.AddLiteral("[ca-ES]-" + "Literal.clients.Tecnologies", "Tecnologies");
        _this.AddLiteral("[ca-ES]-" + "Literal.clients.Clients", "Clients");
        _this.AddLiteral("[es-ES]-" + "Literal.clients.Sector", "Sector");
        _this.AddLiteral("[es-ES]-" + "Literal.clients.Rol", "Rol");
        _this.AddLiteral("[es-ES]-" + "Literal.clients.Descripció", "Descripción");
        _this.AddLiteral("[es-ES]-" + "Literal.clients.Tecnologies", "Tecnologías");
        _this.AddLiteral("[ca-ES]-" + "Literal.clients.Clients", "Clientes");
        _this.AddLiteral("[en-GB]-" + "Literal.clients.Sector", "Sector");
        _this.AddLiteral("[en-GB]-" + "Literal.clients.Rol", "Rol");
        _this.AddLiteral("[en-GB]-" + "Literal.clients.Descripció", "Description");
        _this.AddLiteral("[en-GB]-" + "Literal.clients.Tecnologies", "Tecnologies");
        _this.AddLiteral("[ca-ES]-" + "Literal.clients.Clients", "Clients");
        return _this;
    }
    return Client;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["Base"]));



/***/ }),

/***/ "./src/app/cv/experiencialaboral/experiencialaboral.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/cv/experiencialaboral/experiencialaboral.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"titol bordejat\" style=\"margin-bottom: 20px;\">\r\n    Experiència Laboral\r\n</div>\r\n\r\n<div *ngFor=\"let item of experiencialaboral; index as pos\" class=\"clear\">    \r\n    <div class=\"subtitol\" >\r\n        <a  (click)='Panel_ClickEvent_Titol(pos)'>{{item.MesInicial}} - {{item.MesFinal}} {{item.Empresa}}</a>\r\n    </div>\r\n    \r\n    <ul class=\"clear padding-top\" style=\"padding-left: 30%;\">\r\n        <li><u><b>{{literal.GetLiteral(cultura, \"experiencialaboral.Sector\")}}:</b></u> {{item.Sector}}</li>\r\n        <li><u><b>{{literal.GetLiteral(cultura, \"experiencialaboral.Rol\")}}:</b></u> {{item.Rol}}</li>                \r\n        <li *ngIf=\"item.EsClient == true\">\r\n            <u><b>{{literal.GetLiteral(cultura, \"experiencialaboral.Clients\")}}:</b></u>\r\n            <div class=\"padding\">\r\n                <span style=\"width: 80%;float: right;\">\r\n                    <app-client [empresa]=\"item.Empresa\"  [empresaid]=\"item.Id\" [fromClient]=\"false\" ></app-client>\r\n                </span>\r\n            </div>\r\n        </li>\r\n        <li *ngIf=\"!item.EsClient\"><u><b>{{literal.GetLiteral(cultura, \"experiencialaboral.Descripció\")}}:</b></u> {{item.Descripcio}}</li>\r\n        <li *ngIf=\"!item.EsClient\"><u><b>{{literal.GetLiteral(cultura, \"experiencialaboral.Tecnologies\")}}:</b></u>\r\n            <tags-input class=\"form-control input-lg\" [canDeleteTags]=\"false\"  [displayField]=\"'text'\" [(ngModel)]=\"item.Tags\" id=\"tags\" name=\"tags\"></tags-input>\r\n        </li>\r\n    </ul>\r\n\r\n    <br>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/cv/experiencialaboral/experiencialaboral.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/cv/experiencialaboral/experiencialaboral.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clear {\n  clear: both; }\n\n.format {\n  float: right;\n  width: 80%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YvZXhwZXJpZW5jaWFsYWJvcmFsL0M6XFxVc2Vyc1xcRGF2aWQgTVxcc291cmNlXFxkZXBsb3lcXGRtb3Jhcm9jYWN2XFxhY3R1YWwvc3JjXFxhcHBcXGN2XFxleHBlcmllbmNpYWxhYm9yYWxcXGV4cGVyaWVuY2lhbGFib3JhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFlBQVc7RUFDWCxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jdi9leHBlcmllbmNpYWxhYm9yYWwvZXhwZXJpZW5jaWFsYWJvcmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsZWFyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uZm9ybWF0IHtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgd2lkdGg6IDgwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/cv/experiencialaboral/experiencialaboral.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/cv/experiencialaboral/experiencialaboral.component.ts ***!
  \***********************************************************************/
/*! exports provided: ExperienciaLaboralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienciaLaboralComponent", function() { return ExperienciaLaboralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");
/* harmony import */ var _experiencialaboral_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experiencialaboral.model */ "./src/app/cv/experiencialaboral/experiencialaboral.model.ts");
/* harmony import */ var linq_es2015__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! linq-es2015 */ "./node_modules/linq-es2015/lib/linq.js");
/* harmony import */ var linq_es2015__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(linq_es2015__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExperienciaLaboralComponent = (function () {
    function ExperienciaLaboralComponent(data, globals) {
        var _this = this;
        this.data = data;
        this.experiencialaboral = new Array();
        this.clase_experiencialaboral_titol = new Array();
        this.clase_experiencialaboral_panell = new Array();
        this.tags = [];
        this.literal = new _experiencialaboral_model__WEBPACK_IMPORTED_MODULE_3__["ExperienciaLaboral"]();
        this.itemsAsObjects = [{ value: 0, display: 'Angular' }, { value: 1, display: 'React' }];
        var that = this;
        this.cultura = globals.cultura;
        data.cargarDades(new _experiencialaboral_model__WEBPACK_IMPORTED_MODULE_3__["ExperienciaLaboral"]()).then(function (res) {
            for (var i = 0; i < res.length; i++) {
                var obj = res[i];
                obj["newMesFinal"] = new Date(obj["MesFinal"]);
            }
            var items = linq_es2015__WEBPACK_IMPORTED_MODULE_4__["asEnumerable"](JSON.parse(JSON.stringify(res))).OrderByDescending(function (x) { return x["newMesFinal"]; }).ToArray();
            var _loop_1 = function () {
                var obj = items[i];
                obj.EsClient = obj.EsClient;
                //obj.MesInicial = new Date(obj.MesInicial);
                //obj.MesFinal = new Date(obj.MesFinal);
                if (obj.Tecnologies) {
                    obj.Tags = [];
                    obj.Tecnologies.split(',').forEach(function (item) {
                        obj.Tags.push({ text: item });
                    });
                }
                _this.experiencialaboral.push(obj);
                console.log(_this.experiencialaboral);
            };
            for (var i = 0; i < items.length; i++) {
                _loop_1();
            }
            _this.experiencialaboral.forEach(function (obj, index) {
                that.clase_experiencialaboral_titol.push("noactiu_experiencialaboral_" + index);
                that.clase_experiencialaboral_panell.push("obrir_experiencialaboral_" + index);
            });
        });
    }
    ExperienciaLaboralComponent.prototype.Panel_ClickEvent_Titol = function (index) {
        if (this.clase_experiencialaboral_titol[index].indexOf("noactiu_experiencialaboral_" + index) >= 0) {
            this.clase_experiencialaboral_titol[index] = "actiu_experiencialaboral_" + index;
            this.clase_experiencialaboral_panell[index] = "tancar_experiencialaboral_" + index;
        }
        else {
            this.clase_experiencialaboral_titol[index] = "noactiu_experiencialaboral_" + index;
            this.clase_experiencialaboral_panell[index] = "obrir_experiencialaboral_" + index;
        }
    };
    ExperienciaLaboralComponent.prototype.ngOnInit = function () {
    };
    ExperienciaLaboralComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experiencialaboral',
            template: __webpack_require__(/*! ./experiencialaboral.component.html */ "./src/app/cv/experiencialaboral/experiencialaboral.component.html"),
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]],
            styles: [__webpack_require__(/*! ./experiencialaboral.component.scss */ "./src/app/cv/experiencialaboral/experiencialaboral.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"]])
    ], ExperienciaLaboralComponent);
    return ExperienciaLaboralComponent;
}());



/***/ }),

/***/ "./src/app/cv/experiencialaboral/experiencialaboral.model.ts":
/*!*******************************************************************!*\
  !*** ./src/app/cv/experiencialaboral/experiencialaboral.model.ts ***!
  \*******************************************************************/
/*! exports provided: ExperienciaLaboral */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienciaLaboral", function() { return ExperienciaLaboral; });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base.model */ "./src/app/cv/base.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ExperienciaLaboral = (function (_super) {
    __extends(ExperienciaLaboral, _super);
    function ExperienciaLaboral() {
        var _this = _super.call(this) || this;
        _this.AddLiteral("[ca-ES]-" + "Literal.experiencialaboral.Sector", "Sector");
        _this.AddLiteral("[ca-ES]-" + "Literal.experiencialaboral.Rol", "Rol");
        _this.AddLiteral("[ca-ES]-" + "Literal.experiencialaboral.Descripció", "Descripció");
        _this.AddLiteral("[ca-ES]-" + "Literal.experiencialaboral.Tecnologies", "Tecnologies");
        _this.AddLiteral("[ca-ES]-" + "Literal.experiencialaboral.Clients", "Clients");
        _this.AddLiteral("[es-ES]-" + "Literal.experiencialaboral.Sector", "Sector");
        _this.AddLiteral("[es-ES]-" + "Literal.experiencialaboral.Rol", "Rol");
        _this.AddLiteral("[es-ES]-" + "Literal.experiencialaboral.Descripció", "Descripción");
        _this.AddLiteral("[es-ES]-" + "Literal.experiencialaboral.Tecnologies", "Tecnologías");
        _this.AddLiteral("[es-ES]-" + "Literal.experiencialaboral.Clients", "Clientes");
        _this.AddLiteral("[en-GB]-" + "Literal.experiencialaboral.Sector", "Sector");
        _this.AddLiteral("[en-GB]-" + "Literal.experiencialaboral.Rol", "Rol");
        _this.AddLiteral("[en-GB]-" + "Literal.experiencialaboral.Descripció", "Description");
        _this.AddLiteral("[en-GB]-" + "Literal.experiencialaboral.Tecnologies", "Tecnologies");
        _this.AddLiteral("[en-GB]-" + "Literal.experiencialaboral.Clients", "Clients");
        return _this;
    }
    return ExperienciaLaboral;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["Base"]));



/***/ }),

/***/ "./src/app/cv/utils/dictionary.ts":
/*!****************************************!*\
  !*** ./src/app/cv/utils/dictionary.ts ***!
  \****************************************/
/*! exports provided: Dictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
var Dictionary = (function () {
    function Dictionary() {
        this.items = {};
        this.count = 0;
    }
    Dictionary.prototype.ContainsKey = function (key) {
        return this.items.hasOwnProperty(key);
    };
    Dictionary.prototype.Count = function () {
        return this.count;
    };
    Dictionary.prototype.Add = function (key, value) {
        if (!this.items.hasOwnProperty(key))
            this.count++;
        this.items[key] = value;
    };
    Dictionary.prototype.Remove = function (key) {
        var val = this.items[key];
        delete this.items[key];
        this.count--;
        return val;
    };
    Dictionary.prototype.Item = function (key) {
        return this.items[key];
    };
    Dictionary.prototype.Keys = function () {
        var keySet = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }
        return keySet;
    };
    Dictionary.prototype.Values = function () {
        var values = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                values.push(this.items[prop]);
            }
        }
        return values;
    };
    return Dictionary;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(globals, http) {
        this.globals = globals;
        this.http = http;
        this._this = this;
    }
    DataService.prototype._prepararUrl = function (obj) {
        // preparo la url.
        var url = "{host}/data/{cultura}/{coleccio}/{esproduccio}";
        var esProduccio = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production;
        var clase = obj;
        var coleccio = clase.constructor.name.toLowerCase();
        //var host = (environment.production)?"http://dmoraroca.somee.com":"http://localhost:8080";
        var host = "http://127.0.0.1:8080"; // DEBUG
        //if (environment.production) {
        //    host = "http://dmoraroca.somee.com";
        //}
        // Preparo l'url
        //url = url.replace("{host}", host);
        url = url.replace("{host}", host);
        url = url.replace("{cultura}", this.globals.cultura);
        //url = url.replace("{esproduccio}", (!esProduccio)? "true": "false");
        url = url.replace("{esproduccio}", "true");
        url = url.replace("{coleccio}", coleccio);
        return url;
    };
    DataService.prototype.cargarDades = function (obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
            headers.append('Content-Type', 'application/json');
            var res = _this.http.get(_this._prepararUrl(obj), { headers: headers })
                .toPromise()
                .then(function (Response) {
                if (!Response["ok"]) {
                    if (Response["data"].errorLabels != null) {
                        Response["data"].errorLabels.forEach(function (element) {
                            alert(Response["data"].name + ": " + element);
                        });
                    }
                    else {
                        alert(Response["data"]);
                    }
                    return;
                }
                else
                    resolve(Response["data"]);
            })
                .catch(function (ex) {
                console.log(ex);
            });
            return res;
        });
    };
    DataService.prototype._salvarACSV = function (obj, taula) {
        // recullo la informació.
        // // this._Papa.unparse(this._prepararUrl(obj, taula), {
        // //     worker: false,
        // //     download: true,            
        // //     complete: function (result) {
        // //         console.log(result);
        // //     }
        // // });
    };
    DataService.prototype.inserir = function (entity) {
    };
    DataService.prototype.canviar = function (entitat) {
        return false;
    };
    DataService.prototype.esborrar = function (id) {
        return false;
    };
    DataService.prototype.llistar = function () {
        //  var data = this._cargarFitxer<T>();
        return null;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_1__["Globals"], _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ })

}]);
//# sourceMappingURL=cv-cv-module.js.map