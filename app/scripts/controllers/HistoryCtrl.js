(function() {
  function HistoryCtrl($scope, $firebaseArray) {
    var ref = firebase.database().ref().child('tasks');
    $scope.tasks = $firebaseArray(ref);

    $scope.history = function(task) {
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
    .controller('HistoryCtrl', ['$scope', '$firebaseArray', HistoryCtrl])
})();
