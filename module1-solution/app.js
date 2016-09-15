(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
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
