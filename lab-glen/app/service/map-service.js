'use strict';

require('angular')
.module('ngAdventure')
.factory('mapService', ['$log', function($log) {
  $log.debug('Map service');

  let service = {};

  service.mapData = {
    alley: {
      desc: 'A random alley on 3rd avenue',
      south: 'dumpster',
    },
    dumpster: {
      desc: 'This dumpster smells like piss',
      north: 'alley',
      east: 'house',
      south: 'van',
    },
    van: {
      desc: 'This rape van has no windows and a free candy sign',
      north: 'dumpster',
    },
    house: {
      desc: 'This is your parents house. They kicked you out 10 years ago!',
      west: 'dumpster',
      east: 'station',
    },
    station: {
      desc: 'This is a police station. The evidence room has crack!!',
      west: 'house',
      south: 'school',
    },
    school: {
      desc: 'Bums hangout at this school after hours, maybe someone dropped crack?',
      north: 'station',
      east: 'corner',
    },
    corner: {
      desc: 'This is the corner of 3rd ave and Pine. Plenty of crack here!',
      west: 'school',
    },
  };

  return service;
}]);
