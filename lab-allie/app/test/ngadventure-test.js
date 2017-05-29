'use strict';

const angular = require('angular');
require('angular-mocks');

describe('Testing the ngAdventure game', function () {
  
  describe('Testing the gamepad controller component', () => {
    beforeEach(() => {
      angular.mock.module('ngAdventure');
      angular.mock.inject(($rootScope, $componentController) => {
        this.$rootScope = $rootScope;
        this.gamepadCtrl = new $componentController('gamePad');
        this.gamepadCtrl.$onInit();
      });
    });
    
    afterEach(() => this.$rootScope.$apply());
    
    it('should have an initial state', () => {
      expect(this.gamepadCtrl.directions).toEqual(jasmine.any(Array));
      expect(this.gamepadCtrl.directions).toContain('up');
      expect(this.gamepadCtrl.directions).toContain('down');
      expect(this.gamepadCtrl.directions).toContain('left');
      expect(this.gamepadCtrl.directions).toContain('right');
    });
    
    // fit('should move the player', () => {
    //   this.gamepadCtrl.movePlayer(this.down);
    //   expect(true).toBe(true);
    // });
  });
  
  describe('Testing the history controller component', () => {
    beforeEach(() => {
      angular.mock.module('ngAdventure');
      angular.mock.inject(($rootScope, $componentController) => {
        this.$rootScope = $rootScope;
        this.historyCtrl = new $componentController('history');
        this.historyCtrl.$onInit();
      });
    });
    
    afterEach(() => this.$rootScope.$apply());
    
    it('should have an initial state', () => {
      expect(this.historyCtrl.history).toEqual(jasmine.any(Array));
      expect(this.historyCtrl.history[0].turn).toEqual(0);
      expect(this.historyCtrl.history[0].description).toEqual('Welcome to ngAdventure!');
      expect(this.historyCtrl.history[0].location).toEqual('Garden');
      expect(this.historyCtrl.history[0].turn).toEqual(jasmine.any(Number));
    });
  });
  
  describe('Testing the player controller component', () => {
    beforeEach(() => {
      angular.mock.module('ngAdventure');
      angular.mock.inject(($rootScope, $componentController) => {
        this.$rootScope = $rootScope;
        this.playerInfoCtrl = new $componentController('playerInfo');
        this.playerInfoCtrl.$onInit();
      });
    });
    
    afterEach(() => this.$rootScope.$apply());
    
    it('should have an initial state', () => {
      expect(this.playerInfoCtrl.player).toEqual(jasmine.any(Object));
      expect(this.playerInfoCtrl.player.name).toEqual('Player 1');
      expect(this.playerInfoCtrl.player.location).toEqual('garden');
      expect(this.playerInfoCtrl.player.description).toEqual('You are in the Garden');
      expect(this.playerInfoCtrl.player.points).toEqual(100);
      expect(this.playerInfoCtrl.player.points).toEqual(jasmine.any(Number));
    });
  });
});