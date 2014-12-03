(function() {
  'use strict';

  angular.module('busao.linhas', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/linhas', {
      templateUrl: 'linhas/linhas.html',
      controller: 'LinhasController'
    });
  }])

  .controller('LinhasController', ['linhasService', 'detalhesService', LinhasController]);

  function LinhasController(linhasService, detalhesService) {
    var linhasCtrl = this;

    linhasCtrl.getLinhas = getLinhas;
    linhasCtrl.setLinhaAtual = setLinhaAtual;
    linhasCtrl.linhas = [];
    linhasCtrl.query = '';

    function getLinhas(query) {
      linhasService.pesquisarLinhas(query, function(data) {
        linhasCtrl.linhas = data;
      });
    }

    function setLinhaAtual(linha) {
      detalhesService.setLinhaOnibus(linha);
    }
  }

})();
