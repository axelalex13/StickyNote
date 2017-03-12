 angular.module('app.allCtrl', [])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider
            .state('all', {
                templateUrl: 'all/view.html',
                url: '/',
                controller: 'allCtrl',
                cotrollerAs: 'ctrl',
                resolve: {
                    allNotes: ['mainService', function(mainService) {
                        return mainService.getAllNotes();
                    }]
                }
            })
    }])
    .controller('allCtrl', ['$scope', '$state', 'mainService', 'allNotes', function($scope, $state, mainService, allNotes){        
        $scope.notelist = allNotes;
    }])
.directive('notelist',function(){
return {
      restrict : 'EA',
      transclude : false,
      templateUrl : '/partials/myNoteTemplate.html',
      scope: {
         notelist: '=data',
        },
 link: function (scope, element, attrs) {
       },
    controller: function($scope,$state) {
        $scope.details=function(id)
        {
            console.log("A intrat", id);
            $state.go('details',{id:id});
        }
    }
}
});