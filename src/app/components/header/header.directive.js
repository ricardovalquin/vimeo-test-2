(function() {
  'use strict';
  angular
    .module('vimeoTest2')
    .directive('headerSection', headerSection);

  /** @ngInject */
  function headerSection(){
    return {
      restrict: 'E',
      scope: {},
      replace: true,
      templateUrl: 'app/components/header/header.html'
    }
  }
})();
