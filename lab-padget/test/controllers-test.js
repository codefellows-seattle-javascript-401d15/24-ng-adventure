'use strict';

const angular = require('angular');
require('angular-mocks');

describe('testing controller', function(){
  beforeEach(() => {
    angular.mock.module('ngAdventure');
  });

  afterEach(() => this.$rootScope.$apply());

  it('should pass', () => {
    expect(true).toEqual(true);
  });
  
});
