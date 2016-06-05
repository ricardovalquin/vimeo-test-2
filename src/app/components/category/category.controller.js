(function() {
  'use strict';
  angular
    .module('vimeoTest2')
    .controller('CategoryController', CategoryController);

  /** @ngInject */
  function CategoryController($log, videos) {
    this.videos = videos;

    //$log.debug('asdfasdfasdf');
    //$log.debug(videos);
    //$log.debug('asdfasdfasdf');
    //this.videos = CategoriesFactory.getVideos($stateParams.categoryId).then(function(response){$log.debug(response);});



  }
})();