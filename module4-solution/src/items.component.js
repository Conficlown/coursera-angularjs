(function () {
'use strict';

angular.module('data')
.controller('itemsController', itemsController);

itemsController.$inject = ['menuItems'];
function itemsController(menuItems) {
    var $ctrl = this;
    $ctrl.menuItems = menuItems;
}

})();
