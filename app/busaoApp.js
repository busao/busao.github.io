(function() {
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('busao', [
    'ngRoute',
    'busao.linhas',
    'busao.detalhes',
    'busao.version'
  ]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/linhas'});
  }]);

})();
