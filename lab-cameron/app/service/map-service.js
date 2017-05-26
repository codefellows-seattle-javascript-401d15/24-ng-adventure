'use strict';

require('angular')
.module('horrorHouse')
.factory('mapService', ['$log', function($log) {
  $log.debug('Map Service');

  let service = {};

  service.mapData = {
    courtyard: {
      desc: 'in the courtyard',
      north: '',
      west: 'mainHall',
      east: '',
      south: '',
    },
    mainHall: {
      desc: 'in the main hall',
      north: 'library',
      west: '',
      east: 'courtyard',
      south: 'diningRoom',
    },
    diningRoom: {
      desc: 'in the dining room',
      north: 'mainHall',
      west: 'kitchen',
      east: '',
      south: '',
    },
    library: {
      desc: 'in the library',
      north: '',
      west: 'corridor',
      east: '',
      south: 'mainHall',
    },
    kitchen: {
      desc: 'in the kitchen',
      north: '',
      west: '',
      east: 'diningRoom',
      south: 'basement',
    },
    corridor: {
      desc: 'in the corridor',
      north: '',
      west: 'laboratory',
      east: 'library',
      south: '',
    },
    basement: {
      desc: 'in the basement',
      north: 'kitchen',
      west: 'cellar',
      east: '',
      south: '',
    },
    cellar: {
      desc: 'This must be the cellar; typical, no lights. You close the door behind you and take two more steps inside. A light clatter of chains approaches ever closer, along with a tingling scent of rotting flesh. You turn back for the door only to find cold, gray cement. Too late...',
      north: '',
      west: '',
      east: 'basement',
      south: '',
    },
    catacombs: {
      desc: 'in the catacombs',
      north: 'laboratory',
      west: '',
      east: '',
      south: '',
    },
    laboratory: {
      desc: 'in the laboratory',
      north: 'tunnels',
      west: '',
      east: 'corridor',
      south: 'catacombs',
    },
    tunnels: {
      desc: 'reached the tunnels!',
      north: '',
      west: '',
      east: '',
      south: 'laboratory',
    },
  };

  return service;
}]);
