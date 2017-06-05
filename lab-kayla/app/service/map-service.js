'use strict'

require('angular')
.module('ngAdventure')
.factory('mapService', ['$log', function($log) {
  $log.debug('Map Service')

  let service = {}

  service.mapData = {
    cabin: {
      desc: 'message from cabin',
      south: 'trail'
    },
    trail: {
      desc: 'message from the trail',
      north: 'cabin',
      east: 'gate',
      south: 'pit'
    },
    pit: {
      desc: 'you are in a pit',
      north: 'trail'
    },
    gate: {
      desc: 'you have reached the gate',
      west: 'trail',
      east: 'castle'
    },
    castle: {
      desc: 'Welcome to the castle',
      west: 'gate',
      south: 'corridor'
    },
    corridor: {
      desc: 'you are in the corridor',
      north: 'castle',
      east: 'great hall'
    },
    great_hall: {
      desc: 'you have walked into the great hall',
      west: 'corridor',
      north: 'treasure room'
    },
    treasure_room: {
      desc: 'You have reached the room of treasures',
      south: 'great hall'
    }
  }
  return service
}])
