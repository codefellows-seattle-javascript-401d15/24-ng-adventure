'use strict';

require('angular')
.module('ngAdventure')
.factory('mapService', ['$log', function($log) {
  $log.debug('Map Service');

  let service = {};

  service.mapData = {
    room1: {
      desc: 'message from room1',
      north: 'room2'
    },
    room2: {
      desc: 'message from room2',
      south: 'room1',
      east: 'room3',
      west: 'room5'
    },
    room3: {
      desc: 'welcome to room3',
      west: 'room2',
      south: 'room4'
    },
    room4: {
      desc: 'message from room4',
      north: 'room3'
    },
    room5: {
      desc: 'message from room5',
      west: 'room2',
      north: 'room6'
    },
    room6: {
      desc: 'welcome to room6',
      south: 'room5'
    }
  };
  return service;
}]);
