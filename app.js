var app = angular.module('myApp', ['ngAnimate', 'ngSanitize', 'mgcrea.ngStrap']);

app.controller('MyCtrl', function($scope,$modal) {
   var modalInstance = $modal({scope: $scope, template: 'template.html', show: false});
  $scope.openModal = function () { 
       
        modalInstance.$promise.then(modalInstance.show)
    };
  $scope.closeModal = function () {
        modalInstance.$promise.then(modalInstance.hide)
    };
});
