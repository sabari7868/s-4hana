// sap.ui.define([
//   "sap/ui/core/mvc/Controller",
//   "sap/ui/model/json/JSONModel",
//   "sap/ui/model/Filter",
//   "sap/ui/model/FilterOperator",
//   "sap/m/MessageToast"
// ], function (Controller, JSONModel, Filter, FilterOperator, MessageToast) {
//   "use strict";

//   return Controller.extend("inventory.app.controller.Inventory", {

//     onInit: function () {
//       // Load local JSON data
//       var oModel = new JSONModel("model/data.json");
//       this.getView().setModel(oModel);
//     },

//     onSearch: function (oEvent) {
//       // Get search input
//       var sQuery = oEvent.getParameter("newValue") || oEvent.getParameter("query") || oEvent.getSource().getValue();
//       var oTable = this.getView().byId("inventoryTable");
//       var oBinding = oTable.getBinding("items");

//       if (sQuery) {
//         // Filter Material column with Contains operator
//         var oFilter = new Filter("Material", FilterOperator.Contains, sQuery);
//         oBinding.filter([oFilter]);
//       } else {
//         // No filter = reset
//         oBinding.filter([]);
//       }
//     },

//     onReset: function () {
//       // Reset table filter
//       var oTable = this.getView().byId("inventoryTable");
//       var oBinding = oTable.getBinding("items");
//       oBinding.filter([]);
//       MessageToast.show("Filter cleared.");
//     },

//     onExport: function () {
//       // Placeholder for future export integration
//       MessageToast.show("Export to Excel will be added soon.");
//     }

//   });
// });
sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  "sap/m/MessageToast"
], function (Controller, Filter, FilterOperator, MessageToast) {
  "use strict";

  return Controller.extend("inventory.app.controller.Inventory", {

    onInit: function () {
      // ODataModel is already loaded via manifest (using destination)
      var oModel = this.getView().getModel(); // Default model
      oModel.read("/A_MaterialStock", {
        success: function () {
          console.log("OData loaded successfully.");
        },
        error: function (oError) {
          console.error("Failed to load OData:", oError);
        }
      });
    },

    onSearch: function (oEvent) {
      var sQuery = oEvent.getParameter("newValue") || oEvent.getParameter("query") || oEvent.getSource().getValue();
      var oTable = this.getView().byId("inventoryTable");
      var oBinding = oTable.getBinding("items");

      if (sQuery) {
        var oFilter = new Filter("Material", FilterOperator.Contains, sQuery);
        oBinding.filter([oFilter]);
      } else {
        oBinding.filter([]);
      }
    },

    onReset: function () {
      var oTable = this.getView().byId("inventoryTable");
      var oBinding = oTable.getBinding("items");
      oBinding.filter([]);
      MessageToast.show("Filter cleared.");
    },

    onExport: function () {
      MessageToast.show("Export feature coming soon.");
    }

  });
});
