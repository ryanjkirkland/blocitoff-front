(function() {
  function TaskCtrl($scope, $firebaseArray) {
    var ref = firebase.database().ref().child('tasks');
    $scope.tasks = $firebaseArray(ref);
    window.foo = $scope.tasks;
    $scope.addNewTask = function() {
      $scope.tasks.$add({
        name: $scope.newTask.name,
        createdAt: Date.now()
      });

      $scope.newTask = {}
    };

    $scope.oldTask = function(task) {
      var today = Date.now();

      if ((today - task.createdAt) < 604800000) {
        return false;
      }  else {
        return true;
      }
    };
  }

  angular
    .module('blocitoff')
    .controller('TaskCtrl', ['$scope', '$firebaseArray', TaskCtrl])
})();
