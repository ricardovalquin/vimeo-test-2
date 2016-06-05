(function() {
  'use strict';

  angular
    .module('vimeoTest2')
    .controller('VideoController', VideoController);

  /** @ngInject */
  function VideoController($log, $stateParams, video){
    this.video = video;
    //$log.debug('asdfasdfasdf');
    //$log.debug($stateParams);
    //$log.debug('asdfasdfasdf');
  }
})();