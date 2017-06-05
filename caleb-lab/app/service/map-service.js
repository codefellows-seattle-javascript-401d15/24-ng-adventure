'use strict'

require('angular')
.module('ngAdventure')
.factory('mapService', ['$log', function($log){
  $log.debug('Map svc')

  let service = {}

  service.mapData = {
    Pit: {
      desc: 'You have clawed your way from the depths of the pit. There is but one way to proceed.',
      east: 'Courtyard'
    },
    Courtyard: {
      desc: 'You stumble into a ruined courtyard, there is a trail ahead, and a gate to your right.',
      east: 'Trail',
      west: 'Pit',
      south: 'Graveyard'
    },
    Graveyard: {
      desc: 'The rusty gate screeches in protest as you swing it open. The graveyard is silent. As you pass the worn tombstones, you see only one path ahead - into a dark structure - nothing and noone visible from the outside',
      north: 'Courtyard',
      south: 'Crypt'
    },
    Crypt: {
      desc: 'You enter the crypt, and carefully navigate its halls. You enter a chamber with what looks like an altar - smeared with old, dried blood. As you approach the altar and touch it, you hear a click. The altar slides aside to reveal a set of steps hewn into the rock beneath. There is still time to return the way you came',
      north: 'Graveyard',
      south: 'Tunnel'
    },
    Tunnel: {
      desc: 'As you clear the bottom step, the altar slides back over the steps, sealing you in. You stumble down the pitch dark tunnel, hands fumbling ahead, until you see a speck of light in the distance. You pick up speed, the back of your neck prickling with the rising terror.',
      north: 'TreasureRoom2'
    },
    TreasureRoom2: {
      desc: 'You hurl yourself up the steps back into the light, and see a room full of treasure before you',
      east: 'ThroneRoom'
    },
    Trail: {
      desc: 'You can hear the birds singing as you approach the forest trail. It reminds you of your previous human life, before you became a creature of the pit.',
      west: 'Courtyard',
      east: 'Castle'
    },
    Castle: {
      desc: 'You finally see signs of life after walking for hours through the mean forest trail. Smell the stink of humans living in their *cities*. You slink to the Castle in the center of the human cesspool, careful to be unseen.',
      west: 'Trail'
    },
    Hall: {
      desc: 'You scale the walls of the castle, careful to pull yourself to the top after the sentry passes on his rounds. You sneak into the inner halls of the castle, reaching the Great Hall - nearly to your mark.',
      north: 'Antechamber',
      west: 'Castle'
    },
    Antechamber: {
      desc: 'You pass into the Antechamber to the throne room, checking all directions for the knights of the king\'s table before proceeding. You can choose to poison his food in the kitchens to the right, or lie in wait in the throne room itself.',
      north: 'ThroneRoom',
      east: 'Kitchens'
    },
    Kitchens: {
      desc: 'You scowl at the stench of humans as you near the kitchens. You can sneak to the king\'s food and poison it, or just steal some of the food.',
      west: 'Antechamber'
    },
    ThroneRoom: {
      desc: 'You hear sounds from the outside, and jump to the chandelier above. You spit acid onto the stained glass to make a whole big enough to crawl through into the throne room. You see light from a hidden portal behind the throne. You can investigate, or wait to kill the swine of a king, and return to your maker',
      east: 'TreasureRoom1',
      south: 'Antechamber'
    },
    TreasureRoom1: {
      desc: 'The King stands across the way, facing away from you. You can end him here, *and* steal treasure to free yourself from the clutches of the dreadlord you serve, or follow the plan, certain that you could neve escape.',
      east: 'ThroneRoom'
    }
  }
  return service
}])
