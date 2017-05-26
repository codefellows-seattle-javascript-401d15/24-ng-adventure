'use strict';

const angular = require('angular');
require('angular-mocks');

describe('testing GamePadController', function() {
  beforeEach(() => {
    angular.mock.module('horrorHouse');
    angular.mock.inject(($rootScope, $componentController) => {
      this.$rootScope = $rootScope;
      this.gamePadCtrl = new $componentController('gamePad');
    });
    console.log(this);
  });
  afterEach(() => this.$rootScope.$apply());

  it('should pass', () => {
    expect(true).toEqual(true);
  });

  it('should have an initialState', () => {
    expect(this.gamepadCtrl.moveDirection).toEqual('morth');
    expect(typeof this.gamepadCtrl.directions).toEqual('Array');
  });
});
