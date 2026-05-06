/**
 * Light deterrent only: casual save / right-click / image drag.
 * Public HTML cannot be hidden from the browser — DevTools, curl, or "Save page" still work.
 */
(function () {
  "use strict";

  document.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
    },
    false
  );

  document.addEventListener(
    "dragstart",
    function (e) {
      if (e.target && e.target.tagName === "IMG") e.preventDefault();
    },
    false
  );

  document.addEventListener(
    "keydown",
    function (e) {
      if (e.ctrlKey || e.metaKey) {
        var k = e.key;
        if (k === "u" || k === "U" || k === "s" || k === "S") e.preventDefault();
      }
    },
    false
  );
})();
