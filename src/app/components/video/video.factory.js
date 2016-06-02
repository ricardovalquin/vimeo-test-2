//(function() {
//  'use strict';
//  angular
//    .module('vimeoTest2')
//    .factory('videosFactory', videosFactory);
//
//  /** @ngInject */
//  function videosFactory($http, vimeoAPI) {
//    return {
//      getVideos: function(category) {
//        if(category) {
//          return $http.get(
//            vimeoAPI.API_BASE_URL + 'categories/' + category + '/videos?page=1&per_page=12'
//          ).then(function successCallback(response){
//            return response.data;
//          }, function errorCallback(error){
//            return error;
//          });
//        }
//        //return $q.reject("no category provided")
//      }
//    }
//  }
//})();