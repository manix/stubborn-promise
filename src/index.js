import StubbornPromise from "./stubborn";

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
      module.exports = factory();
  } else {
      root.returnExports = factory();
  }
}(this, function (b) {
  return StubbornPromise;
}));