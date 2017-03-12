angular.module('app.addCtrl', [])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider
            .state('add', {
                templateUrl: 'add/view.html',
                url: '/add',
                controller: 'addCtrl',
                cotrollerAs: 'ctrl'
            })
    }])
    .controller('addCtrl', ['$scope', '$state', 'mainService', function($scope, $state, mainService){

    }])
    .directive('addNote',function(){
        return {
        restrict : 'EA',
        transclude : false,
        templateUrl : '/partials/addNoteTemplate.html',
        scope: {
            },
        link: function (scope, element, attrs) {
        console.log("a intrat in link");
        },
        controller: function($scope,$state,mainService) {
            function initEmptyNote() {
            $scope.note = {
                title: '',
                text: '',
                autor: '',
                dateAdded: ''
            }
            }
            function goToAll() {
            $state.go('all');
            }

            initEmptyNote();
            $scope.clear = initEmptyNote;
            $scope.addNote = function(){
            mainService.addNote($scope.note).then(goToAll);
            };

        }
        }
        })