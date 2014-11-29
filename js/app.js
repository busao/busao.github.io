(function() {
  var app = angular.module('busao', []);

  app.controller('IndexController', ['$http', function($http) {
    var index = this;

    index.linhas = [];

    $http.get('/linhas.json').success(function(data) {
      index.linhas = data;
    });

  }]);
})();
