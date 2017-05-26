// 'use strict';
//
// require('angular')
// .module('ngAdventure')
// .factory('historyService', ['$q', '$log', 'mapService', function($q, $log, mapService) {
//   $log.debug('History Service');
//
//   let service = {};
//   let turn = 0;
//   let player = service.player = {
//     name: 'Chris',
//     location: 'clearing',
//     hp: 2,
//   };
//
//   let history = service.history = [
//     {
//       turn,
//       desc: 'welcome to ngAdventure',
//       location: 'clearing',
//       hp: player.hp,
//     },
//   ];
//
//   service.movePlayer = function(direction) {
//     return new $q((resolve, reject) => {
//       turn++;
//       console.log('history', history);
//       let current = player.location;
//       let newLocation = mapService.mapData[current][direction];
//
//       if(!newLocation) {
//         history.unshift({
//           turn,
//           desc: 'you cannot go that way',
//           location: player.location,
//           hp: --player.hp,
//         });
//         return reject('only certain death lies in that direction');
//       }
//
//       history.unshift({
//         turn,
//         location: player.location,
//         desc: mapService.mapData[newLocation].desc,
//         hp: ++player.hp,
//       });
//
//       player.location = newLocation;
//       return resolve(player.location);
//     });
//   };
//
//   return service;
// }]);
