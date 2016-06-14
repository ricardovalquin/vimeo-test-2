(function() {
  'use strict';

  angular
    .module('vimeoTest2')
    .controller('NavBarController', NavBarController);

  /** @ngInject */
  function NavBarController($log, $state, $stateParams) {
    var vm = this;
    var params = $stateParams;
    $log.debug(params);
    vm.goToCategory = function(categoryId) {
      $state.go('home.categories', {categoryId: categoryId});
    };

    vm.closeNav = function() {
      var nav = angular.element(document.querySelector('.nav-bar-container'));
      nav.removeClass('open slideInLeft');
    };
  }
})();