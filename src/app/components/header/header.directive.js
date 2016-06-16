(function() {
  'use strict';
  angular
    .module('vimeoTest2')
    .directive('headerSection', headerSection);

  /** @ngInject */
  function headerSection($rootScope){
    return {
      restrict: 'E',
      scope: {
        searchVideos: '&'
      },
      replace: true,
      templateUrl: 'app/components/header/header.html',
      controller: 'HeaderController',
      controllerAs: 'headerCtrl',
      link: function(scope) {
        scope.searchForVideos = function(){
          var query = 'nba';
          //scope.searchVideos(query);
          $rootScope.$broadcast('search', query);
        };
      }
    }
  }
})();
