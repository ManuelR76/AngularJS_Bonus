  angular.module('appAlert', [])
    .controller('alertController', ['$scope', function($scope) {
      $scope.greeting = 'Hello World!';
      $scope.doGreeting = function(greeting) {
        alert(greeting);
      };
    }]);
