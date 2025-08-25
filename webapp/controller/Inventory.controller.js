sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  "sap/m/MessageToast"
], function (Controller, Filter, FilterOperator, MessageToast) {
  "use strict";

  return Controller.extend("inventory.app.controller.Inventory", {

    onInit: function () {
      var oModel = this.getView().getModel();
      oModel.read("/A_MaterialStock", {
        success: function () { console.log("OData loaded"); },
        error: function (oError) { console.error(oError); }
      });
    }

  });
});
