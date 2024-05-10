"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/send";
exports.ids = ["pages/api/send"];
exports.modules = {

/***/ "resend":
/*!*************************!*\
  !*** external "resend" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("resend");

/***/ }),

/***/ "(api)/./pages/api/send.js":
/*!***************************!*\
  !*** ./pages/api/send.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resend */ \"resend\");\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(resend__WEBPACK_IMPORTED_MODULE_0__);\n\n// initiate the resend instance\nconst resend = new resend__WEBPACK_IMPORTED_MODULE_0__.Resend(process.env.RESEND_API_KEY);\nconst timer = (time)=>{\n    return new Promise((res)=>{\n        setTimeout(()=>res(true), time);\n    });\n};\nasync function handler(req, res) {\n    const { subject , email , tasks  } = req.body;\n    if (!subject || !tasks || !email) {\n        res.status(400).json({\n            invalid: true\n        });\n    }\n    for (const task of tasks){\n        await resend.emails.send({\n            from: \"onboarding@resend.dev\",\n            to: [\n                email\n            ],\n            subject,\n            text: task.data.value\n        });\n        // Wait 10 minutes\n        await timer(600000);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsK0JBQStCO0FBQy9CLE1BQU1DLFNBQVMsSUFBSUQsMENBQU1BLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUVwRCxNQUFNQyxRQUFRLENBQUNDLE9BQVM7SUFDdkIsT0FBTyxJQUFJQyxRQUFRLENBQUNDLE1BQVE7UUFDM0JDLFdBQVcsSUFBTUQsSUFBSSxJQUFJLEdBQUdGO0lBQzdCO0FBQ0Q7QUFFZSxlQUFlSSxRQUFRQyxHQUFHLEVBQUVILEdBQUcsRUFBRTtJQUMvQyxNQUFNLEVBQUVJLFFBQU8sRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUUsR0FBR0gsSUFBSUksSUFBSTtJQUMxQyxJQUFJLENBQUNILFdBQVcsQ0FBQ0UsU0FBUyxDQUFDRCxPQUFPO1FBQ2pDTCxJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVMsSUFBSTtRQUFDO0lBQ3RDLENBQUM7SUFFRCxLQUFLLE1BQU1DLFFBQVFMLE1BQU87UUFDekIsTUFBTWIsT0FBT21CLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO1lBQ3hCQyxNQUFNO1lBQ05DLElBQUk7Z0JBQUNWO2FBQU07WUFDWEQ7WUFDQVksTUFBTUwsS0FBS00sSUFBSSxDQUFDQyxLQUFLO1FBQ3RCO1FBQ0Esa0JBQWtCO1FBQ2xCLE1BQU1yQixNQUFNO0lBQ2I7QUFDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXRlbXBsYXRlLy4vcGFnZXMvYXBpL3NlbmQuanM/ZTNhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXNlbmQgfSBmcm9tIFwicmVzZW5kXCI7XG5cbi8vIGluaXRpYXRlIHRoZSByZXNlbmQgaW5zdGFuY2VcbmNvbnN0IHJlc2VuZCA9IG5ldyBSZXNlbmQocHJvY2Vzcy5lbnYuUkVTRU5EX0FQSV9LRVkpO1xuXG5jb25zdCB0aW1lciA9ICh0aW1lKSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiByZXModHJ1ZSksIHRpbWUpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcblx0Y29uc3QgeyBzdWJqZWN0LCBlbWFpbCwgdGFza3MgfSA9IHJlcS5ib2R5O1xuXHRpZiAoIXN1YmplY3QgfHwgIXRhc2tzIHx8ICFlbWFpbCkge1xuXHRcdHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgaW52YWxpZDogdHJ1ZSB9KTtcblx0fVxuXG5cdGZvciAoY29uc3QgdGFzayBvZiB0YXNrcykge1xuXHRcdGF3YWl0IHJlc2VuZC5lbWFpbHMuc2VuZCh7XG5cdFx0XHRmcm9tOiBcIm9uYm9hcmRpbmdAcmVzZW5kLmRldlwiLFxuXHRcdFx0dG86IFtlbWFpbF0sXG5cdFx0XHRzdWJqZWN0LFxuXHRcdFx0dGV4dDogdGFzay5kYXRhLnZhbHVlLFxuXHRcdH0pO1xuXHRcdC8vIFdhaXQgMTAgbWludXRlc1xuXHRcdGF3YWl0IHRpbWVyKDYwMDAwMCk7XG5cdH1cbn1cbiJdLCJuYW1lcyI6WyJSZXNlbmQiLCJyZXNlbmQiLCJwcm9jZXNzIiwiZW52IiwiUkVTRU5EX0FQSV9LRVkiLCJ0aW1lciIsInRpbWUiLCJQcm9taXNlIiwicmVzIiwic2V0VGltZW91dCIsImhhbmRsZXIiLCJyZXEiLCJzdWJqZWN0IiwiZW1haWwiLCJ0YXNrcyIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwiaW52YWxpZCIsInRhc2siLCJlbWFpbHMiLCJzZW5kIiwiZnJvbSIsInRvIiwidGV4dCIsImRhdGEiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/send.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/send.js"));
module.exports = __webpack_exports__;

})();