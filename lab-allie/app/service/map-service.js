'use strict';

require('angular')
.module('ngAdventure')
.factory('mapService', ['$log', function($log) {
  $log.debug('#Map service');
  
  let service = {};
  
  service.mapData = {
    room1: {
      description: 'You are in room 1',
      down:'room2',
    },
    room2: {
      description: 'You are in room 2',
      up:'room1',
      right: 'room3',
    },
    room3: {
      description: 'You are in room 3',
      left: 'room2',
      right: 'room5',
      down: 'room4',
    },
    room4: {
      description: 'You are in room 4',
      up: 'room3',
      right: 'room6',
    },
    room5: {
      description: 'You are in room 5',
      left:'room3',
      right: 'room8',
      down: 'room6',
    },
    room6: {
      description: 'You are in room 6',
      up:'room5',
      left: 'room4',
    },
    room7: {
      description: 'You are in room 7',
      down: 'room8',
    },
    room8: {
      description: 'You are in room 8',
      up:'room7',
      left: 'room5',
    },
  };
  
  return service;
}]);