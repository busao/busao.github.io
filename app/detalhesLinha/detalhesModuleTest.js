(function() {
  'use strict';

  describe('busao.detalhes module', function() {

    beforeEach(module('busao'));

    describe('DetalhesController', function(){
      var detalhesCtrl, detalhesService;

      beforeEach(module('busao.detalhes'));

      beforeEach(inject(function($controller, _detalhesService_, $rootScope) {
        detalhesService = _detalhesService_;
        detalhesCtrl = $controller('DetalhesController', {$scope: $rootScope.$new()});
      }));

      it('deveria estar definida', function() {
        expect(detalhesCtrl).toBeDefined();
      });

      it('deveria receber os dados de detalhesService', function() {
        var linha = {
          nome: "0806 - T. JACARAIPE / NOVA ALMEIDA VIA PARQUE GAIVOTAS (CIRCULAR)",
          numero: "0806"
        };

        detalhesService.setLinhaOnibus(linha);
        expect(detalhesCtrl.getLinhaAtual()).toBeDefined();
        expect(detalhesCtrl.getLinhaAtual()).toBe(linha);
      });

    });
  });
})();
