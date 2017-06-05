'use strict';

require('angular')
.module('ngAdventure')
.factory('playerService', ['$q', '$log', 'historyService', 'mapService', function($q, $log, historyService, mapService){
  $log.debug('#playerService');

  let service = {};
  let player = service.player = {
    desc: 'Welcome to the Angular Adventure',
    name: 'Mike',
    location: 'Cabin',
    hp: 5,
    snackroomVisit: false,
  };

  service.movePlayer = function(direction){
    return new $q((resolve, reject) => {

      let current = player.location;
      let newLocation = mapService.mapData[current][direction];

      historyService.history.trackHistory(newLocation, player, direction)
      .then( data =>{
        console.log(data);
      })
      .catch(err => err);

      if(!newLocation){
        player.desc = 'Wrong Way!!';
        return reject(`Player tried to go ${direction}`);
      }

      if(newLocation === 'Snackroom' && player.snackroomVisit === false){
        let name = player.name;
        player.snackroomVisit = true;
        player.name = `Fatty ${name}`;
      }



      player.location = newLocation;
      player.desc = mapService.mapData[player.location].desc;
      return resolve(player.location);
    });
  };

  return service;

}]);
