(function () {
  'use strict';

  angular
    .module('vimeoTest2')
    .filter('thousandSuffix', thousandSuffix);

  /** @ngInject */
  function thousandSuffix(vimeoAPI) {
    return function (input) {
      var decimals = vimeoAPI.DECIMALS;
      var exp,
        suffixes = ['k', 'M', 'G', 'T', 'P', 'E'];

      if (window.isNaN(input)) {
        return null;
      }

      if (input < 1000) {
        return input;
      }

      exp = Math.floor(Math.log(input) / Math.log(1000));

      return (input / Math.pow(1000, exp)).toFixed(decimals) + suffixes[exp - 1];
    };
  }
})();