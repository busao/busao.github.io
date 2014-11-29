(function() {
  var app = angular.module('busao', []);

  app.controller('IndexController', ['$http', function($http) {
    var index = this;

    index.query = '';
    index.linhas = [];

    index.getLinhas = function(query) {
      if (query.length > 2) {
        return $http.get('http://localhost:5000/get/linhas/' + query).success(function(data) {
          index.linhas = data;
        });
      } else {
        return [];
      }
    };

  }]);
})();
