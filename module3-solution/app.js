(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
//.directive('foundItems', foundItems);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var found = this;

    found.narrowDown = function ( filterName ) {
        var promise = MenuSearchService.getMatchedMenuItems(filterName);

        for ( var i in promise ){
            console.log(promise[i]);
        }
    }

}
/*
function foundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
    }
  };

  return ddo;
}
*/
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
        // console.log(result.data.menu_items);
        for ( var i in result.data.menu_items) {
            if ( result.data.menu_items[i].description.toLowerCase().indexOf( searchTerm.trim().toLowerCase() ) !== -1 ) {
                foundItems.push(result.data.menu_items[i]);
            }
        }
        // console.log(foundItems);
        // return processed items
        return foundItems;
    },
    function error(result){
        console.log("Something wrong");
    }
    );

    return response;
  };

}

})();
