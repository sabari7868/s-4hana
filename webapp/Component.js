sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
  "use strict";
  return UIComponent.extend("inventory.Component", {
    metadata: {
      manifest: "json"
    },
    init: function () {
      UIComponent.prototype.init.apply(this, arguments);

      // Load JSON Model
      var oModel = new JSONModel("model/inventory.json");
      this.setModel(oModel, "inventory");
    }
  });
});
