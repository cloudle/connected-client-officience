if (Meteor.isClient) {
  var App = angular.module('connected-client', ['angular-meteor']);
  App.controller('mainCtrl', ['$scope', '$meteor', ($scope, $meteor) => {
    //$scope.tasks = [
    //  { text: 'This is task 1' },
    //  { text: 'This is task 2' },
    //  { text: 'This is task 3' }
    //];

    $scope.tasks = $meteor.collection(Task);

    $scope.addTask = description => {
      $scope.tasks.push({
        description,
        createAt: new Date()
      });
    }
  }]);
}