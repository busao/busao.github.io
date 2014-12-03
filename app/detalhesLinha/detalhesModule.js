(function() {
  'use strict';

  angular.module('busao.detalhes', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/detalhes', {
      templateUrl: 'detalhesLinha/detalhes.html',
      controller: 'DetalhesController'
    });
  }])

  .controller('DetalhesController', [DetalhesController]);

  function DetalhesController() {

  }

})();
