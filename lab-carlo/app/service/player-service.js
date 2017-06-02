'use strict';

require('angular')
.module('ngAdventure')
.factory('playerService', ['$q', '$log', 'mapService', function($q, $log, mapService) {
  $log.debug('Player Service');

  let service = {};
  let turn = 0;
  let player = service.player = {
    desc: 'in room1',
    name: 'Carlo',
    location: 'room1',
    hp: 20
  };

  let history = service.history = [
    {
      turn,
      desc: 'welcome to ngAdventure',
      location: 'room1',
      hp: player.hp
    }
  ];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn++;

      let current = player.location;
      let newLocation = mapService.mapData[current][direction];

      let currentDesc = player.desc;
      let newDesc = mapService.mapData[current].desc;

      if(!newLocation) {
        history.unshift({
          turn,
          desc: 'you have run into a wall',
          location: player.location,
          hp: --player.hp
        });
        return reject('no room in that direction');
      }

      history.unshift({
        turn,
        location: player.location,
        desc: mapService.mapData[newLocation].desc,
        hp: ++player.hp
      });

      player.location = newLocation;
      player.desc = newDesc;
      return resolve(player.location);
    });
  };

  return service;
}]);
