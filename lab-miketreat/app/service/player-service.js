'use strict';

require('angular')
.module('ngAdventure')
.factory('playerService', ['$q', '$log', 'mapService', function($q, $log, mapService){
  $log.debug('#playerService');

  let service = {};
  let turn = 0;
  let player = service.player = {
    name: 'Mike',
    location: 'Cabin',
    hp: 5,
  };

  let history = service.history = [
    {
      turn,
      desc:'Welcome to the Angulare Adventure!',
      location: 'Cabin',
      hp: player.hp,
    },
  ];

  service.movePlayer = function(direction){
    return new $q((resolve, reject) => {

      turn++;

      let current = player.location;
      let newLocation = mapService.mapData[current][direction];
      console.log(newLocation);
      if(!newLocation){
        history.unshift({
          turn,
          desc: 'Sorry, you can not go that way',
          location: player.location,
          hp: player.hp--,
        });
        return reject('Nothing is over that way');
      }

      history.unshift({
        turn,
        location: player.location,
        desc: mapService.mapData[newLocation].desc,
      });

      player.location = newLocation;
      return resolve(player.location);
    });
  };

  return service;

}]);
