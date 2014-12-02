'use strict';

angular.module('busao.version', [
  'busao.version.interpolate-filter',
  'busao.version.version-directive'
])

.value('version', '0.1');
