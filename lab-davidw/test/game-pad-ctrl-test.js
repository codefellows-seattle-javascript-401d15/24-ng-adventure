'use strict';


const angular = require('angular');
require('angular-mocks');

describe('GamePadController', function() {
  beforeEach(() => {
    angular.mock.module('ngAdventure');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.gamePadCtrl = new $controller('GamePadController');
      this.gamePadCtrl.$onInit();
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should exist', () => {
    expect(this.gamePadCtrl).toBeDefined();
  });

  it('should have an array of directions: north, east, south, west', () => {
    expect(this.gamePadCtrl.directions).toEqual(jasmine.any(Array));
    expect(this.gamePadCtrl.directions[0]).toEqual(jasmine.any(String));
    expect(this.gamePadCtrl.directions[1]).toEqual(jasmine.any(String));
    expect(this.gamePadCtrl.directions[2]).toEqual(jasmine.any(String));
    expect(this.gamePadCtrl.directions[3]).toEqual(jasmine.any(String));
    expect(this.gamePadCtrl.directions[0]).toBe('north');
    expect(this.gamePadCtrl.directions[1]).toBe('east');
    expect(this.gamePadCtrl.directions[2]).toBe('south');
    expect(this.gamePadCtrl.directions[3]).toBe('west');
  });

  it('should have an initial moveDirection of north', () => {
    expect(this.gamePadCtrl.moveDirection).toBe('north');
  });
});

describe('movePlayer', () => {

  it('should exist', () => {
    expect(this.gamePadCtrl.movePlayer).toBeDefined();
    expect(this.gamePadCtrl.movePlayer).toEqual(jasmine.any(Function));

  });
});
