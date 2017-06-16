'use strict';

require('angular')
.module('ngAdventure')
.factory('mapService', ['$log', function($log){
  $log.debug('Map Service');

  let service = {};

  service.mapData = {
    counter: {
      desc: 'Front Counter',
      down: 'lobby',
    },
    lobby: {
      desc: 'Disgusting Lobby',
      up: 'counter',
      left: 'bathroom',
      right: 'tv',
      down: 'parkinglot',
    },
    parkinglot: {
      desc: 'Parking Lot',
      up:'lobby',
    },
    bathroom: {
      desc: 'Filthy Unisex Bathroom',
      right: 'lobby',
    },
    tv: {
      desc: 'a 30" crt television playing CNN',
      left: 'lobby',
    },
  };
  return service;
}]);
