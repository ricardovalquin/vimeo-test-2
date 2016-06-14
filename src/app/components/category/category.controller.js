(function() {
  'use strict';
  angular
    .module('vimeoTest2')
    .controller('CategoryController', CategoryController);

  /** @ngInject */
  function CategoryController($log, $state, $stateParams, videos) {
    var vm = this;
    vm.videos = videos;
    vm.totalVideos = videos.total;
    vm.maxSize = 100;
    vm.perPage = 12;
    vm.page = $stateParams.page;


    vm.changePage = function () {
      $log.debug(vm.page);
      $log.debug('changePage');
      $state.go('.', { page: vm.page});
    };

    vm.videoDetail = function(video){
        var id = video.uri.split('/')[2];
        $state.go('home.categories.detail', {videoId: id});
    }

  }
})();