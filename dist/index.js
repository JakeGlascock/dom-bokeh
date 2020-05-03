"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createDepth = function () {
    var HTMLCollection = document.querySelectorAll('*');
    var array = Array.from(HTMLCollection);
    array.forEach(function (el) { el.style.filter = "blur(5px)"; });
};
exports.default = {
    createDepth: createDepth
};
//# sourceMappingURL=index.js.map