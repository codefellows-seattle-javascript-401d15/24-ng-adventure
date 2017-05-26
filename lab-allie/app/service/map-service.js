'use strict';

require('angular')
.module('ngAdventure')
.factory('mapService', ['$log', function($log) {
  $log.debug('#Map service');
  
  let service = {};
  
  service.mapData = {
    garden: {
      description: 'You are in the Garden',
      down:'courtyard',
    },
    courtyard: {
      description: 'You are in the Courtyard',
      up:'garden',
      right: 'fountain',
    },
    fountain: {
      description: 'You are next to the Fountain',
      left: 'courtyard',
      right: 'livingRoom',
      down: 'entryway',
    },
    entryway: {
      description: 'You are in the Entryway',
      up: 'fountain',
      right: 'kitchen',
    },
    livingRoom: {
      description: 'You are in the Living Room',
      left:'rountain',
      right: 'backPatio',
      down: 'kitchen',
    },
    kitchen: {
      description: 'You are in the Kitchen',
      up:'livingRoom',
      left: 'entryway',
    },
    den: {
      description: 'You are in the Den',
      down: 'backPatio',
    },
    backPatio: {
      description: 'You are on the Back Patio',
      up:'den',
      left: 'livingRoom',
    },
  };
  
  return service;
}]);