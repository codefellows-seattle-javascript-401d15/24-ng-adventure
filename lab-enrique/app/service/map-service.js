'use strict';

require('angular')
.module('ngAdventure')
.factory('mapService',['$log', function($log) {
  $log.debug('Map Service');

let service = {};

service.mapData = {
  cabin:{
    desc: 'message from cabin',
    south:'trail'
  },
  trail: {
    desc: 'message from trail',
    north: 'cabin',
    east: 'gate',
    south: 'pit'
  },
  pit: {
    desc: 'welcome to the pit',
    north: 'trail'
  },
  gate:{
    desc: 'gate here',
    west: 'trail',
    east: 'castle'
  },
  castle: {
    desc: 'castlehere',
    west: 'gate',
  }
}
return service;
}]);
