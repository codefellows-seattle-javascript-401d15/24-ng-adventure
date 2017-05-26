'use strict';

require('angulare')
.module('ngAdventure')
.factory('map-service', ['$log', function($log){
  $log.debug('#map-service');

  let service = {};

  service.mapData = {
    cabin: {
      desc: 'test msg from cabin',
      south: 'trail',
    },
    trail: {
      desc: 'test msg from trail',
      north: 'cabin',
      east: 'gate',
      south: 'pit',
    },
    pit: {
      desc: 'test msg from pit',
      north: 'trail',
    },
    gate: {
      desc: 'test msg from gate',
      west: 'trail',
      east: 'castle',
    },
    castle: {
      desc: 'test msg from castle',
      west: 'gate',
    },
  };
  return service;
}]);
