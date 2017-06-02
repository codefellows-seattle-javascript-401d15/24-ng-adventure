'use strict';

const angular = require('angular');
require('angular-mocks');

describe('Testing the ngAdventure game', function () {
  
  describe('Testing the gamepad controller component', () => {
    beforeEach(() => {
      angular.mock.module('ngAdventure');
      angular.mock.inject(($rootScope, $componentController, playerService) => {
        this.$rootScope = $rootScope;
        this.gamepadCtrl = new $componentController('gamePad');
        this.gamepadCtrl.playerService = playerService;
        this.gamepadCtrl.$onInit();
      });
    });
    
    afterEach(() => this.$rootScope.$apply());
    
    it('should have an initial state', () => {
      expect(this.gamepadCtrl.directions).toEqual(jasmine.any(Array));
      
      expect(this.gamepadCtrl.directions).toContain('up');
      expect(this.gamepadCtrl.directions[0]).toEqual('up');
      expect(this.gamepadCtrl.directions[0]).toEqual(jasmine.any(String));
      
      expect(this.gamepadCtrl.directions).toContain('down');
      expect(this.gamepadCtrl.directions[1]).toEqual('down');
      expect(this.gamepadCtrl.directions[1]).toEqual(jasmine.any(String));
      
      expect(this.gamepadCtrl.directions).toContain('left');
      expect(this.gamepadCtrl.directions[2]).toEqual('left');
      expect(this.gamepadCtrl.directions[2]).toEqual(jasmine.any(String));

      expect(this.gamepadCtrl.directions).toContain('right');
      expect(this.gamepadCtrl.directions[3]).toEqual('right');
      expect(this.gamepadCtrl.directions[3]).toEqual(jasmine.any(String));
    });
    
    it('should move the player', () => {
      this.gamepadCtrl.moveDirection = 'down';
      this.gamepadCtrl.movePlayer();
      expect(this.gamepadCtrl.playerService.player.name).toEqual('Player 1');
      expect(this.gamepadCtrl.playerService.player.location).toEqual('courtyard');
      expect(this.gamepadCtrl.playerService.player.points).toEqual(101);
      
      expect(this.gamepadCtrl.playerService.history[0].turn).toEqual(1);
      expect(this.gamepadCtrl.playerService.history[0].location).toEqual('courtyard');
      expect(this.gamepadCtrl.playerService.history[0].location).not.toEqual('garden');
      expect(this.gamepadCtrl.playerService.history[0].previousLocation).toEqual('garden');
      expect(this.gamepadCtrl.playerService.history[0].description).toEqual('You are in the Courtyard');
      expect(this.gamepadCtrl.playerService.history[0].points).toEqual(101);
      
      expect(this.gamepadCtrl.playerService.history[1].turn).toEqual(0);
      expect(this.gamepadCtrl.playerService.history[1].location).toEqual('Garden');
      expect(this.gamepadCtrl.playerService.history[1].previousLocation).not.toEqual('garden');
      expect(this.gamepadCtrl.playerService.history[1].description).toEqual('Welcome to ngAdventure!');
      expect(this.gamepadCtrl.playerService.history[1].points).toEqual(100);
    });
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
      expect(this.historyCtrl.history[0].turn).toEqual(jasmine.any(Number));
      
      expect(this.historyCtrl.history[0].description).toEqual('Welcome to ngAdventure!');      expect(this.historyCtrl.history[0].description).toEqual(jasmine.any(String));
      
      expect(this.historyCtrl.history[0].location).toEqual('Garden');      expect(this.historyCtrl.history[0].location).toEqual(jasmine.any(String));

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
      expect(this.playerInfoCtrl.player.name).toEqual(jasmine.any(String));
      
      expect(this.playerInfoCtrl.player.location).toEqual('garden');
      expect(this.playerInfoCtrl.player.location).toEqual(jasmine.any(String));
      
      expect(this.playerInfoCtrl.player.description).toEqual('You are in the Garden');
      expect(this.playerInfoCtrl.player.description).toEqual(jasmine.any(String));
      
      expect(this.playerInfoCtrl.player.points).toEqual(100);
      expect(this.playerInfoCtrl.player.points).toEqual(jasmine.any(Number));
    });
  });
});