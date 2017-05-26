'use strict';

require('angular')
.module('ngAdventure')
.factory('playerService', ['$q', '$log', 'mapService', function($q, $log, mapService) {
  $log.debug('Player Service');

  let service = {};
  let turn = 0;
  let player = service.player = {
    name: 'Jeff',
    location: 'cell',
    hp: 1,
  };

  let history = service.history = [
    {
      turn,
      desc: mapService.mapData[player.location].desc,
      location: player.location,
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
          desc: 'You can\'t go that way',
          location: player.location,
        });
        return reject('no room in that direction');
      }

      history.unshift({
        turn,
        location: newLocation,
        desc: mapService.mapData[newLocation].desc,
      });

      player.location = newLocation;
      return resolve(player.location);
    });
  };

  return service;
}]);
