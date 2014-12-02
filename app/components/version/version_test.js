'use strict';

describe('busao.version module', function() {
  beforeEach(module('busao.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
