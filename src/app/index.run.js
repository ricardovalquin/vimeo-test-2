(function() {
  'use strict';

  angular
    .module('vimeoTest2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $http, $state, vimeoAPI) {
    $http.defaults.headers.common.Authorization = 'Bearer ' + vimeoAPI.ACCESS_TOKEN;

    var searchEvent = $rootScope.$on('search-box:query', function(event, data) {
      $state.go('home.search', {query: data, 'page': 1})
    });

    $rootScope.$on('destroy', function() {
      searchEvent();
    });
  }

})();
