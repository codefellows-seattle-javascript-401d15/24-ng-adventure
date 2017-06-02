'use strict';

require('angular')
.module('ngAdventure')
.factory('historyService', ['$q','$log', 'mapService', function($q, $log, mapService){
  $log.debug('#historyService');

  let service = {};
  let turn = 0;

  let history = service.history = [
    {
      turn,
      desc:'Welcome to the Angular Adventure!',
      location: 'Cabin',
      hp: 5,
    },
  ];

  history.trackHistory = function(newLocation, player){
    return new $q((resolve, reject) => {
      turn++;

      if(!newLocation){

        history.push({
          turn,
          desc: `Duuur. you ran into a wall while at the ${player.location}`,
          hp: --player.hp,
        });
        return reject('Wrong way!');
      }
      history.push({
        turn,
        desc: mapService.mapData[newLocation].desc,
        hp: ++player.hp,
      });

      return resolve(history);
    });

  };
  return service;
}]);
