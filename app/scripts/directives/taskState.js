(function() {
  function taskState($firebaseArray, $firebaseObject) {
    var ref = firebase.database().ref().child('tasks');
    //var tasks = $firebaseArray(ref);

    return {
      restrict: 'AE',
      replace: true,
      template: '<input type="submit" ng-click="task-state" class="btn" value="Complete">',
      scope: {
        task: "=",
        tasks: "="
      },
      link: function(scope, elem, attrs) {
        elem.bind('click', function(task) {

          console.log(scope.task)

          var task = scope.task;
          var tasks = scope.tasks;

          task.state = "complete";
          tasks.$save(task);

          console.log(scope.task);
          // window.ref = ref;
          // console.log(task);
          // // window.foo = ref.child(task.$id);
          // console.log('yO BUD');
          // task.state = "completed";
          // // window.foo = scope.task;
          // window.bar = tasks;
          // console.log(scope.task.state);
          /*scope.task.$save({state: "completed"});*/
        });
      }
    };
  }

  angular
    .module('blocitoff')
    .directive('taskState', ['$firebaseArray', '$firebaseObject', taskState]);
})();
