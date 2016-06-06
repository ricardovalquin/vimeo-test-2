(function() {
  'use strict';

  angular
    .module('vimeoTest2')
    .controller('VideoController', VideoController);

  /** @ngInject */
  function VideoController($sce, $log, $stateParams, video){
    var vm = this;
    vm.video = video;
    $log.debug('video controller');
    $log.debug($stateParams);
    $log.debug(vm.video);
    vm.videoUrl = $sce.trustAsResourceUrl('//player.vimeo.com/video/' + $stateParams.videoId);
    $log.debug('video controller');
  }
})();