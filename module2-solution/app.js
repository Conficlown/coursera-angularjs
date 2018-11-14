(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var BuyList = this;

  BuyList.items = ShoppingListCheckOffService.getToBuyItems();

  BuyList.checkOffItem = function (itemIndex) {
    ShoppingListCheckOffService.checkOffItem(itemIndex);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var BoughtList = this;

  BoughtList.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [
      {
        name: 'cookies',
        quantity: 1
      },
      {
        name: 'cookies',
        quantity: 2
      },
      {
        name: 'cookies',
        quantity: 3
      },
      {
        name: 'cookies',
        quantity: 4
      },
      {
        name: 'cookies',
        quantity: 5
      }
  ];

  var BoughtItems = [];

  service.checkOffItem = function (itemIdex) {
    BoughtItems.push(toBuyItems[itemIdex]);
    toBuyItems.splice(itemIdex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return BoughtItems;
  };
}

})();
