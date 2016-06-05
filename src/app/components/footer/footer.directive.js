(function() {
  'use strict';
  angular
    .module('vimeoTest2')
    .directive('footerSection', footerSection);

  /** @ngInject */
  function footerSection(){
    return {
      restrict: 'E',
      replace: true,
      scope: {},
      templateUrl: 'app/components/footer/footer.html'
    }
  }
})();