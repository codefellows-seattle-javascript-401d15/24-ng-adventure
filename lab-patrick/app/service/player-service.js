'use strict';

require('angular')
.module('ngAdventure')
.factory('playerService', ['$q', '$log', 'mapService', function($q, $log, mapService) {
  $log.debug('Player Service');

  let service = {};
  let turn = 0;
  let player = service.player = {
    name: 'Patrick',
    location: 'Babbage',
    grade: 100,
  };

  let history = service.history = [
    // {
    //   turn,
    //   desc: 'Escape from CodeFellows',
    //   location: 'Babbage',
    //   grade: player.grade,
    // },
  ];

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn++;

      let current = player.location;
      let newLocation = mapService.mapData[current][direction];

      if(!newLocation) {
        history.unshift({
          turn,
          desc: 'You ran right at the Data Structure without whiteboarding it first. Lose 1 point of your grade.',
          location: player.location,
          grade: --player.grade,
        });
        return reject('You ran right at the Data Structure without whiteboarding it first. Lose 1 point of your grade.');
      }

      history.unshift({
        turn,
        location: player.location,
        desc: mapService.mapData[newLocation].desc,
        grade: ++player.grade,
      });

      player.location = newLocation;

      return resolve(player.location);
    });
  };
  return service;
}]);
