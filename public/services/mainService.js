angular.module('app.mainService', [])
    .service('mainService', ['$http', '$q', function($http, $q){

        function getData(type, url, params, body){
            var requestUrl = params ? url + params : url;
            var def = $q.defer();
            $http[type](requestUrl, body)
                .success(function(response){
                    def.resolve(response);
                })
                .error(function(err){
                    console.log(err);
                    def.reject(err);
                })
            return def.promise;
        }
        function getOneNote(id){
            console.log(id);
            return getData('get','/note/',id,null);
        }

        function getAllNotes() {
            return getData('get', '/notelist', null, null)
        };

        function removeNote(id){
            return getData('delete', '/notelist/', id, null)
        }      

        function addNote(note){
            return getData('post', '/notelist', null, note)
        }

        return {
            getAllNotes: getAllNotes,
            removeNote: removeNote,
            addNote: addNote,
            getOneNote: getOneNote
        }
    }]);
