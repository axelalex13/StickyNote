angular.module('app.detailsCtrl', [])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider
            .state('details', {
                templateUrl: 'details/view.html',
                url: '/note/:id',
                controller: 'detailsCtrl',
                cotrollerAs: 'ctrl',
                resolve: {
                    oneNote: ['mainService','$stateParams', function(mainService,$stateParams) {
                        console.log(mainService);
                        return mainService.getOneNote($stateParams.id);
                       }]
                }
            })
    }])
      .controller('detailsCtrl',[ '$http','$stateParams','$scope','oneNote','mainService','$state',
    function($http,$stateParams,$scope,oneNote,mainService,$state){
        $scope.notelist = oneNote;
        $scope.notelist.dateAdded = new Date($scope.notelist.dateAdded);
        function goToAll() {
        $state.go('all');
        }
        $scope.remove = function(id) {
        mainService.removeNote(id).then(goToAll);
        }
        $scope.update = function() {
        console.log($scope.notelist._id);
        $http.put('/notelist/' + $scope.notelist._id, $scope.notelist).then(goToAll);
        };
       
        showDiv= function() {
        document.getElementById('welcomeDiv').style.display = "block";
        }
       
       showhide=function()
        {
        var div = document.getElementById("newpost");
        if (div.style.display !== "none") {
        div.style.display = "none";
        }
        else {
        div.style.display = "block";
        }
        }      
}])