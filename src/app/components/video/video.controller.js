(function() {
  'use strict';

  angular
    .module('vimeoTest2')
    .controller('VideoController', VideoController);

  /** @ngInject */
  function VideoController($sce, $stateParams, video, links){
    var vm = this;
    vm.video = video;
    vm.links = links;
    vm.videoUrl = $sce.trustAsResourceUrl('//player.vimeo.com/video/' + $stateParams.videoId);
  }
})();