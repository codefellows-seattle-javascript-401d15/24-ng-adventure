'use strict';

const angular = require('angular');
require('angular-mocks');

describe('game-pad controller', function() {
  beforeEach(() => {
    angular.mock.module('ngAdventure');
    angular.mock.inject(($rootscope, $controller) => {
      this.$rootscope = $rootscope;
      this.gamepadCtrl = new $controller('gamepadCtrl');
    });
  });
  afterEach(() => this.$rootscope.$apply());

  describe('initial values', () => {
    expect(this.gamepadCtrl.directions).toEqual(['north', 'south', 'east', 'west']);
    // expecct(this.gamepadCtrl.)
  });
});
