(function () {
'use strict';

angular.module('data')
.controller('categoriesController', categoriesController);

categoriesController.$inject = ['menuCategories'];
function categoriesController(menuCategories) {
    var $ctrl = this;
    $ctrl.menuCategories = menuCategories;
}

})();
