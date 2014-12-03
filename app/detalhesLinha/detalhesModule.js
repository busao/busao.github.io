(function() {
  'use strict';

  angular.module('busao.detalhes', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/detalhes', {
      templateUrl: 'detalhesLinha/detalhes.html',
      controller: 'DetalhesController'
    });
  }])

  .controller('DetalhesController', ['detalhesService', DetalhesController]);

  function DetalhesController(detalhesService) {
    var detalhesCtrl = this;

    detalhesCtrl.getLinhaAtual = getLinhaAtual;

    function getLinhaAtual() {
      return detalhesService.getLinhaOnibus();
    }
  }

})();
