angular.module("app",[
    'ui.router',
    'app.mainService',
    'app.allCtrl',
    'app.addCtrl',
    'app.detailsCtrl',
    
])
.config(['$urlRouterProvider', function($urlRouterProvider){
    $urlRouterProvider.otherwise('/');    
}]);
