'use strict'

require('angular')
.module('ngAdventure')
.factory('playerService', ['$q', '$log', 'mapService', function($q, $log, mapService){
  $log.debug('playerService')

  let service = {}
  let turn = 0
  let player = service.player = {
    name: 'Shade',
    location: 'Pit',
    previousLocation: null,
    directionMoved: null,
    hp: 10
  }

  let history = service.history = [
    {
      turn,
      desc: 'You have crawled from the depths of the pit',
      location: 'Pit',
      hp: player.hp
    }
  ]

  service.movePlayer = function(direction){
    return new $q((resolve, reject) => {
      turn ++
      let currentLocation = player.location
      let newLocation = mapService.mapData[currentLocation][direction]

      if(!newLocation){
        history.shift()
        history.unshift({
          turn,
          desc: 'You have run into a dead end',
          location: currentLocation,
          previousLocation: history[0].location,
          directionMoved: direction,
          hp: --player.hp
        })
        return reject('Nothing in that direction, fool.')
      }

      history.unshift({
        turn,
        location: newLocation,
        previousLocation: currentLocation,
        desc: mapService.mapData[newLocation].desc,
        directionMoved: direction,
        hp: ++player.hp
      })
      player.location = newLocation
      return resolve(player.location)
    })
  }

  return service
}])
