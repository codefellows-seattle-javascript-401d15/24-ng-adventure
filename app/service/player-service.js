'use strict';

require('angular')
.module('ngAdventure')
.factory('playerService', ['$q', '$log', 'mapService', function($q, $log, mapService) {
  $log.debug('PlayerService');

  let service = {};
  let turn = 0;
  let player = service.player = {
    name: 'Lester',
    location: 'cabin',
    hp: 2,
  };

  let history = service.history = [
    {
      turn,
      desc: 'Welcome to DMV simulator',
      location: 'parkinglot',
      hp: player.hp,
    },
  ];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn++;

      let current = player.location;
      let newLocation = mapService.mapData[current][direction];

      if(!newLocation) {
        history.unshift({
          turn,
          desc: 'You have run into a knife-weilding crackhead communist.',
          location: player.location,
          hp: --player.hp,
        });
        return reject('Can\'t go that way!');
      }

      history.unshift({
        turn,
        location: player.location,
        desc: mapService.mapData[newLocation].desc,
        hp: ++player.hp,
      });

      player.location = newLocation;
      return resolve(player.location);
    });
  };
  return service;
}]);
