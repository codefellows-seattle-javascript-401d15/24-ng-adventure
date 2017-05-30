'use strict';

require('angular')
.module('ngAdventure')
.factory('mapService', ['$log', function($log) {
  $log.debug('Map Service');

  let service = {};

  service.mapData = {
    Portree: {
      desc: 'Welcome to Portree.',
      south: 'Riverbroke'
    },
    Riverbroke: {
      desc: 'Grab a drink of fresh spring water but beware of the goblins.',
      north: 'Portree',
      east: 'Black Cullins',
      south: 'Bridge-To',
      west: 'Faerie Glen'
    },
    'Faerie Glen': {
      desc: 'Welcome to Faerie Glen where the witches and faeries reside in the hillsides of Mount Moar',
      east: 'Riverbroke'
    },
    'Black Cullins': {
      desc: '',
      west: 'trail',
      east: 'castle'
    },
    castle: {
      desc: 'message from the castle',
      west: 'gate',
      south: 'corridor'
    },
    corridor: {
      desc: 'welcome to the cor',
      north: 'castle',
      east: 'snackroom'
    },
    snackroom : {
      desc: 'welcome to the snackroom',
      west: 'corridor'
    }
  };
  return service;
}]);
