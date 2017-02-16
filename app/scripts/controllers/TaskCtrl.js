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
        state: $scope.state[0]
      });

      $scope.newTask = {}
    };

    $scope.oldTask = function(task) {
      var today = Date.now();
      if ((today - task.createdAt) < 604800000) {
        return false;
      }  else {
        task.state = "expired";
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

    $scope.state = ["active", "complete"];

    $scope.newPriority = $scope.priority[0];

  }

  angular
    .module('blocitoff')
    .controller('TaskCtrl', ['$scope', '$firebaseArray', TaskCtrl])
})();
