'use strict';

const angular = require('angular');
require('angular-mocks');


describe('testing ngAdventure controllers', function () {
  describe('testing game-pad controller', function () {
    beforeEach(() => {
      angular.mock.module('ngAdventure');
      angular.mock.inject(($rootScope, $componentController, playerService) => {
        this.$rootScope = $rootScope;
        this.gamepadCtrl.playerService = playerService;
        this.gamepadCtrl.$onInit();
      });
    });
    afterEach(() => this.$rootScope.$apply());

    it('should pass', () => {
      expect(true).toEqual(true);
    });

    it('should have an inital state', () => {
      expect(this.gamepadCtrl.directions).toContain('north');
      expect(this.gamepadCtrl.directions).toContain('east');
      expect(this.gamepadCtrl.directions).toContain('south');
      expect(this.gamepadCtrl.directions).toContain('west');

    });
  });
});
