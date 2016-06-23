(function() {
  'use strict';

  angular
    .module('vimeoTest2')
    .directive('stateLoadingIndicator', stateLoadingIndicator);

  /** @ngInject */
  function stateLoadingIndicator($rootScope) {
    return {
      restrict: 'E',
      template: "<div ng-show='isStateLoading' class='spinner-wrapper'><div class='cssload-thecube'>" +
      "<div class='cssload-cube cssload-c1'></div>" +
      "<div class='cssload-cube cssload-c2'></div>" +
      "<div class='cssload-cube cssload-c4'></div>" +
      "<div class='cssload-cube cssload-c3'></div>" +
      '</div></div>',
      replace: true,
      link: function(scope) {
        scope.isStateLoading = false;

        var start = $rootScope.$on('$stateChangeStart', function() {
          scope.isStateLoading = true;
        });

        var success = $rootScope.$on('$stateChangeSuccess', function() {
          scope.isStateLoading = false;
        });

        $rootScope.$on('$destroy', function() {
          start();
          success();
        });
      }
    };
  }

})();
