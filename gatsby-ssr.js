"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onRenderBody = function (_ref, options) {
  var setPostBodyComponents = _ref.setPostBodyComponents;

  return setPostBodyComponents([_react2.default.createElement("script", {
    key: "gatsby-plugin-pageproofer",
    dangerouslySetInnerHTML: {
      __html: "\n          (function (d, t) {\n            var pp = d.createElement(t), s = d.getElementsByTagName(t)[0];\n            pp.src = '//app.pageproofer.com/overlay/js/" + options.siteID + "/" + options.orgID + "';\n            pp.type = 'text/javascript';\n            pp.async = true;\n            s.parentNode.insertBefore(pp, s);\n          })(document, 'script');"
    }
  })]);
}; // eslint-disable-next-line no-unused-vars