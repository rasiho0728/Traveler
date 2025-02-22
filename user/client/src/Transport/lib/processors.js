// Generated by CoffeeScript 1.12.7
// 2025.0211. 오후12시 추가: 최의진,

(function() {
    var prefixMatch;
  
    prefixMatch = new RegExp(/(?!xmlns)^.*:/);
  
    exports.normalize = function(str) {
      return str.toLowerCase();
    };
  
    exports.firstCharLowerCase = function(str) {
      return str.charAt(0).toLowerCase() + str.slice(1);
    };
  
    exports.stripPrefix = function(str) {
      return str.replace(prefixMatch, '');
    };
  
    exports.parseNumbers = function(str) {
      if (!isNaN(str)) {
        str = str % 1 === 0 ? parseInt(str, 10) : parseFloat(str);
      }
      return str;
    };
  
    exports.parseBooleans = function(str) {
      if (/^(?:true|false)$/i.test(str)) {
        str = str.toLowerCase() === 'true';
      }
      return str;
    };
  
  }).call(this);