sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  "sap/m/MessageToast"
], function (Controller, JSONModel, Filter, FilterOperator, MessageToast) {
  "use strict";

  return Controller.extend("inventory.app.controller.Inventory", {

    onInit: function () {
      // Load local JSON data
      var oModel = new JSONModel("model/data.json");
      this.getView().setModel(oModel);
    },

    onSearch: function (oEvent) {
      // Get search input
      var sQuery = oEvent.getParameter("newValue") || oEvent.getParameter("query") || oEvent.getSource().getValue();
      var oTable = this.getView().byId("inventoryTable");
      var oBinding = oTable.getBinding("items");

      if (sQuery) {
        // Filter Material column with Contains operator
        var oFilter = new Filter("Material", FilterOperator.Contains, sQuery);
        oBinding.filter([oFilter]);
      } else {
        // No filter = reset
        oBinding.filter([]);
      }
    },

    onReset: function () {
      // Reset table filter
      var oTable = this.getView().byId("inventoryTable");
      var oBinding = oTable.getBinding("items");
      oBinding.filter([]);
      MessageToast.show("Filter cleared.");
    },

    onExport: function () {
      // Placeholder for future export integration
      MessageToast.show("Export to Excel will be added soon.");
    }

  });
});
