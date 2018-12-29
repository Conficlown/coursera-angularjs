(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/categories.html',
      controller: 'categoriesController',
      controllerAs: 'categories',
      resolve: {
        menuCategories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
            }]
        }
    })

    .state('items', {
      url: '/items/{category}',
      templateUrl: 'src/items.html',
      controller: 'itemsController',
      controllerAs: 'itemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    });
}


})();
