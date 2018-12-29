(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath){
    var service = this;

    service.getAllCategories = function () {
        // var response = $http({
        //   method: "GET",
        //   url: (ApiBasePath + "/categories.json")
        // });
        //
        // return response;
        return $http.get(ApiBasePath + '/categories.json').then(function (response) {
            return response.data;
        });
    };

    service.getItemsForCategory = function (category) {
        // var response = $http({
        //   method: "GET",
        //   url: (ApiBasePath + "/menu_items.json"),
        //   params: {
        //     category: categoryShortName
        //   }
        // });
        //
        // return response;
        var config = {};
        if (category) {
          config.params = {'category': category};
        }

        return $http.get(ApiBasePath + '/menu_items.json', config).then(function (response) {
          return response.data;
        });
    };
}

})();
