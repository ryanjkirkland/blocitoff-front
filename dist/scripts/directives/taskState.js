(function() {
  function taskState($firebaseArray, $firebaseObject) {
    var ref = firebase.database().ref().child('tasks');
    //var tasks = $firebaseArray(ref);

    return {
      restrict: 'AE',
      replace: true,
      template: '<input type="submit" ng-click="task-state" class="btn complete" value="All done?">',
      scope: {
        task: "=",
        tasks: "="
      },
      link: function(scope, elem, attrs) {
        elem.bind('click', function(task) {

          console.log(elem);

          console.log(scope.task)

          var task = scope.task;
          var tasks = scope.tasks;

          task.state = "complete";
          tasks.$save(task);

          console.log(scope.task);

        });
      }
    };
  }

  angular
    .module('blocitoff')
    .directive('taskState', ['$firebaseArray', '$firebaseObject', taskState]);
})();
