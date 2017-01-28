(function() {
     function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
              enabled: true,
              requireBase: false
        });

        $stateProvider
          .state('home', {
              url: '/',
              templateUrl: 'templates/home.html'
        })
          .state('tasks', {
              url: '/tasks',
              controller: 'TaskCtrl as tasks',
              templateUrl: 'templates/task.html'
        })
          .state('history', {
              url: '/history',
              controller: 'HistoryCtrl as history',
              templateUrl: 'templates/history.html'
        });
     }

     angular
        .module('blocitoff', ['ui.router', 'firebase'])
        .config(config);

})();
