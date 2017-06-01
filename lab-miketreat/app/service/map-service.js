'use strict';

require('angular')
.module('ngAdventure')
.factory('mapService', ['$log', function($log){
  $log.debug('#mapService');

  let service = {};

  service.mapData = {
    Cabin: {
      desc: 'Message from Cabin',
      South: 'Trail',
    },
    Trail: {
      desc: 'Message from Trail',
      North: 'Cabin',
      East: 'Gate',
      South: 'Pit',
    },
    Pit: {
      desc: 'Welcome to the Pit',
      North: 'Trail',
    },
    Gate: {
      desc: 'Message from the Gate',
      West: 'Trail',
      East: 'Castle',
    },
    Castle: {
      desc: 'Message from the Castle',
      West: 'Gate',
      South: 'Corridor',
    },
    Corridor: {
      desc: 'Welcome to the cor',
      North: 'Castle',
      East: 'Snackroom',
    },
    Snackroom: {
      desc: 'Welcome to the Snackroom',
      West: 'Corridor',
    },
  };
  return service;
}]);
