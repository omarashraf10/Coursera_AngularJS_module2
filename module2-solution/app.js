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
    list.ToBuyMessage = function(){return list.ToBuyItems.length===0};
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list = this;

  list.BoughtItems = ShoppingListCheckOffService.getBougthItems();
  list.BougthMessage = function(){return list.BoughtItems.length===0};
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


// this function removes item from toBuy list and adds it to Bougth list
  service.removeItem = function (itemIndex) {
    var item = {
      name: ToBuyItems[itemIndex].name,
      quantity: ToBuyItems[itemIndex].quantity
    };
    BougthItems.push(item);
  //  console.log('b',BougthItems);
    ToBuyItems.splice(itemIndex, 1);
//    console.log('a',ToBuyItems);
//    console.log('first element',ToBuyItems[0]);
  };

  service.getToBuyItems = function () {
    return ToBuyItems;
  };

  service.getBougthItems = function () {
    return BougthItems;
  };

}



})();
