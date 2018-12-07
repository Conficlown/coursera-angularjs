(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', foundItems);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var AppController = this;
    AppController.filterName = "";
    AppController.found = [];
    AppController.narrowDown = function () {
        if ( AppController.filterName !== "" ) {
            MenuSearchService.getMatchedMenuItems(AppController.filterName);
            AppController.found = MenuSearchService.getFoundItems();
        }
    };

    AppController.removeMenu = function (index) {
        MenuSearchService.removeMenu(index);
    }
}

function foundItems() {
  var ddo = {
    templateUrl: 'loader/itemsloaderindicator.template.html',
    scope: {
      menu: '<',
      onRemove: '&'
    }
  };
  return ddo;
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  var foundItems = [];

  service.getMatchedMenuItems = function (searchTerm) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
  }).then(function success(result) {
        // process result and only keep items that match
        while (foundItems.length) {
            foundItems.pop();
        }
        for ( var i in result.data.menu_items) {
            if ( result.data.menu_items[i].description.toLowerCase().indexOf( searchTerm.trim().toLowerCase() ) !== -1 ) {
                foundItems.push(result.data.menu_items[i]);
            }
        }
    },
    function error(result){
        console.log("Something wrong");
    }
    );

    return response;
  };

  service.getFoundItems = function () {
      return foundItems;
  }

  service.removeMenu = function (index) {
      foundItems.splice(index, 1);
  };

}

})();
