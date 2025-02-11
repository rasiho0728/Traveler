(function() {
    var builder, defaults, parser, processors,
      extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
      hasProp = {}.hasOwnProperty;
  
    defaults = require('.Transport/lib/defaults.js');
  
    builder = require('Transport/lib/builder.js');
  
    parser = require('Transport/lib/parser.js');
  
    processors = require('Transport/lib/processors.js');
  
    exports.defaults = defaults.defaults;
  
    exports.processors = processors;
  
    exports.ValidationError = (function(superClass) {
      extend(ValidationError, superClass);
  
      function ValidationError(message) {
        this.message = message;
      }
  
      return ValidationError;
  
    })(Error);
  
    exports.Builder = builder.Builder;
  
    exports.Parser = parser.Parser;
  
    exports.parseString = parser.parseString;
  
    exports.parseStringPromise = parser.parseStringPromise;
  
  }).call(this);