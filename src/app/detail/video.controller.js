(function() {
  'use strict';

  angular
    .module('vimeoTest2')
    .controller('VideoController', VideoController);

  /** @ngInject */
  function VideoController($sce, $state, $stateParams, video, links){
    var vm = this;
    vm.video = video;
    vm.active = $stateParams.categoryId;
    vm.links = links;
    vm.videoUrl = $sce.trustAsResourceUrl('//player.vimeo.com/video/' + $stateParams.videoId);

    vm.changeCategory = function(category){
      $state.go('home.categories', {categoryId: category, 'page': 1});
    };

    vm.search = function(query) {
      $state.go('home.search', {query: query, 'page': 1});
    };
  }
})();