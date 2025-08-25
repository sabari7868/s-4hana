sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";
  return Controller.extend("inventory.controller.App", {
    onRefresh: function () {
      var oModel = this.getOwnerComponent().getModel("inventory");
      oModel.loadData("model/inventory.json");
      sap.m.MessageToast.show("Data refreshed");
    }
  });
});
