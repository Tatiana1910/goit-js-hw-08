function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,g=function(){return c.Date.now()};function p(e,t,n){var i,r,o,a,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,u=setTimeout(S,t),c?b(e):a}function O(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function S(){var e=g();if(O(e))return T(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?v(n,o-(e-l)):n}(e))}function T(e){return u=void 0,p&&i?b(e):(i=r=void 0,a)}function h(){var e=g(),n=O(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(S,t),b(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=y(t)||0,m(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(y(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=r=u=void 0},h.flush=function(){return void 0===u?a:T(g())},h}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return m(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form");b.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.dir(JSON.parse(localStorage.getItem("selectedFilters"))),localStorage.removeItem("selectedFilters")})),b.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,localStorage.setItem("selectedFilters",JSON.stringify(j))}),500));let j={};!function(){const e=JSON.parse(localStorage.getItem("selectedFilters"));e&&(b.email.value=e.email,b.message.value=e.message)}();
//# sourceMappingURL=03-feedback.34692711.js.map
