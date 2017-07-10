'use strict';

require('angular')
require('angular-mocks')

describe('testing ngAdventure', function() {
  describe('testing game-pad controller', function() {
    beforeEach(() => {
      angular.mock.module('ngAdventure')
      angular.mock.inject(($rootScope, $componentController, playerService) => {
        this.$rootScope = $rootScope
        this.gamepadCtrl = new $componentController('gamePad')
        this.gamepadCtrl.playerService = playerService
        this.gamepadCtrl.$onInit()
      })
    })
    afterEach(() => this.$rootScope.$apply());

    it('should have initial functionality and properties', () => {
      expect(this.gamepadCtrl.directions).toContain('south')
      expect(this.gamepadCtrl.directions[0]).toEqual('north')
      expect(this.gamepadCtrl.directions).toEqual(jasmine.any(Array))
    })
    it('should successfully "move" when movePlayer function is called', () => {
      this.gamepadCtrl.moveDirection = 'south'
      this.gamepadCtrl.movePlayer()
      expect(this.gamepadCtrl.playerService.player.location).toEqual('park')
      expect(this.gamepadCtrl.playerService.player.name).toEqual('Kaylee')
      expect(this.gamepadCtrl.playerService.player.hp).toEqual(11);
    })
  })

  describe('testing history controller', function() {
    beforeEach(() => {
      angular.mock.module('ngAdventure')
      angular.mock.inject(($rootScope, $componentController) => {
        this.$rootScope = $rootScope
        this.historyCtrl = new $componentController('history')
        this.historyCtrl.$onInit()
      })
    })
    afterEach(() => this.$rootScope.$apply())

    it('should have initial functionality and properties', () => {
      expect(this.historyCtrl.history[0].location).toEqual('house')
      expect(this.historyCtrl.history[0].turn).toEqual(0);
      expect(this.historyCtrl.history).toEqual(jasmine.any(Array))
    })
  })

  describe('testing player-info controller', function() {
    beforeEach(() => {
      angular.mock.module('ngAdventure')
      angular.mock.inject(($rootScope, $componentController) => {
        this.$rootScope = $rootScope
        this.playerInfoCtrl = new $componentController('playerInfo')
        this.playerInfoCtrl.$onInit()
      })
    })
    afterEach(() => this.$rootScope.$apply())

    it('should have initial functionality and properties', () => {
      expect(this.playerInfoCtrl.player.name).toEqual('Kaylee')
      expect(this.playerInfoCtrl.player.location).toEqual('house')
      expect(this.playerInfoCtrl.player.desc).toEqual('Welcome to Kay\'s ngAdventure!')
      expect(this.playerInfoCtrl.player.hp).toEqual(10)
      expect(this.playerInfoCtrl.player).toEqual(jasmine.any(Object))
    })
  })
})

//Why do we only need to inject playerService into our mock data when testing the gamepadCtrl, and not the historyCtrl or playerInfoCtrl?
