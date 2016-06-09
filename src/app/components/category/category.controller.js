(function() {
  'use strict';
  angular
    .module('vimeoTest2')
    .controller('CategoryController', CategoryController);

  /** @ngInject */
  function CategoryController($log, $state, videos, links) {
    var vm = this;
    vm.videos = videos;
    vm.links = links;

    vm.videoDetail = function(video){
        var id = video.uri.split('/')[2];
        $state.go('home.categories.detail', {videoId: id});
    }

  }
})();