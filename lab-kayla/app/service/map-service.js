'use strict'

require('angular')
.module('ngAdventure')
.factory('mapService', ['$log', function($log) {
  $log.debug('Map Service')

  let service = {}

  service.mapData = {
    cabin: {
      desc: 'message from cabin'
      south: 'trail'
    },
    trail: {
      desc:
      north:
      east:
      south:
    },
    pit: {
      desc:
      north:
    },
    gate: {
      desc:
      west:
      east:
    },
    castle: {
      desc:
      north:
    }
  }
}])
