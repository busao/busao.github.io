(function() {
  'use strict';

  describe('Módulo busao.linhas', function() {

    beforeEach(module('busao'));

    describe('LinhasController', function() {
      var $httpBackend, linhasCtrl, detalhesService;

      beforeEach(module('busao.linhas'))

      beforeEach(inject(function($controller, $rootScope, _$httpBackend_, _detalhesService_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('https://busao.herokuapp.com/get/linhas/806')
          .respond(linha806);

        detalhesService = _detalhesService_;
        linhasCtrl = $controller('LinhasController', {$scope: $rootScope.$new()});
      }));

      afterEach(function() {
        $httpBackend.verifyNoOutstandingRequest();
      });


      it('deveria estar definido', function() {
        expect(linhasCtrl).toBeDefined();
        expect(linhasCtrl.getLinhas).toBeDefined();
        expect(linhasCtrl.setLinhaAtual).toBeDefined();
      });

      it('deveria ter um estado inicial', function() {
        expect(linhasCtrl.linhas.length).toEqual(0);
        expect(linhasCtrl.query).toEqual("");
      });

      it('deveria salvar a linha no detalhesService', function() {
        linhasCtrl.setLinhaAtual(linha806[0]);
        expect(detalhesService.getLinhaOnibus).toBeDefined();
        expect(detalhesService.getLinhaOnibus()).toBe(linha806[0]);
      });

      it('deveria receber os dados da consulta por 806', function() {
        expect(linhasCtrl.getLinhas).toBeDefined();

        linhasCtrl.getLinhas('806');
        $httpBackend.flush();

        expect(linhasCtrl.linhas).toBeDefined();
        expect(linhasCtrl.linhas).toEqual(linha806);
      });

    });
  });

  var linha806 = [{"volta": ["LINHA CIRCULAR ( SENTIDO B )", "T. JACARAIPE", "RUA H\u00c9LIO VIANA", "AV. R\u00d4MULO CASTELLO", "AV. ABDO SAAD", "RODOVIA ES-010", "AV. EDVALDO LIMA", "RUA GUILHERME BECKER", "RUA REIS MAGOS", "RUA ANTERO DA ROCHA PIMENTEL", "RUA CEL.  AUGUSTO CALMON", "AV. CAPIT\u00c3O BLEY", "RUA PONTO BELO", "RUA IBITIRAMA", "AV. D", "AV. BELO HORIZONTE", "AV. NOROESTE", "RUA V", "RUA LINHARES", "AV. BELO HORIZONTE", "RUA F", "AV. COLATINENSE", "AV. CAPIT\u00c3O BLEY", "RUA CEL.  AUGUSTO CALMON", "RUA ANTERO DA ROCHA PIMENTEL", "RUA REIS MAGOS", "RUA GUILHERME BECKER", "AV. EDVALDO LIMA", "RODOVIA ES-010", "AV. ABDO SAAD", "RUA S\u00c3O PEDRO", "AV. TALMA RODRIGUES RIBEIRO", "T. JACARAIPE"], "nome": "0806 - T. JACARAIPE / NOVA ALMEIDA VIA PARQUE GAIVOTAS (CIRCULAR)", "score": 14.444444444444445, "numero": "0806", "_id": "547b1e4e1f698f6eff556fec", "ida": ["LINHA CIRCULAR ( SENTIDO A )", "T. JACARAIPE", "RUA H\u00c9LIO VIANA", "AV. R\u00d4MULO CASTELLO", "AV. ABDO SAAD", "RODOVIA ES-010", "AV. EDVALDO LIMA", "RUA GUILHERME BECKER", "RUA REIS MAGOS", "RUA ANTERO DA ROCHA PIMENTEL", "RUA CEL.  AUGUSTO CALMON", "AV. CAPIT\u00c3O BLEY", "AV. COLATINENSE", "RUA F", "AV. BELO HORIZONTE", "RUA LINHARES", "RUA V", "AV. NOROESTE", "AV. BELO HORIZONTE", "AV. D", "RUA IBITIRAMA", "RUA PONTO BELO", "AV. BEIRA RIO", "AV. COLATINENSE", "AV. CAPIT\u00c3O BLEY", "RUA CEL.  AUGUSTO CALMON", "RUA ANTERO DA ROCHA PIMENTEL", "RUA REIS MAGOS", "RUA GUILHERME BECKER", "AV. EDVALDO LIMA", "RODOVIA ES-010", "AV. ABDO SAAD", "RUA S\u00c3O PEDRO", "AV. TALMA RODRIGUES RIBEIRO", "T. JACARAIPE"]}];
})();
