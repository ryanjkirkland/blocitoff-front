(function() {
  function TaskCtrl($scope, $firebaseArray) {
    var ref = firebase.database().ref().child('tasks');
    $scope.tasks = ref($firebaseArray);

    $scope.thisBitch = "Yo, Dawg";

    $scope.createTask = function() {
      $scope.tasks.add$({
        name: $scope.newTask
      });
    };

    return {
      all: tasks
    };
  }

  angular
    .module('blocitoff')
    .controller('TaskCtrl', [$scope, $firebaseArray, TaskCtrl])
})();
