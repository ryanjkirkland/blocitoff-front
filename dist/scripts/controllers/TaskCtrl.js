(function() {
  function TaskCtrl($scope, $firebaseArray) {
    var ref = firebase.database().ref().child('tasks');
    $scope.tasks = $firebaseArray(ref);
    window.foo = $scope.tasks;
    $scope.addNewTask = function() {
      $scope.tasks.$add({
        name: $scope.newTask.name,
        createdAt: Date.now(),
        priority: $scope.newPriority,
        state: "active"
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

    $scope.priority = [
      {
        label: "high",
        value: 3
      },
      {
        label: "medium",
        value: 2
      },
      {
        label: "low",
        value: 1
      }
    ];
    $scope.newPriority = $scope.priority[0];

    /*$scope.updatePriority = function(task) {
      task.priority = $scope.newPriority;
      console.log($scope.newPriority);
      console.log(task.priority);
      console.log(task);
    };*/
  }

  angular
    .module('blocitoff')
    .controller('TaskCtrl', ['$scope', '$firebaseArray', TaskCtrl])
})();
