(function() {
     function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
              enabled: true,
              requireBase: false
        });

        $stateProvider
          .state('task', {
              url: '/',
              controller: 'TaskCtrl as task',
              templateUrl: 'template/task.html'
        });
     }

     angular
        .module('blocitoff', ['ui.router', 'firebase'])
        .config(config);

})();
