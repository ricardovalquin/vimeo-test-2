(function() {
  'use strict';

  angular
    .module('vimeoTest2')
    .controller('HeaderController', HeaderController);

  /** @ngInject */
  function HeaderController(){
    var vm = this;

    vm.showNav = function () {
      var nav = angular.element(document.querySelector('.nav-bar-container'));
      nav.addClass('open slideInLeft');
    }
  }

})();