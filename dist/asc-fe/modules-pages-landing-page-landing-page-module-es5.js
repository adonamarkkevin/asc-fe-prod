(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pages-landing-page-landing-page-module"], {
    /***/
    "0L5U":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/angular-responsive-carousel/__ivy_ngcc__/fesm2015/angular-responsive-carousel.js ***!
      \*******************************************************************************************************/

    /*! exports provided: CarouselComponent, IvyCarouselModule */

    /***/
    function L5U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
        return CarouselComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IvyCarouselModule", function () {
        return IvyCarouselModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CarouselComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.counter);
        }
      }

      function CarouselComponent_ng_template_5_div_0_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 11);
        }

        if (rf & 2) {
          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).index;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("object-fit", ctx_r8.objectFit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r8.getImage(i_r6)["image"]["path"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function CarouselComponent_ng_template_5_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CarouselComponent_ng_template_5_div_0_img_1_Template, 1, 3, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", ctx_r7.getCellWidth() + "px")("border-radius", ctx_r7.borderRadius + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r7.getImage(i_r6) && ctx_r7.getImage(i_r6)["image"]);
        }
      }

      function CarouselComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, CarouselComponent_ng_template_5_div_0_Template, 2, 5, "div", 8);
        }

        if (rf & 2) {
          var i_r6 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r6 < ctx_r2.cellLimit);
        }
      }

      function CarouselComponent_div_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 14);
        }

        if (rf & 2) {
          var i_r13 = ctx.index;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("carousel-dot-active", i_r13 === ctx_r11.activeDotIndex);
        }
      }

      function CarouselComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CarouselComponent_div_6_div_1_Template, 1, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r3.dotsArr);
        }
      }

      function CarouselComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CarouselComponent_div_7_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r14.prev();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CarouselComponent_div_7_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r16.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("carousel-arrows-outside", ctx_r4.arrowsOutside)("carousel-dark-arrows", ctx_r4.arrowsTheme === "dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("carousel-arrow-disabled", ctx_r4.isPrevArrowDisabled());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("carousel-arrow-disabled", ctx_r4.isNextArrowDisabled());
        }
      }

      var _c0 = ["*"];

      var Touches = /*#__PURE__*/function () {
        function Touches(properties) {
          var _this = this;

          _classCallCheck(this, Touches);

          this.eventType = undefined;
          this.handlers = {};
          this.startX = 0;
          this.startY = 0;
          this.lastTap = 0;
          this.doubleTapMinTimeout = 300;
          this.tapMinTimeout = 200;
          this.touchstartTime = 0;
          this.i = 0;
          this.isMousedown = false;
          this._touchListeners = {
            "touchstart": "handleTouchstart",
            "touchmove": "handleTouchmove",
            "touchend": "handleTouchend"
          };
          this._mouseListeners = {
            "mousedown": "handleMousedown",
            "mousemove": "handleMousemove",
            "mouseup": "handleMouseup",
            "wheel": "handleWheel"
          };
          this._otherListeners = {
            "resize": "handleResize"
          };
          /*
           * Listeners
           */

          /* Touchstart */

          this.handleTouchstart = function (event) {
            _this.elementPosition = _this.getElementPosition();
            _this.touchstartTime = new Date().getTime();

            if (_this.eventType === undefined) {
              _this.getTouchstartPosition(event);
            }

            _this.runHandler("touchstart", event);
          };
          /* Touchmove */


          this.handleTouchmove = function (event) {
            var touches = event.touches; // Pan

            if (_this.detectPan(touches)) {
              _this.runHandler("pan", event);
            } // Pinch


            if (_this.detectPinch(event)) {
              _this.runHandler("pinch", event);
            } // Linear swipe


            switch (_this.detectLinearSwipe(event)) {
              case "horizontal-swipe":
                event.swipeType = "horizontal-swipe";

                _this.runHandler("horizontal-swipe", event);

                break;

              case "vertical-swipe":
                event.swipeType = "vertical-swipe";

                _this.runHandler("vertical-swipe", event);

                break;
            } // Linear swipe


            if (_this.detectLinearSwipe(event) || _this.eventType === 'horizontal-swipe' || _this.eventType === 'vertical-swipe') {
              _this.handleLinearSwipe(event);
            }
          };
          /* Touchend */


          this.handleTouchend = function (event) {
            var touches = event.touches; // Double Tap

            if (_this.detectDoubleTap()) {
              _this.runHandler("double-tap", event);
            } // Tap


            _this.detectTap();

            _this.runHandler("touchend", event);

            _this.eventType = 'touchend';

            if (touches && touches.length === 0) {
              _this.eventType = undefined;
              _this.i = 0;
            }
          };
          /* Mousedown */


          this.handleMousedown = function (event) {
            _this.isMousedown = true;
            _this.elementPosition = _this.getElementPosition();
            _this.touchstartTime = new Date().getTime();

            if (_this.eventType === undefined) {
              _this.getMousedownPosition(event);
            }

            _this.runHandler("mousedown", event);
          };
          /* Mousemove */


          this.handleMousemove = function (event) {
            //event.preventDefault();
            if (!_this.isMousedown) {
              return;
            } // Pan


            _this.runHandler("pan", event); // Linear swipe


            switch (_this.detectLinearSwipe(event)) {
              case "horizontal-swipe":
                event.swipeType = "horizontal-swipe";

                _this.runHandler("horizontal-swipe", event);

                break;

              case "vertical-swipe":
                event.swipeType = "vertical-swipe";

                _this.runHandler("vertical-swipe", event);

                break;
            } // Linear swipe


            if (_this.detectLinearSwipe(event) || _this.eventType === 'horizontal-swipe' || _this.eventType === 'vertical-swipe') {
              _this.handleLinearSwipe(event);
            }
          };
          /* Mouseup */


          this.handleMouseup = function (event) {
            // Tap
            _this.detectTap();

            _this.isMousedown = false;

            _this.runHandler("mouseup", event);

            _this.eventType = undefined;
            _this.i = 0;
          };
          /* Wheel */


          this.handleWheel = function (event) {
            _this.runHandler("wheel", event);
          };
          /* Resize */


          this.handleResize = function (event) {
            _this.runHandler("resize", event);
          };

          this.properties = properties;
          this.element = this.properties.element;
          this.elementPosition = this.getElementPosition();
          this.toggleEventListeners('addEventListener');
        }

        _createClass(Touches, [{
          key: "touchListeners",
          get: function get() {
            return this.properties.touchListeners ? this.properties.touchListeners : this._touchListeners;
          }
        }, {
          key: "mouseListeners",
          get: function get() {
            return this.properties.mouseListeners ? this.properties.mouseListeners : this._mouseListeners;
          }
        }, {
          key: "otherListeners",
          get: function get() {
            return this.properties.otherListeners ? this.properties.otherListeners : this._otherListeners;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.toggleEventListeners('removeEventListener');
          }
        }, {
          key: "toggleEventListeners",
          value: function toggleEventListeners(action) {
            var listeners;

            if (this.properties.listeners === 'mouse and touch') {
              listeners = Object.assign(this.touchListeners, this.mouseListeners);
            } else {
              listeners = this.detectTouchScreen() ? this.touchListeners : this.mouseListeners;
            }

            if (this.properties.resize) {
              listeners = Object.assign(listeners, this.otherListeners);
            }

            for (var listener in listeners) {
              var handler = listeners[listener]; // Window

              if (listener === "resize") {
                if (action === 'addEventListener') {
                  window.addEventListener(listener, this[handler], false);
                }

                if (action === 'removeEventListener') {
                  window.removeEventListener(listener, this[handler], false);
                } // Document

              } else if (listener === 'mouseup' || listener === "mousemove") {
                if (action === 'addEventListener') {
                  document.addEventListener(listener, this[handler], {
                    passive: false
                  });
                }

                if (action === 'removeEventListener') {
                  document.removeEventListener(listener, this[handler], false);
                } // Element

              } else {
                if (action === 'addEventListener') {
                  this.element.addEventListener(listener, this[handler], false);
                }

                if (action === 'removeEventListener') {
                  this.element.removeEventListener(listener, this[handler], false);
                }
              }
            }
          }
        }, {
          key: "addEventListeners",
          value: function addEventListeners(listener) {
            var handler = this._mouseListeners[listener];
            window.addEventListener(listener, this[handler], false);
          }
        }, {
          key: "removeEventListeners",
          value: function removeEventListeners(listener) {
            var handler = this._mouseListeners[listener];
            window.removeEventListener(listener, this[handler], false);
          }
        }, {
          key: "handleLinearSwipe",
          value: function handleLinearSwipe(event) {
            //event.preventDefault();
            this.i++;

            if (this.i > 3) {
              this.eventType = this.getLinearSwipeType(event);
            }

            if (this.eventType === 'horizontal-swipe') {
              this.runHandler('horizontal-swipe', event);
            }

            if (this.eventType === 'vertical-swipe') {
              this.runHandler('vertical-swipe', event);
            }
          }
        }, {
          key: "runHandler",
          value: function runHandler(eventName, response) {
            if (this.handlers[eventName]) {
              this.handlers[eventName](response);
            }
          }
          /*
           * Detection
           */

        }, {
          key: "detectPan",
          value: function detectPan(touches) {
            return touches.length === 1 && !this.eventType || this.eventType === 'pan';
          }
        }, {
          key: "detectDoubleTap",
          value: function detectDoubleTap() {
            var _this2 = this;

            if (this.eventType != undefined) {
              return;
            }

            var currentTime = new Date().getTime();
            var tapLength = currentTime - this.lastTap;
            clearTimeout(this.doubleTapTimeout);

            if (tapLength < this.doubleTapMinTimeout && tapLength > 0) {
              return true;
            } else {
              this.doubleTapTimeout = setTimeout(function () {
                clearTimeout(_this2.doubleTapTimeout);
              }, this.doubleTapMinTimeout);
            }

            this.lastTap = currentTime;
            return undefined;
          }
        }, {
          key: "detectTap",
          value: function detectTap() {
            if (this.eventType != undefined) {
              return;
            }

            var currentTime = new Date().getTime();
            var tapLength = currentTime - this.touchstartTime;

            if (tapLength > 0) {
              if (tapLength < this.tapMinTimeout) {
                this.runHandler("tap", event);
              } else {
                this.runHandler("longtap", event);
              }
            }
          }
        }, {
          key: "detectPinch",
          value: function detectPinch(event) {
            var touches = event.touches;
            return touches.length === 2 && this.eventType === undefined || this.eventType === 'pinch';
          }
        }, {
          key: "detectLinearSwipe",
          value: function detectLinearSwipe(event) {
            var touches = event.touches;

            if (touches) {
              if (touches.length === 1 && !this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
                return this.getLinearSwipeType(event);
              }
            } else {
              if (!this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
                return this.getLinearSwipeType(event);
              }
            }

            return undefined;
          }
        }, {
          key: "getLinearSwipeType",
          value: function getLinearSwipeType(event) {
            if (this.eventType !== 'horizontal-swipe' && this.eventType !== 'vertical-swipe') {
              var movementX = Math.abs(this.moveLeft(0, event) - this.startX);
              var movementY = Math.abs(this.moveTop(0, event) - this.startY);

              if (movementY * 3 > movementX) {
                return 'vertical-swipe';
              } else {
                return 'horizontal-swipe';
              }
            } else {
              return this.eventType;
            }
          }
        }, {
          key: "getElementPosition",
          value: function getElementPosition() {
            return this.element.getBoundingClientRect();
          }
        }, {
          key: "getTouchstartPosition",
          value: function getTouchstartPosition(event) {
            this.startX = event.touches[0].clientX - this.elementPosition.left;
            this.startY = event.touches[0].clientY - this.elementPosition.top;
          }
        }, {
          key: "getMousedownPosition",
          value: function getMousedownPosition(event) {
            this.startX = event.clientX - this.elementPosition.left;
            this.startY = event.clientY - this.elementPosition.top;
          }
        }, {
          key: "moveLeft",
          value: function moveLeft(index, event) {
            var touches = event.touches;

            if (touches) {
              return touches[index].clientX - this.elementPosition.left;
            } else {
              return event.clientX - this.elementPosition.left;
            }
          }
        }, {
          key: "moveTop",
          value: function moveTop(index, event) {
            var touches = event.touches;

            if (touches) {
              return touches[index].clientY - this.elementPosition.top;
            } else {
              return event.clientY - this.elementPosition.top;
            }
          }
        }, {
          key: "detectTouchScreen",
          value: function detectTouchScreen() {
            var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

            var mq = function mq(query) {
              return window.matchMedia(query).matches;
            };

            if ('ontouchstart' in window) {
              return true;
            } // include the 'heartz' as a way to have a non matching MQ to help terminate the join
            // https://git.io/vznFH


            var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
            return mq(query);
          }
          /* Public properties and methods */

        }, {
          key: "on",
          value: function on(event, handler) {
            if (event) {
              this.handlers[event] = handler;
            }
          }
        }]);

        return Touches;
      }();

      var Carousel = /*#__PURE__*/function () {
        function Carousel(properties, utils, cells, container, slide) {
          var _this3 = this;

          _classCallCheck(this, Carousel);

          this.properties = properties;
          this.utils = utils;
          this.cells = cells;
          this.container = container;
          this.slide = slide;
          /* The slide length has been limited by the limitSlideLength() method */

          this.isSlideLengthLimited = false;
          this.isContentImages = true;
          this.isLazyLoad = true;
          this.isContainerLocked = true;
          this.alignCells = "left";
          this.initialContainerPosition = 0;
          this.containerPullLimit = 100;

          this.handleTouchstart = function (event) {
            _this3.container.handleTouchstart();

            _this3.slide.handleTouchstart(event);
          };

          this.handleHorizontalSwipe = function (event) {
            _this3.container.handleHorizontalSwipe();
          };

          this.handleTouchend = function (event) {
            if (_this3.properties.freeScroll) {
              _this3.container.handleTouchend();
            } else {
              _this3.container.handleTouchend(true);

              _this3.slide.handleTouchend(event);
            }
          };

          this.isNextArrowDisabled = function () {
            return _this3.slide.isNextArrowDisabled();
          };

          this.isPrevArrowDisabled = function () {
            return _this3.slide.isPrevArrowDisabled();
          };

          this.init();
        }

        _createClass(Carousel, [{
          key: "cellLength",
          get: function get() {
            return this.cells.cellLength;
          }
        }, {
          key: "cellLengthInLightDOMMode",
          get: function get() {
            if (this.images) {
              var cellLength = this.numberOfVisibleCells + this.overflowCellsLimit * 2;

              if (cellLength > this.images.length) {
                cellLength = this.images.length;
              }

              return cellLength;
            } else {
              return this.cellLength;
            }
          }
        }, {
          key: "lastCellIndex",
          get: function get() {
            return this.images.length ? this.images.length - 1 : this.cells.cellLength - 1;
          }
        }, {
          key: "overflowCellsLimit",
          get: function get() {
            return this.utils.overflowCellsLimit;
          }
        }, {
          key: "cellLimit",
          get: function get() {
            if (this.isLightDOM) {
              var cellLimit = this.numberOfVisibleCells + this.overflowCellsLimit * 2;

              if (cellLimit < this.numberOfVisibleCells) {
                cellLimit = this.numberOfVisibleCells;
              }

              return cellLimit;
            } else {
              return this.properties.images.length;
            }
          }
        }, {
          key: "isLightDOM",
          get: function get() {
            return this.properties.lightDOM || this.properties.loop;
          }
        }, {
          key: "images",
          get: function get() {
            return this.properties.images;
          }
        }, {
          key: "margin",
          get: function get() {
            return this.properties.margin;
          }
        }, {
          key: "minSwipeDistance",
          get: function get() {
            return this.properties.minSwipeDistance;
          }
        }, {
          key: "transitionDuration",
          get: function get() {
            return this.properties.transitionDuration;
          }
        }, {
          key: "transitionTimingFunction",
          get: function get() {
            return this.properties.transitionTimingFunction;
          }
        }, {
          key: "fullCellWidth",
          get: function get() {
            return this.properties.cellWidth + this.margin;
          }
        }, {
          key: "numberOfVisibleCells",
          get: function get() {
            return this.utils.numberOfVisibleCells;
          }
        }, {
          key: "lapCounter",
          get: function get() {
            return Math.floor(this.slide.counter / this.cellLengthInLightDOMMode);
          }
        }, {
          key: "slideCounter",
          get: function get() {
            return this.slide.counter;
          }
        }, {
          key: "updateProperties",
          value: function updateProperties(properties) {
            this.properties = properties;
          }
        }, {
          key: "init",
          value: function init() {
            this.cellsElement = this.properties.cellsElement;
            this.visibleWidth = this.properties.visibleWidth || this.cellsElement.parentElement.clientWidth;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            clearInterval(this.autoplayId);
          }
        }, {
          key: "lineUpCells",
          value: function lineUpCells() {
            this.cells.lineUp();
          }
        }, {
          key: "handleTransitionend",
          value: function handleTransitionend() {
            this.slide.handleTransitionend();
          }
        }, {
          key: "getImage",
          value: function getImage(index) {
            return this.cells.getImage(index);
          }
        }, {
          key: "next",
          value: function next() {
            var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            if (!this.isNextArrowDisabled()) {
              this.slide.next(length);
            }
          }
        }, {
          key: "prev",
          value: function prev() {
            var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            this.slide.prev(length);
          }
        }, {
          key: "autoplay",
          value: function autoplay() {
            var _this4 = this;

            this.autoplayId = setInterval(function () {
              _this4.next();
            }, this.properties.autoplayInterval);
          }
        }, {
          key: "stopAutoplay",
          value: function stopAutoplay() {
            if (this.autoplayId) {
              clearInterval(this.autoplayId);
            }
          }
        }]);

        return Carousel;
      }();

      var Container = /*#__PURE__*/function () {
        function Container(carouselProperties, utils, cells) {
          _classCallCheck(this, Container);

          this.carouselProperties = carouselProperties;
          this.utils = utils;
          this.cells = cells;
          /* The index of the new position relative to
           * the active index, for example -1 or +1
           */

          this.newPositionIndex = 0;
          this.isPositionCorrection = false;
          this.initialPositionX = 0;
          this.initialElementPositionX = 0;
          this.isLocked = true;
          this.pullLimit = 100;
          this.startTime = 0;
          this.startX = 0;
          this.moveX = 0;
          this.isSwipeInProgress = false;
          this.init();
        }

        _createClass(Container, [{
          key: "visibleWidth",
          get: function get() {
            return this.utils.visibleWidth;
          }
        }, {
          key: "overflowCellsLimit",
          get: function get() {
            return this.utils.overflowCellsLimit;
          }
        }, {
          key: "images",
          get: function get() {
            return this.carouselProperties.images;
          }
        }, {
          key: "element",
          get: function get() {
            return this.carouselProperties.cellsElement;
          }
        }, {
          key: "freeScroll",
          get: function get() {
            return this.carouselProperties.freeScroll;
          }
        }, {
          key: "fullCellWidth",
          get: function get() {
            return this.carouselProperties.cellWidth + this.carouselProperties.margin;
          }
        }, {
          key: "numberOfVisibleCells",
          get: function get() {
            return this.utils.numberOfVisibleCells;
          }
        }, {
          key: "transitionDuration",
          get: function get() {
            return this.carouselProperties.transitionDuration;
          }
        }, {
          key: "transitionTimingFunction",
          get: function get() {
            return this.carouselProperties.transitionTimingFunction;
          }
        }, {
          key: "cellLength",
          get: function get() {
            if (this.images) {
              return this.images.length;
            } else {
              return this.cells.cellLength;
            }
          }
        }, {
          key: "cellLengthInLightDOMMode",
          get: function get() {
            if (this.images) {
              var cellLength = this.numberOfVisibleCells + this.overflowCellsLimit * 2;

              if (cellLength > this.images.length) {
                cellLength = this.images.length;
              }

              return cellLength;
            } else {
              return this.cellLength;
            }
          }
        }, {
          key: "tooFewCells",
          get: function get() {
            return this.numberOfVisibleCells > this.cellLength;
          }
        }, {
          key: "disabled",
          get: function get() {
            return this.tooFewCells;
          }
        }, {
          key: "margin",
          get: function get() {
            return this.carouselProperties.margin;
          }
        }, {
          key: "isLightDOM",
          get: function get() {
            return this.carouselProperties.lightDOM || this.carouselProperties.loop;
          }
        }, {
          key: "updateProperties",
          value: function updateProperties(carouselProperties) {
            this.carouselProperties = carouselProperties;
          }
        }, {
          key: "init",
          value: function init() {
            this.setWidth();
          }
        }, {
          key: "handleTouchstart",
          value: function handleTouchstart() {
            this.startX = this.utils.getStartX(event);
            this.startTime = new Date().getTime();
            this.initialElementPositionX = this.getInitialElementPositionX();
          }
        }, {
          key: "handleHorizontalSwipe",
          value: function handleHorizontalSwipe() {
            if (this.disabled) {
              return;
            }

            if (!this.isSwipeInProgress) {
              this.startX = this.utils.getStartX(event);
              this.startTime = new Date().getTime();
              this.initialElementPositionX = this.getInitialElementPositionX();
            }

            this.isSwipeInProgress = true;
            this.moveX = this.utils.getMoveX(event);
            this.move();
          }
        }, {
          key: "handleTouchend",
          value: function handleTouchend() {
            var simpleProcessing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (this.disabled) {
              return;
            }
            /* If touchend was passed to the Slide class */


            if (simpleProcessing) {
              this.isSwipeInProgress = false;
              return;
            }

            this.isSwipeInProgress = false;
            this.finishMoving();
            this.clearInitialValues();
          }
        }, {
          key: "move",
          value: function move() {
            var positionX = this.getMovePositionX();
            var isPulled = this.detectPulled();
            var direction = this.getDirection();

            if (isPulled) {
              if (isPulled.edge === "left" && direction === "right" || isPulled.edge === "right" && direction === "left") {
                positionX = this.slowdownOnPull(positionX);
              }
            }

            this.transformPositionX(positionX, 0);

            if (this.freeScroll) {
              this.initialPositionX = positionX;
            }

            if (isPulled) {
              if (isPulled.edge === 'left' && isPulled.overflowX > this.pullLimit) {
                this.initialPositionX = 0;
              }

              if (isPulled.edge === 'right' && isPulled.overflowX > this.pullLimit) {
                this.initialPositionX = positionX;
              }
            }
          }
        }, {
          key: "getMovePositionX",
          value: function getMovePositionX() {
            var distance = this.getDistance();
            return this.initialElementPositionX - distance;
          }
        }, {
          key: "getDistance",
          value: function getDistance() {
            return this.startX - this.moveX;
          }
          /* If the container is pulled out of the left or right border */

        }, {
          key: "detectPulled",
          value: function detectPulled() {
            var currentPositionX = this.getCurrentPositionX();

            if (currentPositionX > 0) {
              return {
                edge: 'left',
                positionX: currentPositionX,
                overflowX: Math.abs(currentPositionX)
              };
            }

            if (currentPositionX < this.getEndPosition()) {
              return {
                edge: 'right',
                positionX: currentPositionX,
                overflowX: Math.abs(currentPositionX - this.getEndPosition())
              };
            }

            return undefined;
          }
        }, {
          key: "slowdownOnPull",
          value: function slowdownOnPull(_positionX) {
            var distance = Math.abs(this.getDistance());
            var endPosition = this.getEndPosition();
            var isPulled = this.detectPulled();

            if (!isPulled) {
              return 0;
            }

            var decelerationRatio = 3 + isPulled.overflowX / 50;
            var positionX = 0;

            if (isPulled.edge === 'left') {
              if (this.initialElementPositionX < 0) {
                distance = distance - Math.abs(this.initialElementPositionX);
              }

              var rubberPositionX = distance / decelerationRatio;
              positionX = rubberPositionX;

              if (this.initialElementPositionX > 0) {
                positionX = this.initialElementPositionX + rubberPositionX;
              }

              if (positionX > this.pullLimit) {
                positionX = this.pullLimit;
              }
            }

            if (isPulled.edge === 'right') {
              var _rubberPositionX = endPosition + (this.initialElementPositionX - distance - endPosition) / decelerationRatio;

              var containerWidth = this.getWidth();
              positionX = _rubberPositionX;

              if (this.initialElementPositionX < -(containerWidth - this.visibleWidth)) {
                positionX = containerWidth - this.visibleWidth + this.initialElementPositionX + _rubberPositionX;
              }

              if (positionX < endPosition - this.pullLimit) {
                positionX = endPosition - this.pullLimit;
              }
            }

            return positionX;
          }
        }, {
          key: "finishMoving",
          value: function finishMoving() {
            var positionX = this.getMovePositionX();
            var newPositionX = 0;

            if (this.freeScroll) {
              newPositionX = this.getInertia();
            }
            /* Align container while pulling */


            newPositionX = this.getAlignedPositionOnPull(newPositionX);
            this.transformPositionX(newPositionX);
            this.setInitialPosition(positionX);
          }
          /* Returns the new position of the container with inertia */

        }, {
          key: "getInertia",
          value: function getInertia() {
            var distance = this.getDistance();
            var currentTime = new Date().getTime();
            var tapLength = currentTime - this.startTime;
            var inertia = distance / tapLength * 100;
            return this.initialPositionX - inertia;
          }
        }, {
          key: "getAlignedPositionOnPull",
          value: function getAlignedPositionOnPull(newPositionX) {
            var direction = this.getDirection();

            if (direction === 'left') {
              var endPosition = this.getEndPosition();

              if (newPositionX < endPosition) {
                return endPosition;
              }
            }

            if (direction === 'right') {
              if (newPositionX > 0) {
                return 0;
              }
            }

            return newPositionX;
          }
        }, {
          key: "getCurrentPositionX",
          value: function getCurrentPositionX() {
            var parentPosition = this.element.parentElement.getBoundingClientRect();
            var position = this.element.getBoundingClientRect();
            return position.left - parentPosition.left;
          }
        }, {
          key: "getEndPosition",
          value: function getEndPosition() {
            if (this.isLightDOM) {
              var imagesInContainer = this.cells.imageUtils.getImages();
              return -(imagesInContainer.length * this.fullCellWidth - this.visibleWidth - this.margin);
            } else {
              var width = this.getWidth();
              var visibleWidth = this.element.parentElement.clientWidth;
              return visibleWidth - width;
            }
          }
        }, {
          key: "transformPositionX",
          value: function transformPositionX(value) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.transitionDuration;

            if (value === undefined) {
              return;
            }

            this.element.style.transition = 'transform ' + duration + 'ms ' + this.transitionTimingFunction;
            this.element.style.transform = 'translateX(' + value + 'px)';
          }
        }, {
          key: "getWidth",
          value: function getWidth() {
            var width = this.cellLengthInLightDOMMode * this.fullCellWidth;
            var totalImageWidth = this.cellLength * this.fullCellWidth;

            if (totalImageWidth < width) {
              width = totalImageWidth;
            }

            return this.isLightDOM ? width : totalImageWidth;
          }
        }, {
          key: "setWidth",
          value: function setWidth() {
            var width = this.getWidth();
            this.element.style.width = width + "px";
          }
        }, {
          key: "setInitialPosition",
          value: function setInitialPosition(position) {
            this.initialPositionX = position;
          }
        }, {
          key: "getElementPosition",
          value: function getElementPosition() {
            return this.element.getBoundingClientRect();
          }
        }, {
          key: "getInitialElementPositionX",
          value: function getInitialElementPositionX() {
            var carouselElementPosition = this.utils.getCarouselElementPosition()['left'];
            return this.getElementPosition()['left'] - carouselElementPosition;
          }
        }, {
          key: "clearInitialValues",
          value: function clearInitialValues() {
            this.startX = this.moveX = 0;
          }
        }, {
          key: "getDirection",
          value: function getDirection() {
            var direction = Math.sign(this.startX - this.moveX);

            if (direction === -1) {
              return 'right';
            }

            if (direction === 1) {
              return 'left';
            }

            return undefined;
          }
        }]);

        return Container;
      }();

      var ImageUtils = /*#__PURE__*/function () {
        function ImageUtils(element) {
          _classCallCheck(this, ImageUtils);

          this.cellStack = [];
          this.element = element;
        }

        _createClass(ImageUtils, [{
          key: "getImages",
          value: function getImages() {
            return this.cellStack.filter(this.filter);
          }
        }, {
          key: "filter",
          value: function filter(cell) {
            return cell.img !== undefined;
          }
        }]);

        return ImageUtils;
      }();

      var Cells = /*#__PURE__*/function () {
        function Cells(carouselProperties, utils) {
          _classCallCheck(this, Cells);

          this.carouselProperties = carouselProperties;
          this.utils = utils;
          this.counter = 0;
          this.imageUtils = new ImageUtils(this.element);
          this.init(carouselProperties);
        }

        _createClass(Cells, [{
          key: "images",
          get: function get() {
            return this.carouselProperties.images;
          }
        }, {
          key: "cellLength",
          get: function get() {
            return this.cells ? this.cells.length : 0;
          }
        }, {
          key: "fullCellWidth",
          get: function get() {
            return this.carouselProperties.cellWidth + this.carouselProperties.margin;
          }
        }, {
          key: "cellLengthInLightDOMMode",
          get: function get() {
            if (this.images) {
              var cellLength = this.numberOfVisibleCells + this.overflowCellsLimit * 2;

              if (cellLength > this.images.length) {
                cellLength = this.images.length;
              }

              return cellLength;
            } else {
              return this.cellLength;
            }
          }
        }, {
          key: "numberOfVisibleCells",
          get: function get() {
            return this.utils.numberOfVisibleCells;
          }
        }, {
          key: "overflowCellsLimit",
          get: function get() {
            return this.utils.overflowCellsLimit;
          }
        }, {
          key: "isLightDOM",
          get: function get() {
            return this.carouselProperties.lightDOM || this.carouselProperties.loop;
          }
        }, {
          key: "updateProperties",
          value: function updateProperties(carouselProperties) {
            this.carouselProperties = carouselProperties;
          }
        }, {
          key: "lineUp",
          value: function lineUp() {
            var cells = this.element ? this.element.children : [];
            this.imageUtils.cellStack = [];

            for (var i = 0; i < cells.length; i++) {
              var cell = cells[i];
              var positionX = this.getCellPositionInContainer(i);
              cell.style.transform = 'translateX(' + positionX + 'px)';
              cell.style.width = this.carouselProperties.cellWidth + 'px';

              if (this.getImage(i)) {
                this.imageUtils.cellStack.push({
                  index: i,
                  positionX: positionX,
                  img: this.getImage(i)['image']
                });
              }
            }

            ;
          }
        }, {
          key: "ifSequenceOfCellsIsChanged",
          value: function ifSequenceOfCellsIsChanged() {
            var cells = this.element.children;
            return cells[0]['style'].transform !== 'translateX(0px)';
          }
        }, {
          key: "getCellPositionInContainer",
          value: function getCellPositionInContainer(cellIndexInDOMTree) {
            var positionIndex = this.getCellIndexInContainer(cellIndexInDOMTree);
            return positionIndex * this.fullCellWidth;
          }
        }, {
          key: "getCellIndexInContainer",
          value: function getCellIndexInContainer(cellIndexInDOMTree) {
            var positionIndex;

            if (!this.isLightDOM) {
              return cellIndexInDOMTree;
            }

            var cellLength = this.cellLengthInLightDOMMode;
            var counter = this.counter - this.overflowCellsLimit;

            if (counter > cellLength) {
              counter = counter % cellLength;
            }

            if (counter < 0) {
              return cellIndexInDOMTree;
            } else {
              positionIndex = cellIndexInDOMTree - counter;

              if (positionIndex < 0) {
                positionIndex = cellLength + positionIndex;
              }
            }

            return positionIndex;
          }
        }, {
          key: "getImage",
          value: function getImage(cellIndex) {
            if (!this.images) {
              return;
            }

            var imageIndex = this.getImageIndex(cellIndex);
            var file = this.images[imageIndex];

            if (file && !file.type) {
              file.type = 'image';
            }

            return {
              image: this.images[imageIndex],
              imageIndex: imageIndex
            };
          }
        }, {
          key: "getImageIndex",
          value: function getImageIndex(cellIndexInDOMTree) {
            var positionIndex = this.getCellIndexInContainer(cellIndexInDOMTree);
            var imageIndex;

            if (this.counter > this.overflowCellsLimit) {
              var cellLimitOverflow = this.counter - this.overflowCellsLimit;
              imageIndex = positionIndex + cellLimitOverflow;

              if (this.images && this.carouselProperties.loop) {
                imageIndex = imageIndex % this.images.length;
              }
            } else {
              imageIndex = cellIndexInDOMTree;
            }

            return imageIndex;
          }
        }, {
          key: "setCounter",
          value: function setCounter(value) {
            this.counter = value;
          }
        }, {
          key: "init",
          value: function init(carouselProperties) {
            this.element = this.carouselProperties.cellsElement;
            this.cells = this.element.children;
            this.visibleWidth = this.carouselProperties.visibleWidth || this.element.parentElement.clientWidth;
          }
        }]);

        return Cells;
      }();

      var Slide = /*#__PURE__*/function () {
        function Slide(carouselProperties, utils, cells, container) {
          _classCallCheck(this, Slide);

          this.carouselProperties = carouselProperties;
          this.utils = utils;
          this.cells = cells;
          this.container = container;
          this.slideLength = 0;
          this.isSlideInProgress = false;
          this.counter = 0;
          this._counter = 0;
          this.distance = 0;
          this.distanceAbs = 0;
          this.isNotClickOnArrow = false;
          this.initialPositionX = 0;
          this.currentPositionX = 0;
          /* The slide length has been limited by the limitSlideLength() method */

          this.isSlideLengthLimited = false;
          this.init();
        }

        _createClass(Slide, [{
          key: "fullCellWidth",
          get: function get() {
            return this.carouselProperties.cellWidth + this.carouselProperties.margin;
          }
        }, {
          key: "margin",
          get: function get() {
            return this.carouselProperties.margin;
          }
        }, {
          key: "minSwipeDistance",
          get: function get() {
            return this.carouselProperties.minSwipeDistance;
          }
        }, {
          key: "numberOfVisibleCells",
          get: function get() {
            return this.utils.numberOfVisibleCells;
          }
        }, {
          key: "visibleCellsOverflowContainer",
          get: function get() {
            return this.utils.visibleCellsOverflowContainer;
          }
          /* The position to which the container returns after each slide
           * in the light DUM tree mode.
           */

        }, {
          key: "fixedContainerPosition",
          get: function get() {
            return -(this.overflowCellsLimit * this.fullCellWidth);
          }
        }, {
          key: "overflowCellsLimit",
          get: function get() {
            return this.utils.overflowCellsLimit;
          }
        }, {
          key: "images",
          get: function get() {
            return this.carouselProperties.images;
          }
          /* Number of cell elements in the DUM tree */

        }, {
          key: "cellLength",
          get: function get() {
            if (this.isLightDOM) {
              return this.cells.cellLengthInLightDOMMode;
            } else {
              if (this.images) {
                return this.images.length;
              } else {
                return this.cells.cellLength;
              }
            }
          }
        }, {
          key: "isLightDOM",
          get: function get() {
            return this.carouselProperties.lightDOM || this.carouselProperties.loop;
          }
        }, {
          key: "updateProperties",
          value: function updateProperties(carouselProperties) {
            this.carouselProperties = carouselProperties;
            this.setVisibleWidth();
          }
        }, {
          key: "init",
          value: function init() {
            this.visibleWidth = this.carouselProperties.visibleWidth || this.carouselProperties.hostElement.clientWidth;
          }
        }, {
          key: "handleTouchstart",
          value: function handleTouchstart() {
            /* Touchstart event is not called for arrow */
            this.isNotClickOnArrow = true;
            this.isSlideLengthLimited = false;

            if (!this.isSlideInProgress) {
              this.initialPositionX = this.container.getCurrentPositionX();
            }
          }
        }, {
          key: "handleTouchend",
          value: function handleTouchend() {
            if (!this.isNotClickOnArrow) {
              return;
            }

            this.currentPositionX = this.container.getCurrentPositionX();
            this.distanceAbs = Math.abs(this.initialPositionX - this.currentPositionX);
            this.distance = this.initialPositionX - this.currentPositionX;
            this.direction = this.getDirection();
            this.isNotClickOnArrow = false;
            this.handleSlide();
          }
        }, {
          key: "handleTransitionend",
          value: function handleTransitionend() {
            this.setCounter();
            this.isSlideInProgress = false;

            if (this.isLightDOM) {
              this.alignContainerFast();
            }
          }
        }, {
          key: "handleSlide",
          value: function handleSlide() {
            var customSlideLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            var isUsingButton = customSlideLength;
            var newPositionX;

            if (isUsingButton && this.isSlideInProgress || !this.direction) {
              return;
            }
            /* Custom slide length is used in arrows */


            if (customSlideLength) {
              this.slideLength = this.limitSlideLength(customSlideLength);

              if (!this.isSlideInProgress) {
                this.initialPositionX = this.container.getCurrentPositionX();
              }
            } else {
              this.slideLength = this.getSlideLength(this.distanceAbs);
            }
            /* Store intermediate counter value */


            this._counter = this.getPreliminaryCounter();

            if (this.direction === 'left') {
              if (!customSlideLength) {
                this.slideLength = this.limitSlideLength(this.getSlideLength(this.distanceAbs));
              }

              this._counter = this.getPreliminaryCounter();
              var isSlidesEnd = this.isSlidesEnd(this._counter);
              newPositionX = this.getPositionByIndex(this._counter);

              if (isSlidesEnd) {
                this._counter = this.counter;
                newPositionX = this.getPositionByIndex(this.counter);
                this.slideLength = 0;
              }
            }

            if (this.direction === 'right') {
              if (!customSlideLength) {
                this.slideLength = this.getSlideLength(this.distanceAbs);
              }

              if (this._counter < 0) {
                this._counter = this.counter;
                this.slideLength = this.counter;
              }

              newPositionX = this.getPositionByIndex(this.counter - this.slideLength);
            }

            if (this.container.getCurrentPositionX() !== newPositionX) {
              this.isSlideInProgress = true;
              this.container.transformPositionX(newPositionX);
            }
          }
        }, {
          key: "next",
          value: function next() {
            var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            this.direction = 'left';
            this.handleSlide(length);
          }
        }, {
          key: "prev",
          value: function prev() {
            var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            this.direction = 'right';
            this.handleSlide(length);
          }
        }, {
          key: "select",
          value: function select(index) {
            if (index > this.cellLength - 1) {
              return;
            }

            if (index > this.counter) {
              var length = index - this.counter;
              this.next(length);
            }

            if (index < this.counter) {
              var _length = this.counter - index;

              this.prev(_length);
            }
          }
        }, {
          key: "getPreliminaryCounter",
          value: function getPreliminaryCounter() {
            if (this.direction === 'left') {
              return this.counter + this.slideLength;
            }

            if (this.direction === 'right') {
              return this.counter - this.slideLength;
            }

            return 0;
          }
          /*
           * Limits the length of the slide during calls to the next() and prev()
           * methods if the specified position is outside the cell length
           */

        }, {
          key: "limitSlideLength",
          value: function limitSlideLength(slideLength) {
            if (slideLength > 1) {
              for (var i = 0; i < slideLength; i++) {
                var newCounter = this.counter + (slideLength - i);

                if (!this.isSlidesEnd(newCounter)) {
                  slideLength = slideLength - i;
                  this.isSlideLengthLimited = i > 0;
                  break;
                }
              }
            }

            return slideLength;
          }
          /* Offset the container to show the last cell completely */

        }, {
          key: "getPositionCorrection",
          value: function getPositionCorrection(counter) {
            var correction = 0;
            var isLastSlide = this.isLastSlide(counter);

            if (this.carouselProperties.loop || this.direction === "right") {
              return 0;
            }

            if (this.isSlideLengthLimited || isLastSlide) {
              var cellsWidth = this.cells.cellLengthInLightDOMMode * this.fullCellWidth;

              if (this.visibleWidth < cellsWidth) {
                correction = -(this.numberOfVisibleCells * this.fullCellWidth - this.visibleWidth - this.margin);
              }

              if (correction >= -this.margin) {
                correction = 0;
              }
            }

            return correction;
          }
        }, {
          key: "getSlideLength",
          value: function getSlideLength(distanceAbs) {
            var isLastSlide = this.isLastSlide(this.counter);
            /* If the last cell does not fit entirely, then the
             * length of the swipe to the left, from the extreme
             * right position, may be shorter than usual.
             */

            if (isLastSlide && this.direction === "right") {
              distanceAbs = distanceAbs + this.visibleWidth % this.fullCellWidth;
            }

            var length = Math.floor(distanceAbs / this.fullCellWidth);

            if (distanceAbs % this.fullCellWidth >= this.minSwipeDistance) {
              length++;
            }

            return length;
          }
        }, {
          key: "getDistanceAbs",
          value: function getDistanceAbs() {
            return Math.abs(this.initialPositionX - this.currentPositionX);
          }
        }, {
          key: "getDirection",
          value: function getDirection() {
            var direction = Math.sign(this.initialPositionX - this.currentPositionX);

            if (direction === -1) {
              return 'right';
            }

            if (direction === 1) {
              return 'left';
            }

            return undefined;
          }
        }, {
          key: "isSlidesEnd",
          value: function isSlidesEnd(counter) {
            var margin = this.visibleCellsOverflowContainer ? 1 : 0;
            var imageLength = this.images ? this.images.length : this.cells.cellLength;

            if (this.carouselProperties.loop) {
              return false;
            } else {
              return imageLength - counter + margin < this.numberOfVisibleCells;
            }
          }
        }, {
          key: "isLastSlide",
          value: function isLastSlide(counter) {
            return this.isSlidesEnd(counter + 1);
          }
        }, {
          key: "setCounter",
          value: function setCounter() {
            if (this.direction === 'left') {
              this.counter = this.counter + this.slideLength;
            }

            if (this.direction === 'right') {
              this.counter = this.counter - this.slideLength;
            }
          }
        }, {
          key: "getPositionByIndex",
          value: function getPositionByIndex(_counter) {
            var correction = this.getPositionCorrection(this.counter + this.slideLength);
            var position;

            if (correction !== 0) {
              correction = correction + this.fullCellWidth;
            }

            if (this.direction === 'right') {
              correction = 0;
            }

            if (this.isLightDOM && this.isLightDOMMode(_counter) || this.isLightDOM && this.ifLeftDOMModeAtEnd(_counter)) {
              var initialPosition = this.getPositionWithoutCorrection(this.initialPositionX);
              var counterDifference = _counter - this.counter;
              position = initialPosition - (counterDifference * this.fullCellWidth - correction);
            } else {
              position = -(_counter * this.fullCellWidth - correction);
            }

            position = this.provideSafePosition(position);
            return position;
          }
        }, {
          key: "provideSafePosition",
          value: function provideSafePosition(position) {
            var endPosition = this.container.getEndPosition();

            if (this.direction === 'left') {
              if (position > 0) {
                position = 0;
              }
            }

            if (this.direction === 'right') {
              if (position < endPosition) {
                position = endPosition;
              }
            }

            return position;
          }
        }, {
          key: "getPositionWithoutCorrection",
          value: function getPositionWithoutCorrection(value) {
            var remainder = Math.round(value) % this.fullCellWidth;

            if (remainder !== 0) {
              return value - (this.fullCellWidth + remainder);
            } else {
              return value;
            }
          }
        }, {
          key: "isNextArrowDisabled",
          value: function isNextArrowDisabled() {
            return this.isLastSlide(this.counter) || !this.visibleCellsOverflowContainer && this.cellLength <= this.numberOfVisibleCells || this.visibleCellsOverflowContainer && this.cellLength < this.numberOfVisibleCells;
          }
        }, {
          key: "isPrevArrowDisabled",
          value: function isPrevArrowDisabled() {
            return this.counter === 0;
          }
        }, {
          key: "alignContainerFast",
          value: function alignContainerFast() {
            if (this.isLightDOMMode(this.counter)) {
              var positionX = this.fixedContainerPosition;
              this.container.transformPositionX(positionX, 0);
              this.cells.setCounter(this.counter);
              this.cells.lineUp();
            } else if (this.ifLeftDOMModeToBeginning(this.counter)) {
              /* If we have already exited the light DOM mode but
               * the cells are still out of place
               */
              if (this.cells.ifSequenceOfCellsIsChanged()) {
                var _positionX2 = -(this.counter * this.fullCellWidth);

                this.container.transformPositionX(_positionX2, 0);
                this.cells.setCounter(this.counter);
                this.cells.lineUp();
              }
            } else if (this.ifLeftDOMModeAtEnd(this.counter)) {
              var containerPositionX = this.container.getCurrentPositionX();
              var containerWidth = this.container.getWidth();
              this.visibleWidth;

              if (this.isLastSlide(this.counter) && containerWidth + containerPositionX >= this.visibleWidth) {
                return;
              }

              var correction = this.getPositionCorrection(this.counter);

              if (correction !== 0) {
                correction = correction + this.fullCellWidth;
              }

              if (this.direction === 'right') {
                correction = 0;
              }

              var _positionX3 = this.fixedContainerPosition + correction;

              this.container.transformPositionX(_positionX3, 0);
              this.cells.setCounter(this.counter);
              this.cells.lineUp();
            }
          }
        }, {
          key: "isLightDOMMode",
          value: function isLightDOMMode(counter) {
            var flag;
            var remainderOfCells = this.images.length - this.overflowCellsLimit - this.numberOfVisibleCells;

            if (!this.isLightDOM) {
              return false;
            }

            if (counter > this.overflowCellsLimit && this.direction === "left" && counter <= remainderOfCells) {
              flag = true;
            }

            if (counter >= this.overflowCellsLimit && this.direction === "right" && counter < remainderOfCells) {
              flag = true;
            }

            if (this.counter > this.overflowCellsLimit && this.direction === "left" && this.counter <= remainderOfCells) {
              flag = true;
            }

            if (this.counter >= this.overflowCellsLimit && this.direction === "right" && this.counter < remainderOfCells) {
              flag = true;
            }

            return flag;
          }
        }, {
          key: "ifLeftDOMModeAtEnd",
          value: function ifLeftDOMModeAtEnd(counter) {
            var flag;
            var remainderOfCells = this.images.length - this.overflowCellsLimit - this.numberOfVisibleCells;

            if (counter >= remainderOfCells) {
              flag = true;
            }

            if (this.counter >= remainderOfCells) {
              flag = true;
            }

            return flag;
          }
        }, {
          key: "ifLeftDOMModeToBeginning",
          value: function ifLeftDOMModeToBeginning(counter) {
            var flag;

            if (counter <= this.overflowCellsLimit) {
              flag = true;
            }

            if (this.counter <= this.overflowCellsLimit) {
              flag = true;
            }

            return flag;
          }
        }, {
          key: "setVisibleWidth",
          value: function setVisibleWidth() {
            this.visibleWidth = this.carouselProperties.visibleWidth || this.carouselProperties.hostElement.clientWidth;
          }
        }]);

        return Slide;
      }();

      var Utils = /*#__PURE__*/function () {
        function Utils(carouselProperties) {
          _classCallCheck(this, Utils);

          this.carouselProperties = carouselProperties;
        }

        _createClass(Utils, [{
          key: "images",
          get: function get() {
            return this.carouselProperties.images;
          }
        }, {
          key: "margin",
          get: function get() {
            return this.carouselProperties.margin;
          }
        }, {
          key: "overflowCellsLimit",
          get: function get() {
            if (this.images && this.isImagesLessCellLimit) {
              var overflowCellsLimit = Math.floor((this.images.length - this.numberOfVisibleCells) / 2);

              if (overflowCellsLimit < 0) {
                overflowCellsLimit = 0;
              }

              return overflowCellsLimit;
            } else {
              return this.carouselProperties.overflowCellsLimit;
            }
          }
        }, {
          key: "isImagesLessCellLimit",
          get: function get() {
            return this.carouselProperties.overflowCellsLimit * 2 + this.numberOfVisibleCells > this.images.length;
          }
        }, {
          key: "numberOfVisibleCells",
          get: function get() {
            return Math.ceil(this.visibleWidth / this.fullCellWidth);
          }
        }, {
          key: "visibleCellsOverflowContainer",
          get: function get() {
            return this.numberOfVisibleCells * this.fullCellWidth - this.margin > this.visibleWidth;
          }
        }, {
          key: "fullCellWidth",
          get: function get() {
            return this.carouselProperties.cellWidth + this.carouselProperties.margin;
          }
        }, {
          key: "visibleWidth",
          get: function get() {
            return this.carouselProperties.visibleWidth || this.carouselProperties.cellsElement.parentElement.clientWidth;
          }
        }, {
          key: "updateProperties",
          value: function updateProperties(carouselProperties) {
            this.carouselProperties = carouselProperties;
          }
        }, {
          key: "getStartX",
          value: function getStartX(event) {
            var touches = event.touches;
            var carouselElementPosition = this.getCarouselElementPosition()['left'];
            var startX;

            if (touches) {
              startX = touches[0].clientX - carouselElementPosition;
            } else {
              startX = event.clientX - carouselElementPosition;
            }

            return startX;
          }
        }, {
          key: "getMoveX",
          value: function getMoveX(event) {
            var touches = event.touches;
            var carouselElementPositionX = this.getCarouselElementPosition()['left'];

            if (touches) {
              return touches[0].clientX - carouselElementPositionX;
            } else {
              return event.clientX - carouselElementPositionX;
            }
          }
        }, {
          key: "getCarouselElementPosition",
          value: function getCarouselElementPosition() {
            return this.carouselProperties.hostElement.getBoundingClientRect();
          }
        }]);

        return Utils;
      }();

      var CarouselComponent = /*@__PURE__*/function () {
        var CarouselComponent = /*#__PURE__*/function () {
          function CarouselComponent(elementRef, ref) {
            var _this5 = this;

            _classCallCheck(this, CarouselComponent);

            this.elementRef = elementRef;
            this.ref = ref;
            this.minTimeout = 30;
            this.isVideoPlaying = false;
            this._isCounter = false;
            this._cellWidth = 200;
            this._loop = false;
            this._lightDOM = false;
            this.isMoving = false;
            this.isNgContent = false;
            this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.height = 200;
            this.autoplay = false;
            this.autoplayInterval = 5000;
            this.pauseOnHover = true;
            this.dots = false;
            this.margin = 10;
            this.objectFit = 'cover';
            this.minSwipeDistance = 10;
            this.transitionDuration = 200;
            this.transitionTimingFunction = 'ease-out';
            this.counterSeparator = " / ";
            this.overflowCellsLimit = 3;
            this.listeners = 'mouse and touch';
            this.cellsToScroll = 1;
            this.freeScroll = false;
            this.arrows = true;
            this.arrowsOutside = false;
            this.arrowsTheme = 'light';
            this.hostClassCarousel = true;

            this.handleTouchstart = function (event) {
              _this5.touches.addEventListeners("mousemove", "handleMousemove");

              _this5.carousel.handleTouchstart(event);

              _this5.isMoving = true;
            };

            this.handleHorizontalSwipe = function (event) {
              event.preventDefault();

              _this5.carousel.handleHorizontalSwipe(event);
            };

            this.handleTouchend = function (event) {
              var touches = event.touches;

              _this5.carousel.handleTouchend(event);

              _this5.touches.removeEventListeners("mousemove", "handleMousemove");

              _this5.isMoving = false;
            };

            this.handleTap = function (event) {
              var outboundEvent = {
                name: 'click'
              };
              var nodes = Array.prototype.slice.call(_this5.cellsElement.children);
              var cellElement = event.srcElement.closest(".carousel-cell");
              var i = nodes.indexOf(cellElement);
              var cellIndex = nodes.indexOf(cellElement);

              if (_this5.images) {//outboundEvent.fileIndex = this.carousel.getFileIndex(i);
                //outboundEvent.file = this.carousel.getFile(cellIndex);
              } else {
                outboundEvent.cellIndex = cellIndex;
              }
            };
          }

          _createClass(CarouselComponent, [{
            key: "isContainerLocked",
            get: function get() {
              if (this.carousel) {
                return this.carousel.isContainerLocked;
              }
            }
          }, {
            key: "slideCounter",
            get: function get() {
              if (this.carousel) {
                return this.carousel.slideCounter;
              }
            }
          }, {
            key: "lapCounter",
            get: function get() {
              if (this.carousel) {
                return this.carousel.lapCounter;
              }
            }
          }, {
            key: "isLandscape",
            get: function get() {
              return window.innerWidth > window.innerHeight;
            }
          }, {
            key: "isSafari",
            get: function get() {
              var ua = navigator.userAgent.toLowerCase();

              if (ua.indexOf('safari') !== -1) {
                return !(ua.indexOf('chrome') > -1);
              }
            }
          }, {
            key: "counter",
            get: function get() {
              var counter;

              if (this.loop) {
                counter = this.slideCounter % this.cellLength;
              } else {
                counter = this.slideCounter;
              }

              return counter + 1 + this.counterSeparator + this.cellLength;
            }
          }, {
            key: "cellsElement",
            get: function get() {
              return this.elementRef.nativeElement.querySelector('.carousel-cells');
            }
          }, {
            key: "isArrows",
            get: function get() {
              return this.arrows && !this.freeScroll;
            }
          }, {
            key: "isCounter",
            get: function get() {
              return this._isCounter && this.cellLength > 1;
            },
            set: function set(value) {
              if (value) {
                this._isCounter = value;
              }
            }
          }, {
            key: "activeDotIndex",
            get: function get() {
              return this.slideCounter % this.cellLength;
            }
          }, {
            key: "cellLimit",
            get: function get() {
              if (this.carousel) {
                return this.carousel.cellLimit;
              }
            }
          }, {
            key: "carouselWidth",
            get: function get() {
              return this.elementRef.nativeElement.clientWidth;
            }
          }, {
            key: "images",
            get: function get() {
              return this._images;
            },
            set: function set(images) {
              this._images = images;
            }
          }, {
            key: "cellWidth",
            set: function set(value) {
              if (value) {
                this._cellWidth = value;
              }
            }
          }, {
            key: "loop",
            get: function get() {
              if (this.images) {
                return this._loop;
              } else {
                return false;
              }
            },
            set: function set(value) {
              if (value) {
                this._loop = value;
              }
            }
          }, {
            key: "lightDOM",
            get: function get() {
              if (this.images) {
                return this._lightDOM;
              } else {
                return false;
              }
            },
            set: function set(value) {
              if (value) {
                this._lightDOM = value;
              }
            }
          }, {
            key: "onWindowResize",
            value: function onWindowResize(event) {
              if (this.utils.visibleWidth !== this.savedCarouselWidth) {
                this.resize();
              }
            }
          }, {
            key: "onMousemove",
            value: function onMousemove(event) {
              if (this.autoplay && this.pauseOnHover) {
                this.carousel.stopAutoplay();
              }
            }
          }, {
            key: "onMouseleave",
            value: function onMouseleave(event) {
              if (this.autoplay && this.pauseOnHover) {
                this.carousel.autoplay();
              }
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              this.isNgContent = this.cellsElement.children.length > 0;
              this.touches = new Touches({
                element: this.cellsElement,
                listeners: this.listeners,
                mouseListeners: {
                  "mousedown": "handleMousedown",
                  "mouseup": "handleMouseup"
                }
              });
              this.touches.on('touchstart', this.handleTouchstart);
              this.touches.on('horizontal-swipe', this.handleHorizontalSwipe);
              this.touches.on('touchend', this.handleTouchend);
              this.touches.on('mousedown', this.handleTouchstart);
              this.touches.on('mouseup', this.handleTouchend);
              this.touches.on('tap', this.handleTap);
              this.setDimensions();
            }
          }, {
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              this.initCarousel();
              this.cellLength = this.getCellLength();
              this.dotsArr = Array(this.cellLength).fill(1);
              this.ref.detectChanges();
              this.carousel.lineUpCells();
              this.savedCarouselWidth = this.carouselWidth;
              /* Start detecting changes in the DOM tree */

              this.detectDomChanges();
            }
          }, {
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              if (changes.width || changes.height || changes.images) {
                this.setDimensions();
                this.initCarousel();
                this.carousel.lineUpCells();
                this.ref.detectChanges();
              }
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.touches.destroy(); //this.carousel.destroy();
            }
          }, {
            key: "initCarousel",
            value: function initCarousel() {
              this.carouselProperties = {
                id: this.id,
                cellsElement: this.elementRef.nativeElement.querySelector('.carousel-cells'),
                hostElement: this.elementRef.nativeElement,
                images: this.images,
                cellWidth: this.getCellWidth(),
                loop: this.loop,
                autoplayInterval: this.autoplayInterval,
                overflowCellsLimit: this.overflowCellsLimit,
                visibleWidth: this.width,
                margin: this.margin,
                minSwipeDistance: this.minSwipeDistance,
                transitionDuration: this.transitionDuration,
                transitionTimingFunction: this.transitionTimingFunction,
                videoProperties: this.videoProperties,
                eventHandler: this.events,
                freeScroll: this.freeScroll,
                lightDOM: this.lightDOM
              };
              this.utils = new Utils(this.carouselProperties);
              this.cells = new Cells(this.carouselProperties, this.utils);
              this.container = new Container(this.carouselProperties, this.utils, this.cells);
              this.slide = new Slide(this.carouselProperties, this.utils, this.cells, this.container);
              this.carousel = new Carousel(this.carouselProperties, this.utils, this.cells, this.container, this.slide);

              if (this.autoplay) {
                this.carousel.autoplay();
              }
            }
          }, {
            key: "resize",
            value: function resize() {
              this.landscapeMode = this.isLandscape;
              this.savedCarouselWidth = this.carouselWidth;
              this.carouselProperties.cellWidth = this.getCellWidth();
              this.cells.updateProperties(this.carouselProperties);
              this.carousel.updateProperties(this.carouselProperties);
              this.container.updateProperties(this.carouselProperties);
              this.slide.updateProperties(this.carouselProperties);
              this.utils.updateProperties(this.carouselProperties);
              this.carousel.lineUpCells();
              this.slide.select(0);
              this.ref.detectChanges();
            }
          }, {
            key: "detectDomChanges",
            value: function detectDomChanges() {
              var _this6 = this;

              var observer = new MutationObserver(function (mutations) {
                _this6.onDomChanges();
              });
              var config = {
                attributes: true,
                childList: true,
                characterData: true
              };
              observer.observe(this.cellsElement, config);
            }
          }, {
            key: "onDomChanges",
            value: function onDomChanges() {
              this.cellLength = this.getCellLength();
              this.carousel.lineUpCells();
              this.ref.detectChanges();
            }
          }, {
            key: "setDimensions",
            value: function setDimensions() {
              this.hostStyleHeight = this.height + 'px';
              this.hostStyleWidth = this.width + 'px';
            }
          }, {
            key: "getImage",
            value: function getImage(index) {
              return this.carousel.getImage(index);
            }
          }, {
            key: "handleTransitionendCellContainer",
            value: function handleTransitionendCellContainer(event) {
              if (event.target['className'] === 'carousel-cells') {
                this.carousel.handleTransitionend();
              }
            }
          }, {
            key: "getCellWidth",
            value: function getCellWidth() {
              var elementWidth = this.carouselWidth;

              if (this.cellsToShow) {
                var margin = this.cellsToShow > 1 ? this.margin : 0;
                var totalMargin = margin * (this.cellsToShow - 1);
                return (elementWidth - totalMargin) / this.cellsToShow;
              }

              if (this._cellWidth === '100%') {
                return elementWidth;
              } else {
                return this._cellWidth;
              }
            }
          }, {
            key: "next",
            value: function next() {
              this.carousel.next(this.cellsToScroll);
              this.carousel.stopAutoplay();
            }
          }, {
            key: "prev",
            value: function prev() {
              this.carousel.prev(this.cellsToScroll);
              this.carousel.stopAutoplay();
            }
          }, {
            key: "isNextArrowDisabled",
            value: function isNextArrowDisabled() {
              if (this.carousel) {
                return this.carousel.isNextArrowDisabled();
              }
            }
          }, {
            key: "isPrevArrowDisabled",
            value: function isPrevArrowDisabled() {
              if (this.carousel) {
                return this.carousel.isPrevArrowDisabled();
              }
            }
          }, {
            key: "getCellLength",
            value: function getCellLength() {
              if (this.images) {
                return this.images.length;
              } else {
                return this.cellsElement.children.length;
              }
            }
          }]);

          return CarouselComponent;
        }();

        CarouselComponent.??fac = function CarouselComponent_Factory(t) {
          return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
        };

        CarouselComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
          type: CarouselComponent,
          selectors: [["carousel"], ["", "carousel", ""]],
          hostVars: 6,
          hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("resize", function CarouselComponent_resize_HostBindingHandler($event) {
                return ctx.onWindowResize($event);
              }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveWindow"])("mousemove", function CarouselComponent_mousemove_HostBindingHandler($event) {
                return ctx.onMousemove($event);
              })("mouseleave", function CarouselComponent_mouseleave_HostBindingHandler($event) {
                return ctx.onMouseleave($event);
              });
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("height", ctx.hostStyleHeight)("width", ctx.hostStyleWidth);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("carousel", ctx.hostClassCarousel);
            }
          },
          inputs: {
            height: "height",
            autoplay: "autoplay",
            autoplayInterval: "autoplayInterval",
            pauseOnHover: "pauseOnHover",
            dots: "dots",
            margin: "margin",
            objectFit: "objectFit",
            minSwipeDistance: "minSwipeDistance",
            transitionDuration: "transitionDuration",
            transitionTimingFunction: "transitionTimingFunction",
            counterSeparator: "counterSeparator",
            overflowCellsLimit: "overflowCellsLimit",
            listeners: "listeners",
            cellsToScroll: "cellsToScroll",
            freeScroll: "freeScroll",
            arrows: "arrows",
            arrowsOutside: "arrowsOutside",
            arrowsTheme: "arrowsTheme",
            isCounter: ["counter", "isCounter"],
            images: "images",
            cellWidth: "cellWidth",
            loop: "loop",
            lightDOM: "lightDOM",
            id: "id",
            width: "width",
            borderRadius: "borderRadius",
            videoProperties: "videoProperties",
            cellsToShow: "cellsToShow"
          },
          outputs: {
            events: "events"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]],
          ngContentSelectors: _c0,
          decls: 8,
          vars: 6,
          consts: [["class", "carousel-counter", 4, "ngIf"], [1, "carousel-container"], [1, "carousel-cells", 3, "transitionend"], ["cells", ""], ["ngFor", "", 3, "ngForOf"], ["class", "carousel-dots", 4, "ngIf"], ["class", "carousel-arrows", 3, "carousel-arrows-outside", "carousel-dark-arrows", 4, "ngIf"], [1, "carousel-counter"], ["class", "carousel-cell", 3, "width", "border-radius", 4, "ngIf"], [1, "carousel-cell"], ["draggable", "false", 3, "src", "object-fit", 4, "ngIf"], ["draggable", "false", 3, "src"], [1, "carousel-dots"], ["class", "carousel-dot", 3, "carousel-dot-active", 4, "ngFor", "ngForOf"], [1, "carousel-dot"], [1, "carousel-arrows"], [1, "carousel-arrow", "carousel-arrow-prev", 3, "click"], [1, "carousel-arrow", "carousel-arrow-next", 3, "click"]],
          template: function CarouselComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, CarouselComponent_div_0_Template, 2, 1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2, 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("transitionend", function CarouselComponent_Template_div_transitionend_2_listener($event) {
                return ctx.handleTransitionendCellContainer($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, CarouselComponent_ng_template_5_Template, 1, 1, "ng-template", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, CarouselComponent_div_6_Template, 2, 1, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, CarouselComponent_div_7_Template, 3, 8, "div", 6);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isCounter);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("carousel-moving", ctx.isMoving);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.images);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.dots);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isArrows);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
          styles: ["[_nghost-%COMP%]{position:relative;display:block;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;user-select:none;z-index:10000;transform-origin:top left;box-sizing:border-box}[_nghost-%COMP%]   .carousel-container[_ngcontent-%COMP%]{overflow:hidden;width:100%;height:100%;cursor:grab}[_nghost-%COMP%]   .carousel-container.carousel-moving[_ngcontent-%COMP%]{cursor:grabbing}[_nghost-%COMP%]   .carousel-counter[_ngcontent-%COMP%]{text-align:right;position:absolute;z-index:30;transition:opacity .2s;top:8px;right:24px;border-radius:13px;background-color:rgba(23,37,68,.3);font-size:11px;color:#fff;padding:5px 7px;line-height:normal}[_nghost-%COMP%]     .carousel-cells{transition:transform .2s;width:100%;height:100%;display:block;will-change:transform}[_nghost-%COMP%]     .carousel-cells .carousel-cell.swiper-prev-image{transform:translate3d(-100%,0,0)}[_nghost-%COMP%]     .carousel-cells .carousel-cell.swiper-next-image{transform:translate3d(100%,0,0)}[_nghost-%COMP%]     .carousel-cells .carousel-cell{width:100%;height:100%;position:absolute;overflow:hidden}[_nghost-%COMP%]     .carousel-cells .carousel-cell img, [_nghost-%COMP%]     .carousel-cells .carousel-cell video{width:100%;height:100%;position:relative;object-fit:contain}[_nghost-%COMP%]     .carousel-cells .carousel-cell img.swiper-hide{display:none}[_nghost-%COMP%]     .carousel-cells .carousel-cell .carousel-play{position:absolute;top:0;left:0;bottom:0;right:0;z-index:1}[_nghost-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]{width:40px;height:40px;background-color:#fff;background-repeat:no-repeat;background-size:31px;background-position:50%;border-radius:100px;position:absolute;top:50%;margin-top:-20px;z-index:10;cursor:pointer;box-shadow:0 0 5px rgba(0,0,0,.15)}[_nghost-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%]{left:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==)}[_nghost-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%]{right:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)}[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%]{left:-60px}[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%]{right:-60px}[_nghost-%COMP%]   .carousel-dark-arrows[_ngcontent-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]{filter:invert(1)}[_nghost-%COMP%]   .carousel-arrow-disabled[_ngcontent-%COMP%]{cursor:default;opacity:.5}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:0;z-index:10;text-align:center}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .carousel-dot[_ngcontent-%COMP%]{display:inline-block;border:2px solid #fff;border-radius:100px;margin:4px;width:8px;height:8px}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .carousel-dot-active[_ngcontent-%COMP%]{background-color:#fff}"]
        });
        return CarouselComponent;
      }();

      var IvyCarouselModule = /*@__PURE__*/function () {
        var IvyCarouselModule = /*#__PURE__*/_createClass(function IvyCarouselModule() {
          _classCallCheck(this, IvyCarouselModule);
        });

        IvyCarouselModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: IvyCarouselModule
        });
        IvyCarouselModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function IvyCarouselModule_Factory(t) {
            return new (t || IvyCarouselModule)();
          },
          providers: [],
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
        });
        return IvyCarouselModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](IvyCarouselModule, {
          declarations: function declarations() {
            return [CarouselComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [CarouselComponent];
          }
        });
      })();
      /*
       * Public API Surface of angular-responsive-carousel
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "19Bg":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/pages/landing-page/landing-page.component.ts ***!
      \**********************************************************************/

    /*! exports provided: LandingPageComponent */

    /***/
    function Bg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function () {
        return LandingPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fragments_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../fragments/login/login.component */
      "inYg");

      var LandingPageComponent = /*@__PURE__*/function () {
        var LandingPageComponent = /*#__PURE__*/function () {
          function LandingPageComponent() {
            _classCallCheck(this, LandingPageComponent);
          }

          _createClass(LandingPageComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return LandingPageComponent;
        }();

        LandingPageComponent.??fac = function LandingPageComponent_Factory(t) {
          return new (t || LandingPageComponent)();
        };

        LandingPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
          type: LandingPageComponent,
          selectors: [["app-landing-page"]],
          decls: 38,
          vars: 0,
          consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "primary-color", "fixed-top"], [1, "container-fluid"], [1, "navbar-brand"], ["src", "../../../../assets/images/asc-logo.jpg", "alt", ""], ["type", "button", "data-toggle", "collapse", "data-target", "#basicExampleNav", "aria-controls", "basicExampleNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "basicExampleNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "nav-item"], [1, "form-inline"], [1, "md-form", "my-0"], ["id", "intro", 1, "view"], [1, "mask"], [1, "footer-nav"], [1, "footer-details"]],
          template: function LandingPageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nav", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ul", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Home ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Features");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Pricing");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "form", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "main");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "app-login");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "footer");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "ul");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Terms and Conditions");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Privacy Policy");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Inquiry");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Ad Standards Council - Screening System -v 2.0");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " \xA9 2022. Ad Standards Council");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            }
          },
          directives: [_fragments_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]],
          styles: ["body[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #fb9696, transparent);\n}\n\n.landing-page[_ngcontent-%COMP%] {\n  padding: 2em;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 3em;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\nfooter[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background-color: white;\n  font-weight: 500;\n  padding: 1em 0.3em;\n}\n\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  display: flex;\n  text-decoration: underline;\n  padding: 0em 1em;\n}\n\nfooter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nfooter[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%] {\n  float: left;\n}\n\nfooter[_ngcontent-%COMP%]   .footer-details[_ngcontent-%COMP%] {\n  float: right;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], header[_ngcontent-%COMP%], #intro[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n#intro[_ngcontent-%COMP%] {\n  background: url('login-bg.png') no-repeat center center fixed;\n  background-size: cover !important;\n}\n\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.fixed-top[_ngcontent-%COMP%] {\n  z-index: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseURBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFJQTtFQUNJLHVCQUFBO0FBREo7O0FBS0E7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFHSTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFEUjs7QUFJSTtFQUNJLGVBQUE7QUFGUjs7QUFJSTtFQUNJLFdBQUE7QUFGUjs7QUFJSTtFQUNJLFlBQUE7QUFGUjs7QUFNQTs7OztFQUlJLFlBQUE7QUFISjs7QUFNQTtFQUNJLDZEQUFBO0VBSUEsaUNBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7QUFISjs7QUFNQTtFQUNJLHFCQUFBO0FBSEoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhZ2VzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmYjk2OTYsIHRyYW5zcGFyZW50KTtcclxufVxyXG5cclxuLmxhbmRpbmctcGFnZSB7XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDAgMWVtO1xyXG59XHJcblxyXG5cclxuLm5hdmJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuZm9vdGVye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiAxZW0gMC4zZW07XHJcbiAgICB1bCwgbGl7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIHBhZGRpbmc6IDBlbSAxZW07XHJcbiAgICB9XHJcblxyXG4gICAgbGk6aG92ZXJ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlci1uYXZ7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLWRldGFpbHN7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5LFxyXG5oZWFkZXIsXHJcbiNpbnRybyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNpbnRybyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luLWJnLnBuZ1wiKW5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG59XHJcblxyXG4uZml4ZWQtdG9wIHtcclxuICAgIHotaW5kZXg6IDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */"]
        });
        return LandingPageComponent;
      }();
      /***/

    },

    /***/
    "5han":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/fragments/login/forgot-passowrd/forgot-passowrd.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: ForgotPassowrdComponent */

    /***/
    function han(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPassowrdComponent", function () {
        return ForgotPassowrdComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var ForgotPassowrdComponent = /*@__PURE__*/function () {
        var ForgotPassowrdComponent = /*#__PURE__*/function () {
          function ForgotPassowrdComponent(apiService, sweetAlertService, dialogRef) {
            _classCallCheck(this, ForgotPassowrdComponent);

            this.apiService = apiService;
            this.sweetAlertService = sweetAlertService;
            this.dialogRef = dialogRef;
          }

          _createClass(ForgotPassowrdComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "resetPassword",
            value: function resetPassword() {
              var _this7 = this;

              if (this.userName) {
                console.log(this.userName);
                this.apiService.save("".concat(_shared__WEBPACK_IMPORTED_MODULE_1__["ENDPOINTS"].forgotPassword, "/").concat(this.userName), null).subscribe(function (res) {
                  console.log(res);

                  _this7.sweetAlertService.success(res, 5); // this.sweetAlertService.customSuccessMessage("Your password has been changed successfully", 5);
                  // this.sweetAlertService.success("Your password has been changed successfully", 5);


                  _this7.dialogRef.close();
                }, function (err) {
                  console.log(err);

                  _this7.sweetAlertService.error(err);
                });
              } else {
                this.sweetAlertService.customErrorMessage('Username field is blank. Please provide a valid username value.');
              }
            }
          }, {
            key: "closeModal",
            value: function closeModal() {
              this.dialogRef.close();
            }
          }]);

          return ForgotPassowrdComponent;
        }();

        ForgotPassowrdComponent.??fac = function ForgotPassowrdComponent_Factory(t) {
          return new (t || ForgotPassowrdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]));
        };

        ForgotPassowrdComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
          type: ForgotPassowrdComponent,
          selectors: [["app-forgot-passowrd"]],
          decls: 15,
          vars: 1,
          consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "title"], ["appearance", "outline", 1, "col-md-12"], ["matInput", "", "placeholder", "Email Address", "id", "username", "name", "username", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"]],
          template: function ForgotPassowrdComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Forgot Password ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-form-field", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-label");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Email ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ForgotPassowrdComponent_Template_input_ngModelChange_10_listener($event) {
                return ctx.userName = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ForgotPassowrdComponent_Template_button_click_11_listener() {
                return ctx.resetPassword();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Reset Password ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ForgotPassowrdComponent_Template_button_click_13_listener() {
                return ctx.closeModal();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Cancel ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.userName);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
          styles: [".container-fluid[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mcmFnbWVudHMvbG9naW4vZm9yZ290LXBhc3Nvd3JkL2ZvcmdvdC1wYXNzb3dyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2ZyYWdtZW50cy9sb2dpbi9mb3Jnb3QtcGFzc293cmQvZm9yZ290LXBhc3Nvd3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"]
        });
        return ForgotPassowrdComponent;
      }();
      /***/

    },

    /***/
    "EjJx":
    /*!*********************************************************!*\
      !*** ./node_modules/jwt-decode/build/jwt-decode.esm.js ***!
      \*********************************************************/

    /*! exports provided: default, InvalidTokenError */

    /***/
    function EjJx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvalidTokenError", function () {
        return n;
      });

      function e(e) {
        this.message = e;
      }

      e.prototype = new Error(), e.prototype.name = "InvalidCharacterError";

      var r = "undefined" != typeof window && window.atob && window.atob.bind(window) || function (r) {
        var t = String(r).replace(/=+$/, "");
        if (t.length % 4 == 1) throw new e("'atob' failed: The string to be decoded is not correctly encoded.");

        for (var n, o, a = 0, i = 0, c = ""; o = t.charAt(i++); ~o && (n = a % 4 ? 64 * n + o : o, a++ % 4) ? c += String.fromCharCode(255 & n >> (-2 * a & 6)) : 0) {
          o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);
        }

        return c;
      };

      function t(e) {
        var t = e.replace(/-/g, "+").replace(/_/g, "/");

        switch (t.length % 4) {
          case 0:
            break;

          case 2:
            t += "==";
            break;

          case 3:
            t += "=";
            break;

          default:
            throw "Illegal base64url string!";
        }

        try {
          return function (e) {
            return decodeURIComponent(r(e).replace(/(.)/g, function (e, r) {
              var t = r.charCodeAt(0).toString(16).toUpperCase();
              return t.length < 2 && (t = "0" + t), "%" + t;
            }));
          }(t);
        } catch (e) {
          return r(t);
        }
      }

      function n(e) {
        this.message = e;
      }

      function o(e, r) {
        if ("string" != typeof e) throw new n("Invalid token specified");
        var o = !0 === (r = r || {}).header ? 0 : 1;

        try {
          return JSON.parse(t(e.split(".")[o]));
        } catch (e) {
          throw new n("Invalid token specified: " + e.message);
        }
      }

      n.prototype = new Error(), n.prototype.name = "InvalidTokenError";
      /* harmony default export */

      __webpack_exports__["default"] = o; //# sourceMappingURL=jwt-decode.esm.js.map

      /***/
    },

    /***/
    "EuzW":
    /*!*************************************************!*\
      !*** ./src/app/core/models/user-login.model.ts ***!
      \*************************************************/

    /*! exports provided: UserLogin */

    /***/
    function EuzW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserLogin", function () {
        return UserLogin;
      });

      var UserLogin = /*#__PURE__*/_createClass(function UserLogin() {
        _classCallCheck(this, UserLogin);
      });
      /***/

    },

    /***/
    "FTG2":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/pages/landing-page/landing-page.module.ts ***!
      \*******************************************************************/

    /*! exports provided: LandingPageModule */

    /***/
    function FTG2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPageModule", function () {
        return LandingPageModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./landing-page-routing.module */
      "QN+y");
      /* harmony import */


      var _landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./landing-page.component */
      "19Bg");
      /* harmony import */


      var _fragments_login_login_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../fragments/login/login.module */
      "rvFV");

      var LandingPageModule = /*@__PURE__*/function () {
        var LandingPageModule = /*#__PURE__*/_createClass(function LandingPageModule() {
          _classCallCheck(this, LandingPageModule);
        });

        LandingPageModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: LandingPageModule
        });
        LandingPageModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function LandingPageModule_Factory(t) {
            return new (t || LandingPageModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["LandingPageRoutingModule"], _fragments_login_login_module__WEBPACK_IMPORTED_MODULE_4__["LoginModule"]]]
        });
        return LandingPageModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](LandingPageModule, {
          declarations: [_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["LandingPageRoutingModule"], _fragments_login_login_module__WEBPACK_IMPORTED_MODULE_4__["LoginModule"]]
        });
      })();
      /***/

    },

    /***/
    "QN+y":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/pages/landing-page/landing-page-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: LandingPageRoutingModule */

    /***/
    function QNY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPageRoutingModule", function () {
        return LandingPageRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./landing-page.component */
      "19Bg");

      var routes = [{
        path: '',
        component: _landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"]
      }];

      var LandingPageRoutingModule = /*@__PURE__*/function () {
        var LandingPageRoutingModule = /*#__PURE__*/_createClass(function LandingPageRoutingModule() {
          _classCallCheck(this, LandingPageRoutingModule);
        });

        LandingPageRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: LandingPageRoutingModule
        });
        LandingPageRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function LandingPageRoutingModule_Factory(t) {
            return new (t || LandingPageRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return LandingPageRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](LandingPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "inYg":
    /*!************************************************************!*\
      !*** ./src/app/modules/fragments/login/login.component.ts ***!
      \************************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function inYg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @account */
      "pWX0");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @models */
      "sKXY");
      /* harmony import */


      var app_core_models_user_login_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/core/models/user-login.model */
      "EuzW");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! jwt-decode */
      "EjJx");
      /* harmony import */


      var _forgot_passowrd_forgot_passowrd_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./forgot-passowrd/forgot-passowrd.component */
      "5han");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @services */
      "dJ3e");
      /* harmony import */


      var app_core_services_authorization_token_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! app/core/services/authorization/token.service */
      "pPj3");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! angular-responsive-carousel */
      "0L5U");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var LoginComponent = /*@__PURE__*/function () {
        var LoginComponent = /*#__PURE__*/function () {
          function LoginComponent(router, dialog, apiService, dataStorage, tokenService, sweetAlertService, spinner) {
            var _this8 = this;

            _classCallCheck(this, LoginComponent);

            this.router = router;
            this.dialog = dialog;
            this.apiService = apiService;
            this.dataStorage = dataStorage;
            this.tokenService = tokenService;
            this.sweetAlertService = sweetAlertService;
            this.spinner = spinner;
            this.userProfile = new _models__WEBPACK_IMPORTED_MODULE_4__["UserAccount"]();
            this.company = new _models__WEBPACK_IMPORTED_MODULE_4__["Company"]();
            this.userLogin = new app_core_models_user_login_model__WEBPACK_IMPORTED_MODULE_5__["UserLogin"]();
            this.imageObject = []; // username: string;
            // password: string;

            this.hide = true;
            this.componentWidth = 0;
            this.loginImageList = [];
            this.image = [];
            this.barangay = '';
            this.cityMunicipality = '';
            this.province = '';
            this.region = '';
            this.fullAddress = '';

            this.getLoginImage = function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                var _this9 = this;

                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].loginImage).subscribe(function (res) {
                          var list = [];
                          res.responseData.data.forEach(function (tl) {
                            var obj = {
                              path: tl.fileURL
                            };

                            _this9.imageObject.push(obj);
                          });
                        });

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            };
          }

          _createClass(LoginComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getLoginImage();
              this.dataStorage.signOut();
            }
          }, {
            key: "login",
            value: function login() {
              var _this10 = this;

              if (this.userLogin.username && this.userLogin.password) {
                this.spinner.show();
                this.userLogin.username = this.userLogin.username.toLowerCase();
                this.apiService.save("".concat(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].authentication, "/login"), this.userLogin).subscribe(function (data) {
                  _this10.apiService.findByParam(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].userLogin, _this10.userLogin.username).subscribe(function (userDetails) {
                    var _a;

                    var responseData = (_a = data === null || data === void 0 ? void 0 : data.responseData) === null || _a === void 0 ? void 0 : _a.data;

                    _this10.tokenService.setUserLoginToken("".concat(responseData === null || responseData === void 0 ? void 0 : responseData.tokenType, " ").concat(responseData === null || responseData === void 0 ? void 0 : responseData.accessToken));

                    var decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_6__["default"])(responseData === null || responseData === void 0 ? void 0 : responseData.accessToken);

                    _this10.tokenService.setUserLoginData(decodedToken);

                    _this10.dataStorage.saveUserRole(userDetails.responseData.data.userRole.name);

                    _this10.dataStorage.saveUserAccount(userDetails.responseData.data);

                    _this10.dataStorage.saveUserFirstname(userDetails.responseData.data.firstName);

                    _this10.getUserProfile(userDetails.responseData.data.id);

                    _this10.router.navigateByUrl('/asc/page/announcement');

                    _this10.hideSpinner();
                  }, function (err) {
                    console.log(err);

                    _this10.sweetAlertService.error(err);

                    _this10.hideSpinner();
                  });
                }, function (err) {
                  if (err.error.message.includes('not verified')) {
                    err.error.message = 'Your account has not yet been verified. Please check your email.';

                    _this10.sweetAlertService.error(err);
                  } else if (err.error.message === 'Username or Password is incorrect') {
                    _this10.apiService.findAll(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].existsByUsername + _this10.userLogin.username).subscribe(function (res) {
                      if (res === false) {
                        err.error.message = 'User does not exist';

                        _this10.sweetAlertService.error(err);
                      } else {
                        err.error.message = 'Password is incorrect';

                        _this10.sweetAlertService.error(err);
                      }
                    });
                  } else if (err.statusText === 'Unknown Error') {
                    err.error.message = _shared__WEBPACK_IMPORTED_MODULE_3__["ERROR_MESSAGES"].under_maintenance;

                    _this10.sweetAlertService.error(err);
                  } else {
                    err.error.message = 'Password is incorrect';

                    _this10.sweetAlertService.error(err);
                  }

                  _this10.hideSpinner();
                }, function () {
                  _this10.hideSpinner();
                });
              } else if (!this.userLogin.username) {
                this.sweetAlertService.customErrorMessage('Please enter username.');
              } else if (!this.userLogin.password) {
                this.sweetAlertService.customErrorMessage('Please enter password.');
              }
            }
            /**
             * @author Julius Papa
             * @param evt Event from html field
             * @summary What will be triggered on press of "Enter" key.
             * @description If in "username" field, it will go to password field.
             * @description If in "password" field, it will trigger login function.
             */

          }, {
            key: "loginByField",
            value: function loginByField(evt) {
              if (evt.key) {
                if (evt.key.toLowerCase() === 'enter') {
                  switch (evt.target.id.toLowerCase()) {
                    case 'username':
                      document.getElementById('password').focus();
                      break;

                    case 'password':
                      this.login();
                      break;

                    default:
                      break;
                  }
                }
              }
            }
          }, {
            key: "openRegistrationModal",
            value: function openRegistrationModal() {
              // const dialogRef = this.dialog.open(UserRegistrationComponent, {
              //   width: '35%',
              //   height: '55%',
              //   data: {status: 'Register'}
              // });
              var dialogRef = this.dialog.open(_account__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationComponent"], {
                width: '80%',
                height: '95%',
                panelClass: 'custom-dialog',
                data: {
                  status: 'Register',
                  isRegister: true
                }
              });
              dialogRef.afterClosed().subscribe(function (result) {
                console.log('The dialog was closed');
              });
            }
          }, {
            key: "getUserProfile",
            value: function getUserProfile(accountId) {
              var _this11 = this;

              this.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].userAccount, accountId).subscribe(function (res) {
                _this11.userProfile = res.responseData.data;

                _this11.dataStorage.saveUserAccount(_this11.userProfile);

                _this11.apiService.findById(_shared__WEBPACK_IMPORTED_MODULE_3__["ENDPOINTS"].company, _this11.userProfile.company.id).subscribe(function (res1) {
                  _this11.company = res1.responseData.data;

                  _this11.dataStorage.saveUserCompany(_this11.company); // this.addressService.getBarangay(this.company.barangay.barangayId).subscribe(
                  //   (res: any) => {
                  //     this.barangay = res.responseData.data.barangayName;
                  //     this.cityMunicipality = res.responseData.data.cityMunicipalityDto.cityMunicipalityName;
                  //     this.province = res.responseData.data.cityMunicipalityDto.provinceDto.provinceName;
                  //     this.region = res.responseData.data.cityMunicipalityDto.provinceDto.regionDto.regionName;
                  //     this.fullAddress = `${this.barangay}, ${this.cityMunicipality}, ${this.province}, ${this.region}`;
                  //     this.dataStorage.saveUserAddress(this.fullAddress);
                  //   });

                });
              });
            }
          }, {
            key: "hideSpinner",
            value: function hideSpinner() {
              var _this12 = this;

              setTimeout(function () {
                _this12.spinner.hide();
              }, 1);
            }
          }, {
            key: "forgotPassword",
            value: function forgotPassword() {
              var dialogRef = this.dialog.open(_forgot_passowrd_forgot_passowrd_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPassowrdComponent"], {
                panelClass: 'custom-modalbox'
              });
            }
          }]);

          return LoginComponent;
        }();

        LoginComponent.??fac = function LoginComponent_Factory(t) {
          return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_10__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_10__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](app_core_services_authorization_token_service__WEBPACK_IMPORTED_MODULE_11__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services__WEBPACK_IMPORTED_MODULE_10__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerService"]));
        };

        LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
          type: LoginComponent,
          selectors: [["app-login"]],
          decls: 43,
          vars: 8,
          consts: [[1, "spinner"], ["bdColor", "rgba(0, 0, 0, 0.8)", "size", "large", "color", "#fff", "type", "line-spin-fade", 3, "fullScreen"], [1, "photo-slider"], [1, "slider"], ["cellWidth", "100%", "height", "100%", "objectFit", "cover", "loop", "true", "autoplay", "true", "autoplayInterval", "5000", "pauseOnHover", "true", "lightDOM", "true", "overflowCellsLimit", "5", "transitionDuration", "1500", "transitionTimingFunction", "ease", "counter", "true", "borderRadius", "10", 3, "images"], [2, "float", "right"], ["id", "login", 1, "mat-elevation-z8"], [1, "image-holder"], ["src", "../../../../assets/images/asc-logo.jpg", "alt", ""], [1, "form-field"], ["matInput", "", "placeholder", "Email Address", "id", "username", "name", "username", 3, "ngModel", "ngModelChange", "keyup"], ["matInput", "", "placeholder", "Password", "id", "password", "type", "password", "name", "password", 3, "type", "ngModel", "ngModelChange", "keyup"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "login-action"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", 1, "register__button", 3, "click"], [1, "forgot-password", 3, "click"]],
          template: function LoginComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "ngx-spinner", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, " Logging in... ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "carousel", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "i");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "*Hover to view image");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "mat-card", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "mat-card-header");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "mat-card-title");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](14, "img", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "mat-card-content");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "form");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "table");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "h1");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "b");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, " Login ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](25, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "mat-form-field", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "input", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_27_listener($event) {
                return ctx.userLogin.username = $event;
              })("keyup", function LoginComponent_Template_input_keyup_27_listener($event) {
                return ctx.loginByField($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "mat-form-field", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "input", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_31_listener($event) {
                return ctx.userLogin.password = $event;
              })("keyup", function LoginComponent_Template_input_keyup_31_listener($event) {
                return ctx.loginByField($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "button", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LoginComponent_Template_button_click_32_listener() {
                return ctx.hide = !ctx.hide;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "mat-icon");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "button", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LoginComponent_Template_button_click_36_listener() {
                return ctx.login();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, " Login ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "button", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LoginComponent_Template_button_click_38_listener() {
                return ctx.openRegistrationModal();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, " Register ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LoginComponent_Template_div_click_40_listener() {
                return ctx.forgotPassword();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "Forgot Password");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("fullScreen", true);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("images", ctx.imageObject);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](21);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.userLogin.username);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("type", ctx.hide ? "password" : "text")("ngModel", ctx.userLogin.password);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????attribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.hide ? "visibility_off" : "visibility");
            }
          },
          directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerComponent"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_13__["CarouselComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"]],
          styles: [".mat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  color: gray;\n  z-index: 9;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  height: 1em;\n  width: 1em;\n  font-size: 5em;\n}\n\n.photo-slider[_ngcontent-%COMP%] {\n  display: none;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  min-width: 27em;\n  max-width: 50vw;\n  position: fixed;\n  top: 45%;\n  right: 10%;\n  transform: translate(-10%, -40%);\n  overflow: auto;\n  border-radius: 10px;\n}\n\nmat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 10em;\n}\n\n.mat-card[_ngcontent-%COMP%]    > .mat-card-actions[_ngcontent-%COMP%]:last-child {\n  text-align: center;\n}\n\n.form-field[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\nform[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nhr[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.login-action[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.login-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 35%;\n  margin: 0 0.5em;\n}\n\n.login-action[_ngcontent-%COMP%]   .register__button[_ngcontent-%COMP%] {\n  box-shadow: none;\n  color: #1e88e5;\n  border: 1px solid #1e88e5;\n}\n\n.login-action[_ngcontent-%COMP%] {\n  max-height: 50vh !important;\n}\n\n.forgot-password[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n  color: gray;\n  margin: 10px 0px;\n}\n\n.forgot-password[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: black;\n  font-weight: 500;\n  transition: 1000ms;\n}\n\n  mat-tab-group .mat-tab-label {\n  min-width: 100px !important;\n}\n\n@media (min-width: 800px) {\n  mat-card[_ngcontent-%COMP%] {\n    right: 5%;\n  }\n\n  .photo-slider[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0.5em;\n    background-color: white;\n    height: 65%;\n    width: 40%;\n    position: fixed;\n    top: 43%;\n    left: 9%;\n    transform: translate(-10%, -40%);\n    overflow: hidden;\n    border-radius: 10px;\n    padding: 2em;\n  }\n  .photo-slider[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n  }\n  .photo-slider[_ngcontent-%COMP%]   .text-info[_ngcontent-%COMP%] {\n    height: 20%;\n    width: 100%;\n  }\n  .photo-slider[_ngcontent-%COMP%]   p.text-title[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 20px;\n  }\n}\n\n@media (min-width: 1000px) {\n  mat-card[_ngcontent-%COMP%] {\n    right: 3%;\n  }\n\n  .photo-slider[_ngcontent-%COMP%] {\n    height: 72%;\n    width: 50%;\n    left: 11%;\n  }\n}\n\n@media (min-width: 1300px) {\n  mat-card[_ngcontent-%COMP%] {\n    right: 3%;\n  }\n\n  .photo-slider[_ngcontent-%COMP%] {\n    height: 72%;\n    width: 60%;\n    left: 11%;\n  }\n}\n\n@media (min-width: 1700px) {\n  mat-card[_ngcontent-%COMP%] {\n    right: 4%;\n  }\n\n  .photo-slider[_ngcontent-%COMP%] {\n    height: 72%;\n    width: 65%;\n    left: 11%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mcmFnbWVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBRUEsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFDSTtFQUNJLFdBQUE7QUFDUjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0FBQUo7O0FBR0E7RUFDSSx3QkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtBQUFKOztBQUVJO0VBQ0ksa0JBQUE7QUFBUjs7QUFJQTtFQUNJLFlBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQURKOztBQUdJO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFEUjs7QUFJSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBRlI7O0FBTUE7RUFDSSwyQkFBQTtBQUhKOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFPSTtFQUNJLDJCQUFBO0FBSlI7O0FBY0E7RUFDSTtJQUNJLFNBQUE7RUFYTjs7RUFjRTtJQUNJLGNBQUE7SUFFQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGVBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUVBLGdDQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RUFaTjtFQWFNO0lBQ0ksWUFBQTtJQUNBLFdBQUE7RUFYVjtFQWNNO0lBQ0ksV0FBQTtJQUNBLFdBQUE7RUFaVjtFQWdCVTtJQUNJLGdCQUFBO0lBQ0EsZUFBQTtFQWRkO0FBQ0Y7O0FBbUJBO0VBQ0k7SUFDSSxTQUFBO0VBakJOOztFQW1CRTtJQUNJLFdBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtFQWhCTjtBQUNGOztBQW1CQTtFQUNJO0lBQ0ksU0FBQTtFQWpCTjs7RUFtQkU7SUFDSSxXQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7RUFoQk47QUFDRjs7QUFvQkE7RUFDSTtJQUNJLFNBQUE7RUFsQk47O0VBb0JFO0lBQ0ksV0FBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0VBakJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2ZyYWdtZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIHotaW5kZXg6IDk7XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICAgIGhlaWdodDogMWVtO1xyXG4gICAgd2lkdGg6IDFlbTtcclxuICAgIGZvbnQtc2l6ZTogNWVtO1xyXG59XHJcblxyXG5cclxuLnBob3RvLXNsaWRlcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICAgIG1pbi13aWR0aDogMjdlbTtcclxuICAgIG1heC13aWR0aDogNTB2dztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNDUlO1xyXG4gICAgcmlnaHQ6IDEwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwJSwgLTQwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAlLCAtNDAlKTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXQtY2FyZD4ubWF0LWNhcmQtYWN0aW9uczpsYXN0LWNoaWxkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDc1JTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmxvZ2luLWFjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAuNWVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZWdpc3Rlcl9fYnV0dG9uIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjMWU4OGU1O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxZTg4ZTU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sb2dpbi1hY3Rpb24ge1xyXG4gICAgbWF4LWhlaWdodDogNTB2aCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9yZ290LXBhc3N3b3Jke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG59XHJcblxyXG4uZm9yZ290LXBhc3N3b3JkOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRyYW5zaXRpb246IDEwMDBtcztcclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAgIG1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudC5yZW1lbWJlci1tZS1jaGVjay1ib3ggLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjkxO1xyXG4gICAgLy8gfVxyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6ODAwcHgpe1xyXG4gICAgbWF0LWNhcmQge1xyXG4gICAgICAgIHJpZ2h0OiA1JTtcclxuICAgIH1cclxuXHJcbiAgICAucGhvdG8tc2xpZGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIC8vIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW46IDAuNWVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGhlaWdodDogNjUlO1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogNDMlO1xyXG4gICAgICAgIGxlZnQ6IDklO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwJSwgLTQwJSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwJSwgLTQwJSk7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDJlbTtcclxuICAgICAgICAuc2xpZGVye1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHQtaW5mb3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgJi50ZXh0LXRpdGxle1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDoxMDAwcHgpe1xyXG4gICAgbWF0LWNhcmQge1xyXG4gICAgICAgIHJpZ2h0OiAzJTtcclxuICAgIH1cclxuICAgIC5waG90by1zbGlkZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiA3MiU7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBsZWZ0OiAxMSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6MTMwMHB4KXtcclxuICAgIG1hdC1jYXJkIHtcclxuICAgICAgICByaWdodDogMyU7XHJcbiAgICB9XHJcbiAgICAucGhvdG8tc2xpZGVye1xyXG4gICAgICAgIGhlaWdodDogNzIlO1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgbGVmdDogMTElO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDoxNzAwcHgpe1xyXG4gICAgbWF0LWNhcmQge1xyXG4gICAgICAgIHJpZ2h0OiA0JTtcclxuICAgIH1cclxuICAgIC5waG90by1zbGlkZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiA3MiU7XHJcbiAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICBsZWZ0OiAxMSU7XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
        });
        return LoginComponent;
      }();
      /***/

    },

    /***/
    "mrSG":
    /*!*****************************************!*\
      !*** ./node_modules/tslib/tslib.es6.js ***!
      \*****************************************/

    /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn */

    /***/
    function mrSG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__extends", function () {
        return __extends;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__assign", function () {
        return _assign;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__rest", function () {
        return __rest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__decorate", function () {
        return __decorate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__param", function () {
        return __param;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__metadata", function () {
        return __metadata;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
        return __awaiter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__generator", function () {
        return __generator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
        return __createBinding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
        return __exportStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__values", function () {
        return __values;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__read", function () {
        return __read;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spread", function () {
        return __spread;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
        return __spreadArrays;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spreadArray", function () {
        return __spreadArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__await", function () {
        return __await;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
        return __asyncGenerator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
        return __asyncDelegator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
        return __asyncValues;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
        return __makeTemplateObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importStar", function () {
        return __importStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
        return __importDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
        return __classPrivateFieldGet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
        return __classPrivateFieldSet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldIn", function () {
        return __classPrivateFieldIn;
      });
      /******************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      function __extends(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      var _assign = function __assign() {
        _assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return _assign.apply(this, arguments);
      };

      function __rest(s, e) {
        var t = {};

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        }

        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
      }

      function __decorate(decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }

      function __param(paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      }

      function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
      }

      function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }

      function __generator(thisArg, body) {
        var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
            f,
            y,
            t,
            g;
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
          return this;
        }), g;

        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }

        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");

          while (_) {
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];

              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;

                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };

                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;

                case 7:
                  op = _.ops.pop();

                  _.trys.pop();

                  continue;

                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }

                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }

                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }

                  if (t && _.label < t[2]) {
                    _.label = t[2];

                    _.ops.push(op);

                    break;
                  }

                  if (t[2]) _.ops.pop();

                  _.trys.pop();

                  continue;
              }

              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          }

          if (op[0] & 5) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      }

      var __createBinding = Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);

        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function get() {
              return m[k];
            }
          };
        }

        Object.defineProperty(o, k2, desc);
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      };

      function __exportStar(m, o) {
        for (var p in m) {
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
        }
      }

      function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
            r,
            ar = [],
            e;

        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
          }
        } catch (error) {
          e = {
            error: error
          };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }

        return ar;
      }
      /** @deprecated */


      function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) {
          ar = ar.concat(__read(arguments[i]));
        }

        return ar;
      }
      /** @deprecated */


      function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
          s += arguments[i].length;
        }

        for (var r = Array(s), k = 0, i = 0; i < il; i++) {
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
          }
        }

        return r;
      }

      function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
      }

      function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      }

      function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i;

        function verb(n) {
          if (g[n]) i[n] = function (v) {
            return new Promise(function (a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
        }

        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }

        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }

        function fulfill(value) {
          resume("next", value);
        }

        function reject(value) {
          resume("throw", value);
        }

        function settle(f, v) {
          if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
      }

      function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function () {
          return this;
        }, i;

        function verb(n, f) {
          i[n] = o[n] ? function (v) {
            return (p = !p) ? {
              value: __await(o[n](v)),
              done: n === "return"
            } : f ? f(v) : v;
          } : f;
        }
      }

      function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator],
            i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i);

        function verb(n) {
          i[n] = o[n] && function (v) {
            return new Promise(function (resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }

        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function (v) {
            resolve({
              value: v,
              done: d
            });
          }, reject);
        }
      }

      function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", {
            value: raw
          });
        } else {
          cooked.raw = raw;
        }

        return cooked;
      }

      ;

      var __setModuleDefault = Object.create ? function (o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function (o, v) {
        o["default"] = v;
      };

      function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) {
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }

        __setModuleDefault(result, mod);

        return result;
      }

      function __importDefault(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      }

      function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      }

      function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      }

      function __classPrivateFieldIn(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
      }
      /***/

    },

    /***/
    "nPqQ":
    /*!*****************************************************************!*\
      !*** ./src/app/modules/fragments/login/login-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: LoginRoutingModule */

    /***/
    function nPqQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function () {
        return LoginRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.component */
      "inYg");

      var routes = [{
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }];

      var LoginRoutingModule = /*@__PURE__*/function () {
        var LoginRoutingModule = /*#__PURE__*/_createClass(function LoginRoutingModule() {
          _classCallCheck(this, LoginRoutingModule);
        });

        LoginRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: LoginRoutingModule
        });
        LoginRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function LoginRoutingModule_Factory(t) {
            return new (t || LoginRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return LoginRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](LoginRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "pWX0":
    /*!************************************************!*\
      !*** ./src/app/modules/pages/account/index.ts ***!
      \************************************************/

    /*! exports provided: AccountModule, UserListComponent, UserListDialog, UserListModule, UserProfileComponent, UserProfileModule, UserRegistrationComponent, UserRegistrationModule, UserRoleComponent, UserRoleModule */

    /***/
    function pWX0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _account_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./account.module */
      "iUXy");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AccountModule", function () {
        return _account_module__WEBPACK_IMPORTED_MODULE_0__["AccountModule"];
      });
      /* harmony import */


      var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-list/user-list.component */
      "rynh");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserListComponent", function () {
        return _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_1__["UserListComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserListDialog", function () {
        return _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_1__["UserListDialog"];
      });
      /* harmony import */


      var _user_list_user_list_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-list/user-list.module */
      "YOJv");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserListModule", function () {
        return _user_list_user_list_module__WEBPACK_IMPORTED_MODULE_2__["UserListModule"];
      });
      /* harmony import */


      var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-profile/user-profile.component */
      "0TUH");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
        return _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"];
      });
      /* harmony import */


      var _user_profile_user_profile_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user-profile/user-profile.module */
      "kZWL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserProfileModule", function () {
        return _user_profile_user_profile_module__WEBPACK_IMPORTED_MODULE_4__["UserProfileModule"];
      });
      /* harmony import */


      var _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-registration/user-registration.component */
      "Jsen");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function () {
        return _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_5__["UserRegistrationComponent"];
      });
      /* harmony import */


      var _user_registration_user_registration_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-registration/user-registration.module */
      "LHvS");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserRegistrationModule", function () {
        return _user_registration_user_registration_module__WEBPACK_IMPORTED_MODULE_6__["UserRegistrationModule"];
      });
      /* harmony import */


      var _user_role_user_role_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./user-role/user-role.component */
      "Yv2Y");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserRoleComponent", function () {
        return _user_role_user_role_component__WEBPACK_IMPORTED_MODULE_7__["UserRoleComponent"];
      });
      /* harmony import */


      var _user_role_user_role_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./user-role/user-role.module */
      "Hfcq");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserRoleModule", function () {
        return _user_role_user_role_module__WEBPACK_IMPORTED_MODULE_8__["UserRoleModule"];
      });
      /***/

    },

    /***/
    "rvFV":
    /*!*********************************************************!*\
      !*** ./src/app/modules/fragments/login/login.module.ts ***!
      \*********************************************************/

    /*! exports provided: LoginModule */

    /***/
    function rvFV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
        return LoginModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login-routing.module */
      "nPqQ");
      /* harmony import */


      var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.component */
      "inYg");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared */
      "M0ag");
      /* harmony import */


      var _account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @account */
      "pWX0");
      /* harmony import */


      var _forgot_passowrd_forgot_passowrd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forgot-passowrd/forgot-passowrd.component */
      "5han");
      /* harmony import */


      var ng_image_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-image-slider */
      "yf9x");
      /* harmony import */


      var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-responsive-carousel */
      "0L5U");

      var LoginModule = /*@__PURE__*/function () {
        var LoginModule = /*#__PURE__*/_createClass(function LoginModule() {
          _classCallCheck(this, LoginModule);
        });

        LoginModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: LoginModule
        });
        LoginModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function LoginModule_Factory(t) {
            return new (t || LoginModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"], _account__WEBPACK_IMPORTED_MODULE_5__["UserRegistrationModule"], ng_image_slider__WEBPACK_IMPORTED_MODULE_7__["NgImageSliderModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_8__["IvyCarouselModule"]]]
        });
        return LoginModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](LoginModule, {
          declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _forgot_passowrd_forgot_passowrd_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPassowrdComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"], _account__WEBPACK_IMPORTED_MODULE_5__["UserRegistrationModule"], ng_image_slider__WEBPACK_IMPORTED_MODULE_7__["NgImageSliderModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_8__["IvyCarouselModule"]],
          exports: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
        });
      })();
      /***/

    },

    /***/
    "yf9x":
    /*!*******************************************************************************!*\
      !*** ./node_modules/ng-image-slider/__ivy_ngcc__/fesm2015/ng-image-slider.js ***!
      \*******************************************************************************/

    /*! exports provided: NgImageSliderComponent, NgImageSliderModule, NgImageSliderService, ??a, ??b */

    /***/
    function yf9x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgImageSliderComponent", function () {
        return NgImageSliderComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgImageSliderModule", function () {
        return NgImageSliderModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgImageSliderService", function () {
        return NgImageSliderService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??a", function () {
        return SliderCustomImageComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??b", function () {
        return SliderLightboxComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/ng-image-slider.service.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var _c0 = ["sliderMain"];
      var _c1 = ["imageDiv"];

      function NgImageSliderComponent_div_4_div_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var img_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dir", ctx_r11.textDirection);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](img_r8 == null ? null : img_r8.title);
        }
      }

      var _c2 = function _c2(a0, a1) {
        return {
          "image-popup": a0,
          "selected-image": a1
        };
      };

      var _c3 = function _c3(a0, a1, a2) {
        return {
          "width": a0,
          "margin-left": a1,
          "margin-right": a2
        };
      };

      function NgImageSliderComponent_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgImageSliderComponent_div_4_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r14);

            var img_r8 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r13.imageOnClick(img_r8.index);
          })("mouseenter", function NgImageSliderComponent_div_4_div_1_Template_div_mouseenter_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r14);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r15.stopSlideOnHover && ctx_r15.imageMouseEnterHandler();
          })("mouseleave", function NgImageSliderComponent_div_4_div_1_Template_div_mouseleave_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r14);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r16.stopSlideOnHover && ctx_r16.imageAutoSlide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "custom-img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, NgImageSliderComponent_div_4_div_1_div_3_Template, 2, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var img_r8 = ctx.$implicit;
          var i_r9 = ctx.index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](10, _c2, ctx_r7.imagePopup, ctx_r7.activeImageIndex == i_r9))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction3"](13, _c3, ctx_r7.sliderImageWidth + "px", ctx_r7.imageMargin + "px", ctx_r7.imageMargin + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("imageUrl", (img_r8 == null ? null : img_r8.thumbImage) || (img_r8 == null ? null : img_r8.posterImage) || (img_r8 == null ? null : img_r8.video))("isVideo", !!((img_r8 == null ? null : img_r8.posterImage) || (img_r8 == null ? null : img_r8.video)))("alt", (img_r8 == null ? null : img_r8.alt) || (img_r8 == null ? null : img_r8.title) || "")("title", (img_r8 == null ? null : img_r8.title) || (img_r8 == null ? null : img_r8.alt) || "")("direction", ctx_r7.textDirection)("ratio", ctx_r7.manageImageRatio)("lazy", ctx_r7.lazyLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", img_r8 == null ? null : img_r8.title);
        }
      }

      var _c4 = function _c4(a0) {
        return {
          "with-ng-main-pagination": a0
        };
      };

      var _c5 = function _c5(a0, a1, a2) {
        return {
          "margin-left": a0,
          "width": a1,
          "transition": a2
        };
      };

      function NgImageSliderComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("touchstart", function NgImageSliderComponent_div_4_Template_div_touchstart_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r17.swipe($event, "start");
          })("touchend", function NgImageSliderComponent_div_4_Template_div_touchend_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r19.swipe($event, "end");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NgImageSliderComponent_div_4_div_1_Template, 4, 17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](3, _c4, ctx_r1.paginationShow))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction3"](5, _c5, ctx_r1.leftPos + "px", ctx_r1.imageParentDivWidth + "px", ctx_r1.effectStyle));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.imageObj);
        }
      }

      function NgImageSliderComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c6 = function _c6(a0) {
        return {
          "disable": a0
        };
      };

      function NgImageSliderComponent_a_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgImageSliderComponent_a_6_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r20.prev();
          })("mouseenter", function NgImageSliderComponent_a_6_Template_a_mouseenter_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r22.stopSlideOnHover && ctx_r22.imageMouseEnterHandler();
          })("mouseleave", function NgImageSliderComponent_a_6_Template_a_mouseleave_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r23.stopSlideOnHover && ctx_r23.imageAutoSlide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u2039");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c6, ctx_r3.sliderPrevDisable));
        }
      }

      function NgImageSliderComponent_a_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgImageSliderComponent_a_7_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r24.next();
          })("mouseenter", function NgImageSliderComponent_a_7_Template_a_mouseenter_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r25);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r26.imageMouseEnterHandler();
          })("mouseleave", function NgImageSliderComponent_a_7_Template_a_mouseleave_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r25);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r27.imageAutoSlide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u203A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c6, ctx_r4.sliderNextDisable));
        }
      }

      function NgImageSliderComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx_r5.visiableImageIndex + 1, " of ", ctx_r5.totalImages, "");
        }
      }

      function NgImageSliderComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "slider-lightbox", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("prevImage", function NgImageSliderComponent_div_9_Template_slider_lightbox_prevImage_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r28.lightboxArrowClickHandler($event);
          })("nextImage", function NgImageSliderComponent_div_9_Template_slider_lightbox_nextImage_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r29);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r30.lightboxArrowClickHandler($event);
          })("close", function NgImageSliderComponent_div_9_Template_slider_lightbox_close_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r29);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r31.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("paginationShow", ctx_r6.paginationShow)("showVideoControls", ctx_r6.showVideoControls)("arrowKeyMove", ctx_r6.arrowKeyMove)("images", ctx_r6.ligthboxImageObj)("infinite", ctx_r6.infinite)("animationSpeed", ctx_r6.speed)("imageIndex", ctx_r6.activeImageIndex)("show", ctx_r6.ligthboxShow)("direction", ctx_r6.textDirection)("videoAutoPlay", ctx_r6.videoAutoPlay);
        }
      }

      var _c7 = function _c7(a0) {
        return {
          "height": a0
        };
      };

      var _c8 = function _c8(a0) {
        return {
          "ratio": a0
        };
      };

      function SliderCustomImageComponent_div_0_img_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("load", function SliderCustomImageComponent_div_0_img_1_Template_img_load_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r6.imageLoading = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c8, ctx_r1.ratio))("src", ctx_r1.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"])("alt", ctx_r1.alt)("title", ctx_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("loading", ctx_r1.lazy == true ? "lazy" : null);
        }
      }

      function SliderCustomImageComponent_div_0_iframe_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "iframe", 8);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r2.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeResourceUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("loading", ctx_r2.lazy == true ? "lazy" : null);
        }
      }

      function SliderCustomImageComponent_div_0_video_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "video", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SliderCustomImageComponent_div_0_video_3_Template_video_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r8.videoClickHandler($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "source", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Your browser does not support the video tag. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "video_" + ctx_r3.imageIndex)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c8, ctx_r3.ratio))("autoplay", ctx_r3.videoAutoPlay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("controls", ctx_r3.showVideoControls ? ctx_r3.showVideoControls : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r3.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function SliderCustomImageComponent_div_0_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Invalid file format");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dir", ctx_r4.direction);
        }
      }

      function SliderCustomImageComponent_div_0_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "span", 12);
        }
      }

      var _c9 = function _c9(a0) {
        return {
          "ng-fullimage-loading": a0
        };
      };

      function SliderCustomImageComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SliderCustomImageComponent_div_0_img_1_Template, 1, 7, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, SliderCustomImageComponent_div_0_iframe_2_Template, 1, 2, "iframe", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, SliderCustomImageComponent_div_0_video_3_Template, 3, 7, "video", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, SliderCustomImageComponent_div_0_div_4_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, SliderCustomImageComponent_div_0_span_5_Template, 1, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](6, _c9, ctx_r0.imageLoading));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.type === ctx_r0.IMAGE && ctx_r0.fileUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.type === ctx_r0.YOUTUBE && ctx_r0.fileUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.type === ctx_r0.VIDEO);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r0.fileUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.type === ctx_r0.YOUTUBE || ctx_r0.type === ctx_r0.VIDEO || ctx_r0.isVideo);
        }
      }

      var _c10 = ["lightboxDiv"];
      var _c11 = ["lightboxImageDiv"];

      function SliderLightboxComponent_div_0_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c12 = function _c12(a0) {
        return {
          "width": a0
        };
      };

      function SliderLightboxComponent_div_0_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("touchstart", function SliderLightboxComponent_div_0_div_7_Template_div_touchstart_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r10.swipeLightboxImg($event, "start");
          })("touchend", function SliderLightboxComponent_div_0_div_7_Template_div_touchend_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r12.swipeLightboxImg($event, "end");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "custom-img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var img_r7 = ctx.$implicit;
          var i_r8 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](13, _c12, ctx_r3.popupWidth + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("id", "ng-lightbox-image-" + i_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("imageUrl", (img_r7 == null ? null : img_r7.image) || (img_r7 == null ? null : img_r7.video))("isVideo", !!((img_r7 == null ? null : img_r7.posterImage) || (img_r7 == null ? null : img_r7.video)))("currentImageIndex", ctx_r3.currentImageIndex)("imageIndex", i_r8)("speed", ctx_r3.speed)("videoAutoPlay", ctx_r3.videoAutoPlay && i_r8 == ctx_r3.currentImageIndex)("showVideoControls", ctx_r3.showVideoControls ? 1 : 0)("alt", (img_r7 == null ? null : img_r7.alt) || (img_r7 == null ? null : img_r7.title) || "")("title", (img_r7 == null ? null : img_r7.title) || (img_r7 == null ? null : img_r7.alt) || "")("showVideo", true)("direction", ctx_r3.direction);
        }
      }

      function SliderLightboxComponent_div_0_a_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SliderLightboxComponent_div_0_a_10_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r13.prevImageLightbox();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u2039");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c6, ctx_r4.lightboxPrevDisable));
        }
      }

      function SliderLightboxComponent_div_0_a_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SliderLightboxComponent_div_0_a_11_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r15.nextImageLightbox();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u203A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](1, _c6, ctx_r5.lightboxNextDisable));
        }
      }

      function SliderLightboxComponent_div_0_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx_r6.currentImageIndex + 1, " of ", ctx_r6.totalImages, "");
        }
      }

      var _c13 = function _c13(a0, a1, a2) {
        return {
          "margin-left": a0,
          "grid-template-columns": a1,
          "transition": a2
        };
      };

      var _c14 = function _c14(a0, a1) {
        return {
          "show": a0,
          "hide": a1
        };
      };

      function SliderLightboxComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SliderLightboxComponent_div_0_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r17.closeLightbox();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, SliderLightboxComponent_div_0_div_5_Template, 2, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, SliderLightboxComponent_div_0_div_7_Template, 3, 15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, SliderLightboxComponent_div_0_a_10_Template, 2, 3, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, SliderLightboxComponent_div_0_a_11_Template, 2, 3, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, SliderLightboxComponent_div_0_div_12_Template, 2, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.showLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction3"](9, _c13, ctx_r0.marginLeft + "px", "repeat(" + ctx_r0.images.length + ",1fr)", ctx_r0.effectStyle));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.images);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dir", ctx_r0.direction)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](13, _c14, ctx_r0.title, !ctx_r0.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.images.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.images.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.paginationShow);
        }
      }

      var DESC = 'DESC';
      /** @type {?} */

      var ASC = 'ASC';

      var NgImageSliderService = /*@__PURE__*/function () {
        var NgImageSliderService = /*#__PURE__*/function () {
          function NgImageSliderService() {
            _classCallCheck(this, NgImageSliderService);
          }
          /**
           * @param {?} str
           * @return {?}
           */


          _createClass(NgImageSliderService, [{
            key: "isBase64",
            value: function isBase64(str) {
              /** @type {?} */
              var base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
              return base64regex.test(str);
            }
            /**
             * @param {?} str
             * @return {?}
             */

          }, {
            key: "base64FileExtension",
            value: function base64FileExtension(str) {
              return str.substring("data:image/".length, str.indexOf(";base64"));
            }
            /**
             * @param {?=} arr
             * @param {?=} orderType
             * @return {?}
             */

          }, {
            key: "orderArray",
            value: function orderArray() {
              var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              var orderType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ASC;

              if ((arr === null || arr === void 0 ? void 0 : arr.length) && orderType) {
                return arr.sort(
                /**
                * @param {?} ob1
                * @param {?} ob2
                * @return {?}
                */
                function (ob1, ob2) {
                  if (ob1['order'] === null || !ob1['order']) {
                    return 1;
                  } else if (ob2['order'] === null || !ob2['order']) {
                    return -1;
                  } else if (ob1['order'] > ob2['order']) {
                    if (orderType === DESC) {
                      return -1;
                    } else {
                      return 1;
                    }
                  } else if (ob1['order'] < ob2['order']) {
                    if (orderType === DESC) {
                      return 1;
                    } else {
                      return -1;
                    }
                  }
                });
              }

              return arr;
            }
          }]);

          return NgImageSliderService;
        }();

        NgImageSliderService.??fac = function NgImageSliderService_Factory(t) {
          return new (t || NgImageSliderService)();
        };

        NgImageSliderService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
          token: NgImageSliderService,
          factory: NgImageSliderService.??fac
        });
        return NgImageSliderService;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/ng-image-slider.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var NEXT_ARROW_CLICK_MESSAGE = 'next';
      /** @type {?} */

      var PREV_ARROW_CLICK_MESSAGE = 'previous';

      var NgImageSliderComponent = /*@__PURE__*/function () {
        var NgImageSliderComponent = /*#__PURE__*/function () {
          /**
           * @param {?} cdRef
           * @param {?} platformId
           * @param {?} imageSliderService
           * @param {?} elRef
           */
          function NgImageSliderComponent(cdRef, platformId, imageSliderService, elRef // @Inject(ElementRef) private _elementRef: ElementRef
          ) {
            _classCallCheck(this, NgImageSliderComponent);

            this.cdRef = cdRef;
            this.platformId = platformId;
            this.imageSliderService = imageSliderService;
            this.elRef = elRef; // for slider

            this.sliderMainDivWidth = 0;
            this.imageParentDivWidth = 0;
            this.imageObj = [];
            this.ligthboxImageObj = [];
            this.totalImages = 0;
            this.leftPos = 0;
            this.effectStyle = 'all 1s ease-in-out';
            this.speed = 1; // default speed in second
            // default speed in second

            this.sliderPrevDisable = false;
            this.sliderNextDisable = false;
            this.slideImageCount = 1;
            this.sliderImageWidth = 205;
            this.sliderImageReceivedWidth = 205;
            this.sliderImageHeight = 200;
            this.sliderImageReceivedHeight = 205;
            this.sliderImageSizeWithPadding = 211;
            this.autoSlideCount = 0;
            this.stopSlideOnHover = true;
            this.showArrowButton = true;
            this.textDirection = 'ltr';
            this.imageMargin = 3;
            this.sliderOrderType = 'ASC'; // for lightbox

            this.ligthboxShow = false;
            this.activeImageIndex = -1;
            this.visiableImageIndex = 0;
            this.infinite = false;
            this.imagePopup = true;
            this.images = [];
            this.videoAutoPlay = false;
            this.paginationShow = false;
            this.arrowKeyMove = true;
            this.manageImageRatio = false;
            this.showVideoControls = true;
            this.lazyLoading = false; // @Outputs

            this.imageClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.arrowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.lightboxArrowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.lightboxClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          } // @inputs

          /**
           * @param {?} data
           * @return {?}
           */


          _createClass(NgImageSliderComponent, [{
            key: "imageSize",
            set: function set(data) {
              if (data && typeof data === 'object') {
                if (data.hasOwnProperty('space') && typeof data['space'] === 'number' && data['space'] > -1) {
                  this.imageMargin = data['space'];
                }

                if (data.hasOwnProperty('width') && (typeof data['width'] === 'number' || typeof data['width'] === 'string')) {
                  this.sliderImageReceivedWidth = data['width']; // this.sliderImageSizeWithPadding = data['width'] + (this.imageMargin * 2); // addeing padding with image width
                }

                if (data.hasOwnProperty('height') && (typeof data['height'] === 'number' || typeof data['height'] === 'string')) {
                  this.sliderImageReceivedHeight = data['height'];
                }
              }
            }
            /**
             * @param {?} dir
             * @return {?}
             */

          }, {
            key: "direction",
            set: function set(dir) {
              if (dir) {
                this.textDirection = dir;
              }
            }
            /**
             * @param {?} data
             * @return {?}
             */

          }, {
            key: "animationSpeed",
            set: function set(data) {
              if (data && typeof data === 'number' && data >= 0.1 && data <= 5) {
                this.speed = data;
                this.effectStyle = "all ".concat(this.speed, "s ease-in-out");
              }
            }
            /**
             * @param {?} count
             * @return {?}
             */

          }, {
            key: "slideImage",
            set: function set(count) {
              if (count && typeof count === 'number') {
                this.slideImageCount = Math.round(count);
              }
            }
            /**
             * @param {?} count
             * @return {?}
             */

          }, {
            key: "autoSlide",
            set: function set(count) {
              if (count && (typeof count === 'number' || typeof count === 'boolean' || typeof count === 'object')) {
                if (typeof count === 'number' && count >= 1 && count <= 5) {
                  count = Math.round(count);
                } else if (typeof count === 'boolean') {
                  count = 1;
                } else if (typeof count === 'object' && count.hasOwnProperty('interval') && Math.round(count['interval']) && Math.round(count['interval']) >= 1 && Math.round(count['interval']) <= 5) {
                  this.stopSlideOnHover = count.hasOwnProperty('stopOnHover') ? count['stopOnHover'] : true;
                  count = Math.round(count['interval']);
                }

                this.autoSlideCount = count * 1000;
              }
            }
            /**
             * @param {?} flag
             * @return {?}
             */

          }, {
            key: "showArrow",
            set: function set(flag) {
              if (flag !== undefined && typeof flag === 'boolean') {
                this.showArrowButton = flag;
              }
            }
            /**
             * @param {?} data
             * @return {?}
             */

          }, {
            key: "orderType",
            set: function set(data) {
              if (data !== undefined && typeof data === 'string') {
                this.sliderOrderType = data.toUpperCase();
              }
            }
            /**
             * @param {?} activeIndex
             * @return {?}
             */

          }, {
            key: "defaultActiveImage",
            set: function set(activeIndex) {
              if (typeof activeIndex === 'number' && activeIndex > -1) {
                this.activeImageIndex = activeIndex;
              }
            }
            /**
             * @param {?} event
             * @return {?}
             */

          }, {
            key: "onResize",
            value: function onResize(event) {
              this.setSliderWidth();
            }
            /**
             * @param {?} event
             * @return {?}
             */

          }, {
            key: "handleKeyboardEvent",
            value: function handleKeyboardEvent(event) {
              if (event && event.key) {
                if (event.key.toLowerCase() === 'arrowright' && !this.ligthboxShow && this.arrowKeyMove) {
                  this.next();
                }

                if (event.key.toLowerCase() === 'arrowleft' && !this.ligthboxShow && this.arrowKeyMove) {
                  this.prev();
                }

                if (event.key.toLowerCase() === 'escape' && this.ligthboxShow) {
                  this.close();
                }
              }
            }
            /**
             * @return {?}
             */

          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              // @TODO: for future use
              // console.log(this._elementRef)
              // for slider
              if (this.infinite) {
                this.effectStyle = 'none';
                this.leftPos = -1 * this.sliderImageSizeWithPadding * this.slideImageCount;

                for (var i = 1; i <= this.slideImageCount; i++) {
                  this.imageObj.unshift(this.imageObj[this.imageObj.length - i]);
                }
              }
            } // for slider

            /**
             * @return {?}
             */

          }, {
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              this.setSliderWidth();
              this.cdRef.detectChanges();

              if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
                this.imageAutoSlide();
              }
            }
            /**
             * @return {?}
             */

          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              if (this.autoSlideInterval) {
                clearInterval(this.autoSlideInterval);
              }

              if (this.ligthboxShow === true) {
                this.close();
              }
            }
            /**
             * @param {?} changes
             * @return {?}
             */

          }, {
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              if (changes.images && changes.images.hasOwnProperty('previousValue') && changes.images.hasOwnProperty('currentValue') && changes.images.previousValue != changes.images.currentValue) {
                this.setSliderImages(changes.images.currentValue);
              }

              if (changes && changes.imageSize) {
                /** @type {?} */
                var size = changes.imageSize;

                if (size && size.previousValue && size.currentValue && size.previousValue.width && size.previousValue.height && size.currentValue.width && size.currentValue.height && (size.previousValue.width !== size.currentValue.width || size.previousValue.height !== size.currentValue.height)) {
                  this.setSliderWidth();
                }
              }
            }
            /**
             * @return {?}
             */

          }, {
            key: "ngDoCheck",
            value: function ngDoCheck() {
              if (this.images && this.ligthboxImageObj && this.images.length !== this.ligthboxImageObj.length) {
                this.setSliderImages(this.images);
              }
            }
            /**
             * @param {?} imgObj
             * @return {?}
             */

          }, {
            key: "setSliderImages",
            value: function setSliderImages(imgObj) {
              if (imgObj && imgObj instanceof Array && imgObj.length) {
                /** @type {?} */
                var sliderOrderEnable = imgObj.find(
                /**
                * @param {?} img
                * @return {?}
                */
                function (img) {
                  if (img.hasOwnProperty('order')) {
                    return true;
                  }
                });

                if (sliderOrderEnable) {
                  imgObj = this.imageSliderService.orderArray(imgObj, this.sliderOrderType.toUpperCase());
                }

                this.imageObj = imgObj.map(
                /**
                * @param {?} img
                * @param {?} index
                * @return {?}
                */
                function (img, index) {
                  img['index'] = index;
                  return img;
                });
                this.ligthboxImageObj = _toConsumableArray(this.imageObj);
                this.totalImages = this.imageObj.length; // this.imageParentDivWidth = imgObj.length * this.sliderImageSizeWithPadding;

                this.setSliderWidth();
              }
            }
            /**
             * @return {?}
             */

          }, {
            key: "setSliderWidth",
            value: function setSliderWidth() {
              if (this.sliderMain && this.sliderMain.nativeElement && this.sliderMain.nativeElement.offsetWidth) {
                this.sliderMainDivWidth = this.sliderMain.nativeElement.offsetWidth;
              }

              if (this.sliderMainDivWidth && this.sliderImageReceivedWidth) {
                if (typeof this.sliderImageReceivedWidth === 'number') {
                  this.sliderImageWidth = this.sliderImageReceivedWidth;
                } else if (typeof this.sliderImageReceivedWidth === 'string') {
                  if (this.sliderImageReceivedWidth.indexOf('px') >= 0) {
                    this.sliderImageWidth = parseFloat(this.sliderImageReceivedWidth);
                  } else if (this.sliderImageReceivedWidth.indexOf('%') >= 0) {
                    this.sliderImageWidth = +(this.sliderMainDivWidth * parseFloat(this.sliderImageReceivedWidth) / 100).toFixed(2);
                  } else if (parseFloat(this.sliderImageReceivedWidth)) {
                    this.sliderImageWidth = parseFloat(this.sliderImageReceivedWidth);
                  }
                }
              }

              if (window && window.innerHeight && this.sliderImageReceivedHeight) {
                if (typeof this.sliderImageReceivedHeight === 'number') {
                  this.sliderImageHeight = this.sliderImageReceivedHeight;
                } else if (typeof this.sliderImageReceivedHeight === 'string') {
                  if (this.sliderImageReceivedHeight.indexOf('px') >= 0) {
                    this.sliderImageHeight = parseFloat(this.sliderImageReceivedHeight);
                  } else if (this.sliderImageReceivedHeight.indexOf('%') >= 0) {
                    this.sliderImageHeight = +(window.innerHeight * parseFloat(this.sliderImageReceivedHeight) / 100).toFixed(2);
                  } else if (parseFloat(this.sliderImageReceivedHeight)) {
                    this.sliderImageHeight = parseFloat(this.sliderImageReceivedHeight);
                  }
                }
              }

              this.sliderImageSizeWithPadding = this.sliderImageWidth + this.imageMargin * 2;
              this.imageParentDivWidth = this.imageObj.length * this.sliderImageSizeWithPadding;

              if (this.imageDiv && this.imageDiv.nativeElement && this.imageDiv.nativeElement.offsetWidth) {
                this.leftPos = this.infinite ? -1 * this.sliderImageSizeWithPadding * this.slideImageCount : 0;
              }

              this.nextPrevSliderButtonDisable();
            }
            /**
             * @param {?} index
             * @return {?}
             */

          }, {
            key: "imageOnClick",
            value: function imageOnClick(index) {
              this.activeImageIndex = index;

              if (this.imagePopup) {
                this.showLightbox();
              }

              this.imageClick.emit(index);
            }
            /**
             * @return {?}
             */

          }, {
            key: "imageAutoSlide",
            value: function imageAutoSlide() {
              var _this13 = this;

              if (this.infinite && this.autoSlideCount && !this.ligthboxShow) {
                this.autoSlideInterval = setInterval(
                /**
                * @return {?}
                */
                function () {
                  _this13.next();
                }, this.autoSlideCount);
              }
            }
            /**
             * @return {?}
             */

          }, {
            key: "imageMouseEnterHandler",
            value: function imageMouseEnterHandler() {
              if (this.infinite && this.autoSlideCount && this.autoSlideInterval) {
                clearInterval(this.autoSlideInterval);
              }
            }
            /**
             * @return {?}
             */

          }, {
            key: "prev",
            value: function prev() {
              if (!this.sliderPrevDisable) {
                if (this.infinite) {
                  this.infinitePrevImg();
                } else {
                  this.prevImg();
                } //this.arrowClick.emit(PREV_ARROW_CLICK_MESSAGE);


                this.sliderArrowDisableTeam(PREV_ARROW_CLICK_MESSAGE);
                this.getVisiableIndex();
              }
            }
            /**
             * @return {?}
             */

          }, {
            key: "next",
            value: function next() {
              if (!this.sliderNextDisable) {
                if (this.infinite) {
                  this.infiniteNextImg();
                } else {
                  this.nextImg();
                } //this.arrowClick.emit(NEXT_ARROW_CLICK_MESSAGE);


                this.sliderArrowDisableTeam(NEXT_ARROW_CLICK_MESSAGE);
                this.getVisiableIndex();
              }
            }
            /**
             * @return {?}
             */

          }, {
            key: "prevImg",
            value: function prevImg() {
              if (0 >= this.leftPos + this.sliderImageSizeWithPadding * this.slideImageCount) {
                this.leftPos += this.sliderImageSizeWithPadding * this.slideImageCount;
              } else {
                this.leftPos = 0;
              }
            }
            /**
             * @return {?}
             */

          }, {
            key: "nextImg",
            value: function nextImg() {
              if (this.imageParentDivWidth + this.leftPos - this.sliderMainDivWidth > this.sliderImageSizeWithPadding * this.slideImageCount) {
                this.leftPos -= this.sliderImageSizeWithPadding * this.slideImageCount;
              } else if (this.imageParentDivWidth + this.leftPos - this.sliderMainDivWidth > 0) {
                this.leftPos -= this.imageParentDivWidth + this.leftPos - this.sliderMainDivWidth;
              }
            }
            /**
             * @return {?}
             */

          }, {
            key: "infinitePrevImg",
            value: function infinitePrevImg() {
              var _this14 = this;

              this.effectStyle = "all ".concat(this.speed, "s ease-in-out");
              this.leftPos = 0;
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this14.effectStyle = 'none';
                _this14.leftPos = -1 * _this14.sliderImageSizeWithPadding * _this14.slideImageCount;

                for (var i = 0; i < _this14.slideImageCount; i++) {
                  _this14.imageObj.unshift(_this14.imageObj[_this14.imageObj.length - _this14.slideImageCount - 1]);

                  _this14.imageObj.pop();
                }
              }, this.speed * 1000);
            }
            /**
             * @return {?}
             */

          }, {
            key: "infiniteNextImg",
            value: function infiniteNextImg() {
              var _this15 = this;

              this.effectStyle = "all ".concat(this.speed, "s ease-in-out");
              this.leftPos = -2 * this.sliderImageSizeWithPadding * this.slideImageCount;
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this15.effectStyle = 'none';

                for (var i = 0; i < _this15.slideImageCount; i++) {
                  _this15.imageObj.push(_this15.imageObj[_this15.slideImageCount]);

                  _this15.imageObj.shift();
                }

                _this15.leftPos = -1 * _this15.sliderImageSizeWithPadding * _this15.slideImageCount;
              }, this.speed * 1000);
            }
            /**
             * @return {?}
             */

          }, {
            key: "getVisiableIndex",
            value: function getVisiableIndex() {
              /** @type {?} */
              var currentIndex = Math.round((Math.abs(this.leftPos) + this.sliderImageWidth) / this.sliderImageWidth);

              if (this.imageObj[currentIndex - 1] && this.imageObj[currentIndex - 1]['index'] !== undefined) {
                this.visiableImageIndex = this.imageObj[currentIndex - 1]['index'];
              }
            }
            /**
             * Disable slider left/right arrow when image moving
             * @param {?} msg
             * @return {?}
             */

          }, {
            key: "sliderArrowDisableTeam",
            value: function sliderArrowDisableTeam(msg) {
              var _this16 = this;

              this.sliderNextDisable = true;
              this.sliderPrevDisable = true;
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this16.nextPrevSliderButtonDisable(msg);
              }, this.speed * 1000);
            }
            /**
             * @param {?=} msg
             * @return {?}
             */

          }, {
            key: "nextPrevSliderButtonDisable",
            value: function nextPrevSliderButtonDisable(msg) {
              this.sliderNextDisable = false;
              this.sliderPrevDisable = false;
              /** @type {?} */

              var actionMsg = {};

              if (!this.infinite) {
                if (this.imageParentDivWidth + this.leftPos <= this.sliderMainDivWidth) {
                  this.sliderNextDisable = true;
                }

                if (this.leftPos >= 0) {
                  this.sliderPrevDisable = true;
                }

                actionMsg['prevDisable'] = this.sliderPrevDisable;
                actionMsg['nextDisable'] = this.sliderNextDisable;
              }

              if (msg) {
                this.arrowClick.emit(Object.assign({
                  action: msg
                }, actionMsg));
              }
            } // for lightbox

            /**
             * @return {?}
             */

          }, {
            key: "showLightbox",
            value: function showLightbox() {
              if (this.imageObj.length) {
                this.imageMouseEnterHandler();
                this.ligthboxShow = true;
                this.elRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
              }
            }
            /**
             * @return {?}
             */

          }, {
            key: "close",
            value: function close() {
              this.ligthboxShow = false;
              this.elRef.nativeElement.ownerDocument.body.style.overflow = '';
              this.lightboxClose.emit();
              this.imageAutoSlide();
            }
            /**
             * @param {?} event
             * @return {?}
             */

          }, {
            key: "lightboxArrowClickHandler",
            value: function lightboxArrowClickHandler(event) {
              this.lightboxArrowClick.emit(event);
            }
            /**
             * Swipe event handler
             * Reference from https://stackoverflow.com/a/44511007/2067646
             * @param {?} e
             * @param {?} when
             * @return {?}
             */

          }, {
            key: "swipe",
            value: function swipe(e, when) {
              /** @type {?} */
              var coord = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
              /** @type {?} */

              var time = new Date().getTime();

              if (when === 'start') {
                this.swipeCoord = coord;
                this.swipeTime = time;
              } else if (when === 'end') {
                /** @type {?} */
                var direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
                /** @type {?} */

                var duration = time - this.swipeTime;

                if (duration < 1000 //
                && Math.abs(direction[0]) > 30 // Long enough
                && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) {
                  // Horizontal enough
                  if (direction[0] < 0) {
                    this.next();
                  } else {
                    this.prev();
                  }
                }
              }
            }
          }]);

          return NgImageSliderComponent;
        }();

        NgImageSliderComponent.??fac = function NgImageSliderComponent_Factory(t) {
          return new (t || NgImageSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](NgImageSliderService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
        };

        NgImageSliderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
          type: NgImageSliderComponent,
          selectors: [["ng-image-slider"]],
          viewQuery: function NgImageSliderComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c1, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.sliderMain = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.imageDiv = _t.first);
            }
          },
          hostBindings: function NgImageSliderComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("resize", function NgImageSliderComponent_resize_HostBindingHandler($event) {
                return ctx.onResize($event);
              }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveWindow"])("keyup", function NgImageSliderComponent_keyup_HostBindingHandler($event) {
                return ctx.handleKeyboardEvent($event);
              }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveDocument"]);
            }
          },
          inputs: {
            infinite: "infinite",
            imagePopup: "imagePopup",
            images: "images",
            videoAutoPlay: "videoAutoPlay",
            paginationShow: "paginationShow",
            arrowKeyMove: "arrowKeyMove",
            manageImageRatio: "manageImageRatio",
            showVideoControls: "showVideoControls",
            lazyLoading: "lazyLoading",
            imageSize: "imageSize",
            direction: "direction",
            animationSpeed: "animationSpeed",
            slideImage: "slideImage",
            autoSlide: "autoSlide",
            showArrow: "showArrow",
            orderType: "orderType",
            defaultActiveImage: "defaultActiveImage"
          },
          outputs: {
            imageClick: "imageClick",
            arrowClick: "arrowClick",
            lightboxArrowClick: "lightboxArrowClick",
            lightboxClose: "lightboxClose"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]],
          decls: 10,
          vars: 12,
          consts: [[1, "ng-image-slider", 3, "ngStyle"], [1, "ng-image-slider-container"], [1, "main", 3, "ngStyle"], ["sliderMain", ""], ["class", "main-inner", 3, "ngClass", "ngStyle", "touchstart", "touchend", 4, "ngIf"], ["class", "ng-image-slider-error", 4, "ngIf"], ["class", "prev icons prev-icon", 3, "ngClass", "click", "mouseenter", "mouseleave", 4, "ngIf"], ["class", "next icons next-icon", 3, "ngClass", "click", "mouseenter", "mouseleave", 4, "ngIf"], ["class", "ng-main-pagination", 4, "ngIf"], [4, "ngIf"], [1, "main-inner", 3, "ngClass", "ngStyle", "touchstart", "touchend"], ["class", "img-div", 3, "ngClass", "ngStyle", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "img-div", 3, "ngClass", "ngStyle", "click", "mouseenter", "mouseleave"], ["imageDiv", ""], [3, "imageUrl", "isVideo", "alt", "title", "direction", "ratio", "lazy"], ["class", "caption", 3, "dir", 4, "ngIf"], [1, "caption", 3, "dir"], [1, "ng-image-slider-error"], [1, "ng-image-slider-loader"], [1, "prev", "icons", "prev-icon", 3, "ngClass", "click", "mouseenter", "mouseleave"], [1, "next", "icons", "next-icon", 3, "ngClass", "click", "mouseenter", "mouseleave"], [1, "ng-main-pagination"], [3, "paginationShow", "showVideoControls", "arrowKeyMove", "images", "infinite", "animationSpeed", "imageIndex", "show", "direction", "videoAutoPlay", "prevImage", "nextImage", "close"]],
          template: function NgImageSliderComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2, 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, NgImageSliderComponent_div_4_Template, 2, 9, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, NgImageSliderComponent_div_5_Template, 2, 0, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, NgImageSliderComponent_a_6_Template, 2, 3, "a", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, NgImageSliderComponent_a_7_Template, 2, 3, "a", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, NgImageSliderComponent_div_8_Template, 2, 2, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, NgImageSliderComponent_div_9_Template, 2, 10, "div", 9);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c7, ctx.sliderImageHeight + "px"));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](10, _c7, ctx.sliderImageHeight + "px"));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.imageObj.length);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.imageObj.length);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showArrowButton && ctx.imageObj.length > 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showArrowButton && ctx.imageObj.length > 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.imageObj.length && ctx.paginationShow);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.ligthboxShow);
            }
          },
          directives: function directives() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], SliderCustomImageComponent, SliderLightboxComponent];
          },
          styles: [".ng-image-slider{display:inline-block;position:relative;width:100%}.ng-image-slider .ng-image-slider-container .main{overflow:hidden;position:absolute;height:200px;width:100%}.ng-image-slider .ng-image-slider-container .main .main-inner{width:1760px;padding:0;height:100%}.ng-image-slider .ng-image-slider-container .main .main-inner.with-ng-main-pagination{height:calc(100% - 30px)}.ng-image-slider .ng-image-slider-container .main .main-inner .full-screen{background:url(data:image/png;base64,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) 0 0/40px 40px no-repeat;position:absolute;z-index:8;display:block;height:40px;width:40px;top:4px;right:8px;opacity:.4;transition:.5s ease-in-out;cursor:pointer}.ng-image-slider .ng-image-slider-container .main .main-inner .img-div{width:205px;height:100%;margin-right:3px;margin-left:3px;position:relative;border-radius:5px;display:inline-block;box-shadow:inset 0 0 1px rgba(0,0,0,.24),0 0 2px rgba(0,0,0,.12)}.ng-image-slider .ng-image-slider-container .main .main-inner .img-div.image-popup{cursor:pointer}.ng-image-slider .ng-image-slider-container .main .main-inner .img-div img,.ng-image-slider .ng-image-slider-container .main .main-inner .img-div video{position:absolute;top:0;bottom:0;margin:auto;height:100%;width:100%;left:0;right:0;border-radius:5px}.ng-image-slider .ng-image-slider-container .main .main-inner .img-div img.ratio,.ng-image-slider .ng-image-slider-container .main .main-inner .img-div video.ratio{width:auto;height:auto;max-width:100%;max-height:100%}.ng-image-slider .ng-image-slider-container .main .main-inner .img-div .youtube-icon{background:url(data:image/png;base64,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) center center/140px 80px no-repeat;position:absolute;z-index:6;display:block;height:100%;width:100%;top:0;left:0}.ng-image-slider .ng-image-slider-container .main .main-inner .img-div .caption{position:absolute;bottom:0;padding:5px;color:#fff;background-image:linear-gradient(to right,rgba(0,0,0,.1),rgba(0,0,0,.25),rgba(0,0,0,.5),rgba(0,0,0,.25),rgba(0,0,0,.1));width:100%;text-align:center;box-sizing:border-box;border-radius:0 0 5px 5px}.ng-image-slider .ng-image-slider-container .main .main-inner:hover .full-screen{transition:.5s ease-in-out;opacity:1}.ng-image-slider .ng-image-slider-container .main .next,.ng-image-slider .ng-image-slider-container .main .prev{position:absolute;right:10px;top:50%;background-color:#fff;border-radius:50%;cursor:pointer;margin-top:-16px;outline:0;width:35px;height:35px;font-size:35px;line-height:30px;z-index:8;transition:.5s ease-in-out;text-align:center}.ng-image-slider .ng-image-slider-container .main .next:hover,.ng-image-slider .ng-image-slider-container .main .prev:hover{background-color:#d4cdcd;background-position:-192px -415px}.ng-image-slider .ng-image-slider-container .main .next.disable,.ng-image-slider .ng-image-slider-container .main .prev.disable{color:#bbb;background-color:#fff;opacity:.5;cursor:default}.ng-image-slider .ng-image-slider-container .main .prev{left:10px}.ng-image-slider .ng-image-slider-container .main .prev:hover{background-position:-194px -450px}.ng-image-slider .ng-image-slider-container .ng-main-pagination{background-color:inherit;color:inherit;position:absolute;height:30px;width:calc(100% - 6px);text-align:center;bottom:0;font-size:16px;line-height:30px;border-radius:0 0 5px 5px;margin:0 3px}.ng-image-slider .ng-image-slider-error{height:100%;position:relative;display:flex;justify-content:center;align-items:center}.ng-image-slider .ng-image-slider-error .ng-image-slider-loader{background-image:url(data:image/gif;base64,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);background-repeat:no-repeat;background-position:center center;background-size:25px 25px;width:25px;height:25px}@media (max-width:1199px){.ng-image-slider .ng-image-slider-container .main .main-inner .img-div{width:170px;max-width:100%}}@media (max-width:991px){.ng-image-slider .ng-image-slider-container .main .main-inner .img-div{width:297px;max-width:100%}}@media (max-width:768px){.ng-image-slider .ng-image-slider-container .main .main-inner .img-div{width:247px;max-width:100%}}@media (max-width:576px){.ng-image-slider .ng-image-slider-container .main .main-inner .img-div{width:350px;max-width:100%}}.ng-image-fullscreen-view{position:fixed;z-index:1031;background-color:rgba(0,0,0,.6);width:100%;height:100%;top:0;overflow:hidden;transition:.5s ease-in-out;left:0;text-align:center}.ng-image-fullscreen-view.image-fullview-hide{display:none!important}.ng-image-fullscreen-view .lightbox-wrapper{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#1f1f1f;transition:.5s;display:flex;justify-content:center;align-items:center}.ng-image-fullscreen-view .lightbox-wrapper.ng-ligthbox-pagination{height:calc(100% - 30px)}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div{width:100%;height:100%;border:1px solid rgba(0,0,0,.35);position:relative;overflow:hidden}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .pre-loader{background-color:inherit;width:100%;height:100%}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .pre-loader .mnml-spinner{background-image:url(data:image/gif;base64,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);background-repeat:no-repeat;background-position:center center;width:100%;height:100%}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main{display:grid;grid-template-columns:repeat(6,1fr);grid-template-rows:100%;grid-column-gap:0;height:100%}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image{width:1299px;height:100%;position:relative}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main.ng-fullimage-loading{background-image:url(data:image/gif;base64,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);background-repeat:no-repeat;background-position:center center}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image.ng-image-slider-show{opacity:1;display:block}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image.ng-image-slider-hide{opacity:0;display:none}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main{width:100%;height:100%}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main img{transition:.5s ease-in-out;width:auto;height:auto;max-height:100%;max-width:100%;position:absolute;z-index:11;top:0;bottom:0;margin:auto;left:0;right:0}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main iframe,.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main video{top:0;left:0;right:0;bottom:0;margin:auto;width:100%;height:100%;border:0}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .caption{position:absolute;z-index:11;top:0;margin:auto;padding:5px;color:#fff;background-color:rgba(0,0,0,.35);max-width:100%;left:0;right:0}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .caption.show{display:block}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .caption.hide{display:none}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .next,.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .prev{position:absolute;right:10px;top:50%;background-color:#fff;border-radius:50%;cursor:pointer;margin-top:-16px;width:38px;height:38px;font-size:35px;z-index:12;line-height:30px;outline:0;color:#000;transition:.3s ease-in-out}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .next:hover,.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .prev:hover{background-color:#d4cdcd}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .next.disable,.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .prev.disable{color:#bbb;background-color:#fff}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .prev{left:10px}.ng-image-fullscreen-view .lightbox-wrapper .close{background-image:url(data:image/png;base64,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);background-repeat:no-repeat;background-position:center center;background-size:32px;position:absolute;top:10px;right:10px;color:#000;background-color:#fff;padding:0;opacity:1;border-radius:50%;height:36px;width:36px;z-index:12;cursor:pointer;transition:.2s}.ng-image-fullscreen-view .lightbox-wrapper.error-msg{background-image:none}.ng-image-fullscreen-view .invalid-msg{color:#fff;font-size:18px;position:absolute;top:45%;left:45%}.ng-image-fullscreen-view .popup-pagination{background-color:#1f1f1f;color:#fff;position:absolute;height:30px;width:100%;text-align:center;bottom:0;font-size:16px;line-height:30px}@media (max-width:768px){.ng-image-fullscreen-view .lightbox-wrapper{width:100%;height:100%}.ng-image-fullscreen-view .lightbox-wrapper.error-msg{background-image:none}}"],
          encapsulation: 2
        });
        return NgImageSliderComponent;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/slider-custom-image/slider-custom-image.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var youtubeRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
      /** @type {?} */

      var validFileExtensions = ['jpeg', 'jpg', 'gif', 'png'];
      /** @type {?} */

      var validVideoExtensions = ['mp4'];

      var SliderCustomImageComponent = /*@__PURE__*/function () {
        var SliderCustomImageComponent = /*#__PURE__*/function () {
          /**
           * @param {?} imageSliderService
           * @param {?} sanitizer
           * @param {?} document
           */
          function SliderCustomImageComponent(imageSliderService, sanitizer, document) {
            _classCallCheck(this, SliderCustomImageComponent);

            this.imageSliderService = imageSliderService;
            this.sanitizer = sanitizer;
            this.YOUTUBE = 'youtube';
            this.IMAGE = 'image';
            this.VIDEO = 'video';
            this.fileUrl = '';
            this.fileExtension = '';
            this.type = this.IMAGE;
            this.imageLoading = true; // @inputs

            this.showVideo = false;
            this.videoAutoPlay = false;
            this.showVideoControls = 1;
            this.speed = 1;
            this.isVideo = false;
            this.alt = '';
            this.title = '';
            this.direction = 'ltr';
            this.ratio = false;
            this.lazy = false;
          }
          /**
           * @param {?} changes
           * @return {?}
           */


          _createClass(SliderCustomImageComponent, [{
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              if (this.imageUrl && this.imageUrl && this.imageUrl && typeof this.imageUrl === 'string' && (changes.imageUrl && changes.imageUrl.firstChange || this.videoAutoPlay)) {
                this.setUrl();
              }
            }
            /**
             * @return {?}
             */

          }, {
            key: "setUrl",
            value: function setUrl() {
              /** @type {?} */
              var url = this.imageUrl;
              this.imageLoading = true;
              this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
              this.fileExtension = url.split('.').pop().split(/\#|\?/)[0];

              if (this.imageSliderService.base64FileExtension(url) && (validFileExtensions.indexOf(this.imageSliderService.base64FileExtension(url).toLowerCase()) > -1 || validVideoExtensions.indexOf(this.imageSliderService.base64FileExtension(url).toLowerCase()) > -1)) {
                this.fileExtension = this.imageSliderService.base64FileExtension(url);
              } // verify for youtube url

              /** @type {?} */


              var match = url.match(youtubeRegExp);

              if (match && match[2].length === 11) {
                if (this.showVideo) {
                  this.type = this.YOUTUBE;
                  this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'.concat(match[2]).concat(this.videoAutoPlay ? '?autoplay=1&enablejsapi=1' : '?autoplay=0&enablejsapi=1', '&controls=').concat(this.showVideoControls));
                } else {
                  this.type = this.IMAGE;
                  this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://img.youtube.com/vi/".concat(match[2], "/0.jpg"));
                }
              } else if (this.fileExtension && validFileExtensions.indexOf(this.fileExtension.toLowerCase()) > -1) {
                this.type = this.IMAGE;
              } else if (this.fileExtension && validVideoExtensions.indexOf(this.fileExtension.toLowerCase()) > -1) {
                this.type = this.VIDEO;

                if (this.videoAutoPlay && document.getElementById("video_".concat(this.imageIndex))) {
                  /** @type {?} */
                  var videoObj = document.getElementById("video_".concat(this.imageIndex));
                  setTimeout(
                  /**
                  * @return {?}
                  */
                  function () {
                    videoObj.play();
                  }, this.speed * 1000);
                }
              }
            }
            /**
             * @param {?} event
             * @return {?}
             */

          }, {
            key: "videoClickHandler",
            value: function videoClickHandler(event) {
              if (event && event.srcElement && !this.showVideoControls) {
                if (event.srcElement.paused) {
                  event.srcElement.play();
                } else {
                  event.srcElement.pause();
                }
              }
            }
          }]);

          return SliderCustomImageComponent;
        }();

        SliderCustomImageComponent.??fac = function SliderCustomImageComponent_Factory(t) {
          return new (t || SliderCustomImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](NgImageSliderService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
        };

        SliderCustomImageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
          type: SliderCustomImageComponent,
          selectors: [["custom-img"]],
          inputs: {
            showVideo: "showVideo",
            videoAutoPlay: "videoAutoPlay",
            showVideoControls: "showVideoControls",
            speed: "speed",
            isVideo: "isVideo",
            alt: "alt",
            title: "title",
            direction: "direction",
            ratio: "ratio",
            lazy: "lazy",
            currentImageIndex: "currentImageIndex",
            imageIndex: "imageIndex",
            imageUrl: "imageUrl"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]],
          decls: 1,
          vars: 1,
          consts: [["class", "custom-image-main", 3, "ngClass", 4, "ngIf"], [1, "custom-image-main", 3, "ngClass"], ["class", "image", 3, "ngClass", "src", "alt", "title", "load", 4, "ngIf"], ["class", "youtube", "frameborder", "0", "allow", "autoplay", "allowfullscreen", "", 3, "src", 4, "ngIf"], ["class", "video", "type", "video/mp4", "controlsList", "nodownload", 3, "id", "ngClass", "autoplay", "click", 4, "ngIf"], ["class", "invalid-msg", 3, "dir", 4, "ngIf"], ["class", "youtube-icon", 4, "ngIf"], [1, "image", 3, "ngClass", "src", "alt", "title", "load"], ["frameborder", "0", "allow", "autoplay", "allowfullscreen", "", 1, "youtube", 3, "src"], ["type", "video/mp4", "controlsList", "nodownload", 1, "video", 3, "id", "ngClass", "autoplay", "click"], ["type", "video/mp4", 3, "src"], [1, "invalid-msg", 3, "dir"], [1, "youtube-icon"]],
          template: function SliderCustomImageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, SliderCustomImageComponent_div_0_Template, 6, 8, "div", 0);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.fileUrl);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
          encapsulation: 2
        });
        return SliderCustomImageComponent;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/slider-lightbox/slider-lightbox.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var LIGHTBOX_NEXT_ARROW_CLICK_MESSAGE = 'lightbox next';
      /** @type {?} */

      var LIGHTBOX_PREV_ARROW_CLICK_MESSAGE = 'lightbox previous';

      var SliderLightboxComponent = /*@__PURE__*/function () {
        var SliderLightboxComponent = /*#__PURE__*/function () {
          /**
           * @param {?} cdRef
           * @param {?} sanitizer
           * @param {?} elRef
           * @param {?} document
           */
          function SliderLightboxComponent(cdRef, sanitizer, elRef, document) {
            _classCallCheck(this, SliderLightboxComponent);

            this.cdRef = cdRef;
            this.sanitizer = sanitizer;
            this.elRef = elRef;
            this.document = document;
            this.totalImages = 0;
            this.nextImageIndex = -1;
            this.popupWidth = 1200;
            this.marginLeft = 0;
            this.imageFullscreenView = false;
            this.lightboxPrevDisable = false;
            this.lightboxNextDisable = false;
            this.showLoading = true;
            this.effectStyle = 'none';
            this.speed = 1; // default speed in second
            // default speed in second

            this.title = '';
            this.currentImageIndex = 0; // @Inputs

            this.images = [];
            this.videoAutoPlay = false;
            this.direction = 'ltr';
            this.paginationShow = false;
            this.infinite = false;
            this.arrowKeyMove = true;
            this.showVideoControls = true; // @Output

            this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.prevImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.nextImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          }
          /**
           * @param {?} index
           * @return {?}
           */


          _createClass(SliderLightboxComponent, [{
            key: "imageIndex",
            set: function set(index) {
              if (index !== undefined && index > -1 && index < this.images.length) {
                this.currentImageIndex = index;
              }

              this.nextPrevDisable();
            }
            /**
             * @param {?} visiableFlag
             * @return {?}
             */

          }, {
            key: "show",
            set: function set(visiableFlag) {
              this.imageFullscreenView = visiableFlag;
              this.elRef.nativeElement.ownerDocument.body.style.overflow = '';

              if (visiableFlag === true) {
                this.elRef.nativeElement.ownerDocument.body.style.overflow = 'hidden'; // this.getImageData();

                this.setPopupSliderWidth();
              }
            }
            /**
             * @param {?} data
             * @return {?}
             */

          }, {
            key: "animationSpeed",
            set: function set(data) {
              if (data && typeof data === 'number' && data >= 0.1 && data <= 5) {
                this.speed = data;
              }
            }
            /**
             * @param {?} event
             * @return {?}
             */

          }, {
            key: "onResize",
            value: function onResize(event) {
              this.effectStyle = 'none';
              this.setPopupSliderWidth();
            }
            /**
             * @param {?} event
             * @return {?}
             */

          }, {
            key: "handleKeyboardEvent",
            value: function handleKeyboardEvent(event) {
              if (event && event.key && this.arrowKeyMove) {
                if (event.key.toLowerCase() === 'arrowright') {
                  this.nextImageLightbox();
                }

                if (event.key.toLowerCase() === 'arrowleft') {
                  this.prevImageLightbox();
                }

                if (event.key.toLowerCase() === 'escape') {
                  this.closeLightbox();
                }
              }
            }
            /**
             * @return {?}
             */

          }, {
            key: "ngOnInit",
            value: function ngOnInit() {}
            /**
             * @return {?}
             */

          }, {
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {}
            /**
             * @return {?}
             */

          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.resetState();
            }
            /**
             * @return {?}
             */

          }, {
            key: "setPopupSliderWidth",
            value: function setPopupSliderWidth() {
              var _this17 = this;

              if (window && window.innerWidth) {
                this.popupWidth = window.innerWidth;
                this.totalImages = this.images.length;

                if (typeof this.currentImageIndex === 'number' && this.currentImageIndex !== undefined) {
                  this.marginLeft = -1 * this.popupWidth * this.currentImageIndex;
                  this.getImageData();
                  this.nextPrevDisable();
                  setTimeout(
                  /**
                  * @return {?}
                  */
                  function () {
                    _this17.showLoading = false;
                  }, 500);
                }
              }
            }
            /**
             * @return {?}
             */

          }, {
            key: "closeLightbox",
            value: function closeLightbox() {
              this.close.emit();
            }
            /**
             * @return {?}
             */

          }, {
            key: "prevImageLightbox",
            value: function prevImageLightbox() {
              this.effectStyle = "all ".concat(this.speed, "s ease-in-out");

              if (this.currentImageIndex > 0 && !this.lightboxPrevDisable) {
                this.currentImageIndex--;
                this.prevImage.emit(LIGHTBOX_PREV_ARROW_CLICK_MESSAGE);
                this.marginLeft = -1 * this.popupWidth * this.currentImageIndex;
                this.getImageData();
                this.nextPrevDisable();
              }
            }
            /**
             * @return {?}
             */

          }, {
            key: "nextImageLightbox",
            value: function nextImageLightbox() {
              this.effectStyle = "all ".concat(this.speed, "s ease-in-out");

              if (this.currentImageIndex < this.images.length - 1 && !this.lightboxNextDisable) {
                this.currentImageIndex++;
                this.nextImage.emit(LIGHTBOX_NEXT_ARROW_CLICK_MESSAGE);
                this.marginLeft = -1 * this.popupWidth * this.currentImageIndex;
                this.getImageData();
                this.nextPrevDisable();
              }
            }
            /**
             * @return {?}
             */

          }, {
            key: "nextPrevDisable",
            value: function nextPrevDisable() {
              var _this18 = this;

              this.lightboxNextDisable = true;
              this.lightboxPrevDisable = true;
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this18.applyButtonDisableCondition();
              }, this.speed * 1000);
            }
            /**
             * @return {?}
             */

          }, {
            key: "applyButtonDisableCondition",
            value: function applyButtonDisableCondition() {
              this.lightboxNextDisable = false;
              this.lightboxPrevDisable = false;

              if (!this.infinite && this.currentImageIndex >= this.images.length - 1) {
                this.lightboxNextDisable = true;
              }

              if (!this.infinite && this.currentImageIndex <= 0) {
                this.lightboxPrevDisable = true;
              }
            }
            /**
             * @return {?}
             */

          }, {
            key: "getImageData",
            value: function getImageData() {
              if (this.images && this.images.length && typeof this.currentImageIndex === 'number' && this.currentImageIndex !== undefined && this.images[this.currentImageIndex] && (this.images[this.currentImageIndex]['image'] || this.images[this.currentImageIndex]['video'])) {
                this.title = this.images[this.currentImageIndex]['title'] || '';
                this.totalImages = this.images.length;

                for (var iframeI in this.document.getElementsByTagName('iframe')) {
                  if (this.document.getElementsByTagName('iframe')[iframeI] && this.document.getElementsByTagName('iframe')[iframeI].contentWindow && this.document.getElementsByTagName('iframe')[iframeI].contentWindow.postMessage) {
                    this.document.getElementsByTagName('iframe')[iframeI].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                  }
                }

                for (var videoI in this.document.getElementsByTagName('video')) {
                  if (this.document.getElementsByTagName('video')[videoI] && this.document.getElementsByTagName('video')[videoI].pause) {
                    this.document.getElementsByTagName('video')[videoI].pause();
                  }
                }
              }
            }
            /**
             * @return {?}
             */

          }, {
            key: "resetState",
            value: function resetState() {
              this.images = [];
            }
            /**
             * Swipe event handler
             * Reference from https://stackoverflow.com/a/44511007/2067646
             * @param {?} e
             * @param {?} when
             * @return {?}
             */

          }, {
            key: "swipeLightboxImg",
            value: function swipeLightboxImg(e, when) {
              /** @type {?} */
              var coord = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
              /** @type {?} */

              var time = new Date().getTime();

              if (when === 'start') {
                this.swipeLightboxImgCoord = coord;
                this.swipeLightboxImgTime = time;
              } else if (when === 'end') {
                /** @type {?} */
                var direction = [coord[0] - this.swipeLightboxImgCoord[0], coord[1] - this.swipeLightboxImgCoord[1]];
                /** @type {?} */

                var duration = time - this.swipeLightboxImgTime;

                if (duration < 1000 //
                && Math.abs(direction[0]) > 30 // Long enough
                && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) {
                  // Horizontal enough
                  if (direction[0] < 0) {
                    this.nextImageLightbox();
                  } else {
                    this.prevImageLightbox();
                  }
                }
              }
            }
          }]);

          return SliderLightboxComponent;
        }();

        SliderLightboxComponent.??fac = function SliderLightboxComponent_Factory(t) {
          return new (t || SliderLightboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
        };

        SliderLightboxComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
          type: SliderLightboxComponent,
          selectors: [["slider-lightbox"]],
          viewQuery: function SliderLightboxComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c10, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c11, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.lightboxDiv = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.lightboxImageDiv = _t.first);
            }
          },
          hostBindings: function SliderLightboxComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("resize", function SliderLightboxComponent_resize_HostBindingHandler($event) {
                return ctx.onResize($event);
              }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveWindow"])("keyup", function SliderLightboxComponent_keyup_HostBindingHandler($event) {
                return ctx.handleKeyboardEvent($event);
              }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveDocument"]);
            }
          },
          inputs: {
            images: "images",
            videoAutoPlay: "videoAutoPlay",
            direction: "direction",
            paginationShow: "paginationShow",
            infinite: "infinite",
            arrowKeyMove: "arrowKeyMove",
            showVideoControls: "showVideoControls",
            imageIndex: "imageIndex",
            show: "show",
            animationSpeed: "animationSpeed"
          },
          outputs: {
            close: "close",
            prevImage: "prevImage",
            nextImage: "nextImage"
          },
          decls: 1,
          vars: 1,
          consts: [["class", "ng-image-fullscreen-view", 4, "ngIf"], [1, "ng-image-fullscreen-view"], [1, "lightbox-wrapper"], [1, "close", 3, "click"], [1, "lightbox-div"], ["lightboxDiv", ""], ["class", "pre-loader", 4, "ngIf"], [1, "lightbox-image-main", 3, "ngStyle"], ["class", "lightbox-image", 3, "ngStyle", "touchstart", "touchend", 4, "ngFor", "ngForOf"], [1, "caption", 3, "dir", "ngClass"], ["class", "prev icons prev-icon", 3, "ngClass", "click", 4, "ngIf"], ["class", "next icons next-icon", 3, "ngClass", "click", 4, "ngIf"], ["class", "popup-pagination", 4, "ngIf"], [1, "pre-loader"], [1, "mnml-spinner"], [1, "lightbox-image", 3, "ngStyle", "touchstart", "touchend"], ["lightboxImageDiv", ""], [3, "imageUrl", "isVideo", "currentImageIndex", "imageIndex", "speed", "videoAutoPlay", "showVideoControls", "alt", "title", "showVideo", "direction"], [1, "prev", "icons", "prev-icon", 3, "ngClass", "click"], [1, "next", "icons", "next-icon", 3, "ngClass", "click"], [1, "popup-pagination"]],
          template: function SliderLightboxComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, SliderLightboxComponent_div_0_Template, 13, 16, "div", 0);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.imageFullscreenView);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], SliderCustomImageComponent],
          encapsulation: 2
        });
        return SliderLightboxComponent;
      }();

      if (false) {}

      var NgImageSliderModule = /*@__PURE__*/function () {
        var NgImageSliderModule = /*#__PURE__*/_createClass(function NgImageSliderModule() {
          _classCallCheck(this, NgImageSliderModule);
        });

        NgImageSliderModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
          type: NgImageSliderModule
        });
        NgImageSliderModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
          factory: function NgImageSliderModule_Factory(t) {
            return new (t || NgImageSliderModule)();
          },
          providers: [NgImageSliderService],
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
        });
        return NgImageSliderModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](NgImageSliderModule, {
          declarations: function declarations() {
            return [NgImageSliderComponent, SliderCustomImageComponent, SliderLightboxComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [NgImageSliderComponent];
          }
        });
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: public_api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: ng-image-slider.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-pages-landing-page-landing-page-module-es5.js.map