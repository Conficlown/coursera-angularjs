(function () {
'use strict';

angular.module('Module1', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController ($scope) {
  $scope.lunch = "";
  $scope.comment = "";

  $scope.Check = function () {
    var temp = giveComment($scope.lunch);
    $scope.comment = temp;
  };

  function giveComment(string) {
    var splitArray = string.split(',');
    var numDish = 0;
    for (var i = 0; i < splitArray.length ; i++) {
        if (!(/^\s*$/).test(splitArray[i]))
        {
          numDish += 1;
        }
      }

    if (numDish == 0)
    {
      return "";
    }
    else if (numDish <=3)
    {
      return "Enjoy!";
    }
    else
    {
      return "Too much!";
    }
  };
};

})();
