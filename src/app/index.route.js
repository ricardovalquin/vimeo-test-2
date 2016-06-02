(function() {
  'use strict';

  angular
    .module('vimeoTest2')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      //.state('home', {
      //  url: '/',
      //  templateUrl: 'app/main/main.html',
      //  controller: 'MainController',
      //  controllerAs: 'main'
      //})

      .state('home', {
        url:'',
        abstract: true,
        resolve: {
          /** @ngInject */
          categoriesAPIResponse: function(CategoriesFactory){
            return CategoriesFactory.all(); // this returns a promise that returns an object with the categories
          },
          categories: function(CategoriesFactory, categoriesAPIResponse){
            var categories;
            //$log.debug(categoriesAPIResponse.data);
            if(categoriesAPIResponse.data.length > 0){
              categories = CategoriesFactory.formatCategories(categoriesAPIResponse.data)
            }
            else {
              categories = [];
            }
            return categories;
          }
        }
      })
      .state('home.categories', {
        url: '/category/:categoryId',
        onEnter: function($state, $stateParams, categories) {
          if(!$stateParams.categoryId && categories.length > 0){
            $state.go('home.categories', {categoryId: categories[0].id});
          }
        },
        params: {
          categoryId: ''
          // pagination
        },
        resolve: {
          /** @ngInject */
          videos: function($stateParams, CategoriesFactory){
            return CategoriesFactory.getVideos($stateParams.categoryId);
          }
        },
        views: {
          'wrapper@': {
            templateUrl: 'app/components/category/category.html',
            controller: 'CategoryController',
            controllerAs: 'categoryCtrl'
          }
        }

      });

    $urlRouterProvider.otherwise('/category/');
  }

})();
