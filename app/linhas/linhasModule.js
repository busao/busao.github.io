(function() {
  'use strict';

  angular.module('busao.linhas', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/linhas', {
      templateUrl: 'linhas/linhas.html',
      controller: 'LinhasController'
    });
  }])

  .controller('LinhasController', ['linhasService', LinhasController]);

  function LinhasController(linhasService) {
    var linhasCtrl = this;

    linhasCtrl.getLinhas = getLinhas;
    linhasCtrl.isAlgumaLinhaSelecionada = isAlgumaLinhaSelecionada;
    linhasCtrl.setLinhaAtual = setLinhaAtual;
    linhasCtrl.linhaAtual = null;
    linhasCtrl.linhas = [];
    linhasCtrl.query = '';

    function getLinhas(query) {
      linhasService.pesquisarLinhas(query, function(data) {
        linhasCtrl.linhas = data;
      });
    }

    function isAlgumaLinhaSelecionada() {
      return linhasCtrl.linhaAtual;
    }

    function setLinhaAtual(linha) {
      linhasCtrl.linhaAtual = linha;
      console.log('Linha ' + linha.numero + ' selecionada.');
    }
  }

})();
