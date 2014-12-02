(function() {
  'use strict';

  angular
  .module('busao')
  .directive('formLinhas', formLinhas);

  function formLinhas() {
    return {
      restrict: 'E',
      templateUrl: 'form-linhas.html'
    };
  }

})();
