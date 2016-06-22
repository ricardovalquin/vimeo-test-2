(function() {
  'use strict';

  angular
    .module('vimeoTest2')
    .controller('NavBarController', NavBarController);

  /** @ngInject */
  function NavBarController($state) {
    var vm = this;
    vm.goToCategory = function(categoryId) {
      $state.go('home.categories', {categoryId: categoryId});
    };

    vm.closeNav = function() {
      var nav = angular.element(document.querySelector('.nav-bar-container'));
      nav.removeClass('open slideInLeft');
    };
  }
})();