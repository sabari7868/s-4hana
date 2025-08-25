// sap.ui.define([
//   "sap/ui/core/UIComponent",
//   "sap/ui/model/json/JSONModel"
// ], function (UIComponent, JSONModel) {
//   "use strict";

//   return UIComponent.extend("inventory.app.Component", {
//     metadata: {
//       manifest: "json"
//     },

//     init: function () {
//       UIComponent.prototype.init.apply(this, arguments);
//     }
//   });
// });
sap.ui.define([
  "sap/ui/core/UIComponent"
], function (UIComponent) {
  "use strict";

  return UIComponent.extend("inventory.app.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      // call the base component's init function
      UIComponent.prototype.init.apply(this, arguments);
      // nothing else is needed here unless you want to customize routing or other behavior
    }
  });
});
