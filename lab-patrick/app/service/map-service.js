'use strict';

require('angular')
.module('ngAdventure')
.factory('mapService', ['$log', function($log) {
  $log.debug('Map Service');

  let service = {};

  service.mapData = {
    Babbage: {
      desc: 'Start',
      south: 'Lovelace',
    },
    Lovelace: {
      desc: 'Oh no! Data Structures are attacking CodeFellows! I know, weird right. No time to question it just pick a direction and RUNNNNNN!',
      north: 'Babbage',
      east: 'Hopper',
      south: 'Kitchen',
    },
    Kitchen: {
      desc: 'The Data Sctructures have the kitchen on lockdown. Doesnt look like youre getting out this way. Which direction will you go?',
      north: 'Lovelace',
    },
    Hopper: {
      desc: 'You make it into Hopper. Things are looking grim. You can hear the Data Scrutures frustrating you classmates outside. Which way do you go?',
      west: 'Lovelace',
      east: 'Turing',
    },
    Turing: {
      desc: 'You make it to the Turing room. ',
      west: 'Hopper',
      south: 'Offices',
    },
    Phonebooths: {
      desc: 'welcome to the cor',
      north: 'Turing',
      east: 'Offices',
    },
    Offices: {
      desc: 'welcome to the Offices',
      north: 'Turning',
      west: 'Phonebooths',
      south: 'Broken Window',
    },
    'Broken Window':{
      desc: 'You jump out the broken window and escape to freedom! Instant sunburn from never eeing the sun. ',
      west: 'Phonebooths',
    },
  };
  return service;
}]);
