(function() {
  'use strict';
  angular
    .module('vimeoTest2')
    .controller('CategoryController', CategoryController);

  /** @ngInject */
  function CategoryController($log, $state, $stateParams, videos, links) {
    var vm = this;
    vm.active = $stateParams.categoryId;
    vm.links = links;
    vm.videos = videos;
    vm.totalVideos = videos.total;
    vm.maxSize = 3;
    vm.perPage = 12;
    vm.page = $stateParams.page;

    vm.changeCategory = function(category){
      $state.go('home.categories', {categoryId: category, 'page': 1});
    };

    vm.search = function(query) {
      $state.go('home.search', {query: query, 'page': 1});
    };

    vm.changePage = function () {
      $log.debug(vm.page);
      $log.debug('changePage');
      $state.go('.', { page: vm.page});
    };

    vm.videoDetail = function(video){
        var id = video.uri.split('/')[2];
        $state.go('home.categories.detail', {categoryId: $stateParams.categoryId, videoId: id});
    }

  }
})();