(function() {
  'use strict';

  angular
    .module('vimeoTest2')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url:'',
        abstract: true,
        resolve: {
          /** @ngInject */
          categoriesAPIResponse: function(CategoriesFactory){
            return CategoriesFactory.all();
          },
          categories: function(CategoriesFactory, categoriesAPIResponse){
            var categories;
            if(categoriesAPIResponse.data.length > 0){
              categories = CategoriesFactory.formatCategories(categoriesAPIResponse.data)
            }
            return categories;
          },
          links: function(CategoriesFactory, categories) {
            var links = [];
            if (categories) {
              links = CategoriesFactory.getLinks(categories);
            }
            return links;
          }
        }
      })
      .state('home.categories', {
        url: '/category/:categoryId?page',
        onEnter: function($state, $stateParams, categories) {
          if(!$stateParams.categoryId && categories.length > 0){
            $state.go('home.categories', {categoryId: categories[0].id, 'page': 1});
          }
        },
        params: {
          categoryId: '',
          page: ''
        },
        resolve: {
          /** @ngInject */
          videos: function($stateParams, videosFactory){
            var page = $stateParams.page;
            return videosFactory.getVideos($stateParams.categoryId, page);
          }
        },
        views: {
          'wrapper@': {
            templateUrl: 'app/home/home.html',
            controller: 'CategoryController',
            controllerAs: 'vm'
          }
        }
      })
      .state('home.detail', {
        url: '/videos/:videoId',
        onEnter: function($state, $stateParams) {
          if(!$stateParams.videoId) {
            $state.go('home.categories');
          }
        },
        params: {
          videoId: ''
        },
        resolve: {
          /** @ngInject */
          video: function($stateParams, videosFactory) {
            return videosFactory.getVideo($stateParams.categoryId, $stateParams.videoId);
          }
        },
        views: {
          'wrapper@': {
            templateUrl: 'app/detail/video.html',
            controller: 'VideoController',
            controllerAs: 'vm'
          }
        }
      })
      .state('home.search', {
        url: '/search?query?page',
        params: {
          query: '',
          page: ''
        },
        resolve: {
          /** @ngInject */
          videos: function($stateParams, videosFactory) {
            var page = $stateParams.page;
            return videosFactory.searchVideos($stateParams.query, page)
          }
        },
        views: {
          'wrapper@': {
            templateUrl: 'app/home/home.html',
            controller: 'CategoryController',
            controllerAs: 'vm'
          }
        }
      });

    $urlRouterProvider.otherwise('/category/');
  }

})();
