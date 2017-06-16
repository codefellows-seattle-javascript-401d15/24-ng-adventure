'use strict';

require('angular')
.module('ngAdventure')
.factory('mapService', ['$log', function($log){
  $log.debug('#mapService');

  let service = {};

  service.mapData = {
    town: {
      desc: 'You wake up in the middle of town, with nothing but a dagger, a candle, and an empty book',
      south: 'docks',
      west: 'castle',
      east: 'forest',
      north: 'graveyard',
    },
    docks: {
      desc: 'You find yourself at the docks. There are fisherman fishing, but you cannot see anywhere new to travel to.',
      north: 'town',
    },
    castle: {
      desc: 'You walk up to a giant castle, and read a sign, "Lord B\'s Castle."',
      east: 'town',
    },
    forest: {
      desc: 'You walk across a bridge into a deserted part of town. Nothing is happening.',
      west: 'town',
    },
    graveyard: {
      desc: 'You are in a graveyard with a few zombies and skeletons meandering about. Be careful!',
      south: 'town',
      north: 'woods',
    },
    woods: {
      desc: 'You wander through the woods.',
      south: 'graveyard',
      west: 'cave',
    },
    cave: {
      desc: 'You are in a giant cave. People are mining and fighting monsters.',
      east: 'woods',
      west: 'treasure',
    },
    treasure: {
      desc: 'You\'ve made it to the treasure room! You win!',
    },
  };
  return service;
}]);
