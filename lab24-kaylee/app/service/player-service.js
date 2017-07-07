'use strict';

require('angular')
.module('ngAdventure')
.factory('playerService', ['$q', '$log', 'mapService', function($q, $log, mapService) {
  $log.debug('#playerService');

  let service = {};
  let turn = 0;
  let player = service.player = {
    name: 'Kaylee',
    location: 'house',
    desc: 'Welcome to Kay\'s ngAdventure!',
    hp: 10
  }

  let history = service.history = [
    {
      turn,
      location: 'house'
    }
  ]

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn++;

      let current = player.location;
      let newLocation = mapService.mapData[current][direction];

      if(!newLocation) {
        history.unshift({
          turn,
          desc: 'You\'ve hit a wall!',
          location: player.location,
          hp: --player.hp
        })
        return reject('Nothing exciting in that direction. Try going somewhere else.')
      }

      history.unshift({
        turn,
        location: player.location,
        hp: ++player.hp
      });

      player.location = newLocation;
      player.desc = mapService.mapData[newLocation].desc
      return resolve(player.location, player.desc);
    })
  }
  return service;
}]);
