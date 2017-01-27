(function() {
  function TaskCtrl($scope, $firebaseArray) {
    var ref = firebase.database().ref().child('tasks');
    $scope.tasks = $firebaseArray(ref);

    $scope.createTask = function() {
      $scope.tasks.add$({
        name: $scope.newTask,
        created_at: Time.now
      });
    };
  }

  angular
    .module('blocitoff')
    .controller('TaskCtrl', ['$scope', '$firebaseArray', TaskCtrl])
})();
