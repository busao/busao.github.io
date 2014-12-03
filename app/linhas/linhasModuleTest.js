(function() {
  'use strict';

  describe('Módulo busao.linhas', function() {

    beforeEach(module('busao.linhas'));

    describe('LinhasController', function() {

      it('deveria estar definido', inject(function($controller) {
        var scope = {};
        var linhasCtrl = $controller('LinhasController', {$scope:scope});
        expect(linhasCtrl).toBeDefined();
        expect(linhasCtrl.getLinhas).toBeDefined();
        expect(linhasCtrl.isAlgumaLinhaSelecionada).toBeDefined();
        expect(linhasCtrl.setLinhaAtual).toBeDefined();
      }));

      it('deveria ter um estado inicial', inject(function($controller) {
        var scope = {};
        var linhasCtrl = $controller('LinhasController', {$scope:scope});
        expect(linhasCtrl.linhas.length).toEqual(0);
        expect(linhasCtrl.query).toEqual("");
      }));

    });
  });
})();
