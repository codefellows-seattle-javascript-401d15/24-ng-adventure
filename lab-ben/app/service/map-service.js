'use strict';

require('angular')
.module('ngAdventure')
.factory('mapService', ['$log', function($log) {
  $log.debug('Map Service');

  let service = {};

  service.mapData = {
    cell: {
      desc: 'Inside the cell',
      north: 'dungeon',
    },
    dungeon: {
      desc: 'Dungeon with multiple cells',
      south: 'cell',
      north: 'dungeonStairs',
      east: 'wardenOffice',
      west: 'endlessHallway',
    },
    endlessHallway: {
      desc: 'is there an end?',
      west: 'endlessHallway',
      north: 'endlessHallway',
      south: 'endlessHallway',
      east: 'dungeon',
    },
    dungeonStairs: {
      desc: 'Dark and Smelly',
      west: 'swamp',
      south: 'dungeon',
    },
    swamp: {
      desc: 'theres a snake in your boot',
      east: 'dungeonStairs',
      north: 'death',
      west: 'death',
      south: 'freedom',
    },
    wardenOffice: {
      desc: 'why did you come here?',
      west: 'dungeon',
    },
    death: {
      desc: 'a wrong turn lead to your death',
    },
    freedom: {
      desc: 'You managed to escape your prison.',
      north: 'freedom',
      south: 'freedom',
      west: 'freedom',
      east: 'freedom',
    },
  };

  return service;
}]);
