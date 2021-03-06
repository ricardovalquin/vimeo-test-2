(function () {
  'use strict';

  angular
    .module('vimeoTest2')
    .factory('videosFactory', videosFactory);

  /** @ngInject */
  function videosFactory($http, vimeoAPI) {
    return {
      getVideos: function (category, page) {
        if (category) {
          return $http.get(
            vimeoAPI.API_BASE_URL + 'categories/' + category + '/videos?page=' + page + '&per_page=' + vimeoAPI.PER_PAGE
          ).then(function successCallback(response) {
            return response.data;
          }, function errorCallback(error) {
            return error;
          });
        }
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
        else if(!category && video){
          return $http.get(
            vimeoAPI.API_BASE_URL + 'videos/'+ video
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
      },
      searchVideos: function(query, page) {
          return $http.get(
            vimeoAPI.API_BASE_URL + 'videos/?page=' + page + '&per_page=' + vimeoAPI.PER_PAGE + '&query='+ query
          ).then(function successCallbac(response) {
            return response.data;
          }, function errorCallback(error) {
            return error;
          })
      }
    }
  }
})();