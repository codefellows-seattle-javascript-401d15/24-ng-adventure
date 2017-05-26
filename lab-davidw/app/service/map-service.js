'use strict';

require('angular')
.module('ngAdventure')
.factory('mapService', ['$log', function($log) {
  $log.debug('Map Service');

  let service = {};

  service.mapData = {
    'dark room': {
      desc: 'This room is very dark.  There is a faint light to the south. ',
      south: 'hallway',
    },
    hallway: {
      desc: 'As you approach the light you see it is a hallway.  This hallway has a branch to the east or, continue to the south. ',
      south: 'hall south',
      east: 'hall-east',
    },
    'hall east': {
      desc: 'You turn to the east branch of the hallway, it is getting cold and you can hear the splashing and flowing water ahead',
      east: 'fountains',
    },
    'hall south': {
      desc: 'You turn to the south branch of the hallway, it is getting cold and you can see an archway ahead',
      south: 'portraits',
    },
    portraits: {
      desc: 'You step through the archway, into a room filled with portraits.  The eyes seem to follow you as you enter.',
      east: 'great hall',
    },
    fountains: {
      desc: 'You step through the archway, into a room filled with portraits.  The eyes seem to follow you as you enter.',
      east: 'moldy tapestry',
      south: 'great hall',
    },
    'great hall': {
      desc: 'You enter a great hall.  There is a throne to the south, and exits to the east, north and west.',
      north: 'fountains',
      east: 'chamber',
      south: 'vault hall',
      west: 'portraits',
    },
    chamber: {
      desc: 'You smell something fowl.  There\'s a draft here, but it is not enough to cut the stench of an unattended chamber-pot... ',
      east: 'vent shaft',
      west: 'great hall',
    },
    'vault hall': {
      desc: 'You have discovered a hidden hallway, behind the throne!  As you enter the hallway you find yourself in an intersection.  There is a glint to the south, a shine to the west, and a glimmer from the room to the west.',
      north: 'great hall',
      east: 'crown',
      south: 'gems',
      west: 'silver',
    },
  };
  return service;
}]);
