'use strict';

const angular = require('angular');
const chai = require('chai');
const expect = chai.expect;
require('angular-mocks');

describe('ngAdventure', function() {
  beforeEach(() => {
    console.log('WAT');
    angular.mock.module('ngAdventure');
    angular.mock.inject(($rootScope, $componentController) => {
      this.$rootScope = $rootScope;
      this.gamepadCtrl = new $componentController('gamePad');
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should pass', function() {
    expect(true).to.equal(true);
  });
});

//TODO: Write mo' testss
