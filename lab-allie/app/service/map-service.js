'use strict';

require('angular')
.module('ngAdventure')
.factory('mapService', ['$log', function($log) {
  $log.debug('#Map service');
  
  let service = {};
  
  service.mapData = {
    cabin: {
      description: 'Message from cabin',
      south: 'trail',
    },
    trail: {
      description: 'Message from trail',
      north: 'cabin',
      east: 'gate', 
      south: 'pit',
    },
  };
  
  return service;
}]);