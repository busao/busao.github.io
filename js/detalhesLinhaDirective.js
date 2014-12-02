(function() {
  'use strict';

  angular
    .module('busao')
    .directive('detalhesLinha', detalhesLinha);

  function detalhesLinha() {
    return {
      restrict: 'E',
      templateUrl: 'detalhes-linha.html'
    };
  }

})();
