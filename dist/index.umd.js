!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e||self).loggerServiceTs={})}(this,function(e){e.Logger=/*#__PURE__*/function(){function e(e){var t=this;this.strategies=[],this.callFields=function(e,i,s){t.strategies.forEach(function(t){t[e](i,s)})},this.log=function(e,i){t.callFields("log",e,i)},this.error=function(e,i){t.callFields("error",e,i)},this.strategies=e}return e.prototype.success=function(e,t){this.callFields("success",e,t)},e}()});
//# sourceMappingURL=index.umd.js.map