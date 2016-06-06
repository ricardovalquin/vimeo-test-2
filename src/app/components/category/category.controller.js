(function() {
  'use strict';
  angular
    .module('vimeoTest2')
    .controller('CategoryController', CategoryController);

  /** @ngInject */
  function CategoryController($log, $state, videos) {
    var vm = this;
    vm.videos = videos;

    $log.debug('asdfasdfasdf');
    $log.debug(vm.videos);
    $log.debug('asdfasdfasdf');

    vm.videoDetail = function(video){
        var id = video.uri.split('/')[2];
        $state.go('home.categories.detail', {videoId: id});
    }

  }
})();