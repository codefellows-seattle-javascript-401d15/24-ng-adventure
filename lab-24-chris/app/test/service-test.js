'use strict';

const angular = require('angular');
require('angular-mocks');
// const playerService = require('../service/player-service');

describe('testing ngAdventure', function() {
  beforeEach(() => {
    angular.mock.module('ngAdventure');
    // angular.mock.inject(($rootScope, $controller) => {
    //   this.$rootScope = $rootScope;
    //   this.playerCtrl = new $controller('playerInfoCtrl');
    //   this.playerCtrl.$onInit();
    // });
  });

  // afterEach(() => this.$rootScope.$apply());

  it('should pass', done => {
    console.log('//  ::::>>>>>>>>>> TEST <<<<<<<<<<:::: //');
    console.log(this);
    expect(true).toEqual(true);
    done();
  });
});
