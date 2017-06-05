'use strict';

require('angular')
.module('ngAdventure')
.component('history', {
  template: require('./history.html'),
  controllerAs: 'historyCtrl',
  controller: ['$log', 'historyService', function($log, historyService){
    $log.debug('#historyCtrl');


    this.openHistory = function(){
      this.history = historyService.history;
    };
    this.closeHistory = function(){
      this.history= null;
    };
  }],
});
