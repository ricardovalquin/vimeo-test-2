(function() {
  'use strict';

  angular
    .module('vimeoTest2')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log) {
    $log.error('asdf');

  }
})();
