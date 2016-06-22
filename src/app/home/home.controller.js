(function() {
  'use strict';
  angular
    .module('vimeoTest2')
    .controller('CategoryController', CategoryController);

  /** @ngInject */
  function CategoryController($state, $stateParams, videos, links, vimeoAPI) {
    var vm = this;
    vm.active = $stateParams.categoryId;
    vm.links = links;
    vm.videos = videos;
    vm.totalVideos = videos.total;
    vm.maxSize = vimeoAPI.MAX_SIZE;
    vm.perPage = vimeoAPI.PER_PAGE;
    vm.page = $stateParams.page;

    vm.changeCategory = function(category){
      $state.go('home.categories', {categoryId: category, 'page': 1});
    };

    vm.search = function(query) {
      $state.go('home.search', {query: query, 'page': 1});
    };

    vm.changePage = function () {
      $state.go('.', { page: vm.page});
    };

    vm.videoDetail = function(video){
        var id = video.uri.split('/')[2];
        $state.go('home.detail', {videoId: id});
    }

  }
})();