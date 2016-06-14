(function() {
  'use strict';

  angular
    .module('vimeoTest2')
    .directive('navBar', navBarDirective);

  /** @ngInject */
  function navBarDirective() {
   return {
     restrict: 'E',
     replace: true,
     scope: {
       links: '=',
       activeLink: '=',
       clickLink: '&'
     },
     templateUrl: 'app/components/nav-bar/navBar.html',
     controller: 'NavBarController',
     controllerAs: 'navCtrl',
     link: function(scope, element, attrs) {
       //console.log(scope.active);
       scope.goToCategory = function(link) {
         scope.clickLink(link);
       }
     }
   }
  }
})();