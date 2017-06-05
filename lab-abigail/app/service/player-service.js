'use strict';

require('angular')
.module('ngAdventure')
.factory('playerService', ['$q', '$log', 'mapService', function($q, $log, mapService) {
  $log.debug('Player Service')

  let service = {};
  let turn = 0;
  let player = service.player = {
    name: 'Goat',
    location: 'futureMeals',
    hp: 5,
  }

  let history = service.history = [
    {
      turn,
      desc: 'Future Meals: this is where Abs thinks about all of her future meals, so that she has something to live for.',
      location: 'futureMeals',
      hp: player.hp
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
          desc: 'You\'ve hit the limits of Abs\' psyche',
          location: player.location,
          hp: --player.hp
        })
        return reject('You\'ve hit the limits of Abs\' psyche')
      }

      history.unshift({
        turn,
        location: player.location,
        desc: mapService.mapData[newLocation].desc,
        hp: ++player.hp
      })
      player.location = newLocation;
      return resolve(player.location);
    })
  }
  return service;
}])
