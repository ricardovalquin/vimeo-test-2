(function () {
  'use strict';

  angular
    .module('vimeoTest2')
    .factory('CategoriesFactory', CategoriesFactory);

  /** @ngInject */
  function CategoriesFactory($http, vimeoAPI) {
    return {
      all: function () {
        return $http.get(
          vimeoAPI.API_BASE_URL + 'categories'
        ).then(function successCallback(response) {
            return response.data;
          }, function errorCallback(error) {
            return error;
          }
        );
      },
      formatCategories: function (categories) {
        if (categories) {
          return categories.map(function (category) {
            var uri = category.uri.split('/');
            category.id = uri[2];
            return category;
          });
        }
        else {
          return categories;
        }
      },
      getLinks: function(categories){
        return categories.map(function(category){
            var links = {};
            links.id = category.id;
            return links;
        });
      },
      getVideos: function (category) {
        if (category) {
          return $http.get(
            vimeoAPI.API_BASE_URL + 'categories/' + category + '/videos?page=1&per_page=12'
          ).then(function successCallback(response) {
            return response.data;
          }, function errorCallback(error) {
            return error;
          });
        }
        //return $q.reject("no category provided")
      },
      getVideo: function (category, video) {
        if (category && video) {
          return $http.get(
            vimeoAPI.API_BASE_URL + 'categories/' + category + '/videos/' + video
          ).then(function successCallback(response) {
              return response.data;
            }, function errorCallcabk(error) {
              return error;
            }
          );
        }
      },
      formatVideos: function(videos){
        if(videos) {
          return videos.map(function(video) {
            var uri = video.uri.split('/');
            video.id = uri[2];
            return video;
          });
        }
        else {
          return videos;
        }
      }
    }
  }
})();