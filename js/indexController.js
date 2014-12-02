(function () {
  'use strict';

  angular
  .module('busao')
  .controller('IndexController', ['linhasService', IndexController]);

  function IndexController(linhasService) {
    var index = this;

    index.getLinhas = getLinhas;
    index.isAlgumaLinhaSelecionada = isAlgumaLinhaSelecionada;
    index.setLinhaAtual = setLinhaAtual;
    index.linhaAtual = null;
    index.linhas = [];
    index.query = '';

    function getLinhas(query) {
      linhasService.pesquisarLinhas(query, function(data) {
        index.linhas = data;
      });
    }

    function isAlgumaLinhaSelecionada() {
      return index.linhaAtual;
    }

    function setLinhaAtual(linha) {
      index.linhaAtual = linha;
      console.log('Linha ' + linha.numero + ' selecionada.');
    }
  }

})();
