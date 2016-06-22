(function() {
  'use strict';

  angular
    .module('vimeoTest2')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state, $stateParams, links) {
    var vm = this;
    vm.links = links;
    vm.active = $stateParams.categoryId;

    vm.changeCategory = function(category){
      $state.go('home.categories', {categoryId: category, 'page': 1});
    };

    vm.videoDetail = function(video){
      var id = video.uri.split('/')[2];
      $state.go('home.detail', {videoId: id});
    };

    vm.search = function(query) {
      $state.go('home.search', {query: query, 'page': 1});
    };
  }
})();
