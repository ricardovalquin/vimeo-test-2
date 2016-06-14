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
        //abstract: true,
        views: {
          'wrapper@': {
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'mainCtrl'
          }
        },
        resolve: {
          /** @ngInject */
          categoriesAPIResponse: function(CategoriesFactory){
            return CategoriesFactory.all(); // this returns a promise that returns an object with the categories
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
        //onEnter: function($state, $stateParams, categories) {
        //  if(!$stateParams.categoryId && categories.length > 0){
        //    $state.go('home.categories', {categoryId: categories[0].id, 'page': 1});
        //  }
        //},
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
          'content@home': {
            templateUrl: 'app/components/category/category.html',
            controller: 'CategoryController',
            controllerAs: 'categoryCtrl'
          }
        }

      })
      .state('home.categories.detail', {
        url: '/:videoId',
        onEnter: function($state, $stateParams) {
          if(!$stateParams.categoryId && !$stateParams.videoId) {
            $state.go('home.categories');
          }
        },
        params: {
          categoryId: '',
          videoId: ''
        },
        resolve: {
          /** @ngInject */
          video: function($stateParams, videosFactory) {
            return videosFactory.getVideo($stateParams.categoryId, $stateParams.videoId);
          }
        },
        views: {
          'content@home': {
            templateUrl: 'app/components/video/video.html',
            controller: 'VideoController',
            controllerAs: 'videoCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/category/');
  }

})();
