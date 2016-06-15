(function() {
  'use strict';

  angular
    .module('vimeoTest2')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $state, $stateParams, links, categories) {
    var vm = this;
    vm.links = links;
    vm.maxSize = 100;
    vm.perPage = 12;
    vm.page = $stateParams.page;
    vm.active = $stateParams.categoryId;
    $state.go('home.categories', {categoryId: categories[0].id, 'page': 1});

    vm.changeCategory = function(category){
      $state.go('home.categories', {categoryId: category, 'page': 1});
    };

    vm.videoDetail = function(video){
      var id = video.uri.split('/')[2];
      $state.go('home.categories.detail', {videoId: id});
    };

    vm.search = function(query) {
      $state.go('home.search', {query: query, 'page': 1});
    };
  }
})();
