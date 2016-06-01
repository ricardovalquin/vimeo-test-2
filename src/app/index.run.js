(function() {
  'use strict';

  angular
    .module('vimeoTest2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
