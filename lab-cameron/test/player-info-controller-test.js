'use strict';

const angular = require('angular');
require('angular-mocks');

describe('testing PlayerInfoController', function() {
  beforeEach(() => {
    angular.mock.module('horrorHouse');
    angular.mock.inject(($rootScope, $componentController) => {
      this.$rootScope = $rootScope;
      this.playerInfoCtrl = new $componentController('playerInfo');
    });
  });
  afterEach(() => this.$rootScope.$apply());

  it('should pass', () => {
    expect(true).toEqual(true);
  });

  it('should have an initialState', () => {
    expect(typeof this.playerInfoCtrl.player).toEqual('Object');
    expect(this.playerInfoCtrl.player.name).toEqual('Cameron');
  });
});
