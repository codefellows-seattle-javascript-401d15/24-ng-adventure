'use strict';

require('angular')
.module('ngAdventure')
.factory('playerService', ['$q', '$log', 'mapService', function($q, $log, mapService) {
  $log.debug('Player Service');

  let service = {};
  let turn = 0;
  let player = service.player = {
    name: 'Bink',
    location: 'Mundania',
    hp: 10,
  };

  let history = service.history = [
    {
      turn,
      desc: 'welcome to Xanth.',
      location: player.location,
      hp: player.hp,
    },
  ];

  service.gameStatus = {
    gameOver: false,
  };

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn++;

      let current = player.location;
      let newLocation = mapService.mapData[current][direction];

      if(!newLocation) {
        history.unshift({
          turn,
          desc: 'you wandered off the path and almost got eaten!',
          location: player.location,
          hp: --player.hp,
        });

        if(player.hp <= 0) {
          service.gameStatus.gameOver = true;
        }
        return reject('no room in that direction');
      }

      if(newLocation === 'Mundania') {
        history.unshift({
          turn,
          desc: 'You leave the land of Xanth for the normal world. As you look back, you see an endless field where the Isthmus Village should be. The portal to Xanth has moved to another land..',
        });
        service.gameStatus.gameOver = true;
      }

      if(newLocation === 'TheGoodMagiciansCastle') {
        history.unshift({
          turn,
          desc: 'You\'ve finally reached the castle of the Good Magician Humphrey. After succesfully completeing three challenges, he will answer any question in exchange for one years service.. TO BE CONTINUED',
        });
        service.gameStatus.gameOver = true;
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
