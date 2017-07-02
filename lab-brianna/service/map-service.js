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
      desc: 'The dark mountains of Skye, dread carefully',
      west: 'Riverbroke',
      east: 'Fairy Pools'
    },
    'Fairy Pools': {
      desc: 'A safe haven away from the dark mountains, enjoy the pools of the Fairies.',
      west: 'Black Cullins',
      south: 'Dunvegan Castle'
    },
    'Dunvegan Castle': {
      desc: 'You\'ve arrived at the Clan of Dunvegan\'s castle',
      north: 'Fairy Pools',
      west: 'The Bridge-to-No-Where'
    },
    'The Bridge-to-No-Where' : {
      desc: 'It\'s the end of the road',
      east: 'Dunvegan Castle'
    }
  };
  return service;
}]);
