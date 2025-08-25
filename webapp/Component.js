sap.ui.define([
  "sap/ui/core/UIComponent"
], function (UIComponent) {
  "use strict";

  return UIComponent.extend("inventory.app.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      // Call base component init
      UIComponent.prototype.init.apply(this, arguments);
    }
  });
});
