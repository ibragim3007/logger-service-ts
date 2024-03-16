exports.Logger=/*#__PURE__*/function(){function s(s){var t=this;this.strategies=[],this.callFields=function(s,i,e){t.strategies.forEach(function(t){t[s](i,e)})},this.log=function(s,i){t.callFields("log",s,i)},this.error=function(s,i){t.callFields("error",s,i)},this.strategies=s}return s.prototype.success=function(s,t){this.callFields("success",s,t)},s}();
//# sourceMappingURL=index.cjs.map
