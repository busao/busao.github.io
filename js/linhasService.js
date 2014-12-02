(function() {
  'use strict';

  angular
    .module('busao')
    .service('linhasService', ['$http', LinhasService]);

  function LinhasService($http) {
    this.pesquisarLinhas = pesquisarLinhas;

    function pesquisarLinhas(query, callback) {
      if (query.length > 2) {
        $http.get('https://busao.herokuapp.com/get/linhas/' + query).success(function(data) {
          callback(data);
        });
      } else {
        callback([]);
      }
    }
  }

})();
