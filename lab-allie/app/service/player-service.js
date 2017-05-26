'use strict';

require('angular')
.module('ngAdventure')
.factory('playerService', ['$q', '$log', 'mapService', function($q, $log, mapService) {
  $log.debug('Player Service');
  
  let service = {};
  
  let turn = 0;
  
  let player = service.player = {
    name: 'Player 1',
    location: 'room1',
    points: 100,
  };
  
  let history = service.history = [
    {
      turn,
      description: 'Welcome to ngAdventure!',
      location: 'room1',
      points: player.points,
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
          description: 'You cannot move in that direction',
          location: player.location,
          points: --player.points,
        });
        return reject('You cannot move in that direction');
      }
      
      history.unshift({
        turn,
        location: player.location,
        decription: mapService.mapData[newLocation].description,
        points: ++player.points,
      });
      
      player.location = newLocation;
      return resolve(player.location);
    });
  };
  return service;
}]);