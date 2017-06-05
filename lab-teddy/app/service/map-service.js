'use strict';

require('angular')
.module('ngAdventure')
.factory('mapService', ['$log', function($log) {
  $log.debug('Map Service');

  let service = {};

  service.mapData = {
    forest: {
      desc: 'Welcome to the forest',
      south: 'cabin',
      north: 'trail',
      east: 'elves',
      west: 'castle',
    },
    trail: {
      desc: 'North Trail',
      north: 'dragon',
      south: 'forest',
    },
    dragon: {
      desc: 'Dragon Ate You',
      south: 'trail',
    },
    cabin: {
      desc: 'You find a new Home',
      north: 'forest',
    },
    castle: {
      desc: 'Welcome to the Castle',
      east: 'forest',
    },
    elves: {
      desc: 'We Cast a spell on you',
      west: 'forest',
    },
  };
  return service;
}]);
