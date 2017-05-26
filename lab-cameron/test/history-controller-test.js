'use strict';

const angular = require('angular');
require('angular-mocks');

describe('testing HistoryController', function() {
  beforeEach(() => {
    angular.mock.module('horrorHouse');
    angular.mock.inject(($rootScope, $componentController) => {
      this.$rootScope = $rootScope;
      this.historyCtrl = new $componentController('history');
    });
  });
  afterEach(() => this.$rootScope.$apply());

  it('should pass', () => {
    expect(true).toEqual(true);
  });

  it('should have an initialState', () => {
    expect(typeof this.historyCtrl.history).toEqual('Array');
    expect(this.historyCtrl.history[0].desc).toEqual('welcome to my text adventure!');
  });
});
