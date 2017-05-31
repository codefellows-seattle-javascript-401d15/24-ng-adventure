'use strict';

require('angular')
.module('ngAdventure')
.factory('playerService', ['$q', '$log', 'mapService', function($q, $log, mapService) {
  $log.debug('Player Service');

  let service = {};
  let turn = 0;
  let player = service.player = {
    name: 'Chris',
    desc: 'After making it out of the forest to the north\nyou find yourself in a clearing...',
    location: 'clearing',
    hp: 2,
  };

  let history = service.history = [{
    desc: 'After making it out of the forest to the north\nyou find yourself in a clearing...',
    location: 'clearing',
    hp: 2,
  }];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      if(player.hp <= 0) return reject(player.desc = 'You are dead :(');
      if(player.location === 'unpassableRiver') {
        return reject(player.desc = 'You are dead :(', player.hp = 0);
      } else if (player.location === 'steepRavine') {
        return reject(player.desc = 'You are dead :(', player.hp = 0);
      }
      turn++;
      console.log('history', history);
      let current = player.location;
      let newLocation = mapService.mapData[current][direction];


      if(!newLocation) {
        history.unshift({
          turn,
          desc: 'you cannot go that way',
          location: player.location,
          hp: --player.hp,
        });
        return reject('only certain death lies in that direction');
      }

      history.unshift({
        turn,
        location: player.location,
        desc: mapService.mapData[newLocation].desc,
        hp: ++player.hp,
      });

      player.location = newLocation;
      player.desc = history[0].desc;
      return resolve(player.location);
    });
  };

  return service;
}]);
