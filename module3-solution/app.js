(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', foundItems);

NarrowItDownController.$inject = ['MenuSearchService'];


function ListItem() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
    }
  };

  return ddo;
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
        // process result and only keep items that match
        var foundItems...

        // return processed items
        return foundItems;
    });;

    return response;
  };

}

})();