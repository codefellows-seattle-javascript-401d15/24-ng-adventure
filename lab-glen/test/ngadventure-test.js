'use strict';

const angular = require('angular');
require('angular-mocks');

describe('ng-adventure functionality', function () {

  describe('testing gamepad', function() {
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
      expect(this.gamepadCtrl.directions).toContain('north');
      expect(this.gamepadCtrl.directions).toContain('south');
      expect(this.gamepadCtrl.directions).toContain('east');
      expect(this.gamepadCtrl.directions).toContain('west');
    });
  });

});
