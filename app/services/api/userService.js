
(function(angular){
    "use strict";
    angular.module('ufersavdb')
        .factory('userAPI', userAPIFactory);

    userAPIFactory.$inject = ["$http","config"];
    function userAPIFactory($http,config){
        var service = {
            login: _login,
            signup: _signup,
            getAll: _getAll,
            get: _get,
            getVal: _getVal,
            getNames: _getNames,
            create: _create,
            update: _update,
            updateInfo: _updateInfo,
            remove: _remove,
            getInfos: _getInfos,
            getInfo: _getInfo,
            getLogs: _getLogs,
            getLog: _getLog,
            changeSit: _changeSit
        };
        return service;

        function _changeSit(id) {
            return $http.get(config.baseUrl + "/users/sit/" + id);
        }
        function _getLog(id) {
            return $http.get(config.baseUrl + "/users/log/" + id);
        }
        function _getLogs() {
            return $http.get(config.baseUrl + "/users/log");
        }
        function _getInfo(id) {
            return $http.get(config.baseUrl + "/users/info/" + id);
        }
        function _getInfos() {
            return $http.get(config.baseUrl + "/users/info");
        }
        function _remove(id) {
            return $http.delete(config.baseUrl + "/users/" + id);
        }
        function _updateInfo(data) {
            return $http.post(config.baseUrl + "/users/info",data);
        }
        function _update(data) {
            return $http.put(config.baseUrl + "/users", data);
        }
        function _create(data) {
            return $http.post(config.baseUrl + "/users",data);
        }
        function _getNames() {
            return $http.get(config.baseUrl + "/users/n");
        }
        function _getVal() {
            return $http.get(config.baseUrl + "/users/val");
        }
        function _get(id) {
            return $http.get(config.baseUrl + "/users/" + id);
        }
        function _getAll() {
            return $http.get(config.baseUrl + "/users");
        }
        function _signup(data) {
            /*var newdate = new Date(data.birthdate);
            data.birthdate = newdate.getDate() + "-" + (newdate.getMonth()+1) + "-" + newdate.getFullYear();*/
            return $http.post(config.baseUrl + "/users/signup",data);
        }
        function _login (data) {
            return $http.post(config.baseUrl + "/users/login", data);
        }
    }

})(angular);
