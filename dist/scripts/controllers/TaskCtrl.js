(function() {
  function TaskCtrl($scope, $firebaseArray) {
    var ref = firebase.database().ref().child('tasks');
    $scope.tasks = $firebaseArray(ref);
    window.foo = $scope.tasks
    $scope.thisBitch = "Yo, Dawg";

    $scope.createTask = function() {
      $scope.tasks.add$({
        name: $scope.newTask
      });
    };
    // 
    // return {
    //   all: $scope.tasks
    // };
  }

  angular
    .module('blocitoff')
    .controller('TaskCtrl', ['$scope', '$firebaseArray', TaskCtrl])
})();
