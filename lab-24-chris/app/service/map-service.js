'use strict';

require('angular')
.module('ngAdventure')
.factory('mapService', ['$log', function($log) {
  $log.debug('Map Service');

  let service = {};

  service.mapData = {
    clearing: {
      desc: 'After making it out of the forest to the north\nyou find yourself in a clearing',
      north: 'forestEntranceWest',
      east: 'windingPath',
      south: 'pond',
      west: 'pathToHill',
    },
    forestEntranceWest: {
      desc: 'You just spent two treacherous days and nights in here',
      south: 'clearing',
    },
    pond: {
      desc: 'There is a nice little pond',
      north: 'clearing',
    },
    windingPath: {
      desc: 'You walk down a long, winding path...\nNo where to go but foward',
      east: 'forkInThePath',
    },
    forkInThePath: {
      desc: 'After another mile or so you come to a \nfork in the path...North or East',
      north: 'forestEntranceEast',
      east: 'steepRavine',
    },
    forestEntranceEast: {
      desc: 'You just spent two treacherous days and nights in here',
      south: 'forkInThePath',
    },
    steepRavine: {
      desc: 'You lost your footing and fall.........\nto your DEATH!',
      west: 'forkInThePath',
    },
    pathToHill: {
      desc: 'Straight ahead you see a hill',
      east: 'clearing',
      west: 'hill',
    },
    hill: {
      desc: 'Straight ahead you see a river \nand there is a path to your left',
      east: 'pathToHill',
      south: 'pathToShack',
      west: 'unpassableRiver',
    },
    unpassableRiver: {
      desc: 'Unfortunately you are unprepaired, the river sweeps you away',
      east: 'hill',
    },
    pathToShack: {
      desc: 'Ahead you see an old overgrown shack',
      north: 'hill',
      south: 'shack',
    },
    shack: {
      desc: 'You are in the shack',
      north: 'pathToShack',
    },
  };
  return service;
}]);
