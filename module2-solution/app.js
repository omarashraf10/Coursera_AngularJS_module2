(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);



ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list = this;

  list.ToBuyItems = ShoppingListCheckOffService.getToBuyItems();

  list.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list = this;

  list.BoughtItems = ShoppingListCheckOffService.getBougthItems();

}


function ShoppingListCheckOffService() {

  var service = this;
  var ToBuyItems = [{ name: "cookies", quantity: 10 },
                    { name: "chocolate", quantity: 5 },
                    { name: "orange juice", quantity: 2 },
                    { name: "apple", quantity: 15 },
                    { name: "banana", quantity: 10 },
                    { name: "cartoon of milk ", quantity: 7 },
                    { name: "mango", quantity: 20 }
                    ];

  var BougthItems =[];

  service.addItem = function (itemName, quantity) {

  };

  service.removeItem = function (itemIndex) {
    var item = {
      name: ToBuyItems[itemIndex].name,
      quantity: ToBuyItems[itemIndex].quantity
    };
    BougthItems.push(item);
    ToBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return ToBuyItems;
  };

  service.getBougthItems = function () {
    return BougthItems;
  };
}



})();
