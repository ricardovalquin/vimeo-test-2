(function () {
  'use strict';

  angular
    .module('vimeoTest2')
    .factory('CategoriesFactory', CategoriesFactory);

  /** @ngInject */
  function CategoriesFactory($http, vimeoAPI) {
    return {
      all: function() {
        return $http.get(
          vimeoAPI.API_BASE_URL + 'categories'
        ).then(function successCallback(response) {
            return response.data;
          }, function errorCallback(error) {
            return error;
          }
        );
      },
      formatCategories: function(categories) {
        if(categories) {
          return categories.map(function(category){
            var uri = category.uri.split('/');
            category.id = uri[2];
            return category;
          });
        }
        else {
          return categories;
        }
      },
      getVideos: function(category) {
        if(category) {
          return $http.get(
            vimeoAPI.API_BASE_URL + 'categories/' + category + '/videos?page=1&per_page=12'
          ).then(function successCallback(response){
            return response.data;
          }, function errorCallback(error){
            return error;
          });
        }
        //return $q.reject("no category provided")
      }
    }
  }
})();