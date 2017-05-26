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
    hp: 10,
  };

  let history = service.history = [
    {
      turn,
      desc: 'Beginning of the Adventure',
      location: 'void',
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
        location: current,
        desc: mapService.mapData[current].desc,
      });

      player.location = newLocation;
      return resolve(player.location);
    });
  };

  return service;
}]);
