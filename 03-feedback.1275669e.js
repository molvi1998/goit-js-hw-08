!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){return i.default(e)||f.default(e,t)||l.default(e,t)||a.default()};var i=c(o("8slrw")),f=c(o("7AJDX")),a=c(o("ifqQW")),l=c(o("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var d="Expected a function",p=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,y=parseInt,g="object"==typeof t&&t&&t.Object===Object&&t,O="object"==typeof self&&self&&self.Object===Object&&self,_=g||O||Function("return this")(),j=Object.prototype.toString,x=Math.max,S=Math.min,h=function(){return _.Date.now()};function w(e,t,r){var n,o,u,i,f,a,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError(d);function v(t){var r=n,u=o;return n=o=void 0,l=t,i=e.apply(u,r)}function m(e){return l=e,f=setTimeout(y,t),c?v(e):i}function b(e){var r=e-a;return void 0===a||r>=t||r<0||s&&e-l>=u}function y(){var e=h();if(b(e))return g(e);f=setTimeout(y,function(e){var r=t-(e-a);return s?S(r,u-(e-l)):r}(e))}function g(e){return f=void 0,p&&n?v(e):(n=o=void 0,i)}function O(){var e=h(),r=b(e);if(n=arguments,o=this,a=e,r){if(void 0===f)return m(a);if(s)return f=setTimeout(y,t),v(a)}return void 0===f&&(f=setTimeout(y,t)),i}return t=N(t)||0,M(r)&&(c=!!r.leading,u=(s="maxWait"in r)?x(N(r.maxWait)||0,t):u,p="trailing"in r?!!r.trailing:p),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,n=a=o=f=void 0},O.flush=function(){return void 0===f?i:g(h())},O}function M(t){var r=void 0===t?"undefined":e(s)(t);return!!t&&("object"==r||"function"==r)}function N(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(s)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==j.call(t)}(t))return NaN;if(M(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=M(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(p,"");var n=m.test(t);return n||b.test(t)?y(t.slice(2),n?2:8):v.test(t)?NaN:+t}var I={form:document.querySelector(".feedback-form")};!function(){var t=localStorage.getItem("feedback-form-state");if(!t)return;t&&(t=JSON.parse(t));Object.entries(t).forEach((function(t){var r=e(u)(t,2),n=r[0],o=r[1];I.form.elements[n].value=o}))}(),I.form.addEventListener("submit",(function(e){localStorage.removeItem("feedback-form-state")})),I.form.addEventListener("input",(function(e){e.preventDefault();var t=localStorage.getItem("feedback-form-state");(t=t?JSON.parse(t):{})[e.target.name]=e.target.value,t&&localStorage.setItem("feedback-form-state",JSON.stringify(t));console.log(t)}))}();
//# sourceMappingURL=03-feedback.1275669e.js.map