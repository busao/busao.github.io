(function() {
  angular
    .module("busao.detalhes")
    .factory('detalhesService', [detalhesService]);

  function detalhesService() {
    var linhaOnibus = {};

    return {
      getLinhaOnibus: getLinhaOnibus,
      setLinhaOnibus: setLinhaOnibus
    };

    function getLinhaOnibus() {
      return linhaOnibus;
    }

    function setLinhaOnibus(linha) {
      linhaOnibus = linha;
    }

  }
})();
