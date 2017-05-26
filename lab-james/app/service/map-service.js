'use strict';

require('angular')
.module('ngAdventure')
.factory('mapService', ['$log', function($log) {
  $log.debug('Map Service');

  let service = {};

  service.mapData = {
    camp: {
      desc: 'You are standing in a camp that looks to have been used for a few days already. It sits up against a cliff face to the North. To the South, you see a path through a thick forest, but do not see where it ends. To the East you see where you traveled from having followed the edge of the forest. To the West, you notice the glint of water from what appears to be a lake far in the distance.',
      south: 'forestPath',
      west: 'lake',
    },
    forestPath: {
      desc: 'message from trail',
      north: 'cabin',
      east: 'gate',
      south: 'pit',
    },
    pit: {
      desc: 'welcome to the pit',
      north: 'trail',
    },
    gate: {
      desc: 'message from the gate',
      west: 'trail',
      east: 'castle',
    },
    castle: {
      desc: 'message from the castle',
      west: 'gate',
      south: 'corridor',
    },
    corridor: {
      desc: 'welcome to the cor',
      north: 'castle',
      east: 'snackroom',
    },
    snackroom: {
      desc: 'welcome to the snackroom',
      west: 'corridor',
    },
  };
  return service;
}]);
