(function() {
  'use strict';
  angular
    .module('vimeoTest2')
    .directive('headerSection', headerSection);

  /** @ngInject */
  function headerSection(){
    return {
      restrict: 'E',
      scope: {
        searchVideos: '&'
      },
      replace: true,
      templateUrl: 'app/components/header/header.html',
      controller: 'HeaderController',
      controllerAs: 'headerCtrl',
      link: function(scope, element, attrs) {
        scope.searchForVideos = function(){
          var query = {
            query: 'parkour'
          };
          scope.searchVideos(query);
        };
      }
    }
  }
})();
