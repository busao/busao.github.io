(function() {
  var app = angular.module('busao', []);

  app.controller('IndexController', ['$http', function($http) {
    var index = this;

    index.query = '';
    index.linhas = [];
    index.linhaAtual = null;

    index.getLinhas = function(query) {
      if (query.length > 2) {
        return $http.get('https://busao.herokuapp.com/get/linhas/' + query).success(function(data) {
          index.linhas = data;
        });
      } else {
        return [];
      }
    };

    index.setLinhaAtual = function(linha) {
      index.linhaAtual = linha;
      console.log('Linha ' + linha.numero + ' selecionada.');
    };

  }]);
})();
