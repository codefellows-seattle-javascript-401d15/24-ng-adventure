'use strict'

require('angular')
.module('ngAdventure')
.factory('playerService', ['$q', '$log', 'mapService', function($q, $log, mapService) {
  $log.debug('Player Service')

  let service = {}
  let turn = 0
  let player = service.player = {
    name: 'Blob',
    location: 'space',

  }

  let history = service.history = [
    {
      turn,
      desc: 'You are a blob, flying through space attached to a rock. Everything was dark and peaceful until now! Your rock just hit the atmosphere of a planet and you are about to make a crash landing. Fortunately you caught a glimpse of the planet and might be able to control where you land: in the open ocean, near a small island, or on the mainland.',
      location: 'space',

    }
  ]

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn++

      let current = player.location
      let newLocation = mapService.mapData[current][direction]

      if(!newLocation) {
        history.unshift({
          turn,
          desc: 'you have run into a wall',
          location: player.location,

        })
        return reject('no room in that direction')
      }

      history.unshift({
        turn,
        location: player.location,
        desc: mapService.mapData[newLocation].desc,

      })

      player.location = newLocation
      return resolve(player.location)
    })
  }

  return service
}])
