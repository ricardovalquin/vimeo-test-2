(function() {
  'use strict';

  angular
    .module('vimeoTest2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($http, vimeoAPI) {
    $http.defaults.headers.common.Authorization = 'Bearer ' + vimeoAPI.ACCESS_TOKEN;
  }

})();
